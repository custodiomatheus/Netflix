export type User = {
  userEmail: string;
  userPassword: string;
  userName: string;
};

export interface UserLoginCredentials extends Pick<User, "userEmail" | "userPassword"> {}
