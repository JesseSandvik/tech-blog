describe("App", () => {
  it("stores the user preferred theme to localStorage", () => {
    cy.visit("/");

    cy.get("button")
      .contains("dark")
      .click()
      .should(() => {
        expect(localStorage.getItem("theme")).to.eq("light");
      });
  });
  it("changes the theme based on user preference stored in localStorage", () => {
    cy.visit("/");

    cy.get("button").contains("dark").click();

    cy.get("div[id='app']")
      .should("have.css", "background-color", "rgb(240, 240, 240)")
      .and("have.css", "color", "rgb(15, 15, 15)");
  });
});
