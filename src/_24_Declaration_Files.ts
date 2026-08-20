/* 
--> Declaration Files ⭐⭐⭐

--> .d.ts kya hai? ⭐⭐⭐⭐⭐
.d.ts = TypeScript Declaration File
Is file me normally implementation nahi hoti, balki sirf types ki information hoti hai.
Example:
// math.d.ts

declare function add(a: number, b: number): number;
Yahan humne function ka implementation nahi likha:
// ❌ implementation nahi
function add(a: number, b: number) {
    return a + b;
}
Humne sirf TypeScript ko bataya:
add()
 ↓
2 numbers lega
 ↓
number return karega

--> .ts vs .d.ts
.ts
Implementation + types:
function add(a: number, b: number): number {
    return a + b;
}
.d.ts
Sirf declaration:
declare function add(
    a: number,
    b: number
): number;
Simple difference:
.ts
↓
Code + Types

.d.ts
↓
Types / Declarations

--> declare ⭐⭐⭐⭐⭐
declare TypeScript ko batata hai:
"Ye cheez kahin aur exist karti hai. Main yahan sirf iska type describe kar raha hoon."

Example:
declare const appName: string;
Ab TypeScript jaanta hai:
appName → string
Lekin .d.ts me actual assignment nahi karte:
// ❌
declare const appName: string = "My App";
Declaration file ka purpose implementation dena nahi hai.

--> Ambient Declarations ⭐⭐⭐⭐⭐
Ambient declaration ka matlab roughly:
Kisi existing entity ki type information declare karna, without providing its implementation.

Example:
declare function log(message: string): void;
Yahan implementation nahi hai.
TypeScript assume karega ki function runtime par available hai.

--> .d.ts me Implementation Nahi
Example:
declare function add(
    a: number,
    b: number
): number;
Correct.
Lekin:
declare function add(
    a: number,
    b: number
): number {
    return a + b;
}
❌ Declaration file ke purpose ke against hai.
Declaration = description, implementation nahi.

--> JavaScript Library ko Type Karna ⭐⭐⭐⭐⭐
Ye .d.ts ka sabse important practical use hai.
Suppose library:
// calculator.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
Library JavaScript me hai.
Tum TypeScript project me use karna chahte ho.
Declaration file:
// calculator.d.ts

export function add(
    a: number,
    b: number
): number;

export function subtract(
    a: number,
    b: number
): number;
Ab TypeScript ko library ke types pata hain.

--> @types ⭐⭐⭐⭐⭐
Ab bahut important term:
@types
NPM ecosystem me bahut JavaScript libraries ke TypeScript type definitions available hote hain.
Example:
npm install --save-dev @types/lodash
Iska matlab:
lodash
   ↓
JavaScript library

@types/lodash
   ↓
TypeScript declarations
Tumhe manually .d.ts likhne ki zarurat nahi padti agar library ke types already available hain.

--> DefinitelyTyped ⭐⭐⭐⭐⭐
DefinitelyTyped ek huge open-source repository hai jahan community-maintained TypeScript type definitions rakhi jaati hain.
Bahut popular JavaScript libraries ke types yahan available hain.
Conceptually:
JavaScript library
        ↓
Type definitions needed
        ↓
DefinitelyTyped
        ↓
@types/package
        ↓
npm install
*/