import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from '../components/Cards/Card';
import * as TasksContext from '../context/TasksContext';

jest.mock('../context/TasksContext', () => ({
  useTasks: jest.fn(),
}));

describe('Componente Cards', () => {
  const mockDeleteTask = jest.fn();
  
  beforeEach(() => {
    (TasksContext.useTasks as jest.Mock).mockReturnValue({
      deleteTask: mockDeleteTask,
    });
  });

  test('deve renderizar o componente Cards com informações corretas', () => {
    render(
      <Cards
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
      />
    );

    expect(screen.getByText('Nota Teste')).toBeInTheDocument();
    expect(screen.getByText('Texto da Nota')).toBeInTheDocument();
    expect(screen.getByText('Editar')).toBeInTheDocument();
    expect(screen.getByText('Deletar')).toBeInTheDocument();
  });

  test('deve abrir o modal de edição quando o botão Editar é clicado', () => {
    render(
      <Cards
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
      />
    );

    fireEvent.click(screen.getByText('Editar'));

    expect(screen.getByLabelText('Texto da Nota')).toBeInTheDocument(); 
  });

  test('deve chamar deleteTask quando o botão Deletar é clicado', () => {
    render(
      <Cards
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
      />
    );

    fireEvent.click(screen.getByText('Deletar'));

    expect(mockDeleteTask).toHaveBeenCalledWith('1');
  });

  test('deve fechar o modal de edição quando o botão Cancelar é clicado no modal', () => {
    render(
      <Cards
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
      />
    );

    fireEvent.click(screen.getByText('Editar')); 
    fireEvent.click(screen.getByRole('button', { name: /Cancelar/i }));

    expect(screen.queryByLabelText('Texto da Nota')).not.toBeInTheDocument(); 
  });
});
