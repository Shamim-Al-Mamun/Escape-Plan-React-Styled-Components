import styled from "styled-components";

import homeCoverPhoto from "../Images/homeCoverPhoto.jpg";
import { primaryColor, primaryColorDark, textColor } from "../../globalStyles";

export const HomeContainer = styled.div`
  background-image: url(${homeCoverPhoto});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    background-position: right;
  }
`;
export const HomeSection = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 760px) {
    width: 90%;
  }
`;
export const HomeArticale = styled.div`
  margin-top: 250px;
  padding: 1rem;
  padding-left: 2rem;
  @media (max-width: 760px) {
    margin-top: 100px;
  }
`;
export const HomeButtonDiv = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 3rem;
  text-align: center;
`;
export const HomeDiv = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  text-shadow: 5px 5px 10px black;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
`;
export const HomeTitle = styled.div`
  color: ${textColor};
  font-size: 4rem;
  text-shadow: 5px 5px 10px black;
  text-align: center;
  font-weight: 600;
  @media (max-width: 760px) {
    font-size: 2.8rem;
  }
`;
export const HomeButton = styled.button`
  display: inline-block;
  width: 50%;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 15rem;
  background-color: ${primaryColor};
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${primaryColor};
    border-radius: 15rem;
    z-index: -2;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${primaryColorDark};
    transition: all 0.3s;
    border-radius: 15rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
