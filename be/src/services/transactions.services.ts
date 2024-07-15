import { ObjectId } from "mongodb";
import databaseService from "./database.services";
import { TransactionStatus } from "~/constants/enum";
import { ErrorWithStatus } from "~/models/Errors";
import HTTP_STATUS from "~/constants/httpStatus";
import mediasService from "./medias.services";
import { deleteFileFromS3 } from "~/utils/s3";
import { Request } from "express";

class TransactionServices {
  async createTransaction(order_id: string) {
    const order = await databaseService.orders.findOne({
      _id: new ObjectId(order_id),
    });
    if (order) {
      const transaction = await databaseService.transactions.findOne({
        order_id: order._id,
      });
      if (transaction) {
        throw new ErrorWithStatus(
          "Order is already have transaction",
          HTTP_STATUS.CREATED
        );
      } else {
        const newTransaction = {
          _id: new ObjectId(),
          user_id: order.user_id,
          order_id: order._id,
          payment_type: order.payment_type,
          amount: order.order_details.reduce(
            (acc, cur) => acc + cur.price_final,
            0
          ),
          transaction_image_url: "",
          status: TransactionStatus.BUY,
        };
        await databaseService.transactions.insertOne(newTransaction);
        const newTransactionCreate = await databaseService.transactions.findOne(
          {
            _id: newTransaction._id,
          }
        );
        return newTransactionCreate;
      }
    }
  }

  async getAllTransactions() {
    const transactions = await databaseService.transactions.find().toArray();
    return transactions;
  }

  async getTransactionById(transaction_id: string) {
    const transaction = await databaseService.transactions.findOne({
      _id: new ObjectId(transaction_id),
    });
    if (!transaction) {
      throw new ErrorWithStatus("Transaction not found", HTTP_STATUS.NOT_FOUND);
    }
    return transaction;
  }

  async addImageTransaction(transaction_id: string, req: Request) {
    const transaction = await databaseService.transactions.findOne({
      _id: new ObjectId(transaction_id),
    });
    if (!transaction) {
      throw new ErrorWithStatus("Transaction not found", HTTP_STATUS.NOT_FOUND);
    }
    const url = await mediasService.uploadImage(req);
    console.log(url);

    const transaction_image = url[0].url;

    const result = await databaseService.transactions.findOneAndUpdate(
      { _id: new ObjectId(transaction_id) },
      {
        $set: {
          transaction_image_url: transaction_image,
        },
      },
      { returnDocument: "after" }
    );

    return result;
  }

  async deleteTransactionImage(transaction_id: string, url: string) {
    const transaction = await databaseService.transactions.findOne({
      _id: new ObjectId(transaction_id),
    });
    if (!transaction) {
      throw new ErrorWithStatus("Transaction not found", HTTP_STATUS.NOT_FOUND);
    }
    const filename = url.split("/").pop();
    await deleteFileFromS3(filename as string);
    // Remove the image URL from the product
    const result = await databaseService.transactions.findOneAndUpdate(
      { _id: new ObjectId(transaction_id) },
      {
        $set: {
          transaction_image_url: "",
        },
      },
      { returnDocument: "after" }
    );

    return result;
  }
}

const transactionServices = new TransactionServices();
export default transactionServices;
