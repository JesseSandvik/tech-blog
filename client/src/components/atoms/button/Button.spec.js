import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("01. Renders the Button component", () => {
    render(<Button>test button</Button>);

    const button = screen.getByRole("button", { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button.nodeName.toLowerCase()).toEqual("button");
    expect(button.textContent).toEqual("test button");
  });
});
