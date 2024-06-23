import { ObjectId } from "mongodb";
import { CreateOrderReqBody } from "./../models/requests/Orders.requests";
import databaseService from "./database.services";
import { OrderStatus, PaymentType } from "~/constants/enum";
import { Order } from "~/models/schemas/Order.schema";
import { ErrorWithStatus } from "~/models/Errors";
import HTTP_STATUS from "~/constants/httpStatus";
import transactionServices from "./transactions.services";
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
      const subtotal = body.order_details.reduce(
        (acc, order_detail) => acc + order_detail.price_final,
        0
      );
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
        subtotal,
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
        subtotal: body.subtotal,
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
    // const orders = await databaseService.orders.find().toArray();
    const orders = await databaseService.orders
      .aggregate<Order>([
        {
          $lookup: {
            from: "products",
            localField: "order_details.product_id",
            foreignField: "_id",
            as: "product_details_info",
          },
        },
        {
          $lookup: {
            from: "customs",
            localField: "custom_id",
            foreignField: "_id",
            as: "custom_product",
          },
        },
        {
          $addFields: {
            order_details: {
              $map: {
                input: "$order_details",
                as: "orderDetail",
                in: {
                  $mergeObjects: [
                    "$$orderDetail",
                    {
                      product: {
                        $arrayElemAt: [
                          {
                            $filter: {
                              input: "$product_details_info",
                              as: "productDetail",
                              cond: {
                                $eq: [
                                  "$$productDetail._id",
                                  "$$orderDetail.product_id",
                                ],
                              },
                            },
                          },
                          0,
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        {
          $addFields: {
            custom: {
              $arrayElemAt: ["$custom_product", 0],
            },
          },
        },
        {
          $project: {
            "order_details.product_id": 0,
            product_details_info: 0,
          },
        },
      ])
      .toArray();
    return orders;
  }

  async getAllOrdersOfUser(user_id: string) {
    // const orders = await databaseService.orders.find().toArray();
    const orders = await databaseService.orders
      .aggregate<Order>([
        {
          $match: {
            user_id: new ObjectId(user_id),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "order_details.product_id",
            foreignField: "_id",
            as: "product_details_info",
          },
        },
        {
          $lookup: {
            from: "customs",
            localField: "custom_id",
            foreignField: "_id",
            as: "custom_product",
          },
        },
        {
          $addFields: {
            order_details: {
              $map: {
                input: "$order_details",
                as: "orderDetail",
                in: {
                  $mergeObjects: [
                    "$$orderDetail",
                    {
                      product: {
                        $arrayElemAt: [
                          {
                            $filter: {
                              input: "$product_details_info",
                              as: "productDetail",
                              cond: {
                                $eq: [
                                  "$$productDetail._id",
                                  "$$orderDetail.product_id",
                                ],
                              },
                            },
                          },
                          0,
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        {
          $addFields: {
            custom: {
              $arrayElemAt: ["$custom_product", 0],
            },
          },
        },
        {
          $project: {
            "order_details.product_id": 0,
            product_details_info: 0,
          },
        },
      ])
      .toArray();
    return orders;
  }

  async getOrderByOrderKey(order_key: string) {
    const order = await databaseService.orders
      .aggregate([
        {
          $match: {
            order_key: order_key,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "order_details.product_id",
            foreignField: "_id",
            as: "product_details_info",
          },
        },
        {
          $lookup: {
            from: "customs",
            localField: "custom_id",
            foreignField: "_id",
            as: "custom_product",
          },
        },
        {
          $addFields: {
            order_details: {
              $map: {
                input: "$order_details",
                as: "orderDetail",
                in: {
                  $mergeObjects: [
                    "$$orderDetail",
                    {
                      product: {
                        $arrayElemAt: [
                          {
                            $filter: {
                              input: "$product_details_info",
                              as: "productDetail",
                              cond: {
                                $eq: [
                                  "$$productDetail._id",
                                  "$$orderDetail.product_id",
                                ],
                              },
                            },
                          },
                          0,
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        {
          $addFields: {
            custom: {
              $arrayElemAt: ["$custom_product", 0],
            },
          },
        },
        {
          $project: {
            "order_details.product_id": 0,
            product_details_info: 0,
          },
        },
      ])
      .toArray();
    if (order.length > 0) {
      return order[0];
    } else {
      throw new ErrorWithStatus("Order not found", HTTP_STATUS.NOT_FOUND);
    }
  }

  async getOrderByOrderId(order_id: string) {
    const order = await databaseService.orders
      .aggregate<Order>([
        {
          $match: {
            _id: new ObjectId(order_id),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "order_details.product_id",
            foreignField: "_id",
            as: "product_details_info",
          },
        },
        {
          $lookup: {
            from: "customs",
            localField: "custom_id",
            foreignField: "_id",
            as: "custom_product",
          },
        },
        {
          $addFields: {
            order_details: {
              $map: {
                input: "$order_details",
                as: "orderDetail",
                in: {
                  $mergeObjects: [
                    "$$orderDetail",
                    {
                      product: {
                        $arrayElemAt: [
                          {
                            $filter: {
                              input: "$product_details_info",
                              as: "productDetail",
                              cond: {
                                $eq: [
                                  "$$productDetail._id",
                                  "$$orderDetail.product_id",
                                ],
                              },
                            },
                          },
                          0,
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        {
          $addFields: {
            custom: {
              $arrayElemAt: ["$custom_product", 0],
            },
          },
        },
        {
          $project: {
            "order_details.product_id": 0,
            product_details_info: 0,
          },
        },
      ])
      .toArray();
    if (order.length > 0) {
      return order[0];
    } else {
      throw new ErrorWithStatus("Order not found", HTTP_STATUS.NOT_FOUND);
    }
  }

  async changeOrderStatus(order_id: string, order_status: OrderStatus) {
    const order = await databaseService.orders.findOne({
      _id: new ObjectId(order_id),
    });
    if (
      order?.payment_type === PaymentType.COD &&
      order_status === OrderStatus.Success
    ) {
      await transactionServices.createTransaction(order_id);
    }

    if (
      order?.payment_type !== PaymentType.COD &&
      order_status === OrderStatus.Shipping
    ) {
      await transactionServices.createTransaction(order_id);
    }

    const updatedOrder = await databaseService.orders.findOneAndUpdate(
      { _id: new ObjectId(order_id) },
      { $set: { order_status } },
      { returnDocument: "after" }
    );
    return updatedOrder;
  }
}

const orderServices = new OrderServices();
export default orderServices;
