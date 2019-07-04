import React, { Component } from "react";

import WrapperMain from "./components/wrapperMain";
import LogoNBA from "./components/logoNba";
import ContentMain from "./components/contentMain";
import HeaderWrapper from "./components/headerWrapper";
import ImgBack from "./components/imgBack";


import "./styles/reset.css";
class App extends Component {
    render() {
        return (
        <>
            <WrapperMain>
                <ImgBack/>
                <HeaderWrapper>
                    <LogoNBA/>
                </HeaderWrapper>
                <ContentMain />
            </WrapperMain>
        </>
        )
    }
}

export default App;