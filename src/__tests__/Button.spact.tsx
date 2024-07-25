
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button/Button';

test('renders button with correct text and default variant', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  const button = screen.getByText(/Click Me/i);
  expect(button).toHaveClass('bg-blue-500 text-white');
  expect(button).toHaveClass('px-4 py-2 text-base');
});

test('renders button with custom variant and size', () => {
  render(<Button variant="destructive" size="large">Delete</Button>);
  expect(screen.getByText(/Delete/i)).toBeInTheDocument();
  const button = screen.getByText(/Delete/i);
  expect(button).toHaveClass('bg-red-700 text-white');
  expect(button).toHaveClass('px-6 py-3 text-lg');
});

test('button has aria-label if provided', () => {
  render(<Button ariaLabel="Submit form">Submit</Button>);
  const button = screen.getByLabelText(/Submit form/i);
  expect(button).toBeInTheDocument();
});

test('button applies additional className', () => {
  render(<Button className="extra-class">Extra Class</Button>);
  const button = screen.getByText(/Extra Class/i);
  expect(button).toHaveClass('extra-class');
});
