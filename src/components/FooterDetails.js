import React from 'react';
import { Menu } from "antd";
import { FcAbout, FcFaq } from 'react-icons/fc';
import { BiPhoneCall } from 'react-icons/bi'

function FooterDetails() {
  return (
      <div>
    <Menu
      style={{ fontSize: "x-large" }}
      mode="horizontal"
    >
      <Menu.Item
        key="about"
        disabled
        icon={
          <FcAbout color="#3c9232" style={{ fontSize: "100%" }} />
        }
      >
        About Us
      </Menu.Item>
      <Menu.Item
        disabled
        key="contact"
        icon={
          <BiPhoneCall disabled color="#3c9232" style={{ fontSize: "100%" }} />
        }
      >
        Contact Us
      </Menu.Item>
      <Menu.Item
        key="faqs"
        disabled
        icon={
          <FcFaq color="#3c9232" style={{ fontSize: "100%" }} />
        }
      >
        FAQs
      </Menu.Item>
    </Menu>
    <div style={{marginTop: "1%"}}>
        <label style={{fontSize: "larger", color: "grey" }}>Developed by Prashit Patel - BOO896717</label>
    </div>
    </div>
  )
}

export default FooterDetails