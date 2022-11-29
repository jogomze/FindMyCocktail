import React from 'react';
import MenuToggler from './menu-toggler.jsx';
import NavbarMenu from './navbar-menu.jsx';

const Navbar = ({links}) => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid px-lg-5">
                <a className="navbar-brand text-light" href="#">Find my Cocktail</a>
                <MenuToggler />
                <NavbarMenu links={links} />
            </div>
        </nav>
    );
};

export default Navbar;