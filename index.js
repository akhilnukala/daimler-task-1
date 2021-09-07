import dummy from "./dummy";

/* **************** TASK 1.A ********************* */

const createNewObjectFromApiResponse = (coponentList) => {
  let result = {};

  coponentList.forEach((item) => {
    const firstTwoLetters = item.location.substring(0, 2);

    if (!(firstTwoLetters in result)) {
      result[firstTwoLetters] = {};
    }
    result[firstTwoLetters][item.location] = item;
  });

  return result;
};

const resultList = createNewObjectFromApiResponse(
  dummy.data.dashboard.components
);

console.log("TASK 1.A RESULT", resultList);

/* **************** TASK 1.B ********************* */

const removeLocations = (locations, dataObject) => {
  let filteredComponentsList = dataObject.data.dashboard.components;

  locations.forEach((location) => {
    filteredComponentsList = filteredComponentsList.filter(
      (component) => component.location !== location
    );
  });

  return {
    ...dataObject,
    data: { ...dataObject.dashboard, components: filteredComponentsList }
  };
};

const resultObject = removeLocations(["AGAAA", "OVLHP", "DR005"], dummy);

console.log("TASK 1.B RESULT", resultObject);
