// --> TypeScript Basic Types <--
//Number
let age:number = 20;
let price:number = 99.99;
let temprature:number = -10;
let x: number = Infinity;
let y: number = NaN;
console.log(age);
console.log(price);
console.log(temprature);
console.log(x);
console.log(y);

//String
let userName:String = "Azeem";
let city:String = "Delhi";
console.log(userName);
console.log(city);

//boolen
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
let isStudent: boolean = true;
console.log(isLoggedIn);
console.log(isAdmin);
console.log(isStudent);

//null
let selectedUser: null = null;
console.log(selectedUser);

//undefined
let value: undefined = undefined;
console.log(value);

//bigint
let bigNumber: bigint = 123456789012345678901234567890n;
console.log(bigNumber);

//symbol
const id1: symbol = Symbol("id");
const id2: symbol = Symbol("id");
console.log(id1==id2);

//any
let value1: any = 10;
console.log(value1);
value1 = "Azeem";
console.log(value1);
value1 = true;
console.log(value1);
value1 = [];
console.log(value1);
value1 = {};
console.log(value1);

//unknown
let value2: unknown = "Abdul";
console.log(value2);
value2 = 10;
console.log(value2);
value2 = "Azeem";
console.log(value2);
value2 = true;
console.log(value2);

//never
function throwError(message: string): never {
    throw new Error(message);
}
function fail(): never {
    throw new Error("Failed");
}

//void
function greet1(): void {
    console.log("Hello Azeem");
}
greet1();