import { ParamsDictionary } from "express-serve-static-core";
import { Response, Request, NextFunction } from "express";
import transactionServices from "~/services/transactions.services";
import {
  AddTransationImageReqParams,
  ImageUrlReqBody,
} from "~/models/requests/Transactions.requests";

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

export const getTransactionByIdController = async (
  req: Request<AddTransationImageReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { transaction_id } = req.params;
  const transaction =
    await transactionServices.getTransactionById(transaction_id);
  return res.json({
    message: "Get transaction by ID successfully",
    data: transaction,
  });
};

export const addTransactionImageController = async (
  req: Request<AddTransationImageReqParams>,
  res: Response,
  next: NextFunction
) => {
  const { transaction_id } = req.params;
  const transaction = await transactionServices.addImageTransaction(
    transaction_id,
    req
  );
  return res.json({
    message: "Add Image Transaction Successfully",
    data: transaction,
  });
};

export const deleteTransactionImageController = async (
  req: Request<AddTransationImageReqParams, any, ImageUrlReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { transaction_id } = req.params;
  const { url } = req.body;
  const transaction = await transactionServices.deleteTransactionImage(
    transaction_id,
    url
  );
  return res.json({
    message: "Delete Image Transaction Successfully",
    data: transaction,
  });
};
