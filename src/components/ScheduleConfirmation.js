import {
  CalendarOutlined,
  CheckSquareOutlined,
  ClockCircleOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic, Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ScheduleConfirmation.css";

function ScheduleConfirmation() {
const navigate = useNavigate();
  const submitHome = () => {
    navigate("/");
  }
  return (
    <Content
      style={{
        display: "flex",
        flexWrap: "wrap",
        flex: "1",
        flexDirection: "column",
        padding: "2%",
        margin: "3% 3%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"450px"
      }}
    >
      <div className="scheduleTitle">
        <label className="titleLabel">
          Your pickup is successfully confirmed!
        </label>
      </div>
        <Row style={{marginTop: "2%", width: "100%"}} gutter={32}>
          <Col xs={24} xl={5}>
            <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "1%"}}>
              <Statistic
                title="Date"
                value="10 Feb, 2022"
                titleStyle={{ width: "100%" }}
                valueStyle={{
                  color: "rgb(68, 142, 247)",
                  width: "100%",
                  fontSize: "x-large",
                }}
                prefix={<CalendarOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} xl={5}>
            <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "1%"}}>
              <Statistic
                title="Time"
                value="12 PM"
                valueStyle={{ color: "rgb(68, 142, 247)", width: "100%" }}
                prefix={<ClockCircleOutlined style={{color:"rgb(68, 142, 247)"}} />}
              />
            </Card>
          </Col>

          <Col xs={24} xl={6}>
            <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "1%"}}>
              <Statistic
                title="Waste Type"
                value="Plastic, Cardboard"
                valueStyle={{ color: "rgb(68, 142, 247)", wordWrap: "normal" }}
                prefix={<CheckSquareOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} xl={4}>
            <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "1%"}}>
              <Statistic
                title="Boxes/Bags"
                value={1}
                valueStyle={{ color: "rgb(68, 142, 247)" }}
                prefix={<NumberOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} xl={4}>
            <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "1%"}}>
              <Statistic
                title="Waste Amount"
                value={1.5}
                precision={1}
                valueStyle={{ color: "rgb(68, 142, 247)" }}
                prefix={<NumberOutlined />}
                suffix="kg"
              />
            </Card>
          </Col>
        </Row>
      <Button onClick={submitHome} size="large"
        style={{ marginTop: "4%", backgroundColor: "green", fontSize: "larger", color: "white", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        Home
      </Button>
    </Content>
  );
}

export default ScheduleConfirmation;
