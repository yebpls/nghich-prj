import { ObjectId } from "mongodb";
import { AddProductReqBody } from "~/models/requests/Products.requests";
import databaseService from "./database.services";
import Product from "~/models/schemas/Product.chema";
import { ProductStatus } from "~/constants/enum";
import Material from "~/models/schemas/Material.schema";
import { ErrorWithStatus } from "~/models/Errors";
import { PRODUCTS_MESSAGES } from "~/constants/messages";
import HTTP_STATUS from "~/constants/httpStatus";

class ProductServices {
  async addProduct(body: AddProductReqBody) {
    const { images, color, material_id } = body;
    const newImages = [{ url: images, _id: new ObjectId() }];
    const newColor = [{ name: color, _id: new ObjectId() }];
    const material = await productServices.getMaterialById(material_id);
    const newBody: Product = {
      ...body,
      _id: new ObjectId(),
      images: newImages,
      color: newColor,
      status: ProductStatus.Active,
      created_at: new Date(),
      updated_at: new Date(),
      collection_id: new ObjectId(body.collection_id),
      material: material as Material,
      quantity: 0,
    };
    await databaseService.products.insertOne(newBody);
    return newBody;
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
}

const productServices = new ProductServices();
export default productServices;
