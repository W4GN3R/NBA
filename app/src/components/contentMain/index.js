import React from "react";

import {Team, Wrapper, Player, WrapperPlayer, ImgPlayer, LogoPlayer, PrimaryName, ContentWrapper} from "./style"
import './style.scss'

const Teams = [
    {team: 'Los Angeles Lakers', PrimaryNamePlayer: 'Lebron', Player: 'James', pathname: '/lakers', id: 'lakers'},
    {team: 'Golden State Warriors', PrimaryNamePlayer: 'Stephen', Player: 'Curry', pathname: '/warriors', id: 'warriors'},
    {team: 'Boston Celtics', PrimaryNamePlayer: 'Kyrie', Player: 'Irving', pathname: '/celtics', id: 'celtics'},
    {team: 'Toronto Raptors', PrimaryNamePlayer: 'Kawhi ', Player: 'Leonard', pathname: '/toronto', id: 'toronto'},
    {team: 'Milwaukee Bucks', PrimaryNamePlayer: 'giannis', Player: 'antetokounmpo', pathname: '/bucks', id: 'bucks'},
    {team: 'Houston Rockets', PrimaryNamePlayer: 'James', Player: 'Harden', pathname: '/houston', id: 'houston'},
]

const ContentMain = () => (
    <div className="center">
        {Teams.map((page, index) => {
            if(window.location.pathname === page.pathname) {
                return (
                    <ContentWrapper className={"backgroundcontent " + page.id} key={index}>
                        <Wrapper>
                            <Team>{page.team}</Team>
                            <PrimaryName>{page.PrimaryNamePlayer}<Player className={"numberplayer " + page.id}> {page.Player}</Player></PrimaryName>
                            <LogoPlayer className={"logoplayer " + page.id}/>
                        </Wrapper>
                        <WrapperPlayer>
                            <ImgPlayer className={"playerteam " + page.id}/>
                        </WrapperPlayer>
                    </ContentWrapper>
                )
            }
            return null;
        })}
    </div>
)


export default ContentMain; 