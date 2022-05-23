import styled from "styled-components";

export const FormContainer = styled.form`
  min-height: 50vh;
  max-height: 900px;
  width: 80%;
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
  justify-content: center;
  flex-direction: row;
`;

export const TextField = styled.input`
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0 0 5pt 0.5pt #d3d3d3;
  text-indent: 5px;

  &:focus {
    outline-width: 0px;
  }
`;

export const Label = styled.label`
  width: 100%;
  max-width: 600px;
  color: ${(props) => props.theme.color_text_primary};
  line-height: 32px;
  font-weight: 700;
`;

export const Sumbit = styled.input`

background-color: ${props => props.theme.primary};
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
  `
