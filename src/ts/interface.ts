// interface Car {
//   name: string;
//   year: Date;
//   broken: boolean;
// }

interface Reportable {
  summary(): string;
}

const civic = {
  name: '222',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    Name ${this.name}
    year ${this.year}
    broken ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  },
};

function printCar(car: Car): void {
  console.log(car);
}

function printSummary(car: Reportable): void {
  console.log(car.summary());
}

// printCar(civic);
printSummary(drink);
