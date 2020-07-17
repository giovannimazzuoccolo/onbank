import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

interface AlertBarIProps {
	level: "WARNING" | "ALERT" | "INFO" | "SUCCESS";
	dismissable: boolean;
	children: JSX.Element;
}

const levels = {
	WARNING: "#4bb1cf",
	ALERT: "#ED4F32",
	SUCCESS: "#15CD72",
	INFO: "#288feb"
};

const AlertBar: React.FC<AlertBarIProps> = ({
	level,
	dismissable,
	children
}) => {
	const [dismissStatus, setDismiss] = React.useState<Boolean>(false);

	function DismissIcon() {
		return (
			<IoIosClose
				data-testid="dismiss-icon"
				onClick={() => {
					setDismiss(true);
				}}
			/>
		);
	}

	if (dismissStatus) {
		return null;
	} else {
		return (
			<SAlertBar level={level}>
				{children}
				{dismissable && <DismissIcon />}
			</SAlertBar>
		);
	}
};

export default AlertBar;

interface SAlertBarIProps {
	level: "WARNING" | "ALERT" | "INFO" | "SUCCESS";
}
export const SAlertBar = styled.div<SAlertBarIProps>`
	background-color: ${props => levels[props.level]};
	color: #fff;
	padding: 8px;
	margin-bottom: 16px;
	border-radius: 4px;
`;
