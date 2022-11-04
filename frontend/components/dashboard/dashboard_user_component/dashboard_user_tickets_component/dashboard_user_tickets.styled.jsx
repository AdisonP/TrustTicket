import styled from "styled-components";

export const UserTicket = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  font-family: "Comfortaa", cursive;


  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserTicketTitle = styled.h1`
  color: white;
  margin-left: 35px;
`;

export const UserTicketDetails = styled.div`
  min-width: 300px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  border-radius: 40px;
  border: 1px solid #3b3b3d;
  font-family: "Comfortaa", cursive;

  @media (max-width: 400px) {
    min-width: 95%;
  }
`;

export const UserTicketDetailsTop = styled.div`
  width: 100%;
  height: 75%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 40px 40px 0 0;
`;

export const UserTicketDetailsBottom = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const UserTicketsDetailsText = styled.p`
  color: #54d2fd;
  font-size: 0.6rem;
  font-weight: 800;
`;

export const UserTicketsDetailsTextLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-block-start: 0;
  }
`;

export const UserTicketsDetailsTextRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-block-start: 0;
  }
`;
