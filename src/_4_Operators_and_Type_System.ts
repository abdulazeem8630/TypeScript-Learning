// --> Arithmetic Operators <--
let a: number = 20;
let b: number = 5;
console.log(a + b); // 25
console.log(a - b); // 15
console.log(a * b); // 100
console.log(a / b); // 4
console.log(a % b); // 0
console.log(a ** 2); // 400
console.log(++a); //21
console.log(--a); //20

// --> Comparison Operators <--
let age00 = 20;
console.log(age00 === 20); // true
console.log(age00 === 21); // false
//console.log(20 == "20"); //true
console.log(age00 > 18);  // true
console.log(age00 < 18);  // false
console.log(age00 >= 20); // true
console.log(age00 <= 20); // true

// --> Logical Operators <--
age00 = 21;
let hasLicense = true;
if (age00 >= 18 && hasLicense) {
    console.log("Can drive");
}

let isAdmin0 = false;
let isOwner = true;
if (isAdmin0 || isOwner) {
    console.log("Access granted");
}

let isLoggedIn0 = true;
console.log(!isLoggedIn0);

// --> Assignment Operators <--
let p = 10;
p += 5;
console.log(p); //15
p -= 5;
console.log(p); //10
p *= 2;
console.log(p); //20
p /= 2;
console.log(p); //10
p %= 2;
console.log(p); //0
p **= 2;
console.log(p); //0

// --> Ternary Operator <--
age00 = 25;
let status0 = age00 >= 18 ? "Adult" : "Minor";
console.log(status0);

// --> typeof <-- (typeof kisi value ka runtime type check karne ke liye use hota hai)
console.log(typeof age00); //number
/*
typeof "Azeem"       // "string"
typeof 20            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof 20n           // "bigint"
typeof Symbol("id")  // "symbol"
*/

// --> instanceof <-- (instanceof check karta hai ki koi object kisi particular class/constructor se bana hai ya nahi)
class User{
    name : String;
    constructor(name: String){
        this.name = name;
    }
}
const user = new User("Azeem");
console.log(user instanceof User); //true
const date = new Date();
console.log(date instanceof Date); //true

// --> in <-- (in operator check karta hai ki koi property/key object ke andar present hai ya nahi)
const userN = {
    name: "Azeem",
    age: 20
};
console.log("name" in userN); //true
console.log("email" in userN); //false
//example of in 
type Admin = {
    name: string;
    permissions: string[];
};
type User0 = {
    name: string;
};

function printInfo(person: Admin | User0) {
    if ("permissions" in person) {
        console.log(person.permissions);
    } else {
        console.log(person.name);
    }
}

// --> ?? — Nullish Coalescing <-- (Agar left side null ya undefined hai, tab right side use karo)
let username: string | null = null;
const namee = username ?? "Guest";
console.log(namee);
let username0: string | null = "Azeem";
const name0 = username0 ?? "Guest";
console.log(name0);

// --> ?. — Optional Chaining <-- (Optional chaining ka use tab hota hai jab object/property exist bhi kar sakti hai aur nahi bhi)
type User1 = {
    name: string;
    address?: {
        city: string;
    };
};
const user1: User1 = {
    name: "Azeem",
};
//console.log(user1.address.city);//error
console.log(user1.address?.city);//error

// --> ! Non-Null Assertion Operator <-- (Mujhe pata hai ki ye value null ya undefined nahi hai)
let username1: string | undefined;
username1 = "Azeem";
console.log(username1!.toUpperCase());
