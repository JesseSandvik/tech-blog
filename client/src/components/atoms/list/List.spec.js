import { render, screen } from "@testing-library/react";
import List from "./List";

describe("<List />", () => {
  test("01. Renders the List component as a ul by default", () => {
    render(
      <List>
        <li>this is a test</li>
      </List>
    );

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list.nodeName.toLowerCase()).toEqual("ul");
  });
  test("02. Renders the ordered List component when passed the 'ordered' prop", () => {
    render(
      <List ordered>
        <li>this is a test</li>
      </List>
    );

    const listItem = screen.getByRole("list");

    expect(listItem).toBeInTheDocument();
    expect(listItem.nodeName.toLowerCase()).toEqual("ol");
  });
  test("03. List component renders the prop children", () => {
    render(
      <List ordered>
        <li>this is a test</li>
      </List>
    );

    const list = screen.getByRole("list");

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match(/this is a test/i));

    expect(list).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(list.nodeName.toLowerCase()).toEqual("ol");
    expect(listItem.nodeName.toLowerCase()).toEqual("li");
  });
  test("04. List component inherits className passed as prop", () => {
    render(
      <List className="test-className">
        <li>testing</li>
      </List>
    );

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list.nodeName.toLowerCase()).toEqual("ul");
    expect(list).toHaveClass("test-className");
    expect(list).not.toHaveClass("wrong-className");
  });
  test("05. List component inherits id passed as prop", () => {
    render(
      <List id="test-id">
        <li>testing</li>
      </List>
    );

    const list = screen.getByRole("list");

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match(/testing/i));

    expect(list.nodeName.toLowerCase()).toEqual("ul");
    expect(list).toHaveAttribute("id", "test-id");
    expect(list).not.toHaveAttribute("id", "wrong-test-id");
    expect(listItem).toBeInTheDocument();
    expect(listItem.nodeName.toLowerCase()).toEqual("li");
  });
});
