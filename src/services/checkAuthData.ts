import { api } from "@/lib/http";

interface CheckResponse {
  success: boolean;
  data: {
    user: {
      name: string;
      userId: string;
    };
  };
}

export const getCheck = async () => {
  const { data } = await api.get<CheckResponse>("/auth/check");

  return data;
};
