// --> Type Assertions <--

//as Syntax
/*
let value: unknown = "Azeem";
let name = value as string;
Ab TypeScript name ko:
string
maanega.
Then:
console.log(name.toUpperCase());

//Type Assertion vs Type Conversion
Ye difference bahut important hai.
Type Assertion
let value: unknown = "123";

let result = value as number;
Yahan runtime par "123" number nahi bana.
Value abhi bhi:
"123"
hi hai.
as number sirf TypeScript ko batata hai ki tum ise number ke roop me treat karna chahte ho.
Type Conversion
let value = "123";

let result = Number(value);
Ab runtime par:
"123" → 123
ho gaya.
So:
Type Assertion
    ↓
Compile-time information

Type Conversion
    ↓
Runtime value actually changes
*/

//Object Type Assertion
//Suppose:
type User22 = {
    name: string;
    age: number;
};

const data22: unknown = {
    name: "Azeem",
    age: 20
};
//Assertion:
const user22 = data22 as User22;
Now:
console.log(user22.name);
console.log(user22.age);
//TypeScript user22 ko User22 treat karega.

//Angle Bracket Syntax
//TypeScript ka old/alternative assertion syntax:
let value22: unknown = "Hello";

let text22 = <string>value22;
//Ye equivalent hai:
let text23 = value22 as string;
//Dono ka meaning:
//value → treat as string

//as const
const user23 = {
    name: "Azeem",
    role: "admin"
} as const;
//Now:
//name → "Azeem"
//role → "admin"

/* Non-null Assertion ! ⭐
Ab:
!
Non-null assertion operator.
Iska use TypeScript ko batane ke liye hota hai:
"Mujhe sure hai ye value null ya undefined nahi hai."

Example:
let name: string | undefined;

name = "Azeem";

console.log(name!.toUpperCase());
! TypeScript ko batata hai:
name
↓
string
*/