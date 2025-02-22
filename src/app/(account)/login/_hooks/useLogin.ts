import { LoginValues, postLogin } from "@/services/loginData";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogin,
  });

  const login = (formValues: LoginValues) => {
    return mutate(formValues);
  };

  return {
    login,
    isLoading: isPending,
    data,
  };
};
