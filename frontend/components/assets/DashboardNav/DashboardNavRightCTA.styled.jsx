import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: auto;
  height: 50px;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: space-between;
    width: 90%;
  }
`;

export const Button = styled.div`
  margin: 10px;
  border-radius: 4px;
  color: white;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const SelectedButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: #54d2fd;
  border: 1px solid #54d2fd;
  border-radius: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
`;
