import { verifyForgotPasswordTokenValidator } from "./../middlewares/users.middlewares";
import { NextFunction, Request, Response } from "express";
import core from "express-serve-static-core";
import { ObjectId } from "mongodb";
import { UserVerifyStatus } from "~/constants/enum";
import HTTP_STATUS from "~/constants/httpStatus";
import { USERS_MESSAGES } from "~/constants/messages";
import {
  EmailVerifyRequestBody,
  ForgotPassWordRequestBody,
  LoginRequestBody,
  LogoutRequestBody,
  RegisterRequestBody,
  TokenPayload,
  VerifyForgotPassWordTokenRequestBody,
} from "~/models/requests/Users.requests";
import User from "~/models/schemas/User.schema";
import databaseService from "~/services/database.services";
import userService from "~/services/users.services";

export const registerController = async (
  req: Request<core.ParamsDictionary, any, RegisterRequestBody>,
  res: Response
) => {
  const result = await userService.register(req.body);
  return res.json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    data: result,
  });
};

export const loginController = async (
  req: Request<core.ParamsDictionary, any, LoginRequestBody>,
  res: Response
) => {
  const user = req.user as User;
  const user_id = user._id as ObjectId;
  const result = await userService.login(user_id.toString());
  return res.json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    result,
  });
};

export const logoutControler = async (
  req: Request<core.ParamsDictionary, any, LogoutRequestBody>,
  res: Response
) => {
  const { refresh_token } = req.body;
  const result = await userService.logout(refresh_token);
  return res.json(result);
};

export const emailVerifyController = async (
  req: Request<core.ParamsDictionary, any, EmailVerifyRequestBody>,
  res: Response
) => {
  const { user_id } = req.decoded_email_verify_token as TokenPayload;
  const user = await databaseService.users.findOne({
    _id: new ObjectId(user_id),
  });
  if (!user) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
      message: USERS_MESSAGES.USER_NOT_FOUND,
    });
  }

  //Đã verify thì mình sẽ không báo lỗi mà sẽ trả status OK với message là đã verify rồi
  if (user.email_verify_token === "") {
    res.json({
      message: USERS_MESSAGES.EMAIL_IS_VERIFIED_BEFORE,
    });
  }

  const result = await userService.verifyEmail(user_id);
  return res.json({
    message: USERS_MESSAGES.EMAIL_VERIFY_SUCCESS,
    result,
  });
};

export const resendVerifyEmailController = async (
  req: Request,
  res: Response
) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const user = await databaseService.users.findOne({
    _id: new ObjectId(user_id),
  });
  if (!user) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
      message: USERS_MESSAGES.USER_NOT_FOUND,
    });
  }
  if (user.verify === UserVerifyStatus.Verified) {
    return res.json({
      message: USERS_MESSAGES.EMAIL_IS_VERIFIED_BEFORE,
    });
  }
  const result = await userService.resendEmailVerify(user_id.toString());
  return res.json(result);
};

export const forgotPassWordController = async (
  req: Request<core.ParamsDictionary, any, ForgotPassWordRequestBody>,
  res: Response
) => {
  const { _id } = req.user as User;
  const result = await userService.forgotPassword((_id as ObjectId).toString());
  return res.json(result);
};

export const verifyForgotPasswordController = async (
  req: Request<
    core.ParamsDictionary,
    any,
    VerifyForgotPassWordTokenRequestBody
  >,
  res: Response
) => {
  return res.json({
    message: USERS_MESSAGES.FORGOT_PASSWORD_VERIFY_SUCCESS,
  });
};
