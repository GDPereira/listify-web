"use client";

import { NotificationPlacement } from "antd/es/notification/interface";
import { create } from "zustand";

type NotificationType = "success" | "info" | "warning" | "error";

interface Notification {
  message: string;
  description: string | React.JSX.Element;
  placement: NotificationPlacement;
  type: NotificationType;
}

interface ErrorState {
  notification: Notification;
  setNotification: (
    notification: Pick<Notification, "message"> & Partial<Notification>,
  ) => void;
}

const defaultParams: Required<Notification> = {
  message: "",
  description: "",
  placement: "bottomRight",
  type: "info",
};

export const useErrorStore = create<ErrorState>((set) => ({
  notification: defaultParams,
  setNotification: (notification) => {
    set({ notification: { ...defaultParams, ...notification } });
  },
}));
