import styled from "styled-components";
import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export const FormContainer = styled.form`
  min-height: 50vh;
  max-height: 900px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  padding: 20px;
`;

export const HorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80vw;
  gap: 20px;
  width: 800px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 80vw;
  width: 800px;
  position: relative;
`;

export const TextField = styled.input`
  border-radius: 5px;
  width: 100%;

  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);


  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  }
`;

export const Label = styled.label`
  width: 100%;

  color: ${(props) => props.theme.color_text_primary};
  line-height: 32px;
  font-weight: 700;
`;

export const Sumbit = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 40px;
  border-radius: 5px;
  width: 60%;
  max-width: 300px;
  &:hover {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
  }
`;

export const FormSwitchText = styled.div`
  padding: 20px;
  font-weight: 600;
`;

export const ErrorText = styled.p`
  color: red;
  width: 100%;
  padding: 5px;
`;

export const ErrorReservation = styled.div`
  background: rgb(249, 184, 184);
  width: 470px;
  height: 60px;
  border-radius: 5px;
  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media screen and (max-width: 504px){
    height: 70px;
  }
`

export const ErrorMessage = styled.p`
  color: rgb(155, 17, 17);
  font-weight: 600;
  padding: 1rem;
  text-align: center;
`

export const WarningIcon = styled(RiErrorWarningFill)`
  font-size: 30px;
`

export const OpenEye = styled(AiFillEye)`
  position: absolute;
  font-size: 20px;
  bottom: 35px;
  right: 10px;
`
export const ClosedEye = styled(AiFillEyeInvisible)`
  font-size: 20px;
  position: absolute;
  bottom: 35px;
  right: 10px;
`