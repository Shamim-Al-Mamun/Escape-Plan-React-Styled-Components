import styled, { createGlobalStyle } from "styled-components";
//Global Color
export const primaryColor = "rgb(255, 153, 153)";
export const primaryColorDark = "rgb(255, 102, 102)";
export const primaryColorLight = "rgb(255, 153, 153, .6)";
export const secondaryColor = "rgb(250, 235, 215, 0.5)";
export const thirdColor = "rgb(128, 0, 32)";
export const comonColor = "rgb(233, 116, 81)";
export const blackLight = "rgb(0,0,0, .6)";
export const textColor = "rgb(255, 251, 231)";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? secondaryColor : primaryColor)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? thirdColor : thirdColor)};
  }

  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;
//Global Button
export const CButton = styled.button`
  display: inline-block;
  width: 40%;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 15rem;
  background-color: ${primaryColor};
  margin-left: 2rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${primaryColorDark};
  }
  @media (max-width: 760px) {
    width: 50%;
    margin-left: 1rem;
    padding: 0.5rem;
  }
`;

export default GlobalStyle;
