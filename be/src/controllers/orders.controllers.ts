import {
  ChangeOrderStatusReqBody,
  ChangeOrderStatusReqParams,
  CreateOrderReqBody,
  GetOrderByOrderIdReqParams,
  GetOrderByOrderKeyReqParams,
} from "./../models/requests/Orders.requests";
import { ParamsDictionary } from "express-serve-static-core";
import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "~/models/requests/Users.requests";
import orderServices from "~/services/orders.services";
import { ORDERS_MESSAGES } from "~/constants/messages";
import databaseService from "~/services/database.services";

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

export const getAllOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orders = await orderServices.getAllOrders();
  return res.json({
    message: ORDERS_MESSAGES.GET_ALL_ORDERS_SUCCESS,
    data: orders,
  });
};

export const getOrderByOrderKeyController = async (
  req: Request<GetOrderByOrderKeyReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { order_key } = req.params;
  const order = await orderServices.getOrderByOrderKey(order_key);
  return res.json({
    message: ORDERS_MESSAGES.GET_ORDER_SUCCESS,
    data: order,
  });
};

export const getOrderByOrderIdController = async (
  req: Request<GetOrderByOrderIdReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { order_id } = req.params;
  const order = await orderServices.getOrderByOrderId(order_id);
  return res.json({
    message: ORDERS_MESSAGES.GET_ORDER_SUCCESS,
    data: order,
  });
};

export const changeOrderStatusController = async (
  req: Request<ChangeOrderStatusReqParams, any, ChangeOrderStatusReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { order_id } = req.params;
  const { order_status } = req.body;
  const order = await orderServices.changeOrderStatus(order_id, order_status);
  return res.json({
    message: ORDERS_MESSAGES.GET_ORDER_SUCCESS,
    data: order,
  });
};
