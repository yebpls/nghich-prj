import { ObjectId } from "mongodb";
import { ProductStatus } from "~/constants/enum";
import Material from "./Material.schema";

export type ProductImage = {
  _id: ObjectId;
  url: string;
};

type ProductColor = {
  _id: ObjectId;
  name: string;
};

interface ProductType {
  _id: ObjectId;
  name: string;
  cost_price: number;
  price: number;
  description: string;
  collection_id: ObjectId;
  created_at?: Date;
  updated_at?: Date;
  images?: ProductImage[];
  width: number;
  length: number;
  color?: ProductColor[];
  status: ProductStatus;
  detail: string;
  material: Material;
  quantity?: number;
}

export default class Product {
  _id: ObjectId;
  name: string;
  cost_price: number;
  price: number;
  description: string;
  collection_id: ObjectId;
  created_at: Date;
  updated_at: Date;
  images: ProductImage[];
  width: number;
  length: number;
  color: ProductColor[];
  status: ProductStatus;
  detail: string;
  material: Material;
  quantity: number;

  constructor(product: ProductType) {
    const date = new Date();
    this._id = product._id;
    this.name = product.name || "";
    this.cost_price = product.cost_price || 0;
    this.price = product.price || 0;
    this.description = product.description || "";
    this.collection_id = product.collection_id;
    this.created_at = product.created_at || date;
    this.updated_at = product.updated_at || date;
    this.images = product.images || [];
    this.width = product.width || 0;
    this.length = product.length || 0;
    this.color = product.color || [];
    this.status = product.status || ProductStatus.Active;
    this.detail = product.detail || "";
    this.material = product.material || "";
    this.quantity = product.quantity || 0;
  }
}
