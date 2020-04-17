export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.minutes = toMinutes(posOffset(hours, 24), minutes);
  }

  toString() {
    return fromMinutes(this.minutes)
      .map((n) => `00${n}`.slice(-2))
      .join(':');
  }

  plus() {}

  minus() {}

  equals() {}
}

const toMinutes = (h, m) => ((h + Math.floor(m / 60)) % 24) * 60 + (m % 60);
const fromMinutes = (m) => [Math.floor(m / 60), m % 60];
const posOffset = (n, int) => {
  let x = n;
  while (x < 0) {
    x += int;
  }
  return x;
};
