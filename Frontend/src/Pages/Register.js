import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import newsbg from '../assets/images/newsbg.jpg';
import { register } from '../redux/apiCalls';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh; 
background-image: url(${newsbg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(register(userInfo))
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Registration failed', error);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleRegister}>
          <Input
            name="username"
            placeholder="Username"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={userInfo.password}
            onChange={handleChange}
            required
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;