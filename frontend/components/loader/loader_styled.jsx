import styled from "styled-components";
import { keyframes } from "styled-components";

const LoaderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #54d2fd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  animation: ${LoaderAnimation} 1s linear infinite;
`;