import React, { useState } from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaArrowRight } from "react-icons/fa";
import {
  PackageContainer,
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PackageImage1,
  PackageImage2,
  PackageImage3,
  PackageImage4,
  PackageImage5,
  PackageImage6,
  PackageImage7,
  PackageImage8,
  PackageImage9,
  PackageImage10,
  PackageImage11,
  PackageImage12,
  PackageImageTitle,
  PackageImageGrid,
  PackageIcon1,
  PackageIcon2,
  PackageIcon3,
  PackageIcon4,
  PackageIcon5,
  PackageIcon6,
  PackageIcon7,
  PackageIcon8,
  PackageIcon9,
  PackageIcon10,
  PackageIcon11,
  PackageIcon12,
  PackageBook,
  PackageBooklast,
  PackageImage,
  BookingHeading,
} from "./Package.elements";

function Package() {
  const [favourite1, setfavourite1] = useState(false);
  const [favourite2, setfavourite2] = useState(false);
  const [favourite3, setfavourite3] = useState(false);
  const [favourite4, setfavourite4] = useState(false);
  const [favourite5, setfavourite5] = useState(false);
  const [favourite6, setfavourite6] = useState(false);
  const [favourite7, setfavourite7] = useState(false);
  const [favourite8, setfavourite8] = useState(false);
  const [favourite9, setfavourite9] = useState(false);
  const [favourite10, setfavourite10] = useState(false);
  const [favourite11, setfavourite11] = useState(false);
  const [favourite12, setfavourite12] = useState(false);
  const [showAllPackage, setShowAllPackage] = useState(false);
  return (
    <>
      <PackageContainer id="packages">
        <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
          <PricingSection>
            <PricingWrapper>
              <PricingHeading>Our Packages</PricingHeading>
              <PricingContainer>
                <PricingCard to="/">
                  <PricingCardInfo>
                    <PricingCardIcon>
                      <GiRock />
                    </PricingCardIcon>
                    <PricingCardPlan>Starter Pack</PricingCardPlan>
                    <PricingCardCost>$99.99</PricingCardCost>
                    <PricingCardLength>per month</PricingCardLength>
                    <PricingCardFeatures>
                      <PricingCardFeature>2 tours yearly</PricingCardFeature>
                      <PricingCardFeature>Single tour</PricingCardFeature>
                      <PricingCardFeature>no tour guid</PricingCardFeature>
                    </PricingCardFeatures>
                    <Button primary>Choose Plan</Button>
                  </PricingCardInfo>
                </PricingCard>
                <PricingCard to="/">
                  <PricingCardInfo>
                    <PricingCardIcon>
                      <GiCrystalBars />
                    </PricingCardIcon>
                    <PricingCardPlan>Gold Rush</PricingCardPlan>
                    <PricingCardCost>$299.99</PricingCardCost>
                    <PricingCardLength>per month</PricingCardLength>
                    <PricingCardFeatures>
                      <PricingCardFeature>3 tours yearly</PricingCardFeature>
                      <PricingCardFeature>Couple tour</PricingCardFeature>
                      <PricingCardFeature>one tour guid</PricingCardFeature>
                    </PricingCardFeatures>
                    <Button primary>Choose Plan</Button>
                  </PricingCardInfo>
                </PricingCard>
                <PricingCard to="/">
                  <PricingCardInfo>
                    <PricingCardIcon>
                      <GiCutDiamond />
                    </PricingCardIcon>
                    <PricingCardPlan>Diamond Kings</PricingCardPlan>
                    <PricingCardCost>$999.99</PricingCardCost>
                    <PricingCardLength>per month</PricingCardLength>
                    <PricingCardFeatures>
                      <PricingCardFeature>5 tours yearly</PricingCardFeature>
                      <PricingCardFeature>Honeymoon package</PricingCardFeature>
                      <PricingCardFeature>24/7 guid Support</PricingCardFeature>
                    </PricingCardFeatures>
                    <Button primary>Choose Plan</Button>
                  </PricingCardInfo>
                </PricingCard>
              </PricingContainer>
            </PricingWrapper>
          </PricingSection>
        </IconContext.Provider>
        <BookingHeading>See our yearly trips</BookingHeading>
        <PackageImageGrid>
          <PackageImage1>
            <PackageIcon1 favourite1={favourite1}>
              <FaHeart onClick={() => setfavourite1(!favourite1)} />
            </PackageIcon1>
            <PackageImageTitle>switzerland</PackageImageTitle>
            <PackageBook>Book Now</PackageBook>
          </PackageImage1>
          <PackageImage2>
            <PackageIcon2 favourite2={favourite2}>
              <FaHeart onClick={() => setfavourite2(!favourite2)} />
            </PackageIcon2>
            <PackageImageTitle>Cox's Bazar</PackageImageTitle>
            <PackageBook>Book Now</PackageBook>
          </PackageImage2>
          <PackageImage3>
            <PackageIcon3 favourite3={favourite3}>
              <FaHeart onClick={() => setfavourite3(!favourite3)} />
            </PackageIcon3>
            <PackageImageTitle>Bangkok</PackageImageTitle>
            <PackageBook>Book Now</PackageBook>
          </PackageImage3>
          <PackageImage4>
            <PackageIcon4 favourite4={favourite4}>
              <FaHeart onClick={() => setfavourite4(!favourite4)} />
            </PackageIcon4>
            <PackageImageTitle>Bali</PackageImageTitle>
            <PackageBook>Book Now</PackageBook>
          </PackageImage4>
          <PackageImage5>
            <PackageIcon5 favourite5={favourite5}>
              <FaHeart onClick={() => setfavourite5(!favourite5)} />
            </PackageIcon5>
            <PackageImageTitle>maldives</PackageImageTitle>
            <PackageBook>Book Now</PackageBook>
          </PackageImage5>
          {!showAllPackage && (
            <PackageImage6>
              <PackageBooklast
                variant="variant"
                onClick={() => setShowAllPackage(true)}
              >
                See More <FaArrowRight />
              </PackageBooklast>
            </PackageImage6>
          )}
          {showAllPackage && (
            <PackageImage6>
              <PackageIcon6 favourite6={favourite6}>
                <FaHeart onClick={() => setfavourite6(!favourite6)} />
              </PackageIcon6>
              <PackageImageTitle>Paris</PackageImageTitle>
              <PackageBook>Book Now</PackageBook>
            </PackageImage6>
          )}
        </PackageImageGrid>
        {showAllPackage && (
          <PackageImageGrid>
            <PackageImage7>
              <PackageIcon7 favourite7={favourite7}>
                <FaHeart onClick={() => setfavourite7(!favourite7)} />
              </PackageIcon7>
              <PackageImageTitle>New York</PackageImageTitle>
              <PackageBook>Book Now</PackageBook>
            </PackageImage7>
            <PackageImage8>
              <PackageIcon8 favourite8={favourite8}>
                <FaHeart onClick={() => setfavourite8(!favourite8)} />
              </PackageIcon8>
              <PackageImageTitle>India</PackageImageTitle>
              <PackageBook>Book Now</PackageBook>
            </PackageImage8>
            <PackageImage9>
              <PackageIcon9 favourite9={favourite9}>
                <FaHeart onClick={() => setfavourite9(!favourite9)} />
              </PackageIcon9>
              <PackageImageTitle>Germany</PackageImageTitle>
              <PackageBook>Book Now</PackageBook>
            </PackageImage9>
            <PackageImage10>
              <PackageIcon10 favourite10={favourite10}>
                <FaHeart onClick={() => setfavourite10(!favourite10)} />
              </PackageIcon10>
              <PackageImageTitle>Egypt</PackageImageTitle>
              <PackageBook>Book Now</PackageBook>
            </PackageImage10>
            <PackageImage11>
              <PackageIcon11 favourite11={favourite11}>
                <FaHeart onClick={() => setfavourite11(!favourite11)} />
              </PackageIcon11>
              <PackageImageTitle>Dubai</PackageImageTitle>
              <PackageBook>Book Now</PackageBook>
            </PackageImage11>
            <PackageImage12>
              <PackageIcon12 favourite12={favourite12}>
                <FaHeart onClick={() => setfavourite12(!favourite12)} />
              </PackageIcon12>
              <PackageImageTitle variant="variant">
                Portugal
                <PackageBook>Book Now</PackageBook>
              </PackageImageTitle>
            </PackageImage12>
          </PackageImageGrid>
        )}
        <PackageImage />
      </PackageContainer>
    </>
  );
}

export default Package;
