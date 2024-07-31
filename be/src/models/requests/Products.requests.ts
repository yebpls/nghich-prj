import { ParamsDictionary } from "express-serve-static-core";
import e from "express";
import { ProductStatus } from "~/constants/enum";

export interface AddProductReqBody {
  name: string;
  cost_price: number;
  price: number;
  description: string;
  collection_id: string;
  width: number;
  length: number;
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

export interface AddImageProductReqParams extends ParamsDictionary {
  product_id: string;
}

export interface DeleteProductImageReqParams extends ParamsDictionary {
  product_id: string;
}

export interface DeleteProductImageReqBody {
  url: string;
}

export interface DeleteProductReqParams extends ParamsDictionary {
  product_id: string;
}

export interface UpdateProductReqParams extends ParamsDictionary {
  product_id: string;
}

export interface UpdateProductReqBody {
  name?: string;
  cost_price?: number;
  price?: number;
  description?: string;
  width?: number;
  length?: number;
  detail?: string;
  material_id?: string;
  quantity?: number;
  status?: ProductStatus;
}
