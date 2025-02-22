"use client";

import { useCheckAuth } from "@/hooks/useCheckAuth";
import "@ant-design/v5-patch-for-react-19";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
  const { data, isLoading } = useCheckAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (data?.success) {
      router.push("/home");
    }
  }, [data, isLoading]);

  return (
    <div className="items-center justify-center flex w-full h-dvh">
      {isLoading && <Spin size="large" />}
    </div>
  );
}
