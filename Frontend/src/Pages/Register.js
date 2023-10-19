import React, { useState } from "react";
import { MainContainer, RegisterContainer, Form, Input, Wrapper, Title, Agreement, Button } from '../styles/Register.style';
import { LoginContainer, LoginWrapper, Link, LoginForm, LoginInput } from '../styles/Login.style';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

const Error = styled.span`
  color: red;
`;

const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // TODO: handle form submit based on isLogin value
    };

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(Register({ username, password }));
    };

    return (
        <div>
            <MainContainer>
                {isLogin ? (
                    <LoginContainer>
                        <LoginWrapper>
                            <Title>LOGIN</Title>
                            <LoginForm onSubmit={handleFormSubmit}>
                                <LoginInput placeholder="Username " />
                                <LoginInput placeholder="Password " />
                                <Button>LOGIN</Button>
                                <Link>Forgot Password</Link>
                                <Link onClick={handleToggleForm}>DO NOT HAVE AN ACCOUNT?</Link>
                            </LoginForm>
                        </LoginWrapper>
                    </LoginContainer>
                ) : (
                    <RegisterContainer>
                        <Wrapper>
                            <Title>CREATE AN ACCOUNT</Title>
                            <Form>
                                <Input
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Agreement>
                                    By creating an account, I consent to the processing of my personal
                                    data in accordance with the <b>PRIVACY POLICY</b>
                                </Agreement>
                                <Button onClick={handleClick} disabled={isFetching}>
                                    CREATE
                                </Button>
                                {error && <Error>Something went wrong...</Error>}
                            </Form>
                        </Wrapper>
                    </RegisterContainer>
                )}
            </MainContainer>
        </div>
    );
};

export default Register;
