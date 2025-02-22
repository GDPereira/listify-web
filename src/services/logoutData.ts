import { api } from "@/lib/http";

interface LogoutResponse {
  success: boolean;
}

export const postLogout = async () => {
  const { data } = await api.post<LogoutResponse>("/auth/logout");

  return data;
};
