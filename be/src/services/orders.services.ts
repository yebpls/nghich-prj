import { ObjectId } from "mongodb";
import { CreateOrderReqBody } from "./../models/requests/Orders.requests";
import databaseService from "./database.services";
import { OrderStatus } from "~/constants/enum";
class OrderServices {
  generateOrderKey = (prefix: string) => {
    const randomPart = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    return `${prefix}${randomPart}`;
  };

  async createOrder(user_id: string, body: CreateOrderReqBody) {
    if (body.order_details) {
      const orderKey = this.generateOrderKey("PD");
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
        order_key: orderKey,
        created_at: new Date(),
        updated_at: new Date(),
        coupon_name: "",
        custom_id: "",
      });

      return order;
    }

    if (body.custom_id) {
      const orderKey = this.generateOrderKey("CT");
      const _body = {
        ...body,
        order_details: [],
        address_id: new ObjectId(body.address_id),
        payment_type: body.payment_type,
        user_id: new ObjectId(user_id),
        order_status: OrderStatus.Pending,
        custom_id: new ObjectId(body.custom_id),
      };

      const order = await databaseService.orders.insertOne({
        _id: new ObjectId(),
        ..._body,
        order_key: orderKey,
        created_at: new Date(),
        updated_at: new Date(),
        coupon_name: "",
      });

      return order;
    }
  }

  async getAllOrders() {
    const orders = await databaseService.orders.find().toArray();
    return orders;
  }

  async getOrderByOrderKey(order_key: string) {
    const order = await databaseService.orders.findOne({
      order_key: order_key,
    });
    return order;
  }

  async getOrderByOrderId(order_id: string) {
    const order = await databaseService.orders.findOne({
      _id: new ObjectId(order_id),
    });
    return order;
  }

  async changeOrderStatus(order_id: string, order_status: OrderStatus) {
    const order = await databaseService.orders.findOneAndUpdate(
      { _id: new ObjectId(order_id) },
      { $set: { order_status } },
      { returnDocument: "after" }
    );
    return order;
  }
}

const orderServices = new OrderServices();
export default orderServices;
