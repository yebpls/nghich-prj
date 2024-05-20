import { ObjectId } from "mongodb";
import { AddProductReqBody } from "~/models/requests/Products.requests";
import databaseService from "./database.services";
import Product from "~/models/schemas/Product.chema";
import { ProductStatus } from "~/constants/enum";

class ProductServices {
  async addProduct(body: AddProductReqBody) {
    const { images, color } = body;
    const newImages = [{ url: images, _id: new ObjectId() }];
    const newColor = [{ name: color, _id: new ObjectId() }];
    const newBody: Product = {
      ...body,
      _id: new ObjectId(),
      images: newImages,
      color: newColor,
      status: ProductStatus.Active,
      created_at: new Date(),
      updated_at: new Date(),
      colection_id: new ObjectId(body.collection_id),
    };
    await databaseService.products.insertOne(newBody);
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
}

const productServices = new ProductServices();
export default productServices;
