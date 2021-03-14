export default function accumulate<T, R>(
  list: T[],
  accFn: (value: T) => R
): R[] {
  return list.map(accFn);
}
