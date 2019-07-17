import React from 'react';

import {Wrapper, BackgroundHome, BackgroundFog, LogoHome} from './style';

import WrapperMain from "../../components/wrapperMain";
import HeaderWrapper from "../../components/headerWrapper";
const ContentHome = () => (
    <>
        <WrapperMain>
            <HeaderWrapper/>
            <Wrapper>
                <BackgroundHome/>
                <BackgroundFog/>
                <LogoHome/>
            </Wrapper>
        </WrapperMain>
    </>
)
export default ContentHome;