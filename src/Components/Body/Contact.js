import React from "react";
import { CButton } from "../../globalStyles";
import {
  ContactContainer,
  ContactTitle,
  ContactBody,
  ContactAdress,
  ContactMessage,
  MessageTitle,
  AdressTitle,
  ContactInput,
  ContactInputText,
  AdressMenu,
  Adreess,
  AdreessIcon,
} from "./Contact.elements";
import { FaHome, FaPhone, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactBody>
        <ContactMessage>
          <MessageTitle>Message</MessageTitle>
          <form>
            <ContactInput type="text" placeholder="Your Name" />
            <ContactInput type="email" placeholder="Your Email" />
            <ContactInput type="text" placeholder="Sunject" />
            <ContactInputText name="message" placeholder="Message" required />
            <CButton>Send</CButton>
          </form>
        </ContactMessage>
        <ContactAdress>
          <AdressTitle>Address</AdressTitle>
          <AdressMenu>
            <AdreessIcon>
              <FaHome />
            </AdreessIcon>

            <Adreess>
              (650) 233-9755 28 Anderson Way Menlo Park, California(CA), 94025
            </Adreess>
          </AdressMenu>
          <AdressMenu>
            <AdreessIcon>
              <FaPhone />
            </AdreessIcon>
            <Adreess>4546464646346</Adreess>
          </AdressMenu>
          <AdressMenu>
            <AdreessIcon>
              <FaPaperPlane />
            </AdreessIcon>

            <Adreess>Tour@gmail.com</Adreess>
          </AdressMenu>
        </ContactAdress>
      </ContactBody>
    </ContactContainer>
  );
}

export default Contact;
