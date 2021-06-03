import { publicApiFunction } from "./mra-utility";

describe("Normal unit test", () => {
  it("Run happy case", () => {
    expect(publicApiFunction()).toBeTruthy();
  });
});
