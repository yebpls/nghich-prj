const emailPatern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const registerInput = [
  {
    label: "Tên của bạn",
    type: "text",
    register: "name",
    required: "Yeu cau nhap ten cua ban",
    pattern: "",
  },
  {
    label: "Tên tài khoản",
    type: "text",
    register: "usename",
    required: "Yeu cau nhap ten tai khaon",
    pattern: "",
  },
  {
    label: "Email",
    type: "email",
    register: "email",
    required: "Yeu cau nhap ten",
    pattern: emailPatern,
  },
  {
    label: "Mật khẩu",
    type: "password",
    register: "password",
    required: "Yeu cau nhap ten",
    pattern: "",
  },
  {
    label: "Mật khẩu xác nhận",
    type: "pasword",
    register: "confirm_password",
    required: "Yeu cau nhap ten",
    pattern: "",
  },
];
