"use client";

import { useCheckAuth } from "@/hooks/useCheckAuth";
import { Spin } from "antd";
import { useEffect } from "react";
import "@ant-design/v5-patch-for-react-19";
import { redirect } from "next/navigation";

export default function Index() {
  const { data, error, isLoading } = useCheckAuth();

  useEffect(() => {
    if ((!data && !error) || isLoading) {
      return;
    }

    if (data?.success) {
      return redirect("/home");
    }

    return redirect("/login");
  }, [data, error, isLoading]);

  return (
    <div className="items-center justify-center flex w-full h-dvh">
      {isLoading && <Spin size="large" />}
    </div>
  );
}
