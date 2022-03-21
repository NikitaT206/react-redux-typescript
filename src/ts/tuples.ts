const obj = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias

type Drink = [string, boolean, number];

const cola: [string, boolean, number] = ['brown', true, 40]; // tuple
const sprite: Drink = ['clear', true, 40];
const coffee: Drink = ['black', true, 0];

const carSpecs: [number, number] = [400, 3354];

const carSpecsObj = {
  horsePower: 400,
  weight: 3354,
};
