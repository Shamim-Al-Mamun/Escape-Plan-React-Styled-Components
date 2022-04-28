import styled, { keyframes } from "styled-components";
import { Container } from "../../globalStyles";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-scroll";

import {
  primaryColor,
  primaryColorLight,
  primaryColorDark,
} from "../../globalStyles";

const navContainerColor = "rgb(128,128,128, .9)";
const navColorLight = "rgb(0, 0, 0, .05)";
const navColor = "rgb(0, 0, 0, .5)";
const move = keyframes`
  from {top: -80px;}
  to {top: 0px;}
`;

export const Nav = styled.nav`
  background: ${({ navbarOnScroll }) =>
    navbarOnScroll ? navColor : navColorLight};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  transition: 0.5s all ease;
  z-index: 999;
  animation: ${({ navbarOnScroll }) => (navbarOnScroll ? move : "none")} 0.5s;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  color: ${primaryColorLight} !important;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.7s ease-in;
    background: ${navContainerColor};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${primaryColorDark};
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: ${primaryColor};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${primaryColorLight};
      transition: all 0.3s ease;
    }
  }
`;
