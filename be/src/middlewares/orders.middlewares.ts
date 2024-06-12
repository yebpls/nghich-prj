import { wrapRequestHandler } from "~/utils/handlers";
import { checkSchema } from "express-validator";
import {
  ORDERS_MESSAGES,
  PRODUCTS_MESSAGES,
  USERS_MESSAGES,
} from "~/constants/messages";
import { OrderDetail } from "~/models/schemas/Order.schema";
import { validate } from "~/utils/validation";
import databaseService from "~/services/database.services";
import { ObjectId } from "mongodb";
import { ErrorWithStatus } from "~/models/Errors";
import HTTP_STATUS from "~/constants/httpStatus";

export const createOrderValidator = wrapRequestHandler(
  validate(
    checkSchema(
      {
        address_id: {
          isString: {
            errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
          },
          notEmpty: {
            errorMessage: ORDERS_MESSAGES.ADDRESS_IS_REQUIRED,
          },
        },
        payment_type: {
          isNumeric: {
            errorMessage: ORDERS_MESSAGES.PAYMENT_TYPE_MUST_BE_NUMBER,
          },
          notEmpty: {
            errorMessage: ORDERS_MESSAGES.PAYMENT_TYPE_IS_REQUIRED,
          },
        },
        order_details: {
          optional: true,
          isArray: {
            errorMessage: ORDERS_MESSAGES.ORDER_DETAILS_MUST_BE_ARRAY,
          },
          custom: {
            options: async (order_details: OrderDetail[]) => {
              const valid = order_details.every((detail) => {
                return (
                  typeof detail.product_id === "string" &&
                  typeof detail.quantity === "number" &&
                  typeof detail.price_final === "number"
                );
              });
              if (!valid)
                throw new Error(ORDERS_MESSAGES.ORDER_DETAILS_INVALID);

              await Promise.all(
                order_details.map(async (order_detail) => {
                  const product = await databaseService.products.findOne(
                    new ObjectId(order_detail.product_id)
                  );
                  if (!product) {
                    throw new ErrorWithStatus(
                      `Product with id ${order_detail.product_id} not found`,
                      HTTP_STATUS.NOT_FOUND
                    );
                  }
                  if (order_detail.quantity > product.quantity) {
                    throw new Error(
                      `Not enough quantity for product with id ${order_detail.product_id}`
                    );
                  } else {
                    product.quantity -= order_detail.quantity;
                    await databaseService.products.updateOne(
                      { _id: new ObjectId(order_detail.product_id) },
                      { $set: { quantity: product.quantity } }
                    );
                  }
                })
              );
              return true;
            },
          },
        },
        coupon_name: {
          optional: true,
          isString: {
            errorMessage: ORDERS_MESSAGES.COUPON_SHOULD_BE_STRING,
          },
        },
        custom_id: {
          optional: true,
          isString: {
            errorMessage: ORDERS_MESSAGES.CUSTOM_ID_SHOULD_BE_STRING,
          },
        },
      },
      ["body"]
    )
  )
);
