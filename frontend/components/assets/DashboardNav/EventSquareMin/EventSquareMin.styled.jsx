import styled from 'styled-components'
import { keyframes } from 'styled-components'

const scaleOnHover = keyframes`
100% { transform: scale(1.1); }
`

export const Description = styled.p`
  font-weight: 400;
  color: #09f7ff;
`

export const EventName = styled.a`
  color: #ffffff;
  font-weight: 600;
`

export const Row = styled.div`
  display: flex;
  padding: 5px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Date = styled.a`
  color: #ffff;
`

export const Square = styled.button`
  border: solid;
  border-color: #6c4ed8;
  border-width: 1px;
  border-radius: 40px;
  height: 200px;
  width: 200px;
  &:hover {
    animation: ${scaleOnHover} 0.5s forwards;
  }
`
