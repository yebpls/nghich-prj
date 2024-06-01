import { createOrderController } from "~/controllers/orders.controllers";
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

export default ordersRouter;
