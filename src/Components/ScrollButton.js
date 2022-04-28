import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { primaryColorDark, primaryColor } from "../globalStyles";

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 10%;
  bottom: 10%;
  height: 20px;
  font-size: 4rem;
  z-index: 1;
  cursor: pointer;
  opacity: 0.8;
  color: ${primaryColorDark};
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    color: ${primaryColor};
  }
  @media (max-width: 760px) {
    font-size: 3rem;
    bottom: 8%;
  }
`;
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;
