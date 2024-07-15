import { ParamsDictionary } from "express-serve-static-core";
export interface AddTransationImageReqParams extends ParamsDictionary {
  transaction_id: string;
}

export interface ImageUrlReqBody {
  url: string;
}
