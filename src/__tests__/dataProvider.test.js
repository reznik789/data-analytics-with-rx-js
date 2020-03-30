import dataProvider from "../utils/dataProvider";

describe("dataProvider test", () => {
  test("Result contain right values", done => {
    dataProvider.subscribe(data => {
      expect(data).toEqual(
        expect.objectContaining({
          temperature: expect.toBeOneOf([expect.any(Number), "N/A"]),
          pressure: expect.toBeOneOf([expect.any(Number), "N/A"]),
          humidity: expect.toBeOneOf([expect.any(Number), "N/A"])
        })
      );
      done();
    });
  });
});
