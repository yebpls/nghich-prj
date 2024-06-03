import { ObjectId } from "mongodb";

interface CustomType {
  _id: ObjectId;
  name?: string;
  user_id: ObjectId;
  created_at?: Date;
  url: string;
}

export default class Custom {
  _id: ObjectId;
  name?: string;
  user_id: ObjectId;
  created_at?: Date;
  url: string;

  constructor(custom: CustomType) {
    const date = new Date();
    this._id = custom._id || new ObjectId();
    this.name = custom.name || "";
    this.user_id = custom.user_id;
    this.created_at = custom.created_at || date;
    this.url = custom.url || "";
  }
}
