const request = require("supertest");
const app = require("../../app");

describe("Error Handler", () => {
  it("01. Returns an custom error for a 404 status", async () => {
    const res = await request(app).get("/this-is-a-bad-route");

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(404);
    expect(res.body.error).toEqual("Path not found:   /this-is-a-bad-route");
  });
});
