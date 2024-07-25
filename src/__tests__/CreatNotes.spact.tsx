import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CreateNotes from "../components/CreateNote/CreateNote";

test("renders CreateNotes component with all elements", () => {
	render(<CreateNotes />);

	expect(screen.getByLabelText(/Red color option/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/Yellow color option/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/Green color option/i)).toBeInTheDocument();

	const textarea = screen.getByPlaceholderText(/Fazer compras/i);
	expect(textarea).toBeInTheDocument();
	expect(textarea).toHaveAttribute("placeholder", "Fazer compras");

	expect(screen.getByLabelText(/Tipo/i)).toBeInTheDocument();

	expect(screen.getByLabelText(/Salvar nota/i)).toBeInTheDocument();
});

test("handles Select option change", () => {
	const handleChange = jest.fn();
	render(<CreateNotes />);

	const select = screen.getByLabelText(/Tipo/i);
	fireEvent.change(select, { target: { value: "Pessoal" } });

	expect(handleChange).toHaveBeenCalled();
});
