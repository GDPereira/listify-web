import { LoginValues, postLogin } from "@/services/authData";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { error, mutate, isPending, data } = useMutation({
    mutationFn: postLogin,
  });

  const login = (formValues: LoginValues) => {
    return mutate(formValues);
  };

  return {
    login,
    isLoading: isPending,
    error,
    data,
  };
};
