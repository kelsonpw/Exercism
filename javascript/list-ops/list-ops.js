//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = [...values];
  }

  attach(val) {
    return this.append(new List([val]));
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(list) {
    return list.foldl(
      (acc, val) => (val instanceof List ? acc.append(val) : acc.attach(val)),
      this
    );
  }

  filter(pred) {
    return this.foldl(
      (acc, val) => (pred(val) ? acc.attach(val) : acc),
      new List()
    );
  }

  map(func) {
    return this.foldl((acc, val) => acc.attach(func(val)), new List());
  }

  length() {
    return this.foldl(acc => acc + 1, 0);
  }

  foldl(func, initial) {
    let acc = initial;
    for (const val of this.values) {
      acc = func(acc, val);
    }
    return acc;
  }

  foldr(func, initial) {
    let acc = initial;
    let len = this.length();
    for (const i in this.values) {
      acc = func(acc, this.values[len - 1 - i]);
    }
    return acc;
  }

  reverse() {
    return this.foldr(
      (acc, val) => (val instanceof List ? acc.append(val) : acc.attach(val)),
      new List()
    );
  }
}
