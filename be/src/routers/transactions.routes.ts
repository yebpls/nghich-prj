import { Router } from "express";
import { getAllTransactionController } from "~/controllers/transactions.controller";
import { accessTokenValidator } from "~/middlewares/users.middlewares";
import { wrapRequestHandler } from "~/utils/handlers";

const transactionRouter = Router();

transactionRouter.get(
  "/",
  accessTokenValidator,
  wrapRequestHandler(getAllTransactionController)
);

export default transactionRouter;
