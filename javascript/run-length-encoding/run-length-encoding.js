//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  if (!string) return "";
  return chunk(string.split(""))
    .map((chars) =>
      chars.length > 1 ? `${chars.length}${chars[0]}` : chars[0]
    )
    .join("");
};

export const decode = (string) => {
  if (!string) return "";
  let num = "";
  let i = 0;
  while (string[i].match(/\d/g)) {
    num += string[i];
    i++;
  }
  const current = num ? Array(Number(num)).fill(string[i]).join("") : string[i];
  return current + decode(string.slice(i + 1));
};

const chunk = (array) =>
  array.reduce((acc, value) => {
    if (acc[acc.length - 1] && acc[acc.length - 1][0] === value) {
      acc[acc.length - 1].push(value);
    } else {
      acc.push([value]);
    }
    return acc;
  }, []);
