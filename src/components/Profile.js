import { message, List, Row, Input, Col } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://tutorial4-api.herokuapp.com/api/users/")
      .then(function (response) {
        if (response.data.status) {
          setListData(response.data.data);
          setfilteredData(response.data.data);
        }
      })
      .catch(function (error) {
        message.error("Error fetching users");
      });
  }, []);

  const listItemClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const searchChange = (e) => {
    const filtered = listData.filter(
      (user) =>
        String(user.firstName.toLowerCase()).startsWith(e.target.value.toLowerCase()) ||
        String(user.lastName.toLowerCase()).startsWith(e.target.value.toLowerCase())
    );
    setfilteredData(filtered);
  };

  return (
    <Content
      style={{
        width: "90%",
        maxWidth: "1000px",
        minHeight: "650px",
        maxHeight: "650px",
        padding: "2%",
        margin: "1% 1%",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Row
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        gutter={32}
      >
        <Col xs={12} xl={6}>
          <label style={{ fontSize: "xx-large" }}>Users</label>
        </Col>
        <Col xs={12} xl={6}>
          <Input onChange={searchChange} placeholder="search" />
        </Col>
      </Row>
      <Row
        style={{
          margin: "2%",
          width: "100%",
          maxHeight: "90%",
          overflow: "auto",
        }}
        gutter={32}
      >
        <List
          itemLayout="horizontal"
          dataSource={filteredData}
          style={{ width: "100%" }}
          renderItem={(item) => (
            <List.Item
              style={{ cursor: "pointer" }}
              onClick={() => listItemClick(item.id)}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.picture} />}
                title={item.title + " " + item.firstName + " " + item.lastName}
                description={item.email}
              />
            </List.Item>
          )}
        />
      </Row>
    </Content>
  );
}

export default Profile;
