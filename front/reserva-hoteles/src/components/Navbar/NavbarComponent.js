import styled from 'styled-components';

export const NavbarBody = styled.div`
    background-color: ${(props) => props.theme.primary};
    width: 100%;

    height: 150px;
    @media screen and (max-width: 768px){
        height: 237px;
    }
    @media screen and (max-width: 728px){
        height: 275px;
    }
    @media screen and (max-width: 417px){
        height: 320px;
    }
`

export const NavbarBlock = styled.div`
    padding: 1rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: white;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

export const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 422px;
    @media screen and (max-width: 768px){
        width: 96%;
        align-items: center;
    }
`

export const OptionsContainer = styled.div`
    background: white;
    display: none;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 0px 0px 8px 8px;
    overflow: hidden;
    order: 1;
    z-index: 1;
    &.active {
        display: block;
        max-height: 254px;
        opacity: 1;
    }
    @media screen and (max-width: 768px){
        width: 100%;
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
    @media screen and (max-width: 768px){
        width: 100%;
    }
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
        margin-top: 11px;
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

export const DatePickerBox = styled.div`
    position: relative;
    svg {
        right: 20px;
    }
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
    @media screen and (max-width: 768px){
        width: 100%;
        max-height: 45px;
    }
`