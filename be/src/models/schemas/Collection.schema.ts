import { Collection, ObjectId } from "mongodb";
import { CollectionStatus } from "~/constants/enum";

interface CollectionType {
  _id: ObjectId;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  status: CollectionStatus;
}
