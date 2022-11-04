import styled from 'styled-components'
import { keyframes } from 'styled-components'

const FadeIn = keyframes`
0% { opacity: 0;  }
100% { opacity: 1; }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${FadeIn} 3s;
`

export const StatsRow = styled.div`
  display: flex;
  width: 90vw;
  margin: 20;
  flex-direction: row;
  margin-top: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`

export const Row = styled.div`
  display: flex;
`

export const StatTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 10px;
  width: 400px;
  border-width: 50px;
  background: #3f2c831f;
  backdrop-filter: blur(50px);
  margin-right: 20px;
  border: solid;
  border-radius: 40px;
  border-color: #e2d3d3;

  @media (max-width: 500px) {
    margin-block-start: 1rem;
  }
`
