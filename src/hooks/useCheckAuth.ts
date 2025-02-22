import { getCheck } from "@/services/checkAuthData";
import { useQuery } from "@tanstack/react-query";
import { HttpStatusCode, isAxiosError } from "axios";

const checkAuthKey = "checkAuth";

export const useCheckAuth = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [checkAuthKey],
    queryFn: getCheck,
    retry: (count, error) => {
      if (count >= 3) {
        return false;
      }

      if (isAxiosError(error)) {
        return error.status !== HttpStatusCode.Unauthorized;
      }

      return true;
    },
  });

  return { data, error, isLoading };
};
