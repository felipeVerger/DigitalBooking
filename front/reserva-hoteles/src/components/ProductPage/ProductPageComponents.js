import styled from "styled-components";
import {MdOutlineArrowBackIos} from "react-icons/md"
import { Link } from "react-router-dom";
import {ImLocation} from "react-icons/im";
import {MdStar, MdStarHalf, MdStarBorder, MdKitchen, MdTv} from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Calendar from "react-date-range/dist/components/Calendar";

import {AiOutlineShareAlt, AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import styles from "react-date-range/dist/styles";


export const HeaderBody = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const HeaderBlock = styled.div`
width: 100vw;
  max-width: 1920px;
  padding: 1rem 2rem 1rem 0rem;
  padding-left: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color_text_secondary};
`;

export const HeaderCategory = styled.h2`

`

export const HeaderName = styled.h1`


`

export const HeaderInfo = styled.div`


`

export const BackIcon = styled(MdOutlineArrowBackIos)`
height: 100%;
font-size: 3.5em;
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
  padding: 1em 2em 1em 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.color_text_primary};
  padding-left: 48px;

`

export const LocationIcon = styled(ImLocation)`
`

export const Span = styled.span`
font-weight: ${props => props.bold ? 'bold' : '200'};
color: ${props => props.color ? props.theme[props.color] : props.theme.color_text_primary};
`

export const LocationSubtitle = styled.span`
padding-left: 1.3rem;
@media only screen and (max-width: 768px) {
    display: none;
  }
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
margin-left: 1rem;

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
  flex-direction: column;
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
padding-left: 62px;

`

export const OtherImagesContaienr = styled.div`
width: 50%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 500px;
padding: 1rem 62px 1rem 0;
border-radius: 20px;
border-radius: 20px;
position: relative;
`
export const MoreImagesButton = styled.div`
text-decoration: underline;
position: absolute;
bottom: 0;
right: 100px;
color: ${props => props.theme.color_text_secondary};
z-index: 800;
cursor: pointer;


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
padding-bottom: ${props => props.index <= 1 ? "1%" : "0"};
padding-right: ${props => (props.index + 1) % 2 !== 0 ? "1%" : "0"};


width: 49%;
border-radius: 20px;
object-fit: fill;
height: 250px;
transition: all .2s ease-in-out;
&:hover{
  transform: scale(1.01);
}


`

export const ImageGalleryMobile = styled.div`
display: none;
@media only screen and (max-width: 1280px) {
    display: block;
  }

`

export const MobileImage = styled.img`
@media only screen and (max-width: 1280px) {
  height: 800px;
  }
  @media only screen and (max-width: 600px) {
  height: 300px;
  }


`


export const ShareIcon = styled(AiOutlineShareAlt)`
font-size: 2rem;
margin: 0 1rem 0rem 0.5rem;
cursor: pointer;

`
export const HeartIcon = styled(AiOutlineHeart)`
font-size: 2rem;
margin: 0 0rem 0rem 1rem;
cursor: pointer;
`
export const HeartIconActive = styled(AiFillHeart)`
font-size: 2rem;
margin: 1rem;
cursor: pointer;
`

export const IconContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
padding: 1rem;
padding-left: 62px;

`

export const ImageModal = styled.img`
height: 80vh;
`

export const ContentBlock = styled.div`
padding: 2rem;



`

export const TitleBlock = styled.div`
padding: 1rem 0rem 1rem 2rem;
`

export const ContentTitle = styled.h1`
padding-bottom: 2rem;
color: ${props => props.theme.primary};
`


export const DescriptionContent = styled.p`
line-height: 1.5rem;

`

export const Separator = styled.hr`

border-color: ${props => props.theme.primary};
`

export const FeaturesBlock = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media only screen and (max-width: 768px) {

  }
`

export const Feature = styled.div`
vertical-align: middle;
width: 25%;
padding: 2rem 5rem 2rem 5rem;
font-weight: 700;
display: flex;
align-items: center;
font-size: 24px;

@media only screen and (max-width: 768px) {
    width: 50%;
    justify-content: center;
    font-size: 16px;
    padding: 2rem 0rem 2rem 0rem;
  }
`

export const FeatureIcon = styled.div`
color: ${props => props.theme.primary};
padding: 1.3rem 0.2rem 2rem 2rem;
font-size: 48px;

`

export const TvIcon = styled(MdTv)`
color: ${props => props.theme.primary};
padding-right: 12px;
font-size: 48px;

`

export const CalendarBody = styled.div`
background-color: ${props => props.theme.content_background};
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;



`

export const CalendarContent = styled.div`
  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }





`

export const ReservationBlock = styled.div`
border-radius: 25px;
display: flex;
flex-direction: column;
background-color: ${props => props.theme.color_text_secondary};
justify-content: space-evenly;
align-items: center;
padding: 1rem;
height: 200px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.24);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.24);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.24);
margin: 20px;


`

export const ReservationButton = styled.button`
background-color: ${props => props.theme.primary};
color: ${props => props.theme.color_text_secondary};
padding: 12px 28px;
border: none;
width: 100%;

`
export const Row = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
@media only screen and (max-width: 1280px) {

    flex-direction: column;
  }
  
`

export const CalendarView = styled(Calendar)`

`


export const MobileCalendar = styled.div`
display: none;

width: 100%;
justify-content: center;
@media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const PoliciesContainer = styled.div`
display: flex;
flex-direction: row;

@media only screen and (max-width: 768px) {
    flex-direction: column;
  }




`

export const Policy = styled.div`
display: flex;
flex-direction: column;
width: 25%;
padding: 1rem;
flex-wrap: wrap;
@media only screen and (max-width: 1200px) {
    width: 50%;
  }
@media only screen and (max-width: 768px) {
    width: 100%;
  }

`

export const PolicyTitle = styled.div`
font-size: 24px;
font-weight: 300;
padding-bottom: 2rem;
color: ${props => props.theme.primary};

`

export const PolicyContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;

`

export const PolicyItem = styled.span`
padding: 2rem 0;
`

export const MapContent = styled.div`
  width: 100vw;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`

export const MapBlock = styled.div`
  margin: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2rem;
`

export const LocationMap = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 1.5rem;
`