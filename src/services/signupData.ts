import { api } from "@/lib/http";

interface SignupResponse {
  success: boolean;
}

export interface SignupValues {
  name: string;
  email: string;
  password: string;
}

export const postSignup = async (values: SignupValues) => {
  const { data } = await api.post<SignupResponse>("/auth/signup", values);

  return data;
};
