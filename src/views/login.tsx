import React from "react";

import Input from "../UI/input/input";
import Button from "../UI/button/button";
import Link from "../UI/link/link";

import styled, { keyframes } from "styled-components";
import Card from "../UI/card/card";

import { useSelector, useDispatch } from "react-redux";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { RootState } from "../types";

import { toogleColorScheme } from "../features/darkMode/darkMode.slice";
const Login: React.FC = () => {
  const darkModeOn = useSelector((state: RootState) => state.darkmode);
  const dispatch = useDispatch();
  function dispatchDarkMode() {
    dispatch(toogleColorScheme());
  }

  return (
    <LoginPage darkMode={darkModeOn}>
      <Card
        image={
          <img src={`/images/login-banner-${darkModeOn}.png`} alt="onBanking" />
        }
      >
        <SForm>
          <SLegend>Sign in on your bank account</SLegend>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button text="enter" />
        </SForm>
        <LoginHelp>
          <Link href="/forgot-password">Forgot password?</Link>{" "}
          <Link href="/account">Open an account</Link>
        </LoginHelp>
        {darkModeOn === "LIGHT" ? (
          <Button
            icon={<IoIosMoon />}
            text="Dark mode"
            onClick={dispatchDarkMode}
          />
        ) : (
          <Button
            icon={<IoIosSunny />}
            text="Light mode"
            onClick={dispatchDarkMode}
          />
        )}
      </Card>
    </LoginPage>
  );
};

export default Login;

/** STYLED COMPONENTS **/

interface LoginPageIProps {
  darkMode: "DARK" | "LIGHT";
}

const fade = keyframes`
  from {
    opacity:0.3;
  }

  to {
    opacity:1;
  }
`;

export const LoginPage = styled.main<LoginPageIProps>`
  width: 100%;
  height: 100%;
  background: url("images/login-${(props) =>
    props.darkMode}.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  animation: ${fade} 300ms ease-in;
  

  @media (max-width: 425px) {
    justify-content: center;
    align-items: center;
  }
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

export const SLegend = styled.legend`
  margin: 8px 0px;
  font-size: 0.9rem;
`;
