const emailPatern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const userFieldInput = [
  {
    label: "Email",
    type: "email",
    field: "email",
    required: "Yeu cau nhap ten",
    pattern: emailPatern,
    disable: true,
  },
  {
    label: "Username",
    type: "text",
    field: "username",
    required: "Yeu cau nhap ten tai khaon",
    pattern: "",
    disable: true,
  },
  {
    label: "Your Name",
    type: "text",
    field: "name",
    required: "Your Name Is Required",
    pattern: "",
    disable: false,
  },
];
