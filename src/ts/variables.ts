let oranges: number = 5;
let speed: string = 'fast';
let hasDog: boolean = true;
let nothing: null = null;
let nothing1: undefined = undefined;

// build-in objects

let now: Date = new Date();

// array

let colors: string[] = ['orange', 'red', 'green', 'yellow']; // string[] - элементами массива могут быть только строки
let numbers: number[] = [5, 2, 7, 12, 57, 236, 21, 1];
let results: boolean[] = [false, true, false];

// classes

class Car {}

let car: Car = new Car();

// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions

function logNubmer(num: number): any {
  // any - любой тип возвращаемый из функции
  console.log(num);
}

function logNubmer2(num: number): void {
  // void - функция ничего не возвращает
  console.log(num);
}

function logNubmer3(num: number): number {
  // number - функция должна вернуть number
  return num;
}

const logNubmer4: (num: number) => number = (i) => {
  // (num: number) - аргумент и его тип, => number - возращаемый тип, (i) - аргумент передаваемый в функцию
  return i;
};

// When to use annotations
// Functions returns the any type

const json = JSON.stringify({ x: 10, y: 20 });
const coordinates: { x: number; y: number } = JSON.parse(json); // typeScript не может прочитать тип данных у json и задает тип данных any

// When we declare a variable on one line and initialize if later

let words = ['one', 'two', 'three'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'two') {
    foundWord = true;
  }
}

// Variables whoes type cant be inferred

let numbers2 = [-10, -1, 12];
let positiveNumber: boolean | number = false; // | - или

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    positiveNumber = numbers2[i];
  }
}
