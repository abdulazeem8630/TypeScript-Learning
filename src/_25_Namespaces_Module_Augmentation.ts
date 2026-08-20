// --> Namespaces & Module Augmentation ⭐⭐⭐ <--

// --> Namespace kya hai?
//Namespace ek way hai related declarations ko ek named container ke andar organize karne ka.
namespace MathUtilsA1 {
    export function add(a: number, b: number): number {
        return a + b;
    }
    export function subtract(a: number, b: number): number {
        return a - b;
    }
}
console.log(MathUtilsA1.add(10, 20));
console.log(MathUtilsA1.subtract(20, 10));

/*
--> export Namespace ke andar ⭐⭐⭐⭐⭐
Namespace ke andar declaration by default bahar accessible nahi hoti.
namespace MathUtils {

    function add(a: number, b: number): number {
        return a + b;
    }
}
Bahar:
MathUtils.add(10, 20);
❌ Error.
Kyunki add exported nahi hai.
Correct:
namespace MathUtils {

    export function add(a: number, b: number): number {
        return a + b;
    }
}
Ab:
MathUtils.add(10, 20);
✅
*/

/*
--> Namespace ka Main Purpose
Historically namespaces ka use related global code ko organize karne ke liye hota tha.
Without namespace:
function add() {}
function subtract() {}
function format() {}
function validate() {}
Potential naming conflicts ho sakte hain.
Namespace:
namespace MathUtils {

    export function add() {}

    export function subtract() {}
}

namespace StringUtils {

    export function format() {}

    export function validate() {}
}
Ab:
MathUtils.add();
StringUtils.format();
*/

/*
--> Namespace vs Module ⭐⭐⭐⭐⭐
Ye Phase ka sabse important comparison hai.
Namespace
namespace MathUtils {

    export function add() {}
}
Use:
MathUtils.add();
Module
// math.ts

export function add() {}
Another file:
import { add } from "./math.js";

add();
*/

/*
--> Namespace vs Module — Table
Namespace	Module
namespace keyword	import / export
Named container	File-based scope
Historical/legacy pattern	Modern standard
Global-style usage possible	Usually explicit imports
Large modern apps me uncommon	Modern TS apps me standard
Declaration organization me useful	Application/library architecture ke liye preferred
*/

/*
--> Declaration Merging ⭐⭐⭐⭐⭐
Ab bahut important concept.
TypeScript ki powerful feature hai:
Same name ki multiple declarations ko TypeScript combine kar sakta hai.

Example:
interface User {
    name: string;
}
Again:
interface User {
    age: number;
}
TypeScript dono ko merge kar dega.
Final:
interface User {
    name: string;
    age: number;
}
    */

/*
--> Module Augmentation ⭐⭐⭐⭐⭐
Ab Phase 26 ka sabse practical advanced concept.
Suppose koi existing module hai:
// library.ts

export interface User {
    name: string;
}
Tumhare project ko User me ek extra property chahiye:
age
Tum original library file ko modify nahi karna chahte.
To:
declare module "./library.js" {

    interface User {
        age: number;
    }
}
Ye module augmentation hai.
*/

/*
--> Global Augmentation ⭐⭐⭐⭐⭐
Ab module augmentation ka related concept:
Global augmentation
Suppose TypeScript me kisi global object/API ke type ko extend karna hai.
Example:
export {};
Then:
declare global {

    interface Window {
        appVersion: string;
    }

}
Ab TypeScript ko pata hai:
window.appVersion
exist karta hai.
*/

//--> Window Interface Extend Karna
// Example:
// export {};

// declare global {

//     interface Window {
//         appName: string;
//     }

// }
// Then:
// console.log(window.appName);
// TypeScript isko recognize karega.

