import { getPrimeFactors } from "../src/getPrimeFactors";

describe("add", () => {
  const testCases = [
    { num: 1, expected: [] },
    { num: 2, expected: [2] },
    { num: 3, expected: [3] },
    { num: 4, expected: [2, 2] },
    { num: 8, expected: [2, 2, 2] },
    { num: 20, expected: [2, 2, 5] },
    { num: 23, expected: [23] },
    { num: 83, expected: [83] }
  ];
  testCases.forEach(({ num, expected }) => {
    it(`getPrimeFactors(${num}) should return ${expected}`, () => {
      //when
      const result = getPrimeFactors(num);

      //then
      expect(result).toEqual(expected);
    });
  });
});
