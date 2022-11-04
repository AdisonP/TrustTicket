import styled from "styled-components";

import { keyframes } from "styled-components";

const scaleOnHover = keyframes`
100% { transform: scale(1.1); }
`;

export const SmallTile = styled.div`
  border: 2px solid #3b3b3d;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  height: 210px;
  width: 200px;
  margin-right: 30px;
  background-size: cover;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const SmallPrice = styled.div`
  width: 210px;
  font-weight: 900;
  text-align: center;
  color: #54d2fd;
`;
