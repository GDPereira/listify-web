import { getCheck } from "@/services/checkAuthData";
import { useQuery } from "@tanstack/react-query";

const checkAuthKey = "checkAuth";

export const useCheckAuth = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [checkAuthKey],
    queryFn: getCheck,
  });

  return { data, error, isLoading };
};
