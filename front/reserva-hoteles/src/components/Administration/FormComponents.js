import styled from "styled-components";
import Select from 'react-select';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const Form = styled.form`
    padding: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 100%;
  width: 800px;
  margin-top: 30px;
  @media screen and (max-width: 1500px){
    width: 100%;
  }
`;

export const TextField = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 10px;
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

export const DescriptionBlock = styled.div`
  width: 100%;
  margin-top: 30px;
`

export const DescriptionField = styled.textarea`
  border-radius: 5px;
  width: 100%;
  height: 120px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  }
`

export const SelectField = styled(Select)`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  }
`

export const AtributesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;
export const AtrTitle = styled.h3`
  color: ${(props) => props.theme.primary};
`

export const Block = styled.div`
  background: rgb(234, 234, 234);
  border-radius: 5px;
  height: 100%;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 3rem;
  gap: 20px;
  @media screen and (max-width: 1124px){
    gap: 10px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  /* padding: 0 2rem; */
  @media screen and (max-width: 1124px){
    flex-direction: column;
    gap: 0;
  }
`

export const AtributeInputBlock = styled.div`
  width: 800px;
  max-width: 100%;
`

export const AtributeNameField = styled.input`
  border-radius: 5px;
  /* width: 850px; */
  width: 100%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  } 
`

export const AtributeIconField = styled.input`
  border-radius: 5px;
  /* width: 650px; */
  width: 100%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  }
`

export const Button = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.primary};
`

export const ButtonIcon = styled(AiOutlinePlus)`
  color: white;
  font-size: 30px;
`

export const PolicyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`

export const PolicyTitle = styled.h3`
  color: ${(props) => props.theme.primary};
`
export const PolicyBody = styled.div`
  width: 100%;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1124px){
    flex-direction: column;
  }
`

export const PolicyBlock = styled.div`
  width: 100%;
  padding: 2rem;
  @media screen and (max-width: 1124px){
    padding: 1rem 2rem;
  }
`

export const PolicyName = styled.h5`
  color: ${(props) => props.theme.primary};
`

export const PolicyField = styled.textarea`
  border-radius: 5px;
  width: 100%;
  height: 200px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`
export const ImageTitle = styled.h3`
  color: ${(props) => props.theme.primary};
`

export const ImageBlock = styled.div`
  background: rgb(234, 234, 234);
  border-radius: 5px;
  height: 150px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  gap: 20px;
`

export const SubmitButton = styled(Link)`
  background-color: ${(props) => props.theme.primary};
  color: white;
  width: 400px;
  height: 60px;
  text-align: center;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  font-size: 1.3em;
  font-weight: 500;
  text-decoration: none;
  padding-top: 13px;
  &:hover {
    color: white;
  }
`

export const ErrorText = styled.p`
  color: red;
  width: 100%;
  padding: 5px;
`;