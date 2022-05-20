import styled from 'styled-components'

export const Body = styled.div`
    background: white;
`

export const CategoryBlock = styled.div`
    padding: 2rem 2rem 1rem 2rem; 
    display: flex;
    flex-direction: column;
`

export const SectionTitle = styled.h2`
    color: ${(props) => props.theme.primary};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 10px;
`

export const FlexWrapper = styled.div`
    display: flex;
    gap: 20px;
    max-width: fit-content;
`

export const Box = styled.div`
    background: #FFFFFF;
    border: 1px solid #F3F1ED;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const InfoSection = styled.section`
    padding: 10px;
`

export const CategoryText = styled.h4`
    font-size: 17px;
    font-weight: 700;
    line-height: 23px;
    color: ${(props) => props.theme.primary};
`

export const CategoryInfo = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.primary};
    opacity: 0.6;
`


export const Image = styled.img`
    width: 330px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
`