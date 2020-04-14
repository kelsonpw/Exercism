export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.setInputs(hours, minutes);
  }

  toString() {
    return [this.hours, this.minutes].map((n) => `0${n}`.slice(-2)).join(':');
  }

  plus(minutes = 0) {
    this.setInputs(this.hours, this.minutes + minutes);
    return this;
  }

  minus(minutes = 0) {
    return this.plus(minutes * -1);
  }

  equals(toCompare) {
    return this.hours === toCompare.hours && this.minutes === toCompare.minutes;
  }

  setInputs(hours, minutes) {
    const [currHours, currMinutes] = this.normalizeInputs(hours, minutes);
    this.hours = currHours;
    this.minutes = currMinutes;
  }

  normalizeInputs(hours, minutes) {
    let resultHours = hours;
    let resultMinutes = minutes;
    while (resultMinutes < 0) {
      resultHours -= 1;
      resultMinutes += 60;
    }
    while (resultHours < 0) {
      resultHours += 24;
    }
    while (resultMinutes >= 60) {
      resultHours += 1;
      resultMinutes -= 60;
    }
    return [resultHours % 24, resultMinutes % 60];
  }
}
