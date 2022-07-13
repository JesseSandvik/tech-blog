const request = require("supertest");

const app = require("../../app");

describe("Not Found", () => {
  it("01. Returns a 404 status and warning message for not found routes", async () => {
    const res = await request(app).get("/this-is-a-bad-route");

    expect(res.status).toEqual(404);
  });
});
