import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationLink from "./NavigationLink";

describe("<NavigationLink />", () => {
  test("01. Renders the NavigationLink component", () => {
    render(
      <Router>
        <NavigationLink to="/">testing</NavigationLink>
      </Router>
    );

    const link = screen.getByRole("link", { name: /testing/i });
    const fakeLink = screen.queryByRole("link", {
      name: /fake link/i,
    });

    expect(link).toBeInTheDocument();
    expect(link.nodeName.toLowerCase()).toEqual("a");
    expect(fakeLink).not.toBeInTheDocument();
  });
  test("02. NavigationLink component renders the prop children", () => {
    render(
      <Router>
        <NavigationLink to="/test">this is a test</NavigationLink>
      </Router>
    );

    const link = screen.getByRole("link", {
      name: /this is a test/i,
    });

    expect(link).toBeInTheDocument();
    expect(link.textContent).toEqual("this is a test");
    expect(link.textContent).not.toEqual("this should not exist");
  });
  test("03. NavigationLink component inherits className passed as prop", () => {
    render(
      <Router>
        <NavigationLink className="test-className" to="/test">
          this is a test
        </NavigationLink>
      </Router>
    );

    const link = screen.getByRole("link", {
      name: /this is a test/i,
    });

    expect(link).toBeInTheDocument();
    expect(link.textContent).toEqual("this is a test");
    expect(link.textContent).not.toEqual("this should not exist");
    expect(link).toHaveClass("test-className");
    expect(link).not.toHaveClass("bad-className");
  });
  test("04. NavigationLink component inherits id passed as prop", () => {
    render(
      <Router>
        <NavigationLink id="test-id" to="/test">
          this is a test
        </NavigationLink>
      </Router>
    );

    const link = screen.getByRole("link", {
      name: /this is a test/i,
    });

    expect(link).toBeInTheDocument();
    expect(link.textContent).toEqual("this is a test");
    expect(link.textContent).not.toEqual("this should not exist");
    expect(link).toHaveAttribute("id", "test-id");
    expect(link).not.toHaveAttribute("id", "bad-test-id");
  });
});
