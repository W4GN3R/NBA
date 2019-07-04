import React from "react";
import {Team, Wrapper, Player, WrapperPlayer, ImgPlayer, LogoPlayer, PrimaryName, ContentWrapper} from "./style"

const ContentMain = () => (
    <>
        <ContentWrapper>
            <Wrapper>
                <Team>Los Angeles Lakers</Team>
                <PrimaryName>Lebron<Player> James</Player></PrimaryName>
                <LogoPlayer/>
            </Wrapper>
            <WrapperPlayer>
                <ImgPlayer/>
            </WrapperPlayer>
        </ContentWrapper>
    </>
);

export default ContentMain; 