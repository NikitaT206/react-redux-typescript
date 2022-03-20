const add = (a: number, b: number) => {
  // для аргументов обязательно указавать тип
  // typeScript автоматически устанавливает тип возвращаемого значения
  return a + b;
};

function substract(a: number, b: number) {
  a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multyply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  // void может возвращать null или undefined
  console.log(message);
  return null || undefined;
};

const throwError = (message: string): never => {
  // never - функция не возвращает никакого значения
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
