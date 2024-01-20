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
