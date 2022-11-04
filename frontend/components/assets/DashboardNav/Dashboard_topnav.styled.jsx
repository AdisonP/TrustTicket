import styled from "styled-components";
import { Button } from "../../register/register.styled";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px;
`;

export const Col5 = styled.div`
  flex: 5;
  &:hover {
    cursor: pointer;
  }
`;
export const Col2 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex: 1;
`;

export const Img = styled.img`
  width: 70px;
  height: 50px;

  @media (max-width: 600px) {
    width: 35px;
    height: 25px;
  }
`;

export const Search = styled.button`
  border: 1px solid grey;
`;

export const ButtonSearch = styled.div`
  width: 50px;
  height: 30px;
  border: 1px solid #54d2fd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  color: white;
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
