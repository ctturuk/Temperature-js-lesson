// this is the constant variable for the kelvin temperature
const kelvin = 293;

// this variable converts kelvin to celcius by subtracting 273
const celsius = kelvin - 273;

// this variable converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// this line rounds down the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);