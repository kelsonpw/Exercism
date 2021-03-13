export default class List<T> {
  values: number[];

  constructor(initialValues: (number | List<T>)[] = []) {
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

  filter(pred: (el: number) => boolean): List<T> {
    return new List(this.values.filter(pred));
  }

  map(cb: (el: number) => number): List<T> {
    return new List(this.values.map(cb));
  }

  foldl(
    accFn: (acc: number, el: number) => number,
    initialValue: number
  ): number {
    return this.fold(accFn, initialValue, false);
  }

  foldr(
    accFn: (acc: number, el: number) => number,
    initialValue: number
  ): number {
    return this.fold(accFn, initialValue, true);
  }

  length(): number {
    return this.values.length;
  }

  reverse(): List<T> {
    return new List(this.values.reverse());
  }

  private fold(
    accFn: (acc: number, el: number) => number,
    initialValue: number,
    reverse: boolean
  ): number {
    let result = initialValue;
    for (const val of reverse ? this.values.reverse() : this.values) {
      result = accFn(result, val);
    }
    return result;
  }

  private flattenList(list: List<T>): number[] {
    return [...list.values].reduce((acc: number[], value: number | List<T>) => {
      if (value instanceof List) {
        return [...acc, ...this.flattenList(value)];
      }

      return [...acc, value];
    }, []);
  }

  private flattenLists(lists: (number | List<T>)[]): number[] {
    return lists.flatMap((value) =>
      typeof value === "number" ? value : this.flattenList(value)
    );
  }
}
