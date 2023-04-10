import { Home } from "../pages/index";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("renders the logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("pokedex-logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the welcome message", () => {
    render(<Home />);
    const message = screen.getByText(/hello, welcome to your pokédex/i);
    expect(message).toBeInTheDocument();
  });

  it("renders the List button", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /list/i });
    expect(button).toBeInTheDocument();
  });
});
