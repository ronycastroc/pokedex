import { MemoryRouter } from "react-router-dom";
import { Home } from "../pages/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@store";

describe("Home page", () => {
  it("renders the logo", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const logo = screen.getByAltText("pokedex-logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the welcome message", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const message = screen.getByText(/hello, welcome to your pokédex/i);
    expect(message).toBeInTheDocument();
  });

  it("renders the List button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const button = screen.getByRole("button", { name: /list/i });
    expect(button).toBeInTheDocument();
  });
});
