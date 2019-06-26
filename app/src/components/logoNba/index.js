import styled from "styled-components";

import logoNBA from "../../img/logo-nba.png";

const LogoNBA = styled.img.attrs({
    src: logoNBA,
    alt: "NBA",
})`
    width: auto;
    height: 60px;
    display: flex;
`;

export default LogoNBA;