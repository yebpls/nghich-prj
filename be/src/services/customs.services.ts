import { Request } from "express";
import mediasService from "./medias.services";
import databaseService from "./database.services";
import { ObjectId } from "mongodb";
import { ErrorWithStatus } from "~/models/Errors";
import HTTP_STATUS from "~/constants/httpStatus";
import { deleteFileFromS3 } from "~/utils/s3";

class CustomService {
  async addCustom(user_id: string, color: string, image: Request) {
    const url = await mediasService.uploadImage(image);
    const custom_id = await databaseService.customs.insertOne({
      _id: new ObjectId(),
      user_id: new ObjectId(user_id),
      url: url[0].url,
      name: "",
      created_at: new Date(),
      color: color,
    });
    const custom = await databaseService.customs.findOne({
      _id: custom_id.insertedId,
    });
    return custom;
  }

  async getAllCustom(user_id: string) {
    const customs = await databaseService.customs
      .find({ user_id: new ObjectId(user_id) })
      .toArray();
    return customs;
  }

  async updateNameCustom(custom_id: string, name: string) {
    const custom = await databaseService.customs.findOneAndUpdate(
      { _id: new ObjectId(custom_id) },
      { $set: { name } },
      { returnDocument: "after" }
    );
    if (!custom) {
      throw new ErrorWithStatus("Custom not found", HTTP_STATUS.NOT_FOUND);
    }
    return custom;
  }

  async deleteCustom(custom_id: string) {
    const custom = await databaseService.customs.findOne({
      _id: new ObjectId(custom_id),
    });
    if (!custom) {
      throw new ErrorWithStatus("Custom not found", HTTP_STATUS.NOT_FOUND);
    }
    const url = custom.url;
    const filename = url.split("/").pop();

    await deleteFileFromS3(filename as string);

    await databaseService.customs.deleteOne({
      _id: new ObjectId(custom_id),
    });

    return { message: "Delete custom successfully!!!" };
  }
}

const customService = new CustomService();
export default customService;
