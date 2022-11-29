import React from 'react';

const NavbarMenu = ({links}) => {

    const linkArray = links.map(link => {
        return (
            <li key={link.linkText} className="nav-item">
                <a className="nav-link text-light" href={link.url}>{link.linkText}</a>
            </li>
        );
    });

    return (
        <div className="collapse navbar-collapse align-self-stretch" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {linkArray}
            </ul>
        </div>
    );
};

export default NavbarMenu;