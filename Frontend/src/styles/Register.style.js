import React, { useState } from 'react';
import styled from 'styled-components';
import newsbg from '../assets/images/newsbg.jpg'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 150vh;
background-image: url(${newsbg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;
export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
 // gap: 20px;
`;


export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px ;
  padding: 10px;
`;



export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

export const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #4285f4;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

`;

export const Error = styled.p`
  color: #f44336;
`;

