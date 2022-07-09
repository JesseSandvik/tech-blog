import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  test("01. Renders the Header component", () => {
    render(<Header>test title</Header>);

    const header = screen.getByRole("banner");

    expect(header).toBeDefined();
    expect(header).toBeInTheDocument();
    expect(header.nodeName.toLowerCase()).toEqual("header");
  });
  test("02. Header component renders the prop children", () => {
    render(<Header>test title</Header>);

    const header = screen.getByRole("banner");

    expect(header).toBeDefined();
    expect(header.nodeName.toLowerCase()).toEqual("header");
    expect(header.textContent).toEqual("test title");
    expect(header.textContent).not.toEqual("bad test title");
  });
});
