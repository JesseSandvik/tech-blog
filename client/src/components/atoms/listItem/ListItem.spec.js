import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

describe("<ListItem />", () => {
  test("01. Renders the ListItem component", () => {
    render(<ListItem>testing</ListItem>);

    const listItem = screen
      .getAllByRole("listitem")
      .find((item) => item.textContent.match("testing"));

    expect(listItem).toBeInTheDocument();
  });
});
