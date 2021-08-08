import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button } from "reactstrap";
// import { Button } from "./Styles";
import join from "../images/join_button.png";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className="scroll-button"
      onClick={scrollToBottom}
      //   style={{ display: visible ? "inline" : "none" }}
    >
      {/* <FaArrowCircleDown style={{ display: visible ? "inline" : "none" }} /> */}
      <img src={join} alt="" />
    </Button>
  );
};

export default ScrollButton;
