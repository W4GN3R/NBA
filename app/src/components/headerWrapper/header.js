import React from 'react';
import { Link } from "react-router-dom";

let links = [
    {label: 'Los Angeles Lakers', link: '/lakers', img: 'lakers'},
    {label: 'Golden State Warriors', link: '/warriors', img: 'warriors'},
    {label: 'Boston Celtics', link: '/celtics', img: 'celtics'},
    {label: 'Toronto Raptors', link: '/toronto', img: 'toronto'},
    {label: 'Milwaukee Bucks', link: '/bucks', img: 'bucks'},
    {label: 'Houston Rockets', link: '/houston', img: 'houston'},
]

let navLinks = links.map((nav, index) => {
    return (
        <li className={"header-logos-item " + nav.img} key={index}>
            <Link className="header-logos-link" id={nav.img} to={nav.link}>{nav.label}</Link>
        </li>
    )
})

const HeaderMenu = () => (
    <>   
        <ul className="header-logos header-logos-tabs">
            {navLinks}
        </ul>
    </>
);

export default HeaderMenu;