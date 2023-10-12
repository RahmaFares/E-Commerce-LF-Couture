import styled from "styled-components";
import React, { useState } from "react";

export const DropdownContainer = styled.div`
position: relative;
`

export const OpenLinksButton = styled.button`
width: 60px;
height: 40px; 
background: none; 
border: none;
color: #AD8047;
font-size: 45px;
cursor: pointer;
&:hover {
    text-decoration: underline;
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  width: 150px;
  top: 100%;
  right: 0;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const DropdownMenuItem = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const BoldItalicItem = styled(DropdownMenuItem)`
  font-weight: bold;
  font-style: italic;
`;





