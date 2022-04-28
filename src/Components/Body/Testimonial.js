import React from "react";
import {
  Testimonialcontainer,
  CarouselItem,
  TestimonialTitle,
  CarouselItem1Pic,
  CarouselItem2Pic,
  CarouselItem3Pic,
  CarouselItem4Pic,
  CarouselItem5Pic,
  CarouselItem1Name,
  CarouselItem1Message,
  SampleNextArrow,
  SamplePrevArrow,
} from "./Testimonial.elements";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Testimonial() {
  return (
    <>
      <Testimonialcontainer id="testimonial">
        <TestimonialTitle>What Our Clients Say</TestimonialTitle>
        <Slider {...settings}>
          <div>
            <CarouselItem>
              <CarouselItem1Pic />
              <CarouselItem1Name>Deirdre Stewart</CarouselItem1Name>
              <CarouselItem1Message>
                Manifestamente sua prieghi siamo mortale d'esse per fuor. E che
                non le iscacciato nostra nostra.
              </CarouselItem1Message>
            </CarouselItem>
          </div>
          <div>
            <CarouselItem>
              <CarouselItem2Pic />
              <CarouselItem1Name>Alan Harris</CarouselItem1Name>
              <CarouselItem1Message>
                Manifestamente sua prieghi siamo mortale d'esse per fuor. E che
                non le iscacciato nostra nostra.
              </CarouselItem1Message>
            </CarouselItem>
          </div>
          <div>
            <CarouselItem>
              <CarouselItem3Pic />
              <CarouselItem1Name>Lisa Bailey</CarouselItem1Name>
              <CarouselItem1Message>
                Manifestamente sua prieghi siamo mortale d'esse per fuor. E che
                non le iscacciato nostra nostra.
              </CarouselItem1Message>
            </CarouselItem>
          </div>
          <div>
            <CarouselItem>
              <CarouselItem4Pic />
              <CarouselItem1Name>Tim Coleman</CarouselItem1Name>
              <CarouselItem1Message>
                Manifestamente sua prieghi siamo mortale d'esse per fuor. E che
                non le iscacciato nostra nostra.
              </CarouselItem1Message>
            </CarouselItem>
          </div>
          <div>
            <CarouselItem>
              <CarouselItem5Pic />
              <CarouselItem1Name>Jennifer Terry</CarouselItem1Name>
              <CarouselItem1Message>
                Manifestamente sua prieghi siamo mortale d'esse per fuor. E che
                non le iscacciato nostra nostra.
              </CarouselItem1Message>
            </CarouselItem>
          </div>
        </Slider>
      </Testimonialcontainer>
    </>
  );
}

export default Testimonial;
