import { Link } from "react-router-dom";
import styled from "styled-components";
import switzeland from "../Images/switzeland.jpg";
import cox from "../Images/cox.jpg";
import bali from "../Images/bali.jpg";
import maldives from "../Images/maldives.jpg";
import bangkok from "../Images/bangkok.jpg";
import paris from "../Images/paris.jpg";

import newyork from "../Images/newyork.jpg";
import india from "../Images/india.jpg";
import germany from "../Images/germany.jpg";
import egypt from "../Images/egypt.jpg";
import dubai from "../Images/dubai.jpg";
import portugal from "../Images/portugal.jpg";

import packageCoverPhoto from "../Images/packageCoverPhoto.jpg";
import {
  blackLight,
  primaryColorDark,
  backgroundColor,
} from "../../globalStyles";

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const PackageContainer = styled.div`
  background-color: ${backgroundColor};
  margin-top: 80px;
  height: 130vh;
`;
export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const PricingHeading = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 24px;
  font-weight: 100;
  padding-top: 1rem;
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;
export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const PricingCard = styled(Link)`
  background: brown;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (max-width: 760px) {
    width: 300px;
    height: 400px;
  }

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;
export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
  @media (max-width: 760px) {
    padding: 0px;
  }
`;
export const PricingCardIcon = styled.div`
  margin: 24px 0;
  @media (max-width: 760px) {
    margin: 12px 0;
  }
`;
export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;
export const PricingCardCost = styled.h4`
  font-size: 40px;
`;
export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;
export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;
export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
export const BookingHeading = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 100;
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 760px) {
  }
  margin-top: 2rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
export const PackageImageGrid = styled.div`
  border-radius: 0.5rem;
  height: auto;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 760px) {
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`;

export const PackageIcon1 = styled.div`
  text-align: end;
  color: ${({ favourite1 }) => (favourite1 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon2 = styled.div`
  text-align: end;
  color: ${({ favourite2 }) => (favourite2 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon3 = styled.div`
  text-align: end;
  color: ${({ favourite3 }) => (favourite3 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon4 = styled.div`
  text-align: end;
  color: ${({ favourite4 }) => (favourite4 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon5 = styled.div`
  text-align: end;
  color: ${({ favourite5 }) => (favourite5 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon6 = styled.div`
  text-align: end;
  color: ${({ favourite6 }) => (favourite6 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon7 = styled.div`
  text-align: end;
  color: ${({ favourite7 }) => (favourite7 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon8 = styled.div`
  text-align: end;
  color: ${({ favourite8 }) => (favourite8 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon9 = styled.div`
  text-align: end;
  color: ${({ favourite9 }) => (favourite9 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon10 = styled.div`
  text-align: end;
  color: ${({ favourite10 }) => (favourite10 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon11 = styled.div`
  text-align: end;
  color: ${({ favourite11 }) => (favourite11 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;
export const PackageIcon12 = styled.div`
  text-align: end;
  color: ${({ favourite12 }) => (favourite12 ? "red" : "white")};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 760px) {
  }
`;

export const PackageImage = styled.div`
  background-image: url(${packageCoverPhoto});
  width: 90%;
  margin: auto;
  height: 400px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    margin-top: 1rem;
    height: 150px;
    background-attachment: scroll;
  }
`;
export const PackageImageTitle = styled.div`
  color: ${primaryColorDark};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 0.5rem;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  padding: 0.5rem;
  text-align: center;
  @media (max-width: 760px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;
export const PackageBook = styled.div`
  color: white;
  font-size: 1.2rem;
  background-color: ${blackLight};
  width: 60%;
  margin: auto;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  text-align: center;
  transition: 0.5s all ease;
  &:hover {
    background-color: black;
  }
  @media (max-width: 760px) {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding: 0.3rem;
  }
`;
export const PackageBooklast = styled.div`
  color: white;
  font-size: 1.2rem;
  background-color: ${blackLight};
  width: 60%;
  margin: auto;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  font-size: 1rem;
  text-align: center;
  margin-top: 8rem;
  text-align: center;
  transition: 0.5s all ease;
  &:hover {
    background-color: black;
  }
  @media (max-width: 760px) {
    font-size: 0.8rem;
    margin-top: 5rem;
    padding: 0.3rem;
  }
`;

export const PackageImage1 = styled.div`
  background-image: url(${switzeland});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage2 = styled.div`
  background-image: url(${cox});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage3 = styled.div`
  background-image: url(${bangkok});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage4 = styled.div`
  background-image: url(${bali});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage5 = styled.div`
  background-image: url(${maldives});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage6 = styled.div`
  background-image: url(${paris});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage7 = styled.div`
  background-image: url(${newyork});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage8 = styled.div`
  background-image: url(${india});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage9 = styled.div`
  background-image: url(${germany});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage10 = styled.div`
  background-image: url(${egypt});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage11 = styled.div`
  background-image: url(${dubai});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
export const PackageImage12 = styled.div`
  background-image: url(${portugal});
  user-select: none;
  background-size: cover;
  background-color: red;
  cursor: pointer;
  transition: 0.4s all ease;
  width: 15%;
  margin: 1rem;
  height: 300px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    width: 130px;
    height: 200px;
  }
`;
