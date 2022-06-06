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
  MobileImage
} from "./ProductPageComponents";


const ProductPage = ({ product }) => {
  const getRatingComment = (rating) => {
    switch (rating) {
      case 8:
        return "Muy bueno";
      default:
        return "No calificado";
    }
  };


  return (
    <>
      <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderCategory>{product.category}</HeaderCategory>
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
              <LocationIcon /> {product.location}
            </Span>
            <LocationSubtitle bold={false}>
              {product.distancia}
            </LocationSubtitle>
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
          <ImageGallery>
            <MainImageContainer>
            <MainImage src={product.images[0]} />
             </MainImageContainer>
            <OtherImagesContaienr>
              {Array.from(Array(4).keys()).map(
                (_, i) => {
                  return <SubImage index={i} src={product.images[i]} />
                }
              )}



            </OtherImagesContaienr>
          </ImageGallery>
          <ImageGalleryMobile>
            <Carousel>
              {product.images.map((url, i) => {
                return <div key={i}>
                <MobileImage src={url} />
                </div>
              })}
            </Carousel>
          </ImageGalleryMobile>

        </MainContent>
      </MainContentBody>
    </>
  );
};

export default ProductPage;
