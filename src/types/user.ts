export type IUser = {
  name: string;
  email: string;
  phone: string;
  role: "provider"; // Fixed role value
  image: string;
  iat: number; // Issued at timestamp
  exp: number; // Expiry timestamp
};

export type TGetAllUsers = {
  email: string;
  image: string;
  name: string;
  password?: string;
  passwordConfirm: string;
  phone: string;
  role: string;
  isDeactivate?: boolean;
  thana?: string;
  district?: string;
  selectedThana?: string[];
  _id: string;
  __v: number;
};
