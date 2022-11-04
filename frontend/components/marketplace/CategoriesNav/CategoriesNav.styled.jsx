import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
  margin: auto;
  height: 50px;
  font-family: "Comfortaa", cursive;

  @media (max-width: 900px) {
    justify-content: space-between;
    width: 90%;
    overflow-x: scroll;
  }

  &::webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  min-width: 80px;
  height: 25px;
  border: 1px solid #6c4ed8;
  border-radius: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
  background-color: transparent;
  margin-right: 1rem;
`;

export const SelectedButton = styled.button`
  min-width: 80px;
  height: 25px;
  background-color: #6c4ed8;
  border: 1px solid #6c4ed8;
  border-radius: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
  margin-right: 1rem;
`;
