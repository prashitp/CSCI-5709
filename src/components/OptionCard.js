import React from "react";
import { Card } from "antd";
import { CgArrowRightO } from "react-icons/cg";
const { Meta } = Card;

function OptionCard(props) {
  return (
    <Card
      style={{ width: 260, margin: "2%", height: 350, textAlign: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      cover={<img alt="card-logo" src={props.image} />}
      actions={[
        <CgArrowRightO onClick={props.navigate} size="10%" disabled color={props.color} key="go" />,
      ]}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
}

export default OptionCard;
