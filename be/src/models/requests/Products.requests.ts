import { ParamsDictionary } from "express-serve-static-core";
import e from "express";

export interface AddProductReqBody {
  name: string;
  price: number;
  description: string;
  collection_id: string;
  images: string;
  width: number;
  length: number;
  color: string;
  detail: string;
}

export interface GetProductDetailReqParams extends ParamsDictionary {
  product_id: string;
}
