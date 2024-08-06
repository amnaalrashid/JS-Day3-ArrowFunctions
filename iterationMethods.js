//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let greaterThanOrEqual = numbers.filter((number) => {
  if (number >= 25) {
    return true;
  } else {
    return false;
  }
});

let divisibleBy5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(greaterThanOrEqual);
console.log(divisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

let squared = numbers.map((number) => {
  return number * number;
});

let multiplied = numbers.map((number) => {
  return number * 2;
});

console.log(squared);
console.log(multiplied);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
let greaterThanOrEqual20 = numbers.filter((number) => {
  if (number >= 20) {
    return true;
  } else {
    return false;
  }
});

let squaredGreaterThanEqual20 = greaterThanOrEqual20.map((number) => {
  return number * number;
});

console.log(squaredGreaterThanEqual20);

let task3DivisibleBy5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});

let task3Multiplied = task3DivisibleBy5.map((number) => {
  return number * 3;
});

console.log(task3Multiplied);
