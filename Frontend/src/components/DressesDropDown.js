import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

export const DropdownContainer = styled.div`
    position: absolute;
    top: 100%; /* Position below the link */
    left: 0;
    display: none; /* Hide by default */
    background-color: white;
    border: 1px solid #ccc;
    border-top: none;
`;

export const DropdownItem = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: black;
    padding: 8px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f1f1f1;
    }
`;

const DressesDropdown = ({ onClose }) => {
    return (
        <DropdownContainer onMouseLeave={onClose}>
            {/* Use NavLink instead of NavbarLink */}
            <DropdownItem to="/wedding-dresses">Wedding Dresses</DropdownItem>
            <DropdownItem to="/soiree-dresses">Soiree Dresses</DropdownItem>
        </DropdownContainer>
    );
};

export default DressesDropdown;
