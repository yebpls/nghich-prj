import {
  changeOrderStatusController,
  createOrderController,
  getAllOrderController,
  getOrderByOrderIdController,
  getOrderByOrderKeyController,
} from "~/controllers/orders.controllers";
import { Router } from "express";
import { accessTokenValidator } from "~/middlewares/users.middlewares";
import { wrapRequestHandler } from "~/utils/handlers";
import { createOrderValidator } from "~/middlewares/orders.middlewares";

const ordersRouter = Router();

/**
 * Description: Create a new order
 * Path: /
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: {address: string}
 */
ordersRouter.post(
  "/",
  accessTokenValidator,
  createOrderValidator,
  wrapRequestHandler(createOrderController)
);

/**
 *  Description: Get All Orders
 *  Path: /
 *  Method: GET
 *  Header: { Authorization: Bearer <access_token> }
 */
ordersRouter.get(
  "/",
  accessTokenValidator,
  wrapRequestHandler(getAllOrderController)
);

/**
 *  Description: Get Order By OrderKey
 *  Path: /order/bykey/:order_key
 *  Method: GET
 *  Header: { Authorization: Bearer <access_token> }
 */
ordersRouter.get(
  "/order/bykey/:order_key",
  accessTokenValidator,
  wrapRequestHandler(getOrderByOrderKeyController)
);

/**
 *  Description: Get Order By OrderID
 *  Path: /order/byid/:order_id
 *  Method: GET
 *  Header: { Authorization: Bearer <access_token> }
 */
ordersRouter.get(
  "/order/byid/:order_id",
  accessTokenValidator,
  wrapRequestHandler(getOrderByOrderIdController)
);

/**
 *  Description: Change order status
 *  Path: /order/:order_id
 *  Method: PATCH
 *  Header: { Authorization: Bearer <access_token> }
 *  Body: OrderStatus
 */
ordersRouter.patch(
  "/order/:order_id",
  accessTokenValidator,
  wrapRequestHandler(changeOrderStatusController)
);

export default ordersRouter;
