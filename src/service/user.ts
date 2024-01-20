// TODO: ESTRUTURAR O CORPO DA RESPOSTA
import { generateProvisionalToken } from "@/helpers/generateProvisionalToken";

export const userLogin = async ({ userEmail, userPassword }: { userEmail: string; userPassword: string }) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      if (userEmail && userPassword) {
        resolve(generateProvisionalToken());
      }
    }, 500)
  );
};

export const userRegister = async ({ userName, userEmail, userPassword }: { userName: string, userEmail: string; userPassword: string }) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      if (userName && userEmail && userPassword) {
        resolve(generateProvisionalToken());
      }
    }, 500)
  );
};
