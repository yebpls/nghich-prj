import { PaymentType } from "~/constants/enum";
import { OrderDetail } from "../schemas/Order.schema";

export interface CreateOrderReqBody {
  address_id: string;
  payment_type: PaymentType;
  order_details: OrderDetail[];
}
