import styled from "styled-components";
import homeCoverPhoto2 from "../Images/homeCoverPhoto2.jpg";

import { primaryColorDark, backgroundColor } from "../../globalStyles";

export const AboutContainer = styled.div`
  background-color: ${backgroundColor};
  width: 100%;
  margin-top: 80px;
`;
export const AboutTitle = styled.h1`
  color: black;
  font-weight: 100;
  font-size: 2rem;
  width: 85%;
  margin: auto;
  padding-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 760px) {
    margin-top: 5.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;
export const AboutPara = styled.p`
  color: gray;
  /* margin: 3rem; */
  font-size: large;
  line-height: 180%;
  width: 90%;
  margin: auto;
  @media (max-width: 760px) {
    font-size: small;
    line-height: 150%;
  }
`;
export const AboutCounter = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  border-radius: 0.5rem;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 760px) {
    height: 10vh;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
`;
export const AboutTourDone = styled.div`
  padding: 0.5rem;
`;
export const AboutYearlyTourDone = styled.div`
  padding: 0.5rem;
`;
export const AboutClients = styled.div`
  padding: 0.5rem;
`;
export const TourDone = styled.div`
  color: black;
  width: 100%;
`;
export const TourDoneNumber = styled.div`
  color: red;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 760px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const AboutImage = styled.div`
  background-image: url(${homeCoverPhoto2});
  width: 100%;
  margin: auto;
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 760px) {
    height: 30vh;
  }
`;
export const TourCatagory = styled.div`
  color: gray;
  font-size: 1.2rem;
  text-align: center;
  @media (max-width: 760px) {
    font-size: 0.6rem;
  }
`;
export const AboutActivities = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  padding-bottom: 2rem;
  @media (max-width: 760px) {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
export const AboutActivity1 = styled.div`
  padding: 1rem;
  @media (max-width: 760px) {
    background-color: rgb(250, 235, 215, 0.3);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const AboutActivity2 = styled.div`
  padding: 1rem;
  @media (max-width: 760px) {
    background-color: rgb(250, 235, 215, 0.3);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const AboutActivity3 = styled.div`
  padding: 1rem;
  @media (max-width: 760px) {
    background-color: rgb(250, 235, 215, 0.3);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const AboutActivity4 = styled.div`
  padding: 1rem;
  @media (max-width: 760px) {
    background-color: rgb(250, 235, 215, 0.3);
    border-radius: 0.5rem;
  }
`;
export const AboutActivityIcon = styled.div`
  color: ${primaryColorDark};
  font-size: 2rem;
  text-align: center;
  @media (max-width: 760px) {
    font-size: 3rem;
    text-align: start;
  }
`;
export const AboutActivityTitle = styled.h2`
  color: black;
  text-align: center;
  font-weight: 100;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 760px) {
    font-size: 1.1rem;
    text-align: start;
  }
`;
export const AboutActivityDes = styled.p`
  color: gray;
  text-align: center;
  line-height: 120%;
  @media (max-width: 760px) {
    text-align: start;
    font-size: 0.8rem;
    line-height: 110%;
  }
`;
