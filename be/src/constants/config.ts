import { config } from "dotenv";
import fs from "fs";
import path from "path";
const envFilename = `.env`;

if (!fs.existsSync(path.resolve(envFilename))) {
  console.log(`Không tìm thấy file môi trường ${envFilename}`);
  console.log(
    `Lưu ý: App không dùng file .env, ví dụ môi trường là development thì app sẽ dùng file .env.development`
  );
  console.log(
    `Vui lòng tạo file ${envFilename} và tham khảo nội dung ở file .env.example`
  );
  process.exit(1);
}

config({
  path: envFilename,
});

export const envConfig = {
  dbUsername: process.env.DB_USERNAME as string,
  dbPassword: process.env.DB_PASSWORD as string,
  dbName: process.env.DB_NAME as string,
  passwordSecret: process.env.PASSWORD_SECRET as string,
  jwtSecretAccessToken: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  jwtSecretRefreshToken: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  jwtSecretEmailVerifyToken: process.env
    .JWT_SECRET_EMAIL_VERIFY_TOKEN as string,
  jwtSecretForgotPasswordToken: process.env
    .JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
  refreshTokenExpireTime: process.env.REFRESH_TOKEN_EXPIRES_IN as string,
  accessTokenExpireTime: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
  emailVerifyTokenExpireTime: process.env
    .EMAIL_VERIFY_TOKEN_EXPIRES_IN as string,
  forgotPasswordTokenExpireTime: process.env
    .FORGOT_PASSWORD_TOKEN_EXPIRES_IN as string,
  tz: process.env.TZ as string,
  clientUrl: process.env.CLIENT_URL as string,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  awsSecrectAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  awsRegion: process.env.AWS_REGION as string,
  sesFromAddress: process.env.SES_FROM_ADDRESS as string,
  awsBucketName: process.env.AWS_BUCKET_NAME as string,
};
