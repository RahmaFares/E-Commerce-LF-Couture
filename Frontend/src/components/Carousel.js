import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
    SliderWrapper,
    SliderContainer,
    SliderContent,
    VideoContainer,
    ImageSlide,
    SlideWrapper,
    ArrowButton,
    LeftArrow,
    RightArrow,
} from '../styles/Carousel.style';

const Carousel = ({ slides, width = 800, height = 300 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);


    const nextSlide = () => {
        if (currentSlide >= slides.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 37) {
            prevSlide();
        } else if (event.keyCode === 39) {
            nextSlide();
        }
    };

    return (
        <SliderWrapper>
            <SliderContainer>
                <SliderContent width={width * slides.length} height={height} left={-width * currentSlide}>
                    {slides.map((slide, index) => {
                        if (slide.type === 'video') {
                            return (
                                <SlideWrapper key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                    <VideoContainer>
                                        <video ref={slideRef} src={slide.src} autoPlay controls />
                                    </VideoContainer>
                                </SlideWrapper>
                            );
                        } else if (slide.type === 'image') {
                            return (
                                <SlideWrapper key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                    <ImageSlide src={slide.src} alt={`Slide ${index}`} />
                                </SlideWrapper>
                            );
                        } else {
                            return null;
                        }
                    })}
                </SliderContent>
            </SliderContainer>
            <ArrowButton onClick={prevSlide} onKeyDown={handleKeyDown} aria-label="Previous slide">
                <LeftArrow>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </LeftArrow>
            </ArrowButton>
            <ArrowButton onClick={nextSlide} onKeyDown={handleKeyDown} aria-label="Next slide">
                <RightArrow>
                    <FontAwesomeIcon icon={faChevronRight} />
                </RightArrow>
            </ArrowButton>
        </SliderWrapper>
    );
};

export default Carousel;
