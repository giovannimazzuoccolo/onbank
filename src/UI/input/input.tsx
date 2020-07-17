import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  //size?: "S" | "M" | "L"; size ? size : "",
  isRequired?: boolean;
  name: string;
  placeholder: string;
  errorText?: string;
}

const Input: React.FC<IProps & React.HTMLAttributes<HTMLInputElement>> = ({
  isRequired,
  name,
  placeholder,
  errorText,
}) => {
  const darkModeOn = useSelector((state: RootState) => state.darkmode);
  const [focused, setLabelFocus] = React.useState<boolean>(false);

  function manageFocus() {
    if (!focused) {
      setLabelFocus(true);
    }
  }

  return (
    <SFieldset>
      <SLabel htmlFor={name} focused={focused}>
        {placeholder}
      </SLabel>
      <SInput
        required={isRequired}
        darkMode={darkModeOn}
        placeholder={placeholder}
        name={name}
        onFocus={manageFocus}
        onBlur={manageFocus}
      />
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </SFieldset>
  );
};

export default Input;

interface SInputIProps {
  darkMode: "DARK" | "LIGHT";
}

const SInput = styled.input<SInputIProps>`
  border-radius: 0;
  font-size: 1.1rem;
  line-height: 1.1rem;
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid #eee;
  color: ${(props) => (props.darkMode === "DARK" ? "#fafafa" : "inherit")};
  background-color: ${(props) =>
    props.darkMode === "DARK" ? "#222" : "#f1f1f1"};
  transition: 250ms all ease-in;
  height: 1.5rem;
  position: relative;
  z-index: 1;
`;

interface SLabelIProps {
  focused: boolean;
}

const SlideUpLabel = keyframes`
  0% {
    top: 8px;
    opacity:0;
  } 
  100% {
    top: -2px;
    opacity:1;
  }
`;

const SLabel = styled.label<SLabelIProps>`
  margin-left: 6px;
  position: relative;
  font-size: 0.8rem;
  z-index: 2;
  top: -2px;
  opacity: 1;
  animation ${SlideUpLabel} 150ms ease-in-out;
  display: ${(props) => (props.focused ? "static" : "none")};

`;

const SFieldset = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  min-height: 61px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  /* overflow: hidden;
  width: 100%; */
`;

const ErrorText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  margin-top: 2px;
  color: #b02220;
`;
