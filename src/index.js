import dummy from "./dummy";

// let result = {};

// dummy.data.dashboard.components.forEach((item) => {
//   const firstTwoLetters = item.location.substring(0, 2);

//   if (!(firstTwoLetters in result)) {
//     result[firstTwoLetters] = {};
//   }

//   result[firstTwoLetters][item.location] = item;
// });

// console.log(result);

const removeLocations = (locations, dataObject) => {
  let filteredComponentsList = dataObject.data.dashboard.components;

  locations.forEach((location) => {
    filteredComponentsList = filteredComponentsList.filter(
      (component) => component.location !== location
    );
  });

  console.log({
    ...dataObject,
    data: { ...dataObject.dashboard, components: filteredComponentsList }
  });
};

removeLocations(["AGAAA", "OVLHP", "DR005"], dummy);
