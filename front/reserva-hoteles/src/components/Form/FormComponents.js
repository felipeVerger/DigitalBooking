import styled from "styled-components";

export const FormContainer = styled.form`
  min-height: 50vh;
  max-height: 900px;
  min-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  padding: 20px;
`;

export const HorizontalBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const TextField = styled.input`
  border-radius: 5px;
  width: 60%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0 0 5pt 0.5pt #d3d3d3;
  text-indent: 5px;

  &:focus {
    outline-width: 0px;
  }
`;

export const Label = styled.label`
color: ${props => props.theme.color_text_primary};
line-height: 32px;
font-weight: 700;
width: 60%;
`
