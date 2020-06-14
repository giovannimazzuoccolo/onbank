import React from "react";

import Input from "./../UI/input/input";
import Button from "./../UI/button/button";

import styled from "styled-components";
import Card from "../UI/card/card";

const Login: React.FC = () => {
  return (
    <LoginPage>
      <Card
        title="Login"
        image={<img src="/images/login-banner-light.png" alt="onBanking" />}
      >
        <SForm>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button text="enter" props />
        </SForm>
        <LoginHelp>
          <a href="/forgot-password">Forgot password?</a>{" "}
          <a href="/account">Open an account</a>
        </LoginHelp>
      </Card>
    </LoginPage>
  );
};

export default Login;

/** STYLED COMPONENTS **/

export const LoginPage = styled.main`
  width: 100%;
  height: 100%;
  background: url("images/login.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginHelp = styled.div`
  display: flex;
  margin: 16px 0px 8px 0px;
  justify-content: space-between;
`;
