import React from "react";
import AlertBar from "./alertBar";

import { render } from "@testing-library/react";

it("should display some text", () => {
	const { getByText } = render(
		<AlertBar dismissable={false} level="INFO">
			<p>Some informations.</p>
		</AlertBar>
	);

	expect(getByText("Some informations.")).toBeInTheDocument();
});

it("should show X - dismiss icon -", () => {
	const { getByTestId } = render(
		<AlertBar dismissable={true} level="WARNING">
			<p>Some alert</p>
		</AlertBar>
	);

	expect(getByTestId("dismiss-icon")).toBeInTheDocument();
});
