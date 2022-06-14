import styled from "styled-components";

export const ErrorContainer = styled.div`
    margin: 20vh;
`

export const ErrorBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: ${(props) => props.theme.primary};
`

export const ErrorType = styled.h1`
    font-size: 6rem;
    font-weight: 700;
` 

export const ErrorText = styled.span`
    font-size: 2rem;
`

export const Button = styled.button`
    margin-top: 20px;
    width: 150px;
    height: 40px;
    background-color: ${(props) => props.theme.secondary};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    transition: all 500ms ease;
    &:hover {
        background-color: ${(props) => props.theme.primary};
    }
`