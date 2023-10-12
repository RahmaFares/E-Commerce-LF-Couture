import styled from 'styled-components';
import newsbg from '../assets/images/newsbg.jpg'

export const NewsContainer = styled.div`
background-image: url(${newsbg});
background-size: cover;
background-position: center;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`;

export const Heading = styled.h1`
color: white;
text-align: center;
`;

export const VideoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const VideoWrapper = styled.div`
  width: 700px;
  max-width: 800px;
  height: 500px;
  margin: 20px;
  position: relative;
  overflow: hidden;

  & > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }


`;

export const LeftColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
padding-left: 300px;

`;

export const RightColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
padding-right: 300px;

`;
