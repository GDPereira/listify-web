import { useCheckAuth } from "@/hooks/useCheckAuth";
import { useLogout } from "@/hooks/useLogout";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { Header as HeaderAntd } from "antd/es/layout/layout";
import { useMemo } from "react";

export const Header = () => {
  const { data } = useCheckAuth();
  const { logout } = useLogout();

  const userName = data?.data.user.name ?? "";

  const dropdownItems: MenuProps["items"] = useMemo(() => {
    return [
      {
        label: (
          <a
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            <Space>
              <LogoutOutlined />
              Logout
            </Space>
          </a>
        ),
        key: "0",
      },
    ];
  }, []);

  return (
    <HeaderAntd className="flex items-center justify-end">
      <Menu
        className="flex-1 flex justify-end"
        mode="horizontal"
        theme="dark"
        selectable={false}
        items={[
          {
            key: 0,
            label: (
              <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <UserOutlined />
                    {userName}
                  </Space>
                </a>
              </Dropdown>
            ),
          },
        ]}
      />
    </HeaderAntd>
  );
};
