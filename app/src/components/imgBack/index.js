import styled from "styled-components";

import imgBack from "../../img/lakers/lebron-background.jpg";

const ImgBack = styled.img.attrs({
    src: imgBack
})`
    filter: opacity(0.1);
    position: absolute;
    width: 120%;
`;

export default ImgBack;
