import styled from 'styled-components'

export const CardContainer = styled.div`
  background: rgba(0, 0, 0, 0.164);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  border-radius: 25px;
  padding: 5%;
  align-items: center;
  color: #ffff;
  left: 25%;
  position: relative;
  font-family: "Comfortaa", cursive;
`

export const FileInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  border-radius: 100px;
  margin-top: 10%;
  background-color: #a68dfa;
`

export const TicketCreatorForm = styled.form`
  display: flex;
  margin-top: 2%;
  flex-direction: column;
`

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  margin-top: 50px;
  height: 50px;
  font-size: large;
  font-weight: bold;
  width: 100%;
  color: white;
  background-color: #6c4ed8;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #a68dfa;
  }
`

export const FormInput = styled.input`
  background-color: #3b3b3b;
  border-radius: 10px;
  width: 40vw;
  height: 35px;
  padding: 10px;
  border-color: #faf4f43e;
  border-width: 1px;
  color: white !important;
  margin-bottom: 10px;
  margin-top: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
`

export const TextArea = styled.textarea`
  background-color: #3b3b3b;
  border-radius: 10px;
  width: 40vw;
  height: 85px;
  padding: 10px;
  border-color: #faf4f43e;
  border-width: 1px;
  color: white !important;
  margin-bottom: 10px;
  margin-top: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
`

export const InputLabel = styled.a`
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 10px;
  align-self: center;
`

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 999px;
  background: #a68dfa;
  cursor: grab;
  box-shadow: 0 0 5px 0 #2e2d2d81;

  &:-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #09b1e4;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
  }
`

export const TicketNumber = styled.a`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  color: white;
  font-weight: 600;
  font-size: large;
`
