"use client";

import { Header } from "@/components/header";
import "@ant-design/v5-patch-for-react-19";
import { Layout } from "antd";

export default function HomePage() {
  return (
    <Layout className="h-dvh">
      <Header />
    </Layout>
  );
}
