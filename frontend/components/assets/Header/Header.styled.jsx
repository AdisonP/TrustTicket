import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 125px;
  font-family: "Comfortaa", cursive;
  padding: 20px;
`;

export const HeaderLogoLayer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 70px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 35px;
    height: 25px;
  }
`;

export const HeaderSearchLayer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderSearch = styled.div`
  border: 1px solid #54d2fd;
  cursor: pointer;
  min-width: 60px;
  height: 30px;
  background-color: transparent;
  border-radius: 40px;
  color: white;
  position: relative;
  transition: width 0.3s ease-in-out;

  svg {
    transform: translate(130%, 40%);
    color: #54d2fd;
    transition: transform 0.3s ease-in-out;
  }
`;

export const HeaderSearchInput = styled.input`
  width: 48%;
  overflow: scroll;
  height: 30px;
  border: none;
  background-color: transparent;
  color: white;
  position: absolute;
  top: 0;
  left: 30px;
  border-radius: 40px;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const HeaderLinks = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    padding-bottom: 5px;
    position: relative;
    text-decoration: none;
    color: white;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #6c4ed8;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media (max-width: 764px) {
    display: none;
  }
`;

export const HeaderMenuLayer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000b1;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 20px;

  svg:nth-child(1) {
    position: absolute;
    right: 20px;
    top: 46.5px;
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.div`
  height: 100vh;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin-block-start: 1rem;
  }
`;

export const HeaderMenuIconLayer = styled.div`
  z-index: 100;
  min-width: 5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    color: white;
    font-size: 32px;
    cursor: pointer;
    @media (min-width: 764px) {
      display: none;
    }
  }
`;
