// --> Generics ⭐⭐⭐ <--

//Generic ka Basic Syntax 
function functionName<T>(value: T): T {
    return value;
}
const aa = functionName<number>(100);
const bb = functionName<string>("Azeem");
console.log(aa);
console.log(bb);

//Generic Function with Array
function getFirst<T>(items: T[]): T {
    return items[1];
}
const number = getFirst([10, 20, 30]);
console.log(number);

//Generic Function — Object
function getProperty<T,K extends keyof T>(
    object:T,
    key:K
):T[K]{
    return object[key];
}
const userA1 = {
    name : "Azeem",
    age : 26
}
const nameA1 = getProperty(userA1,"name");
const ageA1 = getProperty(userA1,"age");
console.log(nameA1);
console.log(ageA1);

//Generic Interface ⭐⭐⭐
interface Box<T> {
    value: T;
}
const numberBox: Box<number> = {
    value: 100
};

//Generic Interface — API Response
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
interface UserA1 {
    id:number;
    name:string
}
const response: ApiResponse<UserA1> = {
    success: true,
    data: {
        id:101,
        name:"Abdul"
    }
}
console.log(response);
console.log(response.data);

//Generic Type Alias
type BoxA1<T> = {
    value: T;
};
type NumberBox = BoxA1<number>;
type StringBox = BoxA1<string>;
const box: BoxA1<number> = {
    value: 100
};
//Generic Function Type Alias
type TransformerA1<T> = (value: T) => T;
const double: TransformerA1<number> = (value) => {
    return value * 2;
};

//Generic Classes ⭐⭐⭐
class BoxA2<T> {

    constructor(
        public value: T
    ) {}

    getValue(): T {
        return this.value;
    }
}
const numberBoxA1 = new BoxA2<number>(100);

//Generic Class Example — Stack
class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
}
const numbersA1 = new Stack<number>();
numbersA1.push(10);
numbersA1.push(20);
numbersA1.push(30);

//Multiple Generics ⭐⭐⭐
function pair<T, U>(first: T, second: U) {
    return {
        first,
        second
    };
}
const resultA1 = pair(10, "Azeem");

/*
--> Generic Constraints ⭐⭐⭐ <--
Kabhi-kabhi hum nahi chahte ki T koi bhi type ho.
Suppose:
function getLength<T>(value: T) {
    return value.length;
}
❌ Error.
Kyun?
Because TypeScript ko nahi pata T ke andar length property hai ya nahi.
*/

//extends Constraint
// Hum bol sakte hain:
// T ke andar length property honi chahiye.
function getLength<T extends { length: number }>(
    value: T
): number {
    return value.length;
}
getLength("Hello");
//✅
//Array:
getLength([1, 2, 3]);
//✅
//But:
// getLength(100);
// ❌
// Because number me length nahi hota.

//Generic Constraint with Interface
interface HasId {
    id: number;
}
function printId<T extends HasId>(item: T): void {
    console.log(item.id);
}
const userA2 = {
    id: 1,
    name: "Azeem"
};
printId(userA2);
const product = {
    id: 100,
    price: 5000
};
printId(product);
//Dono work karenge.

/* 
--> Generic Constraint with keyof ⭐⭐⭐ <--
K extends keyof T
Pehle keyof samjho.
interface User {
    name: string;
    age: number;
}
keyof User
becomes:
"name" | "age"
22. keyof Example
type UserKeys = keyof User;
Equivalent:
type UserKeys = "name" | "age";
So:
let key: keyof User;
key = "name"; // ✅
key = "age";  // ✅
key = "email"; // ❌
*/

//Default Generic Types ⭐⭐
//Generic parameter ka default type bhi de sakte ho.
interface ApiResponseA1<T = string> {
    data: T;
}
const responseA1: ApiResponseA1 = {
    data: "Hello"
};

/*
--> Generic Utility Functions ⭐⭐⭐ <--
First element
function first<T>(items: T[]): T | undefined {
    return items[0];
}
Last element
function last<T>(items: T[]): T | undefined {
    return items[items.length - 1];
}
Reverse
function reverse<T>(items: T[]): T[] {
    return [...items].reverse();
}
Pair
function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}
    */

//Generic map Utility
function map<T , U>(
    items:T[],
    callback: (item:T) => U
):U[] {
    return items.map(callback);
}
const numbersA2 = [1,2,3,4];
const strings = map(
    numbersA2,
    (num) => num.toString()
)
console.log(strings);
//Generic Filter Utility
function filter<T>(
    items: T[],
    callback: (item: T) => boolean
): T[] {
    return items.filter(callback);
}
const evenNumbers = filter(
    numbersA2,
    (num) => num % 2 === 0
);
/*
--> Generic Find Utility <--
function find<T>(
    items: T[],
    callback: (item: T) => boolean
): T | undefined {
    return items.find(callback);
}
Example:
const users = [
    { id: 1, name: "Azeem" },
    { id: 2, name: "Ali" }
];

const user = find(
    users,
    (user) => user.id === 2
);
*/