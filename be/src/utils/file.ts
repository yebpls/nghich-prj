import { Request } from "express";
import formidable, { File } from "formidable";
import fs from "fs";
import { UPLOAD_TEMP_DIR } from "~/constants/dir";

export const initFolder = () => {
  const uploadFolderPath = UPLOAD_TEMP_DIR;
  if (!fs.existsSync(uploadFolderPath)) {
    fs.mkdirSync(uploadFolderPath, {
      recursive: true,
    });
  }
};

export const handleUploadImage = async (req: Request) => {
  const form = formidable({
    uploadDir: UPLOAD_TEMP_DIR,
    maxFiles: 4,
    keepExtensions: true,
    maxFileSize: 3 * 1024 * 1024, // 4MB
    maxTotalFileSize: 3 * 1024 * 1024 * 4, // 16MB
    filter: function ({ name, originalFilename, mimetype }) {
      const valid = name === "image" && Boolean(mimetype?.includes("image"));
      if (!valid) {
        form.emit("error" as any, new Error("Invalid file type") as any);
      }
      return valid;
    },
  });
  return new Promise<File[]>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      if (!Boolean(files.image)) {
        return reject(new Error("File is empty"));
      }
      resolve(files.image as File[]);
    });
  });
};

export const getNameWithoutExtension = (filename: string) => {
  const namearr = filename.split(".");
  namearr.pop();
  return namearr.join("");
};
