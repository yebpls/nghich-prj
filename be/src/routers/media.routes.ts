import { wrapRequestHandler } from "./../utils/handlers";
import { Router } from "express";
import {
  deleteImageController,
  uploadImageController,
} from "~/controllers/medias.controller";

const mediaRouter = Router();

mediaRouter.post("/upload-image", wrapRequestHandler(uploadImageController));
mediaRouter.put("/", wrapRequestHandler(deleteImageController));
export default mediaRouter;
