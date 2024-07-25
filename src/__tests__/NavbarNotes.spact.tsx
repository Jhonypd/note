
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarNotes from '../components/Navbar';

describe('Testes dos Componentes Header e NavbarNotes', () => {

  describe('Componente Header', () => {
    test('deve renderizar o componente Header com a Navbar', () => {
      render(
        <Router>
          <Header />
        </Router>
      );
      
      expect(screen.getByRole('banner')).toBeInTheDocument(); 
      
      expect(screen.getByText('Inicio')).toBeInTheDocument();
      expect(screen.getByText('Notas')).toBeInTheDocument();
    });
  });

  describe('Componente NavbarNotes', () => {
    test('deve renderizar a Navbar com links corretos', () => {
      render(
        <Router>
          <NavbarNotes />
        </Router>
      );

      expect(screen.getByText('Inicio')).toBeInTheDocument();
      expect(screen.getByText('Notas')).toBeInTheDocument();
    });

	test('deve renderizar o logo na Navbar', () => {
		render(
		  <Router>
			<NavbarNotes />
		  </Router>
		);
  
		expect(screen.getByText(/Notes/i)).toBeInTheDocument();
	  });

    test('deve exibir a Navbar ao clicar no botão de toggle', () => {
      render(
        <Router>
          <NavbarNotes />
        </Router>
      );

      const toggleButton = screen.getByRole('button', { name: /toggle/i });
      expect(toggleButton).toBeInTheDocument();

      fireEvent.click(toggleButton);

      expect(screen.getByText('Inicio')).toBeInTheDocument();
      expect(screen.getByText('Notas')).toBeInTheDocument();
    });
  });

});
