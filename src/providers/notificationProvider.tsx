"use client";

import { useErrorStore } from "@/store/notification";
import { notification as notificationAntd } from "antd";
import { PropsWithChildren, useEffect } from "react";

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const { notification } = useErrorStore();

  const [api, contextHolder] = notificationAntd.useNotification();

  useEffect(() => {
    const { placement, description, message, type } = notification;

    if (!message) {
      return;
    }

    api[type]({
      message: message,
      description: description,
      placement: placement,
    });
  }, [notification]);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};
