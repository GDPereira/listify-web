"use client";

import { useErrorStore } from "@/store/error";
import { notification } from "antd";
import { createContext, PropsWithChildren, useEffect, useMemo } from "react";

export const ErrorContext = createContext({ name: "error" });

export const ErrorProvider = ({ children }: PropsWithChildren) => {
  const { params } = useErrorStore();

  const contextValue = useMemo(() => ({ name: params.message }), [params]);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (!params.message) {
      return;
    }

    api.error({
      message: params.message,
      description: params.description,
      placement: params.placement,
    });
  }, [params]);

  return (
    <ErrorContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </ErrorContext.Provider>
  );
};
