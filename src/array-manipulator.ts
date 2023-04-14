import { ArrayOperations } from "./array-operations";

export class ArrayManipulator {
  private arr: number[];

  constructor(initialArr: number[] = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2]) {
    this.arr = initialArr;
  }

  new(newArrLength: number): void {
    if (newArrLength >= 1) this.arr = ArrayOperations.createRandomArray(newArrLength);
  }

  print(): void {
    ArrayOperations.printArray(this.arr);
  }

  sort(): void {
    this.arr.sort((a, b) => a - b);
  }

  average(): number {
    return ArrayOperations.average(this.arr);
  }

  extremes(): void {
    ArrayOperations.printExtremes(this.arr);
  }

  gather(): void {
    this.arr = ArrayOperations.gatherEvenIntegers(this.arr);
  }

  biggies(): void {
    const maxValue = Math.max(...this.arr);
    this.arr = this.arr.map(() => maxValue);
  }

  reverse(): void {
    this.arr.reverse();
  }

  push(newValue: number): void {
    this.arr.push(newValue);
  }

  pop(): void {
    if (this.arr.length > 0) {
      console.log("Popped value: ", this.arr.pop());
    } else {
      console.log("CA empty!");
    }
  }

  median(): number {
    return ArrayOperations.median(this.arr);
  }
}