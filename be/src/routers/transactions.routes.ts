import { Router } from "express";
import {
  addTransactionImageController,
  deleteTransactionImageController,
  getAllTransactionController,
  getTransactionByIdController,
} from "~/controllers/transactions.controller";
import { accessTokenValidator } from "~/middlewares/users.middlewares";
import { wrapRequestHandler } from "~/utils/handlers";

const transactionRouter = Router();

transactionRouter.get(
  "/",
  accessTokenValidator,
  wrapRequestHandler(getAllTransactionController)
);

transactionRouter.get(
  "/:transaction_id",
  accessTokenValidator,
  wrapRequestHandler(getTransactionByIdController)
);

/**
 * Description: Add image to transaction
 * Path: /:transaction_id/images
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: {address: string}
 */
transactionRouter.post(
  "/:transaction_id/image",
  accessTokenValidator,
  wrapRequestHandler(addTransactionImageController)
);

/**
 * Description: Delete Product Image
 * Body: {url: string}
 */
transactionRouter.put(
  "/:transaction_id/image/delete",
  accessTokenValidator,
  wrapRequestHandler(deleteTransactionImageController)
);

export default transactionRouter;
