import styled from 'styled-components';
import { BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export const SocialMediaBlock = styled.div`
    width: 350px;
    height: 180px;
    position: absolute;
    left: 70px;
    top: 370px;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 10;
    @media screen and (max-width: 496px) {
        width: 70%;
        left: 65px;
    }
    @media screen and (max-width: 450px) {
        height: 250px;
    }
`

export const SocialMediaContent = styled.div`
    padding: 1rem;
    @media screen and (max-width: 496px) {
        width: 100%;
    }
`

export const Title = styled.h5`
    text-align: center;
    color: white;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    text-align: center;
    margin-top: 30px;
`

export const ListItem = styled.li`
    list-style: none;
`

export const Facebook = styled(BsFacebook)`
    font-size: 3em;
    color: white;
    transition: 300ms ease;
    &:hover {
        color: #3b5998;
    }
`

export const Email = styled(AiOutlineMail)`
    font-size: 3em;
    color: white;
    transition: 300ms ease;
    &:hover {
        color: #ff2626;
    }
`

export const Twitter = styled(BsTwitter)`
    font-size: 3em;
    color: white;
    transition: 300ms ease;
    &:hover {
        color: #00acee;
    }
`

export const Linkedin = styled(BsLinkedin)`
    font-size: 3em;
    color: white;
    transition: 300ms ease;
    &:hover {
        color: #0e76a8;
    }
`
