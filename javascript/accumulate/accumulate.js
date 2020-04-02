//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (collection, func) => {
  let result = [];
  for (const value of collection) {
    result.push(func(value));
  }
  return result;
};
