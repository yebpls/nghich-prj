import { ParamsDictionary } from "express-serve-static-core";
export interface AddCustomReqBody {
  name: string;
  image: any;
}

export interface UpdateNameCustomReqBody {
  name: string;
}

export interface UpdateNameCustomReqParams extends ParamsDictionary {
  custom_id: string;
}

export interface DeleteCustomReqParams extends ParamsDictionary {
  custom_id: string;
}

export interface CreateCustomReqParams extends ParamsDictionary {
  color: string;
}
