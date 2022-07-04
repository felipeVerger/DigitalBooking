import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    @media screen and (max-width: 768px) {
        padding: 2rem;
    }
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
    padding: 1rem;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Logo = styled.img`
    width: 100px;
`

export const Gratitude = styled.h2`
    color: ${(props) => props.theme.primary};
`

export const MessageText = styled.p`
    color: ${(props) => props.theme.secondary};
    font-size: 24px;
`

export const Button = styled.button`
    margin-top: 20px;
    min-width: 170px;
    max-width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover{
        background-color: ${(props) => props.theme.secondary};
    }
`