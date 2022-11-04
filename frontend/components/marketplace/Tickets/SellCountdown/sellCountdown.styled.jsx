import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161618;
  padding: 20px;
`;

export const CountDownBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #3b3b3d;
  border-radius: 30px;
  padding: 20px;
  gap: 20px;
  &:hover {
    border-color: #54d2fd;
  }

  @media (min-width: 450px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
  @media (min-width: 1600px) {
    width: 40%;
  }
`;

export const CountDownTitle = styled.p`
  font-size: 2.2rem;
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
  color: #fff;
  margin: 0;
  padding: 0;
`;

export const CountDownTextMainBox = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const CountDownTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountDownText = styled.p`
  font-size: 1.3rem;
  font-family: 'Chakra Petch', sans-serif;
  color: #fff;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const CountDownTextEnd = styled.p`
  font-size: 1rem;
  font-family: "Chakra Petch", sans-serif;
  color: #fff;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const CountDownTextLayout = styled.p`
  font-size: 0.7rem;
  font-family: "Comfortaa", cursive;
  color: #3b3b3d;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;
