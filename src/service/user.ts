import { UserLoginCredentials, User } from "@/types/UserType";
import { generateProvisionalToken } from "@/helpers/generateProvisionalToken";

export const userLogin = async ({ userEmail, userPassword }: UserLoginCredentials) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      if (userEmail && userPassword) {
        resolve(generateProvisionalToken());
      }
    }, 500)
  );
};

export const userRegister = async ({ userEmail, userName, userPassword }: User) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      if (userName && userEmail && userPassword) {
        resolve(generateProvisionalToken());
      }
    }, 500)
  );
};
