export enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned, // bị khóa
}

export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken,
}

export enum CollectionStatus {
  Active,
  Inactive,
}

export enum ProductStatus {
  Active,
  Inactive,
}

export enum Role {
  Admin,
  User,
}

export enum PaymentType {
  COD,
  MOMO,
  STK,
}

export enum OrderStatus {
  Pending,
  Shipping,
  Success,
  Cancel,
}
