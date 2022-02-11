import React, { useState } from "react";
import { Content } from "antd/lib/layout/layout";
import {
  Calendar,
  Checkbox,
  Menu,
  Space,
  InputNumber,
  Row,
  Col,
  Button,
  message
} from "antd";
import "./SchedulePickup.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function SchedulePickup() {
    const navigate = useNavigate();
  const [wasteType, setWasteType] = useState([]);
  const [time, setTime] = useState("");

  const checkboxChange = (checkedValues) => {
    setWasteType(checkedValues);
  };

  const handleTimeClick = (e) => {
    setTime(e.key);
  };

const submitClick = () => {
    if(wasteType.length !== 0 && time !== "") {
        navigate("/confirmation");
    } else {
        message.error('Please provide all the details to schedule the pickup!');
    }
}

  return (
    <Content
      style={{
        display: "flex",
        flexWrap: "wrap",
        flex: "1",
        flexDirection: "row",
        padding: "1%",
        margin: "2% 2%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        minHeight:"450px"
      }}
    >
      <div className="scheduleDetailsTitle">
        <label className="scheduleTitleLabel">
          Please provide the following details to confirm you pickup!
        </label>
      </div>
      <Row>
        <Col xs={24} xl={6} style={{ textAlign: "center" }}>
          <label style={{ fontWeight: "bold", fontSize: "larger" }}>
            Select Date
          </label>
          <Calendar
            fullscreen={false}
            defaultValue={moment().add(1, "day").endOf("day")}
            disabledDate={(current) =>
              current && current <= moment().endOf("day")
            }
          />
        </Col>
        <Col
          xs={24}
          xl={6}
          style={{
            textAlign: "center",
            display: "flex",
            paddingLeft: "5%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <label style={{ fontWeight: "bold", fontSize: "larger" }}>
            Select Time
          </label>
          <Menu
            onClick={handleTimeClick}
            style={{ textAlign: "center", width: "80%" }}
            mode="inline"
          >
            <Menu.Item style={{ border: "1px solid" }} key="9AM">
              9 AM
            </Menu.Item>
            <Menu.Item style={{ border: "1px solid" }} key="12PM">
              12 PM
            </Menu.Item>
            <Menu.Item style={{ border: "1px solid" }} key="3PM">
              3 PM
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={24} xl={6} style={{ textAlign: "center" }}>
          <label style={{ fontWeight: "bold", fontSize: "larger" }}>
            Select Waste Type
          </label>
          <br />
          <Checkbox.Group
            onChange={checkboxChange}
            style={{ textAlign: "left" }}
          >
            <Space direction="vertical">
              <Checkbox style={{ fontSize: "larger" }} value="Plastic">
                Plastic
              </Checkbox>
              <Checkbox style={{ fontSize: "larger" }} value="Cardboard">
                Cardboard
              </Checkbox>
              <Checkbox style={{ fontSize: "larger" }} value="Glass">
                Glass
              </Checkbox>
              <Checkbox style={{ fontSize: "larger" }} value="Metal">
                Metal
              </Checkbox>
              <Checkbox style={{ fontSize: "larger" }} value="Wood">
                Wood
              </Checkbox>
              <Checkbox style={{ fontSize: "larger" }} value="Clothing">
                Clothing
              </Checkbox>
              <Checkbox style={{ fontSize: "larger" }} value="Other">
                Other
              </Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
        <Col xs={24} xl={6} style={{ textAlign: "center" }}>
          <label style={{ fontWeight: "bold", fontSize: "larger" }}>
            Number of bags/boxes
          </label>
          <br />
          <InputNumber
            style={{ margin: "5%" }}
            min={1}
            max={10}
            defaultValue={1}
          />
          <br />
          <label style={{ fontWeight: "bold", fontSize: "larger" }}>
            Approximate Weight
          </label>
          <br />
          <InputNumber
            style={{ margin: "5%" }}
            min={0.5}
            precision={1}
            step={0.5}
            defaultValue={0.5}
          />
          kg
        </Col>
      </Row>
      <Button onClick={submitClick} size="large"
        style={{ backgroundColor: "green", fontSize: "larger", color: "white", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        Schedule Pickup
      </Button>
    </Content>
  );
}

export default SchedulePickup;
