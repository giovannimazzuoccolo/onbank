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
	errorText
}) => {
	const darkModeOn = useSelector((state: RootState) => state.darkmode);
	const [focused, setLabelFocus] = React.useState<boolean>(false);

	function manageFocus() {
		if (!focused) {
			setLabelFocus(true);
		}
	}

	return (
		<SFieldset darkMode={darkModeOn}>
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
  border:none;
  color: ${props => (props.darkMode === "DARK" ? "#fafafa" : "inherit")};
  background-color: transparent;
  /*background-color: ${props =>
		props.darkMode === "DARK" ? "#222" : "#f1f1f1"};
  border-color: ${props => (props.darkMode === "DARK" ? "#222" : "#f1f1f1")};*/
  transition: 250ms all ease-in;
  height: 1.5rem;
  position: relative;
  z-index: 1;
  &: focus {
    outline: none;
  }
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
    top: -4px;
    opacity:1;
  }
`;

const SLabel = styled.label<SLabelIProps>`
  position: relative;
  font-size: 0.8rem;
  z-index: 2;
  opacity: 1;
  top: 0px;
  animation ${SlideUpLabel} 150ms ease-in-out;
  display: ${props => (props.focused ? "block" : "none")};
`;

interface SFieldsetIProps {
	darkMode: "DARK" | "LIGHT";
}

const SFieldset = styled.div<SFieldsetIProps>`
  padding: 8px;
  margin: 0;
  border: none;
  display: flex;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid
    ${props => (props.darkMode === "DARK" ? "#111" : "#f0f0f0")};
  flex-direction: column;
  /*background: ${props => (props.darkMode === "DARK" ? "#222" : "#f1f1f1")};*/
  /* overflow: hidden;
  width: 100%; */
`;

const ErrorText = styled.p`
	padding: 0;
	margin: 0;
	font-size: 0.8rem;
	color: #b02220;
`;
