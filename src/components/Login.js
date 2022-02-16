import { Button, Input, message } from "antd";
import { Content } from "antd/lib/layout/layout";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitClick = () => {
    if (username === "" || password === "") {
      message.error("Please provide username and password");
    } else {
      axios
        .post(
          "https://tutorial4-api.herokuapp.com/api/users/login",
          {
            email: username,
            password: password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(function (response) {
          navigate("/Profile");
        })
        .catch(function (error) {
          message.error(error.response.data.message);
          setUsername("");
          setPassword("");
        });
    }
  };

  return (
    <Content
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "600px",
        display: "flex",
        flexWrap: "wrap",
        flex: "1",
        flexDirection: "column",
        padding: "2%",
        margin: "1% 1%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <label style={{ fontSize: "xx-large", margin: "4%" }}>
        Tutorial 4 Login
      </label>
      <Input
        onChange={usernameChange}
        value={username}
        style={{ width: "90%", margin: "2%" }}
        size="large"
        placeholder="username"
        suffix={<AiOutlineUser />}
      />
      <Input.Password
        onChange={passwordChange}
        value={password}
        iconRender={(visible) =>
          visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
        }
        style={{ width: "90%", margin: "2%" }}
        size="large"
        placeholder="password"
      />
      <Button type="primary" shape="round" size="large" onClick={submitClick}>
        Submit
      </Button>
    </Content>
  );
}

export default Login;
