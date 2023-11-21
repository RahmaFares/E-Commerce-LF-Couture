import React from 'react';
import { NavbarContainer, Logo, NavExtendedContainer, NavInnerContainer, Left, Right, NavbarLinkContainer, NavbarLink } from '../styles/Navbar.style';
import logo from '../assets/images/logo.jpg';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile-settings');
    };

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
                        {user && (
                            <PersonIcon
                                style={{ color: 'white', fontSize: '30px', cursor: 'pointer' }}
                                onClick={handleProfileClick}
                            />
                        )}
                        <Dropdown user={user} />
                    </NavbarLinkContainer>
                </Right>
            </NavInnerContainer>
        </NavbarContainer>
    );
}

export default Navbar;