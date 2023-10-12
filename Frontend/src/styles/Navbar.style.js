import styled from 'styled-components';
import { Link } from 'react-router-dom';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
};

export const NavbarContainer = styled.nav`
width: 100%;
  padding: 10px 20px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* position: fixed; 
  top: 0;
  z-index: 100; */
`;

export const NavInnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const NavExtendedContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavbarLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  margin: 0 20px;
  color: #AD8047;
  transition: color 0.3s ease;

  &:hover {
    color: #E25822;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin: 0 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    margin: 0 5px;
  }
`;

export const Logo = styled.img`
  max-width: 110px;
  height: 50px;
  margin-right: 20px;
`;

export const HamburgerMenu = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;
  margin-right: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  background-color: black;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

export const MobileMenuItem = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  margin: 10px 0;
  color: #AD8047;
  transition: color 0.3s ease;

  &:hover {
    color: #E25822;
  }
`;
