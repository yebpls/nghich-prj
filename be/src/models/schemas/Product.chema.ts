import { ObjectId } from "mongodb";
interface ProductType {
  _id: ObjectId;
  name: string;
  price: number;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  width: number;
  length: number;
  color: string[];
  // status: CollectionStatus;
}
