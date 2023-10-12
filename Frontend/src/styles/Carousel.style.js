import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 600px;
  //margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

export const SliderContent = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  position: absolute;
  top: 0;
  left: ${(props) => props.left}px;
  transition: left 0.5s ease-in-out;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
`;

export const ImageSlide = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export const LeftArrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 15px solid #fff;
  margin-right: 1250px;
`;

export const RightArrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  margin-left: 1250px;
`;
