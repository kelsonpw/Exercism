//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(values = []) {
    const uniq = values.reduce((acc, val) => {
      if (acc.includes(val)) {
        return acc;
      }
      return [...acc, val];
    }, []);
    this.values = uniq;
  }

  get size() {
    return this.values.length;
  }

  empty() {
    return !this.size;
  }

  contains(value) {
    return this.values.includes(value);
  }

  add(value) {
    return new CustomSet([...this.values, value]);
  }

  subset(list) {
    for (const val of this.values) {
      if (!list.contains(val)) {
        return false;
      }
    }
    return true;
  }

  disjoint(list) {
    for (const val of this.values) {
      if (list.contains(val)) {
        return false;
      }
    }
    return true;
  }

  eql(list) {
    return this.subset(list) && this.size === list.size;
  }

  union(list) {
    return new CustomSet([...this.values, ...list.values]);
  }

  intersection(list) {
    const intersections = [];
    for (const val of this.values) {
      if (list.contains(val)) {
        intersections.push(val);
      }
    }
    return new CustomSet(intersections);
  }

  difference(list) {
    const diff = [];
    for (const val of this.values) {
      if (!list.contains(val)) {
        diff.push(val);
      }
    }
    return new CustomSet(diff);
  }
}
