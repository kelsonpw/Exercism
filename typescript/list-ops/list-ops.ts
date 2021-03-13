export default class List<T> {
  values: T[];

  constructor(initialValues: (T | List<T>)[] = []) {
    this.values = this.flattenLists(initialValues);
  }

  append(list: List<T>): List<T> {
    return new List([...this.values, ...list.values]);
  }

  concat(list: List<T> | List<T>[]): List<T> {
    if (Array.isArray(list)) {
      return new List([...this.values, ...this.flattenLists(list)]);
    }

    return this.append(list);
  }

  filter(pred: (el: T) => boolean): List<T> {
    const filteredValues = [];
    for (const value of this.values) {
      if (pred(value)) {
        filteredValues.push(value);
      }
    }

    return new List(filteredValues);
  }

  map(cb: (el: T) => T): List<T> {
    const mappedValues = [];
    for (const value of this.values) {
      mappedValues.push(cb(value));
    }
    return new List(mappedValues);
  }

  foldl(accFn: (acc: T, el: T) => T, initialValue: T): T {
    return this.fold(accFn, initialValue, false);
  }

  foldr(accFn: (acc: T, el: T) => T, initialValue: T): T {
    return this.fold(accFn, initialValue, true);
  }

  length(): number {
    return this.values.length;
  }

  reverse(): List<T> {
    return new List(this.values.reverse());
  }

  private fold(
    accFn: (acc: T, el: T) => T,
    initialValue: T,
    reverse: boolean
  ): T {
    let result = initialValue;
    for (const val of reverse ? this.values.reverse() : this.values) {
      result = accFn(result, val);
    }
    return result;
  }

  private flattenList(list: List<T>): T[] {
    return [...list.values].reduce((acc: T[], value: T | List<T>) => {
      if (value instanceof List) {
        return [...acc, ...this.flattenList(value)];
      }

      return [...acc, value];
    }, []);
  }

  private flattenLists(lists: (T | List<T>)[]): T[] {
    return lists.flatMap((value) =>
      value instanceof List ? this.flattenList(value) : value
    );
  }
}
