import {getPrimeFactor} from "../src/Factor";

describe("getPrimeFactor", () => {
  const testCases = [
    { num: 1, expects: [] },
    { num: 2, expects: [2] },
    { num: 4, expects: [2,2] },
    { num: 6, expects: [2,3] },
    { num: 13, expects: [13] },
    { num: 80, expects: [2, 2, 2, 2, 5] },

];
  testCases.forEach(({ num, expects }) => {
    it(`input (${num}) should return ${expects}`, () => {

      let results = getPrimeFactor(num);
      //then
      expect(results).toEqual(expects);

    });
  });
});