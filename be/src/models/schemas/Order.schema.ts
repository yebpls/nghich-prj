import { ObjectId } from "mongodb";
import Product from "./Product.chema";
import { OrderStatus, PaymentType } from "~/constants/enum";
export interface OrderDetail {
  _id?: ObjectId;
  product_id: ObjectId;
  quantity: number;
  created_at?: Date;
  price_final: number;
}

interface OrderType {
  _id: ObjectId;
  user_id: ObjectId;
  quantity: number;
  created_at?: Date;
  updated_at?: Date;
  address_id: ObjectId;
  payment_type: PaymentType;
  order_status: OrderStatus;
  oder_details: OrderDetail[];
}

export class Order {}
