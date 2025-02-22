"use client";

import "@ant-design/v5-patch-for-react-19";
import { Button, Form, Input, Typography } from "antd";
import { createSchemaFieldRule } from "antd-zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import z from "zod";
import { useSignup } from "./_hooks/useSignup";

const RegisterSchema = z
  .object({
    name: z.string(),
    email: z.string().email("Enter a valid email"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterInputs = z.infer<typeof RegisterSchema>;

const rule = createSchemaFieldRule(RegisterSchema);

export default function SignupPage() {
  const [form] = Form.useForm<RegisterInputs>();
  const { signup, isLoading, data } = useSignup();
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      return;
    }

    router.push("/home");
  }, [data]);

  const onFinish = async (values: RegisterInputs) => {
    signup(values);
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-dvh w-full flex-col">
      <Form name="login" className="w-4/12" form={form} onFinish={onFinish}>
        <Form.Item name={"name"} rules={[rule]}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name={"email"} rules={[rule]}>
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item name={"password"} rules={[rule]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item name={"confirmPassword"} rules={[rule]}>
          <Input.Password placeholder="Confirm Password" />
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
      <Typography.Text>Already have an account?</Typography.Text>
      <Typography.Link onClick={onClickLogin}>Login here!</Typography.Link>
    </div>
  );
}
