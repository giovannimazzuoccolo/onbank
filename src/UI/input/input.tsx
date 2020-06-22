import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  //size?: "S" | "M" | "L"; size ? size : "",
  isRequired?: boolean;
}

const Input: React.FC<IProps & React.HTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { isRequired } = props;
  const darkModeOn = useSelector((state: RootState) => state.darkmode);

  return <SInput required={isRequired} darkMode={darkModeOn} {...props} />;
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
`;
