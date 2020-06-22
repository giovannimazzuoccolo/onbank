import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  isLink?: boolean;
  importance?: "PRIMARY" | "SECONDARY";
  icon?: JSX.Element;
  fullWidth?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  const { text, isLink, importance, icon, fullWidth } = props;
  const darkModeOn = useSelector((state: RootState) => state.darkmode);

  return (
    <SButton
      isLink={isLink}
      importance={importance}
      darkMode={darkModeOn}
      fullWidth={fullWidth}
      {...props}
    >
      {icon && <SIcon>{icon}</SIcon>}
      {text}
    </SButton>
  );
};

export default Button;

interface SButtonIProps {
  darkMode: "DARK" | "LIGHT";
  fullWidth?: boolean;
}
const SButton = styled.button<SButtonIProps>`
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  height: 2.2rem;
  line-height: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  background-color: ${(props) =>
    props.darkMode === "DARK" ? "#55d5dc" : "#00695c"};
  color: ${(props) => (props.darkMode === "DARK" ? "#333" : "#fff")};
  transition: 250ms all ease-in;

  &:hover {
    background-color: ${(props) =>
      props.darkMode === "DARK" ? "#019684" : "#42a7ad"};
    color: ${(props) => (props.darkMode === "DARK" ? "#333" : "#fff")};
  }
`;

export const SIcon = styled.i`
  margin-right: 4px;
  position: relative;
  top: 2px;
`;
