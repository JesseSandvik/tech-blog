import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  const handleClick = () => console.log("clicked");
  test("01. Renders the Button component", () => {
    render(<Button onClick={handleClick}>test button</Button>);

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
  });
  test("02. Button component renders the prop children", () => {
    render(<Button onClick={handleClick}>test button</Button>);

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
  });
  test("03. Button component inherits className passed as a prop", () => {
    render(
      <Button className="test-className" onClick={handleClick}>
        test button
      </Button>
    );

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
    expect(button).toHaveClass("test-className");
    expect(button).not.toHaveClass("bad-test-className");
  });
  test("04. Button component inherits id passed as a prop", () => {
    render(
      <Button id="test-id" onClick={handleClick}>
        test button
      </Button>
    );

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
    expect(button).toHaveAttribute("id", "test-id");
    expect(button).not.toHaveAttribute("id", "bad-test-id");
  });
  test("05. Button component has type 'submit' by default", () => {
    render(<Button onClick={handleClick}>test button</Button>);

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).not.toHaveAttribute("type", "button");
  });
  test("06. Button component inherits type passed as a prop", () => {
    render(
      <Button type="button" onClick={handleClick}>
        test button
      </Button>
    );

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
    expect(button).toHaveAttribute("type", "button");
    expect(button).not.toHaveAttribute("type", "submit");
  });
  test("07. Button component is not disabled by default", () => {
    render(<Button onClick={handleClick}>test button</Button>);

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
    expect(button).not.toHaveAttribute("disabled");
  });
  test("08. Button component is disabled when passed the 'disabled' prop", () => {
    render(
      <Button disabled onClick={handleClick}>
        test button
      </Button>
    );

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
    expect(button.textContent).not.toEqual("this shouldn't render");
    expect(button).toHaveAttribute("disabled");
  });
});
