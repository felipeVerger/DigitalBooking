import React, {useState, useContext, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import {
  HeaderBody,
  HeaderBlock,
  HeaderCategory,
  HeaderName,
  HeaderInfo,
  BackIcon,
  CleanLink,
  LocationBody,
  LocationBlock,
  LocationIcon,
  Span,
  LocationSubtitle,
  ContentDiv,
  ReviewContent,
  RatingDisplay,
  Star,
  HalfStar,
  EmptyStar,
  MainContent,
  ImageCarousel,
  MainContentBody,
  Image,
  ImageCarouselContainer,
  ImageGallery,
  MainImageContainer,
  OtherImagesContaienr,
  MainImage,
  SubImage,
  ImageGalleryMobile,
  MobileImage,
  IconContainer,
  ShareIcon,
  HeartIcon,
  ImageModal,
  ContentBlock,
  ContentTitle,
  DescriptionContent,
  Separator,
  Feature,
  FeatureIcon,
  TvIcon,
  FeaturesBlock,
  CalendarBody,
  ReservationBlock,
  ReservationButton,
  Row,
  DoubleCalendar,
  CalendarContent,
  MobileCalendar,
  CalendarView,
  TitleBlock,
  Policy,
  PolicyTitle,
  PolicyContent,
  PoliciesContainer,
  PolicyItem,
  MoreImagesButton,
  MapContent,
  MapBlock,
  LocationMap
} from "./ProductPageComponents";
import Modal from "react-modal";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from "../../context/user-context";
import Map from './Map'
import ShareSocialMedia from "./ShareSocialMedia";
import { BookingContext } from "../../context/booking-context";
import  * as Icon from "react-icons/md";


const ProductPage = ({ product, productDetail }) => {

  let getDisabledDays = (reservations) => {
    let arr = [];

    if(reservations){

    reservations.forEach(element => {
      let startArr = element.checkIn.split("-");
      let endArr = element.checkOut.split("-");

      
      let startDate = new Date(startArr[0], parseInt(startArr[1]) - 1, startArr[2]);
      let endDate = new Date(endArr[0], parseInt(endArr[1]) - 1, endArr[2]);


      let range = getDates(startDate, endDate);

      arr = arr.concat(range);

      
    });
  }

  console.log(arr);
    return arr;


  }
  const {id, name, subtitle, description, reservations, images = [], address, score, longitude, latitude, city = {}, category = {}, features = []} = productDetail;

  const {user, setUser} = useContext(UserContext);
  const [disabled, setDisabled] = useState([]);
  const [toggleShareLinks, setToggleShareLinks] =useState(false);
  const  {setIsRegistered} = useContext(BookingContext);


  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

console.log("DISABLED " + disabled);

useEffect(() => {
  setDisabled(getDisabledDays(reservations));
},
[reservations])







  const getRatingComment = (rating) => {
    switch (rating) {
      case 10:
        return "Excelente";
        case 9:
        case 8:
        return "Muy bueno";
        case 7:
        return "Bueno";
        case 6:
        case 5:
        case 4:
        return "Aceptable";
        case 3:
        case 2:
        case 1:
        return "Malo";
      default:
        return "No calificado";
    }
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleShareLinks = () => {
    setToggleShareLinks(!toggleShareLinks);
  }

  const handleReservation = () => {
    if (sessionStorage.getItem('token') != null) {
      return `/product/${id}/booking`;
    } else {
      setIsRegistered(false);
      return '/login'
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <Carousel>
          {images?.map((image) => {
            return <ImageModal src={image.url} key={image.id} />;
          })}
        </Carousel>
      </Modal>
      <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderCategory>{category.title}</HeaderCategory>
            <HeaderName>{name}</HeaderName>
          </HeaderInfo>
          <CleanLink to={"/"}>
            <BackIcon />
          </CleanLink>
        </HeaderBlock>
      </HeaderBody>
      <LocationBody>
        <LocationBlock>
          <ContentDiv>
            <Span bold={true}>
              <LocationIcon /> {city.name + ", " + city.country}
            </Span>
            <LocationSubtitle bold={false}>{address}</LocationSubtitle>
          </ContentDiv>
          <ReviewContent>
            <ContentDiv>
              <Span bold={true} color="primary">
                {getRatingComment(score)}
              </Span>
              <Span>
                {[1, 2, 3, 4, 5].map((_, i) => {
                  if (i + 1 <= score / 2) {
                    return <Star />;
                  } else if (
                    i < score / 2 &&
                    i + ((score / 2) % 1) >= i + 0.5
                  ) {
                    return <HalfStar />;
                  } else return <EmptyStar />;
                })}
              </Span>
            </ContentDiv>
            <RatingDisplay>{score}</RatingDisplay>
          </ReviewContent>
        </LocationBlock>
      </LocationBody>
      <MainContentBody>
        <MainContent>
          <IconContainer>
            <ShareIcon onClick={handleShareLinks}/>
            {toggleShareLinks ? <ShareSocialMedia id={id}/> : ''}
            <HeartIcon />
          </IconContainer>
          <ImageGallery>
            <MainImageContainer>
              <MainImage src={ images && images[0] ? images[0].url : ''} />
            </MainImageContainer>
            <OtherImagesContaienr>
              {Array.from(
                Array(
                  Math.min(Math.max(images.length - 1, 0), 4)
                ).keys()
              ).map((_, i) => {
                return <SubImage index={i} src={images[i + 1].url} />;
              })}
              <MoreImagesButton onClick={openModal}>Ver más</MoreImagesButton>
            </OtherImagesContaienr>
          </ImageGallery>
          <ImageGalleryMobile>
            <Carousel>
              {images.map((img, i) => {
                return (
                  <div key={i}>
                    <MobileImage src={img.url} />
                  </div>
                );
              })}
            </Carousel>
          </ImageGalleryMobile>
          <ContentBlock>
            <ContentTitle>{subtitle}</ContentTitle>
            <DescriptionContent>{description}</DescriptionContent>
            </ContentBlock>
            {features.length > 0 && <>
          <TitleBlock>
            <ContentTitle>¿Que ofrece este lugar?</ContentTitle>
          </TitleBlock>
          <Separator />
          <ContentBlock>
            <FeaturesBlock>
              {features.map(
                (f) => { 
                  let FIcon = Icon[f.iconName];  
               return <Feature>
                    <FeatureIcon ><FIcon /></FeatureIcon>
                      {f.feature}
                  </Feature>
                }
              )}
            </FeaturesBlock>
            </ContentBlock>
            </>
            }

        </MainContent>
      </MainContentBody>
      <CalendarBody>
        <MainContent>
          <ContentBlock>
            <ContentTitle>Fechas disponibles</ContentTitle>
            <CalendarContent>
              <Row>
                <CalendarView
                  minDate={new Date()}
                  months={2}
                  direction="horizontal"
                  disabledDates={
                    disabled


                  }
                />
                <ReservationBlock>
                  <Span bold={true}>
                    Agrega tus fechas de viaje para obtener precios exactos
                  </Span>
                  <Link to={handleReservation()} style={{width: '100%'}}>
                    <ReservationButton>Iniciar Reserva</ReservationButton>
                  </Link>
                </ReservationBlock>
              </Row>
            </CalendarContent>
            <MobileCalendar>
              <CalendarView
                minDate={new Date()}
                months={1}
                direction="horizontal"
                disabledDates={disabled}
              />
              <ReservationBlock>
                <Span bold={true}>
                  Agrega tus fechas de viaje para obtener precios exactos
                </Span>
                <Link to={handleReservation()} style={{width: '100%'}}>
                    <ReservationButton>Iniciar Reserva</ReservationButton>
                  </Link>
              </ReservationBlock>
            </MobileCalendar>
          </ContentBlock>
        </MainContent>
      </CalendarBody>
      <MapContent>
        <TitleBlock>
          <ContentTitle>¿Donde vas a estar?</ContentTitle>
        </TitleBlock>
        <Separator/>
        <MapBlock>
          <LocationMap>{city.name + ', ' + city.country}</LocationMap>
          <Map latitude={productDetail.latitude} longitude={productDetail.longitude} address={address} name={name}/>
        </MapBlock>
      </MapContent>
      <MainContentBody>
        <MainContent>
          <TitleBlock>
            <ContentTitle>Que tenés que saber</ContentTitle>
          </TitleBlock>
          <Separator />
          <ContentBlock>
            <PoliciesContainer>
              <Policy>
                <PolicyTitle>Normas de la casa</PolicyTitle>
                <PolicyContent>
                  {product.houseRules.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Salud y seguridad</PolicyTitle>
                <PolicyContent>
                  {product.healthAndHygiene.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Politica de cancelacion</PolicyTitle>
                <PolicyContent>
                  {product.cancellationPolicy.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
            </PoliciesContainer>
          </ContentBlock>
        </MainContent>
      </MainContentBody>
    </>
  ) ;
};

export default ProductPage;
