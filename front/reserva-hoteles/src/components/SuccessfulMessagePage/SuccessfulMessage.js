import styled from "styled-components";

export const Container = styled.div`
    min-height: 50vh;
    max-height: 900px;
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
`

export const Box = styled.div`
    background-color: white;
    box-shadow: 1px 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 40%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const Gratitude = styled.h2`
    color: ${(props) => props.theme.primary};
`

export const MessageText = styled.p`
    color: ${(props) => props.theme.secondary};
`

export const Button = styled.button`
    margin-top: 20px;
    width: 170px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    color: white;
    font-size: 16px;
`