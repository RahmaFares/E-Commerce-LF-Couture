import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../assets/images/grid.jpg';
import slider2 from '../assets/images/grid2.jpg';
import accessory from '../assets/images/accessory.jpg';
import soiree from '../assets/images/soiree.jpg';
import wedding from '../assets/images/wedding.jpg';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
`;

const EmptySpace = styled.div`
  height: 50px;
`;

const ContainersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1 1 calc(100% - 20px); /* Full width on small screens */
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    /* Adjust for medium-sized screens */
    flex: 1 1 calc(50% - 20px); /* Two columns */
  }

  @media (min-width: 992px) {
    /* Adjust for large screens */
    flex: 1 1 calc(33.33% - 20px); /* Three columns */
  }
`;

const ContainerLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const ContainerImage = styled.img`
  max-width: 100%;
  height: 100%; /* Ensure image aspect ratio is maintained */
  border-radius: 6px;
`;

const ContainerTitle = styled.h2`
  font-size: 18px;
  margin-top: 10px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={slider1} alt="Slider 1" />
        </div>
        <div>
          <img src={slider2} alt="Slider 2" />
        </div>
      </Carousel>

      <EmptySpace />

      <ContainersWrapper>
        <Container>
          <ContainerLink href="/accessories">
            <ContainerImage src={accessory} alt="Accessories" />
            <ContainerTitle>Accessories</ContainerTitle>
          </ContainerLink>
        </Container>

        <Container>
          <ContainerLink href="/dresses">
            <ContainerImage src={soiree} alt="Wedding Dresses" />
            <ContainerTitle>Soiree Dresses</ContainerTitle>
          </ContainerLink>
        </Container>

        <Container>
          <br /> <br />
          <ContainerLink href="/dresses">
            <ContainerImage src={wedding} alt="Soiree Dresses" />
            <ContainerTitle>Wedding Dresses</ContainerTitle>
          </ContainerLink>
        </Container>
      </ContainersWrapper>
      <EmptySpace />
    </HomeContainer>
  );
};

export default Home;
