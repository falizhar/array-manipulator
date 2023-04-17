export class ArrayOperations {
  static createRandomArray(length: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.random() * 1000).toFixed(0);
    }
    return arr;
  }

  static printArray(arr: number[]): void {
    arr.forEach((num, index) => {
      process.stdout.write(num.toFixed(0) + " ");
      if ((index + 1) % 10 === 0) {
        console.log();
      }
    });
    console.log();
  }

  static average(arr: number[]): number {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }

  static printExtremes(arr: number[]): void {
    const minIndex = arr.indexOf(Math.min(...arr));
    const maxIndex = arr.indexOf(Math.max(...arr));
    console.log(`Arr[${minIndex}] = ${arr[minIndex].toFixed(0)} is the smallest element in the array;`);
    console.log(`Arr[${maxIndex}] = ${arr[maxIndex].toFixed(0)} is the largest element in the array;`);
  }

  static gatherEvenIntegers(arr: number[]): number[] {
    return arr.filter(num => Math.floor(num) % 2 === 0);
  }

  static median(arr: number[]): number {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
      return sortedArr[middle];
    }
  }
}