import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

describe("<ListItem />", () => {
  test("01. Renders the ListItem component", () => {
    render(<ListItem>testing</ListItem>);

    const listItem = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
    expect(listItem.nodeName.toLowerCase()).toEqual("li");
  });
  test("02. ListItem component renders the prop children", () => {
    render(<ListItem>testing</ListItem>);

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match("testing"));

    expect(listItem).toBeInTheDocument();
    expect(listItem.textContent).toEqual("testing");
    expect(listItem.textContent).not.toEqual("bad string");
  });
  test("03. ListItem component inherits className passed as prop", () => {
    render(<ListItem className="test-className">testing</ListItem>);

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match("testing"));

    expect(listItem).toBeInTheDocument();
    expect(listItem.textContent).toEqual("testing");
    expect(listItem.textContent).not.toEqual("bad string");
    expect(listItem).toHaveClass("test-className");
    expect(listItem).not.toHaveClass("bad-test-className");
  });
  test("04. ListItem component inherits id passed as prop", () => {
    render(<ListItem id="test-id">testing</ListItem>);

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match("testing"));

    expect(listItem).toBeInTheDocument();
    expect(listItem.textContent).toEqual("testing");
    expect(listItem.textContent).not.toEqual("bad string");
    expect(listItem).toHaveAttribute("id", "test-id");
    expect(listItem).not.toHaveAttribute("id", "bad-test-id");
  });
  test("04. ListItem component inherits title passed as prop", () => {
    render(<ListItem title="test-title">testing</ListItem>);

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match("testing"));

    expect(listItem).toBeInTheDocument();
    expect(listItem.textContent).toEqual("testing");
    expect(listItem.textContent).not.toEqual("bad string");
    expect(listItem).toHaveAttribute("title", "test-title");
    expect(listItem).not.toHaveAttribute("title", "bad-test-title");
  });
});
