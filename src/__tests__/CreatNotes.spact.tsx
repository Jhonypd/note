import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CreateNotes from "../components/CreateNote/CreateNote";
import * as TasksContext from "../context/TasksContext";

jest.mock("../context/TasksContext", () => ({
  useTasks: jest.fn(),
}));

describe("Componente CreateNotes", () => {
  const mockAddTask = jest.fn();

  beforeEach(() => {
    (TasksContext.useTasks as jest.Mock).mockReturnValue({
      addTask: mockAddTask,
    });
  });

  test("deve renderizar o componente CreateNotes", () => {
    render(<CreateNotes />);

    expect(screen.getByPlaceholderText("Fazer compras")).toBeInTheDocument();
    expect(screen.getByLabelText("Tipo")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Salvar/i })).toBeInTheDocument();
  });

  test("deve chamar addTask quando os campos são preenchidos e o botão Salvar é clicado", () => {
    render(<CreateNotes />);

    fireEvent.change(screen.getByPlaceholderText("Fazer compras"), {
      target: { value: "Comprar leite" },
    });
    fireEvent.change(screen.getByLabelText("Tipo"), {
      target: { value: "Escolar" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Salvar/i }));

    expect(mockAddTask).toHaveBeenCalledWith("Escolar", "Comprar leite");
  });

  test("deve limpar os campos após salvar", () => {
    render(<CreateNotes />);

    fireEvent.change(screen.getByPlaceholderText("Fazer compras"), {
      target: { value: "Comprar leite" },
    });
    fireEvent.change(screen.getByLabelText("Tipo"), {
      target: { value: "Escolar" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Salvar/i }));

    expect(screen.getByPlaceholderText("Fazer compras")).toHaveValue("");

    const select = screen.getByLabelText("Tipo") as HTMLSelectElement;
    expect(select.value).toBe("");
  });

  test("deve atualizar o tipo quando uma nova opção é selecionada", () => {
    render(<CreateNotes />);

    fireEvent.change(screen.getByLabelText("Tipo"), {
      target: { value: "Business" },
    });

    expect(screen.getByLabelText("Tipo")).toHaveValue("Business");
  });
});
