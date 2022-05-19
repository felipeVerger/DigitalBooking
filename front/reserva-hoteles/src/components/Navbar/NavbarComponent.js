import styled from 'styled-components';

export const NavbarBody = styled.div`
    background-color: ${(props) => props.theme.primary};
    width: 100%;
    height: 150px;
`

export const NavbarBlock = styled.div`  
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: white;
`

export const Form = styled.form`
    display: flex;
    gap: 10px;
`

export const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const OptionsContainer = styled.div`
    background: white;
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 0px 0px 8px 8px;
    overflow: hidden;
    order: 1;
    &.active {
        max-height: 270px;
        opacity: 1;
    }
`

export const PreSelected = styled.div`
    background: white;
    border-radius: 10px;
    margin-bottom: 5px;
    color: gray;
    position: relative;
    order: 0;
    padding: 10px;
    cursor: pointer;
    max-height: 40px;
    width: 422px;

    span {
        margin-left: 10px;
        padding-bottom: 20px;
    }
`

export const Option = styled.div`
    margin-top: 5px;
    padding: 6px 12px;
    cursor: pointer;

    hr {
        color: ${(props) => props.theme.secondary};
        margin-top: 15px;
    }

    .radio {
        display: none;
    }
`

export const Label = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    svg {
        color: gray;
        height: 20px;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-size: 1rem;
        font-weight: bold;
    }
`

export const Input = styled.input`
    width: 422px;
    height: 40px;
    border-radius: 10px;
    border: none;
`

export const Button = styled.button`
    width: 296px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    cursor: pointer;
`