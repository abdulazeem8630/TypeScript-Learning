// --> Tuples <--
// TypeScript me Tuple ek aisa array hota hai jisme elements ki position aur unke types pehle se define kiye ja sakte hain.
//Simple difference:
// Array
let values: (string | number)[] = ["Azeem", 20, "India"];
//Isme values ka order fixed nahi hai.
//Tuple:
let user00: [string, number, string] = ["Azeem", 20, "India"];
//Yahan exact order hai:

// --> Tuple ki Length <--
//Tuple me normally fixed number of elements expected hote hain.
let user01: [string, number] = ["Azeem", 20];
console.log(user01);
//Tuple Access
console.log(user01[0]);
console.log(user01[1]);
//Ye:
//let user02: [string, number] = ["Azeem"];  ❌ Error.
//Tuple Position Important Hai

//Tuple Example — User Data
const user02: [number, string, boolean] = [
    101,
    "Azeem",
    true
];
console.log(user02);

// --> Optional Tuple Elements <--
//Tuple me kuch elements optional bhi ho sakte hain.
type User03 = [string, number?];
//Yahan:
//index 0 → string required
//index 1 → number optional
//Valid:
const user11: User03 = ["Azeem"];
//Aur:
const user21: User03 = ["Azeem", 20];
//Dono valid.

// --> Rest Elements in Tuple <--
type Scores = [string, ...number[]];
const student: Scores = [
    "Azeem",
    90,
    85,
    95
];
console.log(student);

// --> Readonly Tuple <--
const user000: readonly [string, number] = [
    "Azeem",
    20
];
// user[0] = "Ali";  ❌ Error.
console.log(user000);

// --> Named Tuple <--
//Tuple ke elements ko meaningful names de sakte ho.
type User101 = [
    id: number,
    name: string,
    isActive: boolean
];
const user101: User101 = [
    101,
    "Azeem",
    true
];
console.log(user101);

// --> Tuple vs Array <--
//Array
const numbers1101: number[] = [
    10,
    20,
    30,
    40
];
/*Array me generally:
same type
variable length*/

//Tuple
const user102: [string, number, boolean] = [
    "Azeem",
    20,
    true
];
/*Tuple me:
specific positions
specific types
usually fixed structure*/

// --> Tuple Type Alias <--
type UserTuple = [
    id: number,
    name: string,
    age: number
];

const user201: UserTuple = [
    101,
    "Azeem",
    20
];

const user202: UserTuple = [
    102,
    "Ali",
    21
];