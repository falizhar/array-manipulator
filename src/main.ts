import { ArrayManipulator } from './array-manipulator';
import * as readlineSync from 'readline-sync';

const arrayManipulator = new ArrayManipulator();

while (true) {
  const choice: string = readlineSync.question("Enter command (new, print, sort, average, extremes, gather, biggies, reverse, push, pop, quit, median): ");

  switch (choice) {
    case "new":
      const newArrLength: number = parseInt(readlineSync.question("Enter new array length: "));
      arrayManipulator.new(newArrLength);
      break;

    case "print":
      arrayManipulator.print();
      break;

    case "sort":
      arrayManipulator.sort();
      break;

    case "average":
      console.log("Average: ", arrayManipulator.average());
      break;

    case "extremes":
      arrayManipulator.extremes();
      break;

    case "gather":
      arrayManipulator.gather();
      break;

    case "biggies":
      arrayManipulator.biggies();
      break;

    case "reverse":
      arrayManipulator.reverse();
      break;

    case "push":
      const newValue: number = parseFloat(readlineSync.question("Enter value to push: "));
      arrayManipulator.push(newValue);
      break;

    case "pop":
      arrayManipulator.pop();
      break;

    case "median":
      console.log("Median: ", arrayManipulator.median());
      break;

    case "quit":
      console.log("Goodbye!");
      process.exit();

    default:
      console.log("Not a valid choice");
      break;
  }
}
