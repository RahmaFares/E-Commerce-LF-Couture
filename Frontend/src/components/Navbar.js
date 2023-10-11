import React from 'react';
import { NavbarContainer, Logo, NavExtendedContainer, NavInnerContainer, Left, Right, NavbarLinkContainer, NavbarLink } from '../styles/Navbar.style';
import logo from '../assets/images/logo.jpg';
import Dropdown from './Dropdown';

function Navbar() {
    return (
        <NavbarContainer>
            <NavInnerContainer>
                <Left>
                    <Logo src={logo}></Logo>
                </Left>
                <Right>
                    <NavbarLinkContainer>
                        <NavbarLink to="/home"> HOME </NavbarLink>
                        <NavbarLink to="/dresses"> DRESSES </NavbarLink>
                        <NavbarLink to="/accessories"> ACCESSORIES </NavbarLink>
                        <NavbarLink to="/news"> NEWS </NavbarLink>
                        <NavbarLink to="/contact"> CONTACT US </NavbarLink>
                        <Dropdown />
                    </NavbarLinkContainer>
                </Right>
            </NavInnerContainer>
            <NavExtendedContainer></NavExtendedContainer>
        </NavbarContainer>
    );
}

export default Navbar;
