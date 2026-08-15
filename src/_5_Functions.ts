// --> Function Declaration <--
//normal
function greet(){
    console.log("Hello");
}
greet();
//with parameter
function greet00(name:string){
    console.log(`Hello ${name}`);
}
greet00("Azeem")

// --> Function Expression <--
//normal
const sayHello = function (){
    console.log("Hello by function expression");
}
sayHello();
//with parameter
const sayHello0 = function(name: string){
    console.log(`Hello ${name} with parameter`);
}
sayHello0("Abdul")

// --> Arrow Function <--
//normal
function add(a:number,b:number){
    return a+b;
}
let result = add(10,44);
console.log(`Addition By normal function = ${result}`);
//Arrow function
const add0 = (a:number,b:number)=>{
    return a+b;
}
let result0 = add0(10,4);
console.log(`Addition By Arrow function = ${result0}`);
//Short Arrow function
const add1 = (a:number,b:number)=>{
    return a+b;
}
let result1 = add1(10,54);
console.log(`Addition By Short Arrow function = ${result1}`);

// --> Parameter Typing <--
/*
function add(a: number, b: number) {
    return a + b;
}
Yahan:
a → number
b → number
*/
//Multiple Parameter Types
function introduce(
    name:string,
    age:number,
    isStudent:boolean
){
    console.log(name, age, isStudent);
}
introduce("Azeem",20,true)

// --> Return Type <--
function add2(a:number,b:number):number{
    return a+b;
}
console.log(add2(10,12));

// --> void Return Type <--
function greet01(name : string): void{
    console.log(`Hello ${name}`);
}
greet01("Azeem")

// --> Optional Parameters <-- 
//Kabhi parameter dena optional hota hai.
function greet02(name?:string){
    console.log(name);
}
greet02();
greet02("Abdul")
//Optional Parameter Example
function createUser(
    name:String,
    age01?:number
):void{
    console.log(name);
    console.log(name + " and " + age01);
}
createUser("Azeem")
createUser("Abdul",25)

// --> Default Parameters <--
function hello(name:string = "Guest"){
    console.log(`Hello ${name}`);
}
hello()
hello("Azeem")

// --> Rest Parameters <--
//Agar function ko unknown number of arguments accept karne hain, rest parameter use karte hain.
function addAll(...numbers:number[]):number{
    let total = 0;
    for(const number of numbers){
        total += number;
    }
    return total;
}
console.log(addAll(1,2,3,4,5));

// --> Callback Functions <--
//Callback function wo function hai jo kisi doosre function ko argument ke roop me pass hota hai.
function userName01(name:string){
    console.log(`Hello ${name}`);
}
function processUser(
    name:string,
    callback: (name:string)=>void
){
    callback(name);
}
processUser("Azeem",userName01)

// --. Higher-Order Functions <--
//Function ko argument ke roop me leta hai, ya
//Function return karta hai.
function calculator(
    a:number,
    b:number,
    operation: (x:number,y:number)=>number
):number{
    return operation(a,b)
}
const result01 = calculator(10,75,(x,y)=> x+y);
console.log(result01);

// --> Function Overloads <--
//Function overloads ka use tab hota hai jab same function different argument combinations ke saath valid ho.
function format(value:string):string;
function format(value:number):string;
function format(value:string|number):string{
    return String(value);
}
console.log(format("Azeem"));
console.log(format(100));

// --> Complete Function Example <--
function calculateTotal(
    price: number,
    tax: number = 0,
    ...discounts: number[]
):number{
    let total = price + tax;
    for (const discount of discounts) {
        total -= discount;
    }
    return total;
}
const result02 = calculateTotal(1000,100,50,25);
console.log(result02);
