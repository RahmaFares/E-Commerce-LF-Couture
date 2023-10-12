import styled from 'styled-components';
import bgphoto from '../assets/images/bgphoto.jpg'

export const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150vh;
  font-size: 2rem;

  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgphoto});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px);
    z-index: -1;
  }
`;

export const GetInTouch = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const ContactInfo = styled.div`
font-size: large;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  & > p {
    margin-bottom: 0.5rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  width: 150%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
`;

export const FormTextarea = styled.textarea`
  width: 150%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
  resize: none;
  height: 10rem;
`;