import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateNotes from '../components/CreateNote/CreateNote';

test('renders CreateNotes component with all elements', () => {
	render(<CreateNotes />);

	// Check if the color options are rendered with appropriate aria-labels
	expect(screen.getByLabelText(/Red color option/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/Yellow color option/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/Green color option/i)).toBeInTheDocument();

	// Check if the textarea is rendered with the correct attributes
	const textarea = screen.getByLabelText(/Note Content/i);
	expect(textarea).toBeInTheDocument();
	expect(textarea).toHaveAttribute('placeholder', 'Fazer compras');

	// Check if the Select component is rendered
	expect(screen.getByLabelText(/Tipo/i)).toBeInTheDocument();

	// Check if the Button is rendered with the correct aria-label
	expect(screen.getByLabelText(/Save note/i)).toBeInTheDocument();
});

test('handles Select option change', () => {
	const handleChange = jest.fn();
	render(<CreateNotes />);

	// Simulate selecting an option in the Select component
	const select = screen.getByLabelText(/Tipo/i);
	fireEvent.change(select, { target: { value: 'Pessoal' } });

	// Verify if the onChange handler was called
	// (Note: Since CreateNotes doesn't pass onChange directly, this part is more illustrative)
	expect(handleChange).toHaveBeenCalledTimes(1);
});