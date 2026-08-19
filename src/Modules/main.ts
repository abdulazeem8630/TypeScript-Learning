import greet,{addA1, subtract, multiply} from "./Modules"

console.log(addA1(10,20));
console.log(subtract(10,20));
console.log(multiply(10,20));

greet("Abdul");

/*
--> Import Aliases ⭐⭐⭐ <--
Kabhi imported name ko rename karna ho:
import { add as sum } from "./math";
Ab:
console.log(sum(10, 20));
*/

//Import Everything as Namespace ⭐ 
//import * as MathUtils from "./Module";
// MathUtils.add();
// MathUtils.subtract();
// MathUtils.multiply();

/* 
--> Re-export ⭐⭐⭐ <--
Re-export ka matlab:
Kisi doosri file se imported/exported चीज़ ko ek third file se export karna.

Example:
src/
│
├── math.ts
├── string.ts
└── index.ts
math.ts:
export const add = (a: number, b: number) => {
    return a + b;
};
string.ts:
export const capitalize = (value: string) => {
    return value.toUpperCase();
};
index.ts:
export { add } from "./math";
export { capitalize } from "./string";
Ab main.ts:
import {
    add,
    capitalize
} from "./index";
 */

/*
--> ES Modules ⭐⭐⭐ <--
ES Modules = ECMAScript Modules
JavaScript ka standardized module system.
Main syntax:
export
import
TypeScript bhi ES module syntax ko use karta hai.
*/

/*
--> Module Resolution ⭐⭐⭐ <--
Ab important advanced topic:
TypeScript ko kaise pata chalta hai ki ./math kis file ko refer kar raha hai?

Example:
import { add } from "./math";
TypeScript ko math module find karna hai.
Is process ko module resolution kehte hain.
*/