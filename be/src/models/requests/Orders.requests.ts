import { ParamsDictionary } from "express-serve-static-core";
import { OrderStatus, PaymentType } from "~/constants/enum";
import { OrderDetail } from "../schemas/Order.schema";

export interface CreateOrderReqBody {
  address_id: string;
  payment_type: PaymentType;
  order_details?: OrderDetail[];
  custom_id?: string;
  coupon_name?: string;
  subtotal?: number;
}

export interface GetOrderByOrderKeyReqParams extends ParamsDictionary {
  order_key: string;
}

export interface GetOrderByOrderIdReqParams extends ParamsDictionary {
  order_id: string;
}

export interface ChangeOrderStatusReqParams extends ParamsDictionary {
  order_id: string;
}

export interface ChangeOrderStatusReqBody {
  order_status: OrderStatus;
}
