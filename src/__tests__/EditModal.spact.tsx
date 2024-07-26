import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditModal from "../components/EditModal/EditModal";
import * as TasksContext from "../context/TasksContext";

jest.mock("../context/TasksContext", () => ({
  useTasks: jest.fn(),
}));

describe("Componente EditModal", () => {
  const mockEditTask = jest.fn();
  const mockCloseModal = jest.fn();

  beforeEach(() => {
    (TasksContext.useTasks as jest.Mock).mockReturnValue({
      editTask: mockEditTask,
    });
  });

  test("deve renderizar o componente EditModal", () => {
    render(
      <EditModal
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
        closeModal={mockCloseModal}
      />
    );

    expect(screen.getByPlaceholderText("Título da nota")).toBeInTheDocument();
    expect(screen.getByLabelText("Texto da Nota")).toBeInTheDocument();
    expect(screen.getByLabelText("Tipo")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Salvar/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cancelar/i })).toBeInTheDocument();
  });

  test("deve chamar editTask e fechar o modal quando os campos são preenchidos e o botão Salvar é clicado", () => {
    render(
      <EditModal
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
        closeModal={mockCloseModal}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Título da nota"), {
      target: { value: "Novo título da nota" },
    });
    fireEvent.change(screen.getByLabelText("Texto da Nota"), {
      target: { value: "Novo texto da nota" },
    });
    fireEvent.change(screen.getByLabelText("Tipo"), {
      target: { value: "Escolar" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Salvar/i }));

    expect(mockEditTask).toHaveBeenCalledWith("1", {
      type: "Escolar",
      title: "Novo título da nota",
      text: "Novo texto da nota",
    });
    expect(mockCloseModal).toHaveBeenCalled();
  });

  test("deve fechar o modal quando o botão Cancelar é clicado", () => {
    render(
      <EditModal
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
        closeModal={mockCloseModal}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /Cancelar/i }));

    expect(mockCloseModal).toHaveBeenCalled();
  });

  test("deve atualizar o título quando o input é alterado", () => {
    render(
      <EditModal
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
        closeModal={mockCloseModal}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Título da nota"), {
      target: { value: "Novo título da nota" },
    });

    expect(screen.getByPlaceholderText("Título da nota")).toHaveValue("Novo título da nota");
  });

  test("deve atualizar o tipo quando uma nova opção é selecionada", () => {
    render(
      <EditModal
        id="1"
        title="Nota Teste"
        text="Texto da Nota"
        type="Pessoal"
        createdAt={new Date()}
        closeModal={mockCloseModal}
      />
    );

    fireEvent.change(screen.getByLabelText("Tipo"), {
      target: { value: "Business" },
    });
    expect(screen.getByLabelText("Tipo")).toHaveValue("Business");
  });
});
