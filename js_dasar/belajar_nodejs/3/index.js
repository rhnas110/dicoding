// cara kedua menggunakan ES6 module

import { coffeeStock, isCoffeeMachineReady } from "./state.js";

console.log(isCoffeeMachineReady, "kopi");

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
