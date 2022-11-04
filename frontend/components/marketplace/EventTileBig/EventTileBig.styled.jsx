import styled from "styled-components";
import * as animations from '../../assets/animations'
export const Header = styled.h1`
animation: ${animations.FadeIn} 3.5s ;

`
export const BigTile = styled.div`
  border: 2px solid #3b3b3d;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-image: url(${props => props.path});
  background-position: 0% 55% ;
  background-size:cover;
  background-repeat: no-repeat;
  &:hover{
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 95%;
    height: 420px;
    margin: auto;
  }

  @media (min-width: 901px) {
    width: 90%;
    height: 400px;
  }

  animation: ${animations.popIn} 0.5s ;
`;
