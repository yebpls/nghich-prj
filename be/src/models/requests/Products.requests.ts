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
  material_id: string;
}

export interface GetProductDetailReqParams extends ParamsDictionary {
  product_id: string;
}

export interface AddMaterialReqBody {
  name: string;
}

export interface GetMaterialDetailReqParams extends ParamsDictionary {
  material_id: string;
}

export interface UpdateMaterialReqParams extends ParamsDictionary {
  material_id: string;
}

export interface UpdateMaterialReqBody {
  name: string;
}

export interface DeleteMaterialReqParams extends ParamsDictionary {
  material_id: string;
}

export interface GetProductByCollectionReqParams extends ParamsDictionary {
  collection_id: string;
}
