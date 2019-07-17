import styled, { keyframes } from 'styled-components';

import backgroundHome from '../../img/background-home.jpg';
import backgroundFog from '../../img/fog.png';
import logoHome from '../../img/logo-nba.png' 

export const Wrapper = styled.div`
    width: 100%;
`;

const fogAnimation = keyframes`
    0%{
        transform: translate3d(0, 0, 0);
    }
    100%{
        transform: translate3d(-1692px, 0, 0);
    }
`;

export const BackgroundFog = styled.div`
    position: absolute;
    animation: ${fogAnimation} 60s linear infinite;
    top: 0;
    left: 0;
    width: 5076px;
    background: url(${backgroundFog}) repeat-x;
    height: 100vh;
    background-size: contain;
`;

export const BackgroundHome = styled.img.attrs({
    src: backgroundHome
})`
    width: 100%;
    filter: opacity(0.3);
`;

export const LogoHome = styled.img.attrs({
    src: logoHome
})`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 15vh;
    height: 70vh;
`;