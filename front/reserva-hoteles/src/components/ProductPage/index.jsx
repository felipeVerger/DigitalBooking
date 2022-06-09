import React, { useState } from "react";
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
} from "./ProductPageComponents";
import Modal from "react-modal";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Products from "../Products";

const ProductPage = ({ product }) => {
  const getRatingComment = (rating) => {
    switch (rating) {
      case 8:
        return "Muy bueno";
      default:
        return "No calificado";
    }
  };

  let subtitle;
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
            <HeaderCategory>{product.category.title}</HeaderCategory>
            <HeaderName>{product.name}</HeaderName>
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
              <LocationIcon /> {product.city.name + ", " + product.city.country}
            </Span>
            <LocationSubtitle bold={false}>A 900m del centro.</LocationSubtitle>
          </ContentDiv>
          <ReviewContent>
            <ContentDiv>
              <Span bold={true} color="primary">
                {getRatingComment(product.rating)}
              </Span>
              <Span>
                {[1, 2, 3, 4, 5].map((_, i) => {
                  if (i + 1 <= product.rating / 2) {
                    return <Star />;
                  } else if (
                    i < product.rating / 2 &&
                    i + ((product.rating / 2) % 1) >= i + 0.5
                  ) {
                    return <HalfStar />;
                  } else return <EmptyStar />;
                })}
              </Span>
            </ContentDiv>
            <RatingDisplay>{product.rating}</RatingDisplay>
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
            <OtherImagesContaienr onClick={openModal}>
              {Array.from(
                Array(
                  Math.min(Math.max(product.images.length - 1, 0), 4)
                ).keys()
              ).map((_, i) => {
                return <SubImage index={i} src={product.images[i + 1]} />;
              })}
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
            <ContentTitle>{product.title}</ContentTitle>
            <DescriptionContent>{product.description}</DescriptionContent>
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
                  <ReservationButton>Iniciar Reserva</ReservationButton>
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
  );
};

export default ProductPage;
