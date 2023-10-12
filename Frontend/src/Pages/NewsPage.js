import React from "react";
import { NewsContainer, Heading, VideoWrapper, LeftColumn, RightColumn, VideoContainer, VideosContainer } from '../styles/News.style'
import YouTube from '../components/YouTube'


const NewsPage = () => {
    const videoIds = ['74L5rK7u1-A', 'pBK_ASLhnfY', 'pBK_ASLhnfY', 'pBK_ASLhnfY-t4'];

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <NewsContainer>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <Heading> Here, You will find all the TV programs that I took part in. </Heading>
            <Heading>I had interviews with the most famous TV presenters in Egypt, which is a great step for me.</Heading>
            <Heading> I hope you enjoy and help my brand reach the whole world. </Heading>
            <Heading> Thank you for being part of my success!  </Heading>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <VideoWrapper>
                <YouTube videoId={videoIds[0]} opts={opts} />
            </VideoWrapper>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <LeftColumn>
                    <VideoWrapper>
                        <YouTube videoId={videoIds[1]} opts={opts} />
                    </VideoWrapper>
                    <VideoWrapper>
                        <YouTube videoId={videoIds[2]} opts={opts} />
                    </VideoWrapper>
                </LeftColumn>
                <RightColumn>
                    <VideoWrapper>
                        <YouTube videoId={videoIds[3]} opts={opts} />
                    </VideoWrapper>
                    <VideoWrapper>
                        <YouTube videoId={videoIds[4]} opts={opts} />
                    </VideoWrapper>
                </RightColumn>
            </div>
        </NewsContainer>
    );
};

export default NewsPage;