import { CreateOrderReqBody } from "./../models/requests/Orders.requests";
import { ParamsDictionary } from "express-serve-static-core";
import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "~/models/requests/Users.requests";
import orderServices from "~/services/orders.services";
import { ORDERS_MESSAGES } from "~/constants/messages";

export const createOrderController = async (
  req: Request<ParamsDictionary, any, CreateOrderReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const body = req.body;
  const order = await orderServices.createOrder(user_id, body);
  return res.json({
    message: ORDERS_MESSAGES.CREATE_ORDER_SUCCESS,
    data: order,
  });
};
