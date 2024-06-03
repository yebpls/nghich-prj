import { ParamsDictionary } from "express-serve-static-core";
import { NextFunction, Response, Request } from "express";
import path from "path";
import { UPLOAD_DIR } from "~/constants/dir";
import { USERS_MESSAGES } from "~/constants/messages";
import mediasService from "~/services/medias.services";
import { deleteFileFromS3 } from "~/utils/s3";
import { DeleteImageFromS3ReqBody } from "~/models/requests/Collections.requests";

// console.log(path.resolve("uploads"));

export const uploadImageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = await mediasService.uploadImage(req);
  return res.json({ message: USERS_MESSAGES.UPLOAD_SUCCESS, data: url });
};

export const serveImageController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename } = req.params;
  // console.log(filename);
  return res.sendFile(path.resolve(UPLOAD_DIR, filename), (err) => {
    if (err) {
      res
        .status((err as any).status)
        .send({ message: USERS_MESSAGES.FILE_NOT_FOUND });
    }
  });
};

export const deleteImageController = async (
  req: Request<ParamsDictionary, any, DeleteImageFromS3ReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { link } = req.body;
  const parts = link.split("amazonaws.com/");
  const partAfterAmazonaws = parts[1];
  console.log(partAfterAmazonaws);
  const result = await deleteFileFromS3(partAfterAmazonaws);
  return res.send(link);
  // const result = await deleteFileFromS3(url)
  // return res.json(result)
};
