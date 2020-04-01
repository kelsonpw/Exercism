//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = [...values];
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(list) {
    let result = this;
    for (const val of list.values) {
      result = result.append(val instanceof List ? val : new List([val]));
    }
    return result;
  }

  filter(pred) {
    const filtered = [];
    for (const val of this.values) {
      pred(val) && filtered.push(val);
    }
    return new List(filtered);
  }

  map(func) {
    const mapped = [];
    for (const val of this.values) {
      mapped.push(func(val));
    }
    return new List(mapped);
  }

  length() {
    let length = 0;
    for (const _ of this.values) length++;
    return length;
  }

  foldl(func, initial) {
    let acc = initial;
    for (const val of this.values) {
      acc = func(acc, val);
    }
    return acc;
  }

  foldr(func, initial) {
    return this.reverse().foldl(func, initial);
  }

  reverse() {
    let reversed = [];
    for (const val of this.values) {
      reversed.unshift(val);
    }
    return new List(reversed);
  }
}
