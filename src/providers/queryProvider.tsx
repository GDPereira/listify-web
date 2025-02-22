"use client";

import { useErrorStore } from "@/store/notification";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { PropsWithChildren, useMemo } from "react";

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const { setNotification } = useErrorStore();

  const queryClient = useMemo(
    () =>
      new QueryClient({
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
