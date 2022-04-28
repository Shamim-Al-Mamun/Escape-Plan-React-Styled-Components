import styled from "styled-components";
import CarouselItemPic1 from "../Images/CarouselItemPic1.jpg";
import CarouselItemPic2 from "../Images/CarouselItemPic2.jpg";
import CarouselItemPic3 from "../Images/CarouselItemPic3.jpg";
import CarouselItemPic4 from "../Images/CarouselItemPic4.jpg";
import CarouselItemPic5 from "../Images/CarouselItemPic5.jpg";

import { primaryColorDark } from "../../globalStyles";

export const Testimonialcontainer = styled.div`
  text-align: center;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 30vh;
  border-radius: 0.5rem;
  @media screen and (max-width: 960px) {
  }
`;
export const TestimonialTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
export const CarouselItem = styled.div`
  width: 70%;
  margin: auto;
  height: 15rem;
  cursor: pointer;
  background-color: ${primaryColorDark};
  padding: 1rem;
  border-radius: 0.5rem;
  @media screen and (max-width: 960px) {
    width: 90%;
    height: 15rem;
  }
`;
export const CarouselItem1Pic = styled.div`
  background-image: url(${CarouselItemPic1});
  width: 7vh;
  margin: auto;
  height: 7vh;
  border-radius: 7vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    width: 10vh;
    height: 10vh;
    border-radius: 10vh;
  }
`;
export const CarouselItem2Pic = styled.div`
  background-image: url(${CarouselItemPic2});
  width: 7vh;
  margin: auto;
  height: 7vh;
  border-radius: 7vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    width: 10vh;
    height: 10vh;
    border-radius: 10vh;
  }
`;
export const CarouselItem3Pic = styled.div`
  background-image: url(${CarouselItemPic3});
  width: 7vh;
  margin: auto;
  height: 7vh;
  border-radius: 7vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    width: 10vh;
    height: 10vh;
    border-radius: 10vh;
  }
`;
export const CarouselItem4Pic = styled.div`
  background-image: url(${CarouselItemPic4});
  width: 7vh;
  margin: auto;
  height: 7vh;
  border-radius: 7vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    width: 10vh;
    height: 10vh;
    border-radius: 10vh;
  }
`;
export const CarouselItem5Pic = styled.div`
  background-image: url(${CarouselItemPic5});
  width: 7vh;
  margin: auto;
  height: 7vh;
  border-radius: 7vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    width: 10vh;
    height: 10vh;
    border-radius: 10vh;
  }
`;
export const CarouselItem1Name = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 760px) {
    font-size: 1.2rem;
  }
`;
export const CarouselItem1Message = styled.p`
  text-align: start;
  color: white;
  font-size: 1rem;
  @media (max-width: 760px) {
    font-size: 0.9rem;
  }
`;

//Slider arrow
export const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        fontSize: "40px",
        display: "block",
        right: "5%",
        zIndex: "15",
        height: "40px",
        width: "40px",
        opacity: "1",
        color: "White",
      }}
      onClick={onClick}
    />
  );
};

export const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        fontSize: "40px",
        display: "block",
        left: "5%",
        zIndex: "15",
        height: "40px",
        width: "40px",
        opacity: "1",
        color: "White",
      }}
      onClick={onClick}
    />
  );
};
