export default class Series {
  digits: number[];

  constructor(numberStr: string) {
    this.digits = numberStr.split("").map(Number);
  }

  slices(sliceAmt: number): number[][] {
    const chunks: number[][] = [];

    if (sliceAmt > this.digits.length) {
      throw new Error("Slice size is larger than number of digits in series");
    }

    for (let i = 0; i < this.digits.length; i++) {
      const chunk = [];

      for (let j = i; j < i + sliceAmt; j++) {
        const digit = this.digits[j];
        if (digit !== undefined) {
          chunk.push(digit);
        }
      }

      if (chunk.length === sliceAmt) {
        chunks.push(chunk);
      }
    }

    return chunks;
  }
}
