import styled from 'styled-components'
import { keyframes } from 'styled-components'

import * as animations from '../components/assets/animations'
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-family: "Comfortaa", cursive;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10;
  padding: 20;
  justify-content: center;
  align-items: center;
`

export const Container2 = styled.div`
  display: flex;
  margin: 20;
  padding: 20;
  height: auto;
  flex-direction: column;
  align-items: center;
`

export const EventContainer2 = styled.div`
  padding: 30px;
  padding-bottom: 45px;
  margin-left: 2%;
  height: 100%;
  &:hover {
    animation: ${animations.scaleOnHover} 1.5s;
  }
`

export const EventContainer = styled.div`
  padding: 30px;

  animation: ${animations.popIn} 1.5s;
`
export const FadeInH1 = styled.h1`
  animation: ${animations.FadeIn} 3.5s;
  color: white;
`

export const FadeInH2 = styled.h1`
  animation: ${animations.FadeIn} 3.5s;
  align-self: center;
  color: white;
`

export const notFound = styled.a`
  align-self: center;
  font-size: 25vmax;
  animation: ${animations.FadeIn} 3s infinite;
`

export const Col1 = styled.div`
  flex: 2;
`
export const Col10 = styled.div`
  flex: 10;
  display: 'flex';
  flex-direction: 'column';
`

export const CloseBtn = styled.div`
  color: white;
  border: 'none';
  width: 30px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
