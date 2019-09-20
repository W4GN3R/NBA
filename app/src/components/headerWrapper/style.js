import styled from "styled-components";

import logoNBA from "../../img/logo-nba.png";

export const LogoNBA = styled.img.attrs({
    src: logoNBA,
    alt: "NBA",
})`
    width: 27px;
    display: flex;
    border: 1px solid #fff;
    border-radius: 8px;
    margin: 10px auto 0;
`;
export const Wrapper = styled.header`
    display: flex;
    border-right: 1px solid #a0a0a0cf;
    flex-direction: column;
    position: relative;
    z-index: 99;
    background: #000000b8;
`;