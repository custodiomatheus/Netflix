import { getInstance } from "@/helpers/axios";

const URL = "http://localhost:3000";

export const userLogin = async ({ userEmail, userPassword }: { userEmail: string; userPassword: string }) => {
  const instance = getInstance(URL);
  const { data } = await instance.post("/users/login", { userEmail, userPassword });
  return data;
};
