import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const Team = styled.h3`
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    &:before {
        content: "";
        width: 80px;
        height: 5px;
        background: orange;
        margin-right: 10px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Raleway',sans-serif;
    padding: 30px;
    margin-top: 70px;
    width: 100%;
`;

export const Player = styled.h2`
    color: #fff;
    display: flex;
    font-size: 90px;
    font-style: italic;
    flex-direction: column;
    font-weight: 400;
    position: relative;
    font-family: 'Teko', sans-serif;
    transform: translateY(-60px);
    flex-flow: row-reverse;
    color: #ffdc00;
    &:before {
        content: "";
        display: flex;
        flex-direction: row-reverse;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width:1px;
        -webkit-text-stroke-color: #cccccc70;
        font-size: 115px;
        position: absolute;
        right: 90px;
        top: -160px;
    }
`;

export const PrimaryName = styled.span`
    color: #fff;
    display: flex;
    font-size: 170px;
    font-style: italic;
    flex-direction: column;
    margin-top: 25px;
    font-weight: bold;
    position: relative;
    font-family: 'Teko', sans-serif;
    z-index: 1;
`;


export const WrapperPlayer = styled.div`
    width: 100%;
    display: flex;
`;

export const ImgPlayer = styled.div`
    height: 100vh;
`;


export const LogoPlayer = styled.div`
    width: 200px;
    margin-top: 50px;
    height: 100vh;
`;
