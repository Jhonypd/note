import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "../context/SearchContext";
import Search from "../components/Search";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Componente Search", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    mockNavigate.mockClear();
    (require("react-router-dom").useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  test("deve renderizar o componente Search", () => {
    render(
      <Router>
        <SearchProvider>
          <Search />
        </SearchProvider>
      </Router>
    );

    expect(screen.getByPlaceholderText("Buscar...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Buscar/i })).toBeInTheDocument();
  });

  test("deve atualizar o searchTerm quando o input é alterado", () => {
    render(
      <Router>
        <SearchProvider>
          <Search />
        </SearchProvider>
      </Router>
    );

    const input = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(input, { target: { value: "teste" } });

    expect(input).toHaveValue("teste");
  });

  test("deve navegar para a página de busca e limpar o searchTerm ao submeter o formulário", () => {
    render(
      <Router>
        <SearchProvider>
          <Search />
        </SearchProvider>
      </Router>
    );

    const input = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(input, { target: { value: "teste" } });

    const button = screen.getByRole("button", { name: /Buscar/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/search?query=teste", { replace: true });
    expect(input).toHaveValue("");
  });
});
