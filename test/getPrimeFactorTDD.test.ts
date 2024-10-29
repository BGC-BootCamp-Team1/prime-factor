import { getPrimeFactorsTDD } from "../src/getPrimeFactorsTDD";

describe("add", () => {
  const testCases = [
    { num: 1, expected: [] },
    { num: 2, expected: [2] },
    { num: 3, expected: [3] },
    { num: 4, expected: [2, 2] },
    { num: 10, expected: [2, 5] }
  ];
  testCases.forEach(({ num, expected }) => {
    it(`getPrimeFactors(${num}) should return ${expected}`, () => {
      expect(getPrimeFactorsTDD(num)).toEqual(expected);
    });
  });
});
