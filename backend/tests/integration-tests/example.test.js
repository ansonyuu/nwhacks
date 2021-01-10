const request = require("supertest");
const { app } = require("../../index");
const { declareMatchRoutes } = require("../../api/declareMatchRoutes")
const { declareDatabaseRoutes } = require("../../api/declareUserRoutes")

beforeAll(() => {
  declareMatchRoutes(app);
  declareDatabaseRoutes(app);
});

describe("Test creatematch", () => {
  test("It should response the POST method", done => {
    request(app)
      .post("/creatematch/kate")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
    done();
  });
});