import { ObjectId } from "mongodb";
import databaseService from "./database.services";
import { TransactionStatus } from "~/constants/enum";
import { ErrorWithStatus } from "~/models/Errors";
import HTTP_STATUS from "~/constants/httpStatus";

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
}

const transactionServices = new TransactionServices();
export default transactionServices;
