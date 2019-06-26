import React, { Component } from "react";

import WrapperMain from "./components/wrapperMain";
import LogoNBA from "./components/logoNba";
import ContentMain from "./components/contentMain";


import "./styles/reset.css";
class App extends Component {
    render() {
        return (
        <>
            <WrapperMain>
                <LogoNBA/>
                <ContentMain />
            </WrapperMain>
        </>
        )
    }
}

export default App;