import React from "react";
import {Team, Wrapper, Player, WrapperPlayer, ImgPlayer, LogoPlayer, PrimaryName, ContentWrapper} from "./style"

let Teams = [
    {team: 'Los Angeles Lakers', PrimaryName: 'Lebron', Player: 'James', id: 'lakers'},
    {team: 'Golden State Warriors', PrimaryName: 'Lebron', Player: 'James', id: 'warriors'},
    {team: 'Boston Celtics', PrimaryName: 'Lebron', Player: 'James', id: 'celtics'},
    {team: 'Toronto Raptors', PrimaryName: 'Lebron', Player: 'James', id: 'toronto'},
    {team: 'Milwaukee Bucks', PrimaryName: 'Lebron', Player: 'James', id: 'bucks'},
    {team: 'Houston Rockets', PrimaryName: 'Lebron', Player: 'James', id: 'houston'},
]


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