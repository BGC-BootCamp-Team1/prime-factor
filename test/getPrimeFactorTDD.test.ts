import { getPrimeFactorsTDD } from "../src/getPrimeFactorsTDD";

describe("add", () => {
  const testCases = [
    { num: 1, expected: [] }
  ];
  testCases.forEach(({ num, expected }) => {
    it(`getPrimeFactors(${num}) should return ${expected}`, () => {
      //when
      const result = getPrimeFactorsTDD(num);

      //then
      expect(result).toEqual(expected);
    });
  });
});
