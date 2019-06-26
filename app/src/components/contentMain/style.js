import styled from "styled-components";

export const Team = styled.h3`
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    &:before {
        content: "";
        width: 100px;
        height: 2px;
        background: orange;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Player = styled.h2`
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    &:after {
        content: "23";
    }
`;

