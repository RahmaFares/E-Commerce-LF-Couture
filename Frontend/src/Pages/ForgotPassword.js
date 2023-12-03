import React, { useState } from 'react';
import styled from 'styled-components';
import { publicRequest } from '../reqMethods'; // Ensure this is the correct path

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: /* Your background style here */;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  &:hover {
    background-color: darken(teal, 10%);
  }
`;

const Message = styled.span`
  color: green;
  margin-top: 15px;
  text-align: center;
`;

// ForgotPassword Component
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await publicRequest.post('/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send password reset email.');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Forgot Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Send Reset Link</Button>
        </Form>
        {message && <Message>{message}</Message>}
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;