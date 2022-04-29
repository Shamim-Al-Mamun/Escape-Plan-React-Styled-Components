import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);

  //navbar scroll when active state
  const [navbarOnScroll, setNavbarOnScroll] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setNavbarOnScroll(true);
  };
  const closeMobileMenu = () => setClick(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbarOnScroll(true);
    } else {
      !click && setNavbarOnScroll(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  console.log(navbarOnScroll);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav navbarOnScroll={navbarOnScroll}>
          <NavbarContainer>
            <NavLogo to="home" onClick={closeMobileMenu}>
              <NavIcon />
              EscapePlan
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="home" offset={-30} onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="testimonial"
                  offset={-80}
                  onClick={closeMobileMenu}
                >
                  Testimonial
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about" offset={-80} onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="packages" offset={-80} onClick={closeMobileMenu}>
                  Packages
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" offset={-80} onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
