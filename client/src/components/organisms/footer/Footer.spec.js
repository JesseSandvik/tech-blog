import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  test("01. Renders the Footer component", () => {
    render(<Footer>test footer</Footer>);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeDefined();
    expect(footer).toBeInTheDocument();
    expect(footer.nodeName.toLowerCase()).toEqual("footer");
  });
  test("02. Footer component renders the prop children", () => {
    render(<Footer>test footer</Footer>);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeDefined();
    expect(footer.nodeName.toLowerCase()).toEqual("footer");
    expect(footer.textContent).toEqual("test footer");
    expect(footer.textContent).not.toEqual("bad test title");
  });
});
