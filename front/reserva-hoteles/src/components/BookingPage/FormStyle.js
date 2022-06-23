import styled from "styled-components";

export const FormContainer = styled.div`
padding: 3rem;
background-color: ${(props) => props.theme.background};
display: flex;
flex-direction: row;
@media only screen and (max-width: 1200px) {
    flex-direction: column;
  }


    
`
export const FormTitle = styled.h2`
    color: ${(props) => props.theme.primary};
    font-weight: 700;
`

export const FormBlock = styled.div`
margin: 50px 0 50px 0;
border-radius: 2rem;
box-shadow: 0px 10px 6px 5px rgba(0,0,0,0.1);
flex-wrap: wrap;


display: flex;
flex-direction: row;
width: 100%;
`

export const Label = styled.div`
`

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

`

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  min-width: 50%;
`;


export const LabelColor = styled(Label)`
color: ${props => props.theme.primary};
`


export const CalendarContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding: 1rem;
`

export const SubTitle = styled.h4`
display: flex;
flex-direction: row;
align-items: center;
font-weight: 700;
`
export const IconContainer = styled.div`
color: ${props => props.theme.primary};
font-size: 48px;
line-height: 0;
padding: 0.5rem;
`

export const Span = styled.div`
font-size: 24px;
display: flex;
flex-direction: row;

`

export const Column = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`
export const ColumnForm = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
width: 60%;
@media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const Padding = styled.div`
padding: 1rem 2rem 0rem;

`


export const ConfirmationBlock = styled.div`
width: 30%;
border-radius: 2rem;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const Image = styled.img`
width: 100%;
padding: 1rem 0;
`

export const IconContainerSmall = styled.div`
color: ${props => props.theme.primary};
font-size: 24px;
line-height: 0;
padding: 0.5rem;
`

export const Row = styled.div`
padding: 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;

`

export const Dates = styled.div`
`

export const ReservationButton = styled.button`
background-color: ${props => props.theme.primary};
color: ${props => props.theme.color_text_secondary};
padding: 12px 28px;
border: none;
width: 80%;
`

export const Div = styled.div`
display: flex;
justify-content: center;
`