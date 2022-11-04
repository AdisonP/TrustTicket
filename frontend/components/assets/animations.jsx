import styled from "styled-components";
import { keyframes } from "styled-components";




export const scaleOnHover = keyframes`
100% { transform: scale(1.1); }
`
export const scaleOnHoverLess = keyframes`
100% { transform: scale(1.03); }
`
export const popIn = keyframes`
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
`;

export const FadeIn = keyframes`
0% { opacity: 0;  }
100% { opacity: 1; }
`;