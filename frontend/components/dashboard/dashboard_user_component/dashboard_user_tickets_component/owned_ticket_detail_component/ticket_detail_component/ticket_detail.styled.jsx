import styled from "styled-components";
import { keyframes } from "styled-components";
import * as animations from "../../../../../assets/animations";
export const TicketModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export const TicketModalClose = styled.div`
  align-items: center;
  justify-items: center;
  display: block;
  justify-content: center;
  position: fixed;
  width: 10px;
  padding: 6px;
  top: 20px;
  left: 0;
  z-index: 10;
  color: red;
  &:hover {
    cursor: pointer;
    opacity: 1;
    animation: ${animations.scaleOnHoverLess} 0.5s forwards;
  }
`;

export const TicketModalContent = styled.div`
  /* width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
  z-index: 2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 500px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 85%;
    height: 80vh;
    transform: translate(10%, 15%);
  } */
  width: 300px;
  height: 80vh;
  border: 2px solid #3b3b3d;
  border-right: none;
  background-color: black;
  border-radius: 40px 0px 0px 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 460px) {
    width: 100%;
    height: 70vh;
  }

  @media (max-height: 600px) {
    width: 100%;
    height: 70vh;
  }
`;

export const TicketModalQR = styled.div`
  /* width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
  z-index: 2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 500px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 85%;
    height: 80vh;
    transform: translate(10%, 15%);
  } */
  width: 300px;
  height: 80vh;
  border: 2px solid #3b3b3d;
  background-color: #00000018;
  border-radius: 0 40px 40px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 460px) {
    width: 100%;
    height: 70vh;
  }

  @media (max-height: 600px) {
    width: 100%;
    height: 70vh;
  }
`;

export const TicketModalPicture = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 40px 40px 0 0;
  margin: auto;
  z-index: 100;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TicketModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

export const TicketModalBottomLayer = styled.div`
  width: 90%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 4;
  color: white;
`;
export const TicketModalQrBottomLayer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-end;
  justify-self: flex-end;
  align-self: flex-end;
  height: 100%;
  z-index: 4;
  color: white;
`;

export const TicketModalContentLayer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const TicketModalContentTitle = styled.p`
  font-size: 1em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 10px;
  color: #a69697;
`;

export const TicketModalContentSubTitle = styled.p`
  margin-block-start: 0.3rem;
  color: white;
  margin-block-end: 0;
`;

export const TicketModalContentResellBtn = styled.button`
  width: 50%;
  border-bottom-right-radius: 40px;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  justify-self: flex-end;
  position: relative;
  height: 10vh;
  /* font-size: larger; */
  font-weight: bolder;
  border: none;
  background-color: #54d2fd;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #1e6075;
  }
`;

export const TicketModalContentResellPrice = styled.p`
  width: 40%;
  bottom: 0;
  left: 0;
  height: 10vh;
  color: #54d2fd;
  font-weight: 800;
  text-align: right;
  font-size: 1.5rem;
  transform: translate(0%, 175%);

  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;
