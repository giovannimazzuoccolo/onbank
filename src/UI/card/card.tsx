import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

interface IProps {
  title?: string;
  image?: JSX.Element;
}

const Card: React.FC<IProps> = ({ title, image, children }) => {
  const darkModeOn = useSelector((state: RootState) => state.darkmode);

  return (
    <CardContainer darkMode={darkModeOn}>
      {image && <CardImage>{image}</CardImage>}
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardContainer>
  );
};

export default Card;

interface CardContainerIProps {
  darkMode: string;
}

const CardContainer = styled.div<CardContainerIProps>`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); /* from: https://codepen.io/sdthornton/pen/wBZdXq  */
  max-width: 380px;

  background-color: ${(props) => (props.darkMode === "DARK" ? "#333" : "#fff")};
  color: ${(props) => (props.darkMode === "DARK" ? "#fafafa" : "inherit")};

  @media (max-width: 425px) {
    max-width: 300px;
    border-radius: 8px;
  }
`;

const CardTitle = styled.p`
  font-size: 1.6rem;
  margin: 0 0 1rem 0;
  font-family: "Work Sans", sans-serif;

  @media (prefers-color-scheme: light) {
    color: #444;
  }
  @media (prefers-color-scheme: dark) {
    color: #f1f1f1;
  }
`;

const CardImage = styled.picture`
  margin: -8px -16px;
  border-radius: 8px;
  margin-bottom: 8px;
  img {
    border-radius: 8px 8px 0px 0px;
    width: 100%;
  }
`;
