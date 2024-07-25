import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Select from "../components/Select/Select";

const options = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
];

test("triggers onChange handler when an option is selected", () => {
	const handleChange = jest.fn();

	render(
		<Select
			options={options}
			onChange={handleChange}
			id="select-id"
			label="Select Label"
		/>,
	);

	fireEvent.change(screen.getByLabelText(/Select Label/i), { target: { value: "1" } });

	expect(handleChange).toHaveBeenCalled();
	const event = handleChange.mock.calls[0][0];
	expect(event.target.value).toBe("1");
});
