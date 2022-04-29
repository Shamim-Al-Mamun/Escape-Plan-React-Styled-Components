import styled from "styled-components";
export const ContactContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 5rem;
  width: 100%;
  height: 60vh;
  @media (max-width: 760px) {
    margin-top: 100px;
  }
`;

export const ContactTitle = styled.h4`
  font-size: 2.5rem;
  font-weight: 100;
  text-align: center;
  @media (max-width: 760px) {
    /* margin-top: 35rem; */
    font-size: 1.5rem;
  }
`;

export const ContactBody = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
  @media (max-width: 760px) {
    /* margin-top: 35rem; */
    display: block;
    width: 100%;
  }
`;
export const ContactAdress = styled.div`
  width: 50%;
  padding: 2rem;
  margin: 2rem;

  @media (max-width: 760px) {
    width: 95%;
    margin: auto;
    padding: 0.5rem;
    margin: 0.5rem;
    padding-bottom: 1rem;
  }
`;
export const ContactMessage = styled.div`
  width: 50%;
  padding: 2rem;
  margin: 2rem;
  background-color: rgb(250, 235, 215, 0.5);
  @media (max-width: 760px) {
    width: 95%;
    margin: auto;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;
export const MessageTitle = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
  @media (max-width: 760px) {
    font-size: 1.1rem;
    margin-left: 1rem;
  }
`;
export const AdressTitle = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 760px) {
    font-size: 1.1rem;
    margin-left: 1rem;
  }
`;
export const ContactInput = styled.input`
  width: 90%;
  padding: 1rem;
  margin: 1.5rem;
  background-color: white;
  outline: none;
  border: none;
  @media (max-width: 760px) {
    padding: 0.5rem;
    margin: 1rem;
  }
`;
export const ContactInputText = styled.textarea`
  width: 90%;
  height: 3rem;
  padding: 1rem;
  margin: 1.5rem;
  background-color: white;
  outline: none;
  border: none;
  @media (max-width: 760px) {
    padding: 0.5rem;
    margin: 1rem;
  }
`;

export const AdressMenu = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  @media (max-width: 760px) {
  }
`;

export const AdreessIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  color: burlywood;
  @media (max-width: 760px) {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;
export const Adreess = styled.div`
  margin-left: 2rem;
  color: gray;
  @media (max-width: 760px) {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
`;
