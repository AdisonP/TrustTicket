import styled from "styled-components";

export const Main = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161618;
`;

export const UploadBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #a68dfa;
  border-radius: 20px;
  padding: 20px;
  background-color: #161618;
  color: white;
  font-family: "Comfortaa", cursive;
`;

export const UploadLabel = styled.label`
`;

export const UploadText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const UploadInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;

export const UploadButton = styled.button`
  width: 50%;
  height: 35px;
  margin-top: 10px;
  border:none;
  background-color: #54d2fd;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;
