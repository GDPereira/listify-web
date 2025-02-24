import { LoginValues, postLogin } from "@/services/loginData";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      router.push("/home");
    },
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
