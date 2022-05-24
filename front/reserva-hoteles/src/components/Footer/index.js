import React from "react";
import {
  FooterBlock,
  FooterBody,
  FooterText,
  FooterIcon,
  IconLink,
  FooterContainer
} from "./FooterComponents";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <FooterBlock>
          <FooterText>©2021 Digital Booking</FooterText>
        </FooterBlock>
        <FooterBlock>
          <IconLink
            target={"_blank"}
            href={"https://www.facebook.com/digitalhouseschool/"}
          >
            <FooterIcon>
              <FaFacebook />
            </FooterIcon>
          </IconLink>
          <IconLink
            target={"_blank"}
            href={"https://www.linkedin.com/school/digitalhouseschool/"}
          >
            <FooterIcon>
              <FaLinkedin />
            </FooterIcon>
          </IconLink>
          <IconLink
            target={"_blank"}
            href={"https://twitter.com/_digitalhouse"}
          >
            <FooterIcon>
              <FaTwitter />
            </FooterIcon>
          </IconLink>
          <IconLink
            target={"_blank"}
            href={"https://www.instagram.com/_digitalhouse/"}
          >
            <FooterIcon>
              <FaInstagram />
            </FooterIcon>
          </IconLink>
        </FooterBlock>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
