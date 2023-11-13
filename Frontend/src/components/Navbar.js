import React from 'react';
import { NavbarContainer, Logo, NavExtendedContainer, NavInnerContainer, Left, Right, NavbarLinkContainer, NavbarLink } from '../styles/Navbar.style';
import logo from '../assets/images/logo.jpg';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar() {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user.currentUser);


    return (
        <NavbarContainer>
            <NavInnerContainer>
                <Left>
                    <Logo src={logo}></Logo>
                </Left>
                <Right>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> HOME </NavbarLink>
                        <NavbarLink to="/dresses"> DRESSES </NavbarLink>
                        <NavbarLink to="/accessories"> ACCESSORIES </NavbarLink>
                        <NavbarLink to="/news"> NEWS </NavbarLink>
                        <NavbarLink to="/contact"> CONTACT US </NavbarLink>
                        {/* Conditional rendering based on user authentication */}
                        {user ? (
                            <div>
                                <AccountCircleIcon /> {/* This will display the profile icon */}
                                {/* You can add more logic to display user info or link to profile */}
                            </div>
                        ) : (
                            <NavbarLink to="/login"> LOGIN </NavbarLink>
                        )}
                        <Dropdown />
                    </NavbarLinkContainer>
                </Right>
            </NavInnerContainer>
        </NavbarContainer>
    );
}

export default Navbar;