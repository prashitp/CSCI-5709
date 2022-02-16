import { message, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

function Details() {
  const [cardData, setCardData] = useState({});
  const params = useParams();
  const id = params.userId;

  useEffect(() => {
    axios
      .get(`https://tutorial4-api.herokuapp.com/api/users/${id}`)
      .then(function (response) {
        if (response.data.status) {
          setCardData(response.data.data);
        }
      })
      .catch(function (error) {
        message.error("Error fetching user details");
      });
  }, [id]);

  return (
    <Content
      style={{
        width: "90%",
        maxWidth: "400px",
        minHeight: "450px",
        padding: "2%",
        margin: "1%",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Row style={{ width: "100%", justifyContent: "center" }} gutter={32}>
        <label style={{ fontSize: "xx-large", textAlign: "center" }}>
          Profile Details
        </label>
      </Row>
      <Row style={{ justifyContent: "center" }} gutter={32}>
        <Card
          cover={<img alt="user" src={cardData.picture} />}
        >
          <Meta
            title={
              cardData.title +
              " " +
              cardData.firstName +
              " " +
              cardData.lastName
            }
            description={cardData.email}
          />
        </Card>
      </Row>
    </Content>
  );
}

export default Details;
