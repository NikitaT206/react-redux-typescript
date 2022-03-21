const colors = ['red', 'blue', 'white']; // string[]
const colors2: string[] = ['red', 'blue', 'white']; //string[]
const date = [new Date(), new Date()]; // Date

const fruitsByColor = [['tomato'], ['apple'], ['lemon']]; // string[][]

// help with inference when extracting values

const color = colors[0];
const color2 = colors.pop();

// prevent uncompatible values

// colors.push(true); // error

// help with map
colors.map((color: string): string => {
  return color.toUpperCase();
});

// flexible types

const importantdates = [new Date(), '2021-11-11']; // string | Date
const importantdates2: (Date | string)[] = [new Date()]; // string | Date
