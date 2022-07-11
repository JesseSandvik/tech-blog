describe("App", () => {
  context("Local Storage", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });
    it("stores the string representing the user preferred theme to localStorage", () => {
      cy.get("button")
        .contains("light")
        .click()
        .should(() => {
          expect(localStorage.getItem("theme")).to.eq("light");
        })
        .focused()
        .click()
        .should(() => {
          expect(localStorage.getItem("theme")).to.eq("dark");
        });
    });
    it("changes the theme based on a string representing the user preferred theme in localStorage", () => {
      cy.get("button").contains("light").click();

      cy.get("div[id='app']")
        .should("have.css", "background-color", "rgb(240, 240, 240)")
        .and("have.css", "color", "rgb(15, 15, 15)");
    });
    it("reverts the theme based on a string representing the user preferred theme in localStorage", () => {
      cy.get("button").contains("light").click();
      cy.get("button").contains("dark").click();

      cy.get("div[id='app']")
        .should("have.css", "background-color", "rgb(15, 15, 15)")
        .and("have.css", "color", "rgb(240, 240, 240)");
    });
  });
});
