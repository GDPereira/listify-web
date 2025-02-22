"use client";

import { postLogout } from "@/services/logoutData";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      router.push("/login");
    },
  });

  const logout = () => {
    return mutate();
  };

  return {
    logout,
    isLoading: isPending,
    data,
  };
};
