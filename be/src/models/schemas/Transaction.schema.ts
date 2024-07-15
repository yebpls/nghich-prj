import { ObjectId } from "mongodb";
import { PaymentType, TransactionStatus } from "~/constants/enum";

interface TransactionType {
  _id?: ObjectId;
  create_date?: Date;
  user_id: ObjectId;
  order_id: ObjectId;
  payment_type: PaymentType;
  amount: number;
  transaction_image_url: string;
  status: TransactionStatus;
}

export class Transaction {
  _id?: ObjectId;
  create_date?: Date;
  user_id: ObjectId;
  order_id: ObjectId;
  payment_type: PaymentType;
  amount: number;
  transaction_image_url?: string;
  status: TransactionStatus;

  constructor(transaction: TransactionType) {
    this._id = transaction._id || new ObjectId();
    this.create_date = transaction.create_date || new Date();
    this.payment_type = transaction.payment_type;
    this.user_id = transaction.user_id;
    this.order_id = transaction.order_id;
    this.amount = transaction.amount;
    this.transaction_image_url = transaction.transaction_image_url || "";
    this.status = transaction.status;
  }
}
