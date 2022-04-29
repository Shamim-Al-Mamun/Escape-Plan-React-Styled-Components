import React from "react";
import CountUp from "react-countup";
import {
  AboutContainer,
  AboutTitle,
  AboutPara,
  AboutCounter,
  AboutTourDone,
  AboutYearlyTourDone,
  AboutClients,
  TourDone,
  TourDoneNumber,
  TourCatagory,
  AboutActivities,
  AboutActivity1,
  AboutActivity2,
  AboutActivity3,
  AboutActivity4,
  AboutActivityIcon,
  AboutActivityTitle,
  AboutActivityDes,
  AboutImage,
} from "./About.elements";
import {
  FaUmbrellaBeach,
  FaSearchLocation,
  FaUser,
  FaBook,
} from "react-icons/fa";
function About() {
  return (
    <>
      <AboutContainer id="about">
        <AboutTitle>Our Story</AboutTitle>
        <AboutPara>
          Sanctus sed sea invidunt et diam. Labore dolores tempor dolor sed
          sadipscing magna vero gubergren, dolore diam amet clita ipsum lorem
          stet amet, consetetur sea dolor stet lorem duo takimata. Et et dolor
          duo takimata clita no ipsum justo amet, est elitr aliquyam eirmod est.
          Takimata amet amet dolore et ipsum lorem magna et labore. Sit sit
          voluptua aliquyam nonumy ut takimata ea dolores, est voluptua et
          takimata erat dolor et labore sit sea. Justo takimata dolore
          consetetur accusam invidunt, clita magna et voluptua elitr amet no ut
          takimata, accusam est magna ea diam ea sed clita. Justo et sit.
        </AboutPara>
        <AboutCounter>
          <AboutTourDone>
            <TourDone>
              <TourDoneNumber>
                <CountUp end={278} duration={5} />
              </TourDoneNumber>
              <TourCatagory>Tour has done successfully</TourCatagory>
            </TourDone>
          </AboutTourDone>
          <AboutYearlyTourDone>
            <TourDone>
              <TourDoneNumber>
                <CountUp end={25} duration={5} />
              </TourDoneNumber>
              <TourCatagory>Yearly tour arrange</TourCatagory>
            </TourDone>
          </AboutYearlyTourDone>
          <AboutClients>
            <TourDone>
              <TourDoneNumber>
                <CountUp end={1589} duration={5} />
              </TourDoneNumber>
              <TourCatagory>Happy Clients</TourCatagory>
            </TourDone>
          </AboutClients>
        </AboutCounter>
        <AboutImage />
        <AboutActivities>
          <AboutActivity1>
            <AboutActivityIcon>
              <FaUmbrellaBeach />
            </AboutActivityIcon>
            <AboutActivityTitle>Activities</AboutActivityTitle>
            <AboutActivityDes>
              A small river named Duden flows by their place and supplies it
              with the necessary
            </AboutActivityDes>
          </AboutActivity1>
          <AboutActivity2>
            <AboutActivityIcon>
              <FaSearchLocation />
            </AboutActivityIcon>
            <AboutActivityTitle>Travel Arrangements</AboutActivityTitle>
            <AboutActivityDes>
              A small river named Duden flows by their place and supplies it
              with the necessary
            </AboutActivityDes>
          </AboutActivity2>
          <AboutActivity3>
            {" "}
            <AboutActivityIcon>
              <FaUser />
            </AboutActivityIcon>
            <AboutActivityTitle>Private Guide</AboutActivityTitle>
            <AboutActivityDes>
              A small river named Duden flows by their place and supplies it
              with the necessary
            </AboutActivityDes>
          </AboutActivity3>
          <AboutActivity4>
            {" "}
            <AboutActivityIcon>
              <FaBook />
            </AboutActivityIcon>
            <AboutActivityTitle>Location Manager</AboutActivityTitle>
            <AboutActivityDes>
              A small river named Duden flows by their place and supplies it
              with the necessary
            </AboutActivityDes>
          </AboutActivity4>
        </AboutActivities>
      </AboutContainer>
    </>
  );
}

export default About;
