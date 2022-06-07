import styled from "styled-components";
import {MdOutlineArrowBackIos} from "react-icons/md"
import { Link } from "react-router-dom";
import {ImLocation} from "react-icons/im";
import {MdStar, MdStarHalf, MdStarBorder} from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HeaderBody = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderBlock = styled.div`
width: 100vw;
  max-width: 1920px;
  padding: 1rem 2rem 1rem 0rem;
  padding-left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color_text_secondary};
  height: 90px;
`;

export const HeaderCategory = styled.h2`

`

export const HeaderName = styled.h1`


`

export const HeaderInfo = styled.div`

`

export const BackIcon = styled(MdOutlineArrowBackIos)`
height: 100%;
font-size: 48px;
color: ${(props) => props.theme.color_text_secondary};
cursor: pointer;
`

export const CleanLink = styled(Link)`
  text-decoration: none;
`

export const LocationBody = styled.div`
  background: ${(props) => props.theme.content_background};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  

`;

export const LocationBlock = styled.div`
width: 100vw;
  max-width: 1920px;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.color_text_primary};
  padding-left:  5%;

`

export const LocationIcon = styled(ImLocation)`
`

export const Span = styled.span`
font-weight: ${props => props.bold ? 'bold' : '200'};
color: ${props => props.color ? props.theme[props.color] : props.theme.color_text_primary};
`

export const LocationSubtitle = styled.span`
padding-left: 1.3rem;
`

export const ContentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;


`

export const ReviewContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
width: 150px;
`

export const RatingDisplay = styled.div`
background-color: ${props => props.theme.primary};
border-radius: 10px;
color: ${props => props.theme.color_text_secondary};
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
font-weight: 900;
font-size: 1.5rem;

`

export const Star = styled(MdStar)`
`

export const HalfStar = styled(MdStarHalf)`

`

export const EmptyStar = styled(MdStarBorder)`
`

export const MainContentBody = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;

`

export const MainContent = styled.div`
  width: 100vw;
  max-width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: center;




`

export const ImageCarouselContainer = styled.div`
width: 60%;

`

export const ImageCarousel = styled(Carousel)`

`

export const Image = styled.img`

`

export const ImageGallery = styled.div`
display: flex;
flex-direction: row;
width: 100%;

@media only screen and (max-width: 1280px) {
    display: none;
  }


`

export const MainImageContainer = styled.div`
width: 50%;
border-radius: 20px;
padding: 1rem;

`

export const OtherImagesContaienr = styled.div`
width: 50%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 500px;
padding: 1rem 1rem 1rem 0;
border-radius: 20px;
border-radius: 20px;
`

export const MainImage = styled.img`
width: 100%;
border-radius: 20px;
height: 500px;
transition: all .2s ease-in-out;
&:hover{
  transform: scale(1.01);
}


cursor: pointer;


`
export const SubImage = styled.img`
padding-bottom: ${props => props.index <= 1 ? "1rem" : "0"};
padding-right: ${props => (props.index + 1) % 2 !== 0 ? "1rem" : "0"};


width: 50%;
border-radius: 20px;
object-fit: fill;
height: 250px;
transition: all .2s ease-in-out;
&:hover{
  transform: scale(1.01);
}

cursor: pointer;


`

export const ImageGalleryMobile = styled.div`
display: none;
@media only screen and (max-width: 1280px) {
    display: block;
  }

`

export const MobileImage = styled.img`
@media only screen and (max-width: 1280px) {
  height: 500px;
  }


`