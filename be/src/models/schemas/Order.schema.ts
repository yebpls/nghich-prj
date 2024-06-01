import { ObjectId } from "mongodb";
import Product from "./Product.chema";
import { OrderStatus, PaymentType } from "~/constants/enum";
export interface OrderDetail {
  product_id: ObjectId;
  quantity: number;
  price_final: number;
}

interface OrderType {
  _id?: ObjectId;
  user_id: ObjectId;
  created_at?: Date;
  updated_at?: Date;
  address_id: ObjectId;
  payment_type: PaymentType;
  order_status: OrderStatus;
  order_details: OrderDetail[];
}

export class Order {
  _id: ObjectId;
  user_id: ObjectId;
  created_at?: Date;
  updated_at?: Date;
  address_id: ObjectId;
  payment_type: PaymentType;
  order_status: OrderStatus;
  order_details: OrderDetail[];

  constructor(order: OrderType) {
    this._id = order._id || new ObjectId();
    this.user_id = order.user_id;
    this.created_at = order.created_at || new Date();
    this.updated_at = order.updated_at || new Date();
    this.address_id = order.address_id;
    this.payment_type = order.payment_type;
    this.order_status = order.order_status;
    this.order_details = order.order_details;
  }
}
