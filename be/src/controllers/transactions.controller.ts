import { ParamsDictionary } from "express-serve-static-core";
import { Response, Request, NextFunction } from "express";
import transactionServices from "~/services/transactions.services";

export const getAllTransactionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transactions = await transactionServices.getAllTransactions();
  return res.json({
    message: "Get all transactions successfully",
    data: transactions,
  });
};
