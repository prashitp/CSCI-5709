import React from "react";
import { Content } from "antd/lib/layout/layout";
import OptionCard from "./OptionCard";
import cancel from "../assets/images/cancel.png";
import schedule from "../assets/images/schedule.jpeg";
import view from "../assets/images/view.jpeg";
import edit from "../assets/images/edit.png";
import { useNavigate } from "react-router-dom";


function PickupOptions() {
  const navigate=useNavigate();

  const buttonPressed = () => {
      navigate("/schedule");
  }
  return (
    <Content
      style={{
        display: "flex",
        flexWrap: "wrap",
        flex: "1",
        flexDirection: "row",
        padding: "2%",
        margin: "3% 3%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"450px"
      }}
    >
      <OptionCard navigate={buttonPressed} color="green" title="Schedule Pickup" description="You got waste, we can take take it from here !" image={schedule}/>
      <OptionCard color="grey" title="View Pickup" description="You want to view pickup details, go here !" image={view}/>
      <OptionCard color="grey" title="Edit Pickup" description="You want to make changes, here you go !" image={edit}/>
      <OptionCard color="grey" title="Cancel Pickup" description="You want to cancel on us, that's not a problem !" image={cancel}/>
    </Content>
  );
}

export default PickupOptions;
