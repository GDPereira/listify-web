import { postSignup, SignupValues } from "@/services/signupData";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const { mutate, isPending, data } = useMutation({
    mutationFn: postSignup,
  });

  const signup = (formValues: SignupValues) => {
    return mutate(formValues);
  };

  return {
    signup,
    isLoading: isPending,
    data,
  };
};
