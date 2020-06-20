import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  isLink?: boolean;
  importance?: "PRIMARY" | "SECONDARY";
  icon?: JSX.Element;
}

const Button: React.FC<IProps> = (props) => {
  const { text, isLink, importance, icon } = props;
  const darkModeOn = useSelector((state: RootState) => state.darkmode);

  return (
    <SButton
      isLink={isLink}
      importance={importance}
      darkMode={darkModeOn}
      {...props}
    >
      {icon}
      {text}
    </SButton>
  );
};

export default Button;

interface SButtonIProps {
  darkMode: "DARK" | "LIGHT";
}
const SButton = styled.button<SButtonIProps>`
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  height: 1.9rem;
  line-height: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.darkMode === "DARK" ? "#55d5dc" : "#00695c"};
  color: ${(props) => (props.darkMode === "DARK" ? "#333" : "#fff")};
`;
