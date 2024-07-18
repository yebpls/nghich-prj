import { ObjectId } from "mongodb";
import {
  AddProductReqBody,
  UpdateProductReqBody,
} from "~/models/requests/Products.requests";
import databaseService from "./database.services";
import Product from "~/models/schemas/Product.chema";
import { ProductStatus } from "~/constants/enum";
import Material from "~/models/schemas/Material.schema";
import { ErrorWithStatus } from "~/models/Errors";
import { PRODUCTS_MESSAGES } from "~/constants/messages";
import HTTP_STATUS from "~/constants/httpStatus";
import { Request } from "express";
import mediasService from "./medias.services";
import { deleteFileFromS3 } from "~/utils/s3";

class ProductServices {
  async addProduct(body: AddProductReqBody) {
    const { material_id } = body;
    const material = await productServices.getMaterialById(material_id);
    const newBody: Product = {
      ...body,
      _id: new ObjectId(),
      status: ProductStatus.Active,
      created_at: new Date(),
      updated_at: new Date(),
      collection_id: new ObjectId(body.collection_id),
      material: material as Material,
      quantity: 0,
      images: [],
      color: [],
    };
    await databaseService.products.insertOne(newBody);
    return newBody;
  }

  async addImageToProduct(product_id: string, req: Request) {
    const product = await databaseService.products.findOne({
      _id: new ObjectId(product_id),
    });
    if (!product) {
      throw new ErrorWithStatus(
        PRODUCTS_MESSAGES.PRODUCT_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }
    const urls = await mediasService.uploadImage(req);
    console.log("...");

    const images = urls.map((url) => ({
      _id: new ObjectId(),
      url: url.url,
    }));

    // Add the new images to the product
    const result = await databaseService.products.findOneAndUpdate(
      { _id: new ObjectId(product_id) },
      { $push: { images: { $each: images } } },
      { returnDocument: "after" }
    );

    return result;
  }

  async deleteProductImage(product_id: string, url: string) {
    const product = await databaseService.products.findOne({
      _id: new ObjectId(product_id),
    });
    if (!product) {
      throw new ErrorWithStatus(
        PRODUCTS_MESSAGES.PRODUCT_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }
    const filename = url.split("/").pop();
    await deleteFileFromS3(filename as string);
    // Remove the image URL from the product
    const result = await databaseService.products.findOneAndUpdate(
      { _id: new ObjectId(product_id) },
      { $pull: { images: { url: url } } },
      { returnDocument: "after" }
    );

    return result;
  }

  async getAllProducts() {
    const products = await databaseService.products.find().toArray();
    return products;
  }

  async getProductDetail(product_id: string) {
    const product = await databaseService.products.findOne({
      _id: new ObjectId(product_id),
    });
    return product;
  }

  async addMaterial(name: string) {
    const newMaterial = {
      _id: new ObjectId(),
      name,
    };
    await databaseService.materials.insertOne(newMaterial);
    return newMaterial;
  }

  async getMaterialById(material_id: string) {
    const material = await databaseService.materials.findOne({
      _id: new ObjectId(material_id),
    });
    return material;
  }

  async getAllMaterialsOfCollection() {
    const materials = await databaseService.materials.find().toArray();
    return materials;
  }

  async updateMaterial(material_id: string, name: string) {
    const material = await databaseService.materials.findOneAndUpdate(
      { _id: new ObjectId(material_id) },
      { $set: { name } },
      { returnDocument: "after" }
    );
    if (!material) {
      throw new ErrorWithStatus(
        PRODUCTS_MESSAGES.MATERIAL_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }
    return material;
  }

  async deleteMaterial(material_id: string) {
    const material = await databaseService.materials.findOneAndDelete({
      _id: new ObjectId(material_id),
    });
    if (!material) {
      throw new ErrorWithStatus(
        PRODUCTS_MESSAGES.MATERIAL_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }
    return material;
  }
  async getProductByCollection(collection_id: string) {
    const collectionObjectId = new ObjectId(collection_id);

    const products = await databaseService.products
      .find({
        collection_id: collectionObjectId,
      })
      .toArray();

    return products;
  }

  async deleteImageFromProduct(product_id: string, image_id: string) {
    console.log(product_id, image_id);
  }

  async deleteProduct(product_id: string) {
    const product = await databaseService.products.findOne({
      _id: new ObjectId(product_id),
    });
    if (!product) {
      throw new ErrorWithStatus(
        PRODUCTS_MESSAGES.PRODUCT_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }
    const urls = product?.images.map((image) => image.url);
    const filenames = urls.map((url) => url.split("/").pop());
    filenames.map((filename) => {
      deleteFileFromS3(filename as string);
    });
    await databaseService.products.deleteOne({
      _id: new ObjectId(product_id),
    });

    return { message: PRODUCTS_MESSAGES.DELETE_PRODUCT_SUCCESS };
  }

  async updateProduct(product_id: string, body: UpdateProductReqBody) {
    const _body = body.material_id
      ? {
          ...body,
          material: await productServices.getMaterialById(body.material_id),
        }
      : body;
    if (_body.material_id) {
      delete _body.material_id;
    }

    const product = await databaseService.products.findOneAndUpdate(
      { _id: new ObjectId(product_id) },
      {
        $set: {
          ...(_body as Product),
        },
        $currentDate: { updated_at: true },
      },
      { returnDocument: "after" }
    );
    return product;
  }
}

const productServices = new ProductServices();
export default productServices;
