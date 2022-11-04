import styled from "styled-components";

export const Nav = styled.nav`
  margin: auto;
  width: 30px;
  text-align: center;
  @media (max-width: 900px) {
    justify-content: space-between;
    width: 90%;
  }
`;

export const Button = styled.div`
  width: 30px;
  border: 1px solid #54d2fd;
  border-radius: 40px;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
`;

export const SelectedButton = styled.div`
  background-color: #54d2fd;
  border: 1px solid #54d2fd;
  border-radius: 40px;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
`;
