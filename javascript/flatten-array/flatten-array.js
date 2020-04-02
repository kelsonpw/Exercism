//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = value => {
  if (!Array.isArray(value)) {
    return [value];
  }
  return value
    .reduce((acc, value) => [...acc, ...flatten(value)], [])
    .filter(value => ![null, undefined].includes(value));
};
