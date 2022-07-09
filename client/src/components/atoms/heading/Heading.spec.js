import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("<Heading />", () => {
  test("01. Renders the Heading component", () => {
    render(<Heading level="2">testing</Heading>);

    const heading = screen.getByRole("heading", {
      name: /testing/i,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h2");
    expect(heading.nodeName.toLowerCase()).not.toEqual("h4");
  });
  test("02. Heading component renders even if level prop is not provided", () => {
    render(<Heading>whoops</Heading>);

    const heading = screen.getByRole("heading", { name: /whoops/i });

    expect(heading).toBeInTheDocument();
  });
  test("03. Heading component renders the prop children", () => {
    render(<Heading>I am a child prop</Heading>);

    const heading = screen.getByRole("heading", {
      name: /I am a child prop/i,
    });

    expect(heading).toBeInTheDocument();
  });
  test("03. Heading component inherits className passed as prop", () => {
    render(<Heading className="test-className">test</Heading>);

    const heading = screen.getByRole("heading", { name: /test/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("test-className");
    expect(heading).not.toHaveClass("wrong-className");
  });
  test("04. Heading component inherits id passed as prop", () => {
    render(<Heading id="test-id">test heading</Heading>);

    const heading = screen.getByRole("heading", { name: /test heading/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "test-id");
    expect(heading).not.toHaveAttribute("id", "wrong-test-id");
  });
});
