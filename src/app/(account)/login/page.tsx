"use client";

import "@ant-design/v5-patch-for-react-19";
import { Button, Form, Input } from "antd";
import { createSchemaFieldRule } from "antd-zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import z from "zod";
import { useLogin } from "./_hooks/useLogin";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string(),
});

type LoginInputs = z.infer<typeof LoginSchema>;

const rule = createSchemaFieldRule(LoginSchema);

export default function LoginPage() {
  const [form] = Form.useForm<LoginInputs>();
  const { login, isLoading, data } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      return;
    }

    router.push("/home");
  }, [data]);

  const onFinish = async (values: LoginInputs) => {
    login(values);
  };

  return (
    <div className="flex items-center justify-center h-dvh w-full">
      <Form name="login" className="w-4/12" form={form} onFinish={onFinish}>
        <Form.Item name={"email"} rules={[rule]}>
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item name={"password"} rules={[rule]}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={isLoading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
