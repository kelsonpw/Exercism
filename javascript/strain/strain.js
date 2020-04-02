//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (array, pred) => {
  const result = [];
  for (const val of array) {
    if (pred(val)) result.push(val);
  }
  return result;
};

export const discard = (array, pred) => {
  const result = [];
  for (const val of array) {
    if (!pred(val)) result.push(val);
  }
  return result;
};
