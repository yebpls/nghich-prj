import { ObjectId } from "mongodb";

interface MaterialType {
  _id: ObjectId;
  name: string;
}

export default class Material {
  _id: ObjectId;
  name: string;

  constructor(material: MaterialType) {
    this._id = material._id;
    this.name = material.name || "";
  }
}
