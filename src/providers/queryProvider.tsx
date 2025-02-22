"use client";

import { useErrorStore } from "@/store/notification";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { HttpStatusCode, isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useMemo } from "react";

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const { setNotification } = useErrorStore();
  const router = useRouter();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError(error) {
            if (isAxiosError(error)) {
              const isUnauthorized =
                error.status === HttpStatusCode.Unauthorized;

              if (isUnauthorized) {
                router.push("/login");
              }
            }
          },
        }),
        mutationCache: new MutationCache({
          onError(error) {
            if (isAxiosError(error)) {
              setNotification({
                message: error.response?.data.message,
                type: "error",
              });
            }
          },
        }),
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
