import React from 'react';
import { Link } from "react-router-dom";

import {Wrapper, LogoNBA} from './style';
import HeaderMenu from './header';

import './style.scss'

const HeaderWrapper = () => (
    <>
        <Wrapper>
            <Link to="/">
                <LogoNBA/>
            </Link>
            <HeaderMenu/>
        </Wrapper>
    </>

)

export default HeaderWrapper;