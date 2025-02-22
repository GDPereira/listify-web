import { api } from "@/lib/http";

interface CheckResponse {
  success: boolean;
}

export const getCheck = async () => {
  const { data } = await api.get<CheckResponse>("/auth/check");

  return data;
};
