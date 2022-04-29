import React from "react";
import { Link } from "react-scroll";

import {
  HomeContainer,
  HomeSection,
  HomeDiv,
  HomeButtonDiv,
  HomeTitle,
  HomeArticale,
  HomeButton,
} from "./Home.elements";

function Home() {
  return (
    <>
      <HomeContainer id="home">
        <HomeSection>
          <HomeArticale>
            <HomeDiv>
              Travel to the any corner of the world, without going around in
              circles
            </HomeDiv>
            <HomeTitle>Make Your Tour Amazing With Us</HomeTitle>
            <HomeButtonDiv>
              <Link to="packages">
                <HomeButton>Book Now</HomeButton>
              </Link>
            </HomeButtonDiv>
          </HomeArticale>
        </HomeSection>
      </HomeContainer>
    </>
  );
}

export default Home;
