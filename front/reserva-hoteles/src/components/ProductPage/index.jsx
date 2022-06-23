import React, {useState} from "react";
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
} from "./ProductPageComponents";
import Modal from "react-modal";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Link, useNavigate } from "react-router-dom";


const ProductPage = ({ product, productDetail }) => {
  console.log(productDetail)
  const { name, subtitle, description, address, score, city = {}, category = {}, longitude, latitude } = productDetail;
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
        return "Muy bueno";
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
          {product.images.map((url, i) => {
            return <ImageModal src={url} key={i} />;
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
            <ShareIcon />
            <HeartIcon />
          </IconContainer>
          <ImageGallery>
            <MainImageContainer>
              <MainImage src={product.images[0]} />
            </MainImageContainer>
            <OtherImagesContaienr>
              {Array.from(
                Array(
                  Math.min(Math.max(product.images.length - 1, 0), 4)
                ).keys()
              ).map((_, i) => {
                return <SubImage index={i} src={product.images[i + 1]} />;
              })}
              <MoreImagesButton onClick={openModal}>Ver más</MoreImagesButton>
            </OtherImagesContaienr>
          </ImageGallery>
          <ImageGalleryMobile>
            <Carousel>
              {product.images.map((url, i) => {
                return (
                  <div key={i}>
                    <MobileImage src={url} />
                  </div>
                );
              })}
            </Carousel>
          </ImageGalleryMobile>
          <ContentBlock>
            <ContentTitle>{subtitle}</ContentTitle>
            <DescriptionContent>{description}</DescriptionContent>
          </ContentBlock>

          <TitleBlock>
            <ContentTitle>¿Que ofrece este lugar?</ContentTitle>
          </TitleBlock>
          <Separator />
          <ContentBlock>
            <FeaturesBlock>
              <Feature>
                <FeatureIcon />
                Cocina
              </Feature>
              <Feature>
                <TvIcon />
                Televisor
              </Feature>
            </FeaturesBlock>
          </ContentBlock>
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
                  disabledDates={[

                  ]}
                />
                <ReservationBlock>
                  <Span bold={true}>
                    Agrega tus fechas de viaje para obtener precios exactos
                  </Span>
                  <Link to={localStorage.getItem('token') ? '/product/:id/booking' : '/login'} style={{width: '100%'}}>
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
                disabledDates={[]}
              />
              <ReservationBlock>
                <Span bold={true}>
                  Agrega tus fechas de viaje para obtener precios exactos
                </Span>
                <ReservationButton>Iniciar Reserva</ReservationButton>
              </ReservationBlock>
            </MobileCalendar>
          </ContentBlock>
        </MainContent>
      </CalendarBody>
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
