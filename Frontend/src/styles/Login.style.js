import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const LoginWrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px ;
  padding: 10px;
`;

