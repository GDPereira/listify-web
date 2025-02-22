import { api } from "@/lib/http";

interface LoginResponse {
  success: boolean;
}

export interface LoginValues {
  email: string;
  password: string;
}

export const postLogin = async (values: LoginValues) => {
  const { data } = await api.post<LoginResponse>("/auth/login", values);

  return data;
};
