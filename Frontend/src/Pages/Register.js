// import React, { useState } from "react";
// import { MainContainer, RegisterContainer, Form, Input, Wrapper, Title, Agreement, Button } from '../styles/Register.style';
// import { LoginContainer, LoginWrapper, Link, LoginForm, LoginInput } from '../styles/Login.style';
// import { useDispatch, useSelector } from "react-redux";
// import styled from 'styled-components';
// import { register, login } from "../redux/apiCalls";
// import { toast } from 'react-toastify';

// const Error = styled.span`
//   color: red;
// `;

// const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };

// const isValidPassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
//     return passwordRegex.test(password);
// };

// const isValidUsername = (username) => {
//     const usernameRegex = /^[a-zA-Z0-9]+$/;
//     return usernameRegex.test(username);
// };

// const Register = () => {
//     const [username, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isLogin, setIsLogin] = useState(true);
//     const [isAdmin, setIsAdmin] = useState(false);

//     const handleToggleForm = () => {
//         setIsLogin(!isLogin);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!isValidUsername(username)) {
//             toast.error("Invalid username!");
//             return;
//         }

//         if (!isLogin && !isValidEmail(email)) {
//             toast.error("Invalid email address!");
//             return;
//         }

//         if (!isValidPassword(password)) {
//             toast.error("Invalid password!");
//             return;
//         }

//         if (isLogin) {
//             dispatch(login({ username, password, isAdmin }));
//         } else {
//             dispatch(register({ username, email, password }));
//         }
//     };

//     const dispatch = useDispatch();
//     const { isFetching, error } = useSelector((state) => state.user);

//     return (
//         <div>
//             <MainContainer>
//                 {isLogin ? (
//                     <LoginContainer>
//                         <LoginWrapper>
//                             <Title>LOGIN</Title>
//                             <LoginForm onSubmit={handleFormSubmit}>
//                                 <LoginInput placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
//                                 <LoginInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 <input type="checkbox" onChange={() => setIsAdmin(!isAdmin)} /> Login as Admin {/* Checkbox for admin login */}
//                                 <Button>LOGIN</Button>
//                                 <Link>Forgot Password</Link>
//                                 <Link onClick={handleToggleForm}>DO NOT HAVE AN ACCOUNT?</Link>
//                             </LoginForm>
//                         </LoginWrapper>
//                     </LoginContainer>
//                 ) : (
//                     <RegisterContainer>
//                         <Wrapper>
//                             <Title>CREATE AN ACCOUNT</Title>
//                             <Form onSubmit={handleFormSubmit}>
//                                 <Input
//                                     placeholder="Username"
//                                     value={username}
//                                     onChange={(e) => setUserName(e.target.value)}
//                                 />
//                                 <Input
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <Input
//                                     placeholder="Password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                                 <Agreement>
//                                     By creating an account, I consent to the processing of my personal
//                                     data in accordance with the <b>PRIVACY POLICY</b>
//                                 </Agreement>
//                                 <Button type="submit" disabled={isFetching}>
//                                     CREATE
//                                 </Button>
//                             </Form>
//                         </Wrapper>
//                     </RegisterContainer>
//                 )}
//             </MainContainer>
//         </div>
//     );
// };

// export default Register;

import React from 'react';
import styled from "styled-components";
import newsbg from '../assets/images/newsbg.jpg';
import { useNavigate } from 'react-router-dom';

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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // ... handle your registration logic here ...

        // After successful registration, redirect to home page
        navigate('/');
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleRegister}>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
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
