import { ObjectId } from "mongodb";
import { CreateOrderReqBody } from "./../models/requests/Orders.requests";
import databaseService from "./database.services";
import { OrderStatus } from "~/constants/enum";
class OrderServices {
  async createOrder(user_id: string, body: CreateOrderReqBody) {
    const _body = {
      ...body,
      order_details: body.order_details.map((order_detail) => ({
        ...order_detail,
        product_id: new ObjectId(order_detail.product_id),
      })),
      address_id: new ObjectId(body.address_id),
      payment_type: body.payment_type,
      user_id: new ObjectId(user_id),
      order_status: OrderStatus.Pending,
    };

    const order = await databaseService.orders.insertOne({
      _id: new ObjectId(),
      ..._body,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return order;
  }
}

const orderServices = new OrderServices();
export default orderServices;
