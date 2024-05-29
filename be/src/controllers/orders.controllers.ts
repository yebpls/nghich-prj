import { CreateOrderReqBody } from "./../models/requests/Orders.requests";
import { ParamsDictionary } from "express-serve-static-core";
import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "~/models/requests/Users.requests";

export const createOrderController = async (
  req: Request<ParamsDictionary, any, CreateOrderReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const { address_id, details, payment_type } = req.body;
  console.log(user_id, address_id, details, payment_type);
};
