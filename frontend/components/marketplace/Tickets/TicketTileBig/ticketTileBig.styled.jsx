import styled from "styled-components";

export const BigTile = styled.div`
  border: 2px solid #3b3b3d;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    width: 95%;
    height: 420px;
    margin: auto;
  }

  @media (min-width: 901px) {
    width: 90%;
    height: 400px;
  }
`;