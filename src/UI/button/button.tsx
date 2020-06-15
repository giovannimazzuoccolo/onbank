import React from "react";
import styled from "styled-components";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  isLink?: boolean;
  importance?: "PRIMARY" | "SECONDARY";
  icon?: JSX.Element;
}

const Button: React.FC<IProps> = (props) => {
  const { text, isLink, importance, icon } = props;

  return (
    <SButton isLink={isLink} importance={importance} {...props}>
      {icon}
      {text}
    </SButton>
  );
};

export default Button;

const SButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 2px;
  text-transform: uppercase;
  height: 1.5rem;
  line-height: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
