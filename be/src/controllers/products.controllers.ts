import { ParamsDictionary } from "express-serve-static-core";
import { Response, Request, NextFunction } from "express";
import {
  AddImageProductReqParams,
  AddMaterialReqBody,
  AddProductReqBody,
  DeleteMaterialReqParams,
  GetMaterialDetailReqParams,
  GetProductByCollectionReqParams,
  GetProductDetailReqParams,
  UpdateMaterialReqBody,
  UpdateMaterialReqParams,
} from "~/models/requests/Products.requests";
import productServices from "~/services/products.services";
import { PRODUCTS_MESSAGES } from "~/constants/messages";

export const addProductController = async (
  req: Request<ParamsDictionary, any, AddProductReqBody>,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const product = await productServices.addProduct(body);
  return res.json({
    message: PRODUCTS_MESSAGES.ADD_PRODUCT_SUCCESS,
    data: product,
  });
};

export const addImageToProductController = async (
  req: Request<AddImageProductReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { product_id } = req.params;
  const product = await productServices.addImageToProduct(product_id, req);
  return res.json({
    message: PRODUCTS_MESSAGES.ADD_IMAGE_TO_PRODUCT_SUCCESS,
    data: product,
  });
};

export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await productServices.getAllProducts();
  return res.json({
    message: PRODUCTS_MESSAGES.GET_ALL_PRODUCTS_SUCCESS,
    data: products,
  });
};

export const getProductDetailController = async (
  req: Request<GetProductDetailReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { product_id } = req.params;
  const product = await productServices.getProductDetail(product_id);
  return res.json({
    message: PRODUCTS_MESSAGES.GET_PRODUCT_DETAIL_SUCCESS,
    data: product,
  });
};

export const addMaterialController = async (
  req: Request<ParamsDictionary, any, AddMaterialReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const material = await productServices.addMaterial(name);
  return res.json({
    message: PRODUCTS_MESSAGES.ADD_MATERIAL_SUCCESS,
    data: material,
  });
};

export const getMaterialByIdController = async (
  req: Request<GetMaterialDetailReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { material_id } = req.params;
  const material = await productServices.getMaterialById(material_id);
  return res.json({
    message: PRODUCTS_MESSAGES.GET_MATERIAL_BY_ID_SUCCESS,
    data: material,
  });
};

export const getAllMaterialsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const materials = await productServices.getAllMaterialsOfCollection();
  return res.json({
    message: PRODUCTS_MESSAGES.GET_ALL_MATERIALS_SUCCESS,
    data: materials,
  });
};

export const updateMaterialController = async (
  req: Request<UpdateMaterialReqParams, any, UpdateMaterialReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { material_id } = req.params;
  const { name } = req.body;
  const material = await productServices.updateMaterial(material_id, name);
  return res.json({
    message: PRODUCTS_MESSAGES.UPDATE_MATERIAL_SUCCESS,
    data: material,
  });
};

export const deleteMaterialController = async (
  req: Request<DeleteMaterialReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { material_id } = req.params;
  const material = await productServices.deleteMaterial(material_id);
  return res.json({
    message: PRODUCTS_MESSAGES.DELETE_MATERIAL_SUCCESS,
    data: material,
  });
};

export const getProductByCollectionController = async (
  req: Request<GetProductByCollectionReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { collection_id } = req.params;
  const products = await productServices.getProductByCollection(collection_id);

  return res.json({
    message: PRODUCTS_MESSAGES.GET_PRODUCT_BY_COLLECTION_SUCCESS,
    data: products,
  });
};
