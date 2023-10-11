import React from "react";
import styled from "styled-components";
import whiteLogo from '../assets/images/whiteLogo.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.jpeg'
import tiktok from '../assets/images/tiktok.png'
import whatsapp from '../assets/images/whatsapp.png'
import { FooterContainer, LogoContainer, WhiteLogo, AboutUsContainer, ContactUsSocialIcons, AboutUsText, FooterLink, UsefulLinksContainer, UsefulLinksText, ContactUsContainer, ContactLink, ContactUsText, SocialIcon } from "../styles/Footer.style"


const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <WhiteLogo src={whiteLogo} alt="Logo" />
      </LogoContainer>
      <AboutUsContainer>
        <AboutUsText>About Us</AboutUsText>
        <br />
        <p> Leila fares, a girl in her 20s who managed to be a very successful fashion designer in a short time and has 3 branches in Egypt is willing to share this website to help customers order their perfect dresses from their homes. </p>
      </AboutUsContainer>

      <UsefulLinksContainer>
        <UsefulLinksText>Useful Links</UsefulLinksText>
        <FooterLink to="/home"> HOME </FooterLink>
        <FooterLink to="/dresses"> DRESSES </FooterLink>
        <FooterLink to="/newCollection"> ACCESSORIES </FooterLink>
        <FooterLink to="/news"> NEWS </FooterLink>
        <FooterLink to="/contact"> CONTACT US </FooterLink>
        <FooterLink to="/contact"> MESSAGES </FooterLink>
        <FooterLink to="/contact"> ORDERS </FooterLink>
      </UsefulLinksContainer>
      <ContactUsContainer>
        <ContactUsText>Contact Us</ContactUsText>
        <br />
        <p>5th settlement, Cairo</p>
        <p>Tarh Al-Bahr street, PortSaid, Egypt</p>
        <p>Al-Rehab Mall 1st Floor, Cairo</p>
        <p>+201008085424</p>
        <br />
        <ContactUsSocialIcons>
          <a href="https://www.facebook.com/leilaafares">
            <SocialIcon src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/leilafarescouture/">
            <SocialIcon src={instagram} alt="instagram" />
          </a>
          <a href="https://www.tiktok.com/@leilafarescouture">
            <SocialIcon src={tiktok} alt="tiktok" />
          </a>
          <a href="https://www.facebook.com/leilaafares">
            <SocialIcon src={whatsapp} alt="whatsapp" />
          </a>


        </ContactUsSocialIcons>
      </ContactUsContainer>
    </FooterContainer>
  );
};

export default Footer;