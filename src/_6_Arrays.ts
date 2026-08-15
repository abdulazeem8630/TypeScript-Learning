// --> Array Typing <--
let num:number[] = [1,2,3,4];
console.log(num);
//String Array
let names:string[] = ["Abdul","Azeem","Ali"]
console.log(names);
//Boolean Array
let statuses: boolean[] = [true, false, true];
console.log(statuses);

/* --> Array of Primitives <--
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Azeem", "Ali"];
let values: boolean[] = [true, false];
let ids: bigint[] = [10n, 20n, 30n];

--> Empty Array <--
Agar tum empty array declare kar rahe ho:
let numbers: number[] = [];

--> Type Inference with Arrays <--
TypeScript khud bhi array ka type infer kar sakta hai.
let numbers = [10, 20, 30];

--> Mixed Array <--
JavaScript me:
let values = [10, "Azeem", true];
TypeScript isko union array ke roop me infer kar sakta hai:
(string | number | boolean)[]
Explicitly bhi likh sakte ho:
let values: (string | number | boolean)[] = [
    10,
    "Azeem",
    true
];
*/

// --> Array<T> Syntax <--
let nums: Array<number> = [2,4,6,8];
console.log(nums);

/*
--> Array<string> <--
let names: Array<string> = [
    "Azeem",
    "Ali",
    "Rahul"
];
*/

//Array of Objects
//Pehle object ka structure define karo:
type User01 = {
    name: string;
    age: number;
};
const users:User01[] = [{name:"Abdul",age:22},{name:"Azeem",age:25}];
console.log(users);

// --> Array of Objects with Array<T> <--
type User02 = {
    name: string;
    age: number;
};
const users01: Array<User02> = [
    {
        name: "Azeem",
        age: 20
    },
    {
        name: "Ali",
        age: 21
    }
];

// --> Nested Arrays <--
const nums01 : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(nums01);

// --> Array<Array<number>> <--
const numbers: Array<Array<number>> = [
    [1, 2],
    [3, 4]
];


// --> Multidimensional Arrays <--
const data: number[][][] = [
[
    [1,2],
    [3,4]
],
[ 
    [5,6],
    [7,8]
]
];
console.log(data);

// --> Nested Array of Objects <--
type Student = {
    name:string;
    marks:number;
}
const classes:Student[][]=[
    [
        {name:"Abdul",marks:98},
        {name:"Azeem",marks:90}
    ],
    [
        {name:"Ali",marks:88},
        {name:"Ahmad",marks:80}
    ]
]
console.log(classes);

// --> Readonly Arrays <--
//Agar tum chahte ho ki array ko modify na kiya ja sake.
const numbers01: readonly number[] = [10, 20, 30]; //onlu read
console.log(numbers01);
//numbers01.push(40); //error
//ReadonlyArray<T>
const numbers02: ReadonlyArray<number> = [10, 20, 30];

// --> Array Destructuring <--
//Array se values ko directly variables me extract karna.
const val = [1,2,3];
const [a1,b1,c1] = val;
console.log(a1);
console.log(b1);
console.log(c1);

// --> Rest with Destructuring <--
const numbers03 = [10, 20, 30, 40, 50];
const [first, ...remaining] = numbers03;
console.log(first);
console.log(remaining);

// --> Spread Operator <--
const first0 = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first0, ...second];
console.log(combined);

//Array Copy using Spread
const original = [10, 20, 30];
const copy = [...original];
console.log(copy);


// --> Array Methods with TypeScript <--
const numbers04: number[] = [10, 20];
//push() => Array ke end me value add karta hai.
numbers03.push(30);
console.log(numbers03);
//pop() => Last element remove karta hai.
const removed = numbers04.pop();
console.log(removed);
console.log(numbers04);
//shift() => First element remove karta hai.
const first02 = numbers04.shift();
console.log(numbers04);
//unshift() => Beginning me element add karta hai.
numbers04.unshift(10);
console.log(numbers04);
//map() => map() har element ko transform karke new array return karta hai.
const doubled = numbers04.map((number) => {
    return number * 2;
});
console.log(doubled);
/*
filter() => Condition satisfy karne wale elements ka new array banata hai.
find() => Pehla matching element return karta hai.
some() => Check karta hai ki at least one element condition satisfy karta hai ya nahi.
every() => Check karta hai ki all elements condition satisfy karte hain ya nahi.
reduce() => Array ko process karke single result bana sakta hai.
forEach() => Har element par function execute karta hai.
includes() => Check karta hai ki value array me present hai ya nahi.
indexOf() => Element ka index return karta hai.
slice() => Array ka portion return karta hai without original array ko modify kiye.
splice() => Array ko modify karta hai.
sort() =>  Array ko sort krta hai.
*/