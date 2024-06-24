import { NextFunction, Request, Response } from "express";
import {
  AddCustomReqBody,
  CreateCustomReqParams,
  DeleteCustomReqParams,
  UpdateNameCustomReqBody,
  UpdateNameCustomReqParams,
} from "~/models/requests/Customs.requests";
import customService from "~/services/customs.services";
import { TokenPayload } from "~/models/requests/Users.requests";

export const addNewCustomController = async (
  req: Request<CreateCustomReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { color } = req.params;
  const { user_id } = req.decoded_authorization as TokenPayload;
  const image = req;
  const custom = await customService.addCustom(user_id, color, image);
  return res.json({
    message: "Add new custom successfully",
    data: custom,
  });
};

export const getAllCustomController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const customs = await customService.getAllCustom(user_id);
  return res.json({
    message: "Get all customs successfully",
    data: customs,
  });
};

export const updateNameCustomController = async (
  req: Request<UpdateNameCustomReqParams, any, UpdateNameCustomReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { custom_id } = req.params;
  const { name } = req.body;
  const custom = await customService.updateNameCustom(custom_id, name);
  return res.json({
    message: "Update name custom successfully",
    data: custom,
  });
};

export const deleteCustomController = async (
  req: Request<DeleteCustomReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { custom_id } = req.params;
  const custom = await customService.deleteCustom(custom_id);
  return res.json({
    message: "Delete custom successfully",
    data: custom,
  });
};
