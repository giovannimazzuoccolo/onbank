import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import styled from "styled-components";

interface LinkWrapperIProps {
  href: string;
}

const LinkWrapper: React.FC<LinkWrapperIProps> = ({ href, children }) => {
  const darkModeOn = useSelector((state: RootState) => state.darkmode);

  return (
    <SLink to={href} darkMode={darkModeOn}>
      {children}
    </SLink>
  );
};

export default LinkWrapper;

interface SLinkIProps {
  darkMode: "DARK" | "LIGHT";
}

const SLink = styled(Link)<SLinkIProps>`
  text-decoration: normal;
  &:hover {
    text-decoration: underline;
  }

  color: ${(props) => (props.darkMode === "DARK" ? "#55d5dc" : "#00695c")};
`;
