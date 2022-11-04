import styled from "styled-components";

export const UserProfile = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #3b3b3d;
  border-top: 0px solid grey;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserLogo = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 5px 5px 30px black;
  margin-top: 2rem;
  background-position: center;
  background-size: contain;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 125px;
    height: 125px;
  }
`;

export const UserInfos = styled.div`
  width: 50%;
  margin: auto;
  height: auto;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  color: grey;
`;

export const UserDashboardButton = styled.button`
  width: 85px;
  height: 25px;
  background-color: #54d2fd;
  border: none;
  border-radius: 40px;
  margin-bottom: 2rem;

  a {
    color: #161618;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
