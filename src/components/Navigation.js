import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeTwoTone,
  CarTwoTone,
  GiftTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [selected, setSelected] = useState("pickup");
  const navigate = useNavigate();
  const handleClick = (e) => {
    setSelected(e.key);
  };

  const pickupPressed = () => {
    navigate("/");
  };
  return (
    <Menu
      style={{ fontSize: "x-large" }}
      onClick={handleClick}
      selectedKeys={[selected]}
      mode="horizontal"
    >
      <Menu.Item
        key="home"
        disabled
        icon={
          <HomeTwoTone twoToneColor="#3c9232" style={{ fontSize: "100%" }} />
        }
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="pickup"
        onClick={pickupPressed}
        icon={
          <CarTwoTone twoToneColor="#3c9232" style={{ fontSize: "100%" }} />
        }
      >
        Pickup
      </Menu.Item>
      <Menu.Item
        key="rewards"
        disabled
        icon={
          <GiftTwoTone twoToneColor="#3c9232" style={{ fontSize: "100%" }} />
        }
      >
        Rewards
      </Menu.Item>
      <Menu.Item
        style={{ marginLeft: "auto" }}
        key="user"
        disabled
        icon={<UserOutlined style={{ fontSize: "100%" }} />}
      >
        Ben White
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
