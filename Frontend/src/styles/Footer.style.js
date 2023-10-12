import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: white;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const WhiteLogo = styled.img`
  height: 300px;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 150px;
  width: 300px;
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const AboutUsText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: black; 
`;

export const UsefulLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 150px;
  width: 300px;
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const UsefulLinksText = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: black;
  height: 150px;
  width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContactUsText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: black; 
`;

export const ContactUsSocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

export const SocialIcon = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

