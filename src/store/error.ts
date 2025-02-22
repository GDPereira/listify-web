"use client";

import { NotificationPlacement } from "antd/es/notification/interface";
import { create } from "zustand";

interface ErrorParams {
  message: string;
  description?: string | React.JSX.Element;
  placement?: NotificationPlacement;
}

interface ErrorState {
  params: ErrorParams;
  setError: (error: ErrorParams) => void;
}

const defaultParams: ErrorParams = {
  message: "",
  description: "",
  placement: "bottomRight",
};

export const useErrorStore = create<ErrorState>((set) => ({
  params: defaultParams,
  setError: (error) => {
    set({ params: { ...defaultParams, ...error } });

    const timeout = setTimeout(() => {
      set({ params: defaultParams });
    }, 3000);

    clearTimeout(timeout);
  },
}));
