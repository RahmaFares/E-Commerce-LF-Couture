import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import newsbg from '../assets/images/newsbg.jpg'
import { useNavigate } from 'react-router-dom';
import { LoginStart, LoginSuccess, LoginFailure } from "../redux/userRedux";

const Container = styled.div`
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

const Wrapper = styled.div`
  width: 25%;
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
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, currentUser } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(LoginStart());
    try {
      const response = await dispatch(login({ username, password }));
      // Assuming the login action returns an object with a 'type' property
      if (response.type === "user/loginSuccess") {
        console.log('Logged in user:', response.payload);
        navigate('/');
      } else {
        // This case handles any non-success types, including failure and errors
        alert("Login failed. Please check your username and password.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      // This is a network or server error
      alert("An error occurred while trying to log in.");
    }
  };



  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleClick}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={isFetching}>
            LOGIN
          </Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;