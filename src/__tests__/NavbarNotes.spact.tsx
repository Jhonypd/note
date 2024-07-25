import { render, screen } from "@testing-library/react";
import NavbarNotes from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("renderiza NavbarNotes com links de navegação", () => {
	render(
		<Router>
			<NavbarNotes />
		</Router>,
	);

	expect(screen.getByLabelText(/Logo da aplicação Notes/i)).toBeInTheDocument();
	expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
	expect(screen.getByText(/Notas/i)).toBeInTheDocument();
});

test("o botão de alternância da navbar tem o aria-label correto", () => {
	render(
		<Router>
			<NavbarNotes />
		</Router>,
	);
	const toggleButton = screen.getByLabelText(/Toggle navigation/i);
	expect(toggleButton).toBeInTheDocument();
});
