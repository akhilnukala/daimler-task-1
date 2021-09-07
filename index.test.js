import dummy from "./dummy";
import { createNewObjectFromApiResponse } from "./index";

describe("TASK 1A TEST CASES", () => {
  it("prefixes of all inner key objects would be the same as the outer key", () => {
    const resultObject = createNewObjectFromApiResponse(
      dummy.data.dashboard.components
    );

    Object.entries(resultObject).forEach((entry) => {
      const outerKey = entry[0];
      const outerKeyObject = entry[1];

      Object.keys(outerKeyObject).forEach((innerKey) => {
        expect(innerKey.substring(0, 2)).toEqual(outerKey);
      });
    });
  });
});
