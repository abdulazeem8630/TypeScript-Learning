// --> Classes <--
class Userr {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    intro(){
        console.log(`My name is ${this.name}`);
        
    }
}
const user111 = new Userr("Azeem", 20);

//Constructor
//constructor() special method hota hai jo object create hone par automatically execute hota hai.
class Userr1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
//Object:
const userr1 = new Userr1("Azeem");
// Constructor ka main purpose hota hai:
// Object ki initial state set karna.

/* --> Properties
Class ke andar variables ko properties kehte hain.
class User {

    name: string;
    age: number;
    email: string;
}
Yahan:
name
age
email
properties hain.

//this
this current object ko refer karta hai.
*/

//Methods
//Class ke andar functions ko methods kehte hain.
class Calculatorr {

    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}
//Use:
const calc = new Calculatorr();
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));

/*
--> public <--
public ka matlab:
Property/method ko class ke bahar se access kiya ja sakta hai.

class User {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet(): void {
        console.log(this.name);
    }
}
Use:
const user = new User("Azeem");

console.log(user.name);
user.greet();

--> private ka Purpose <--
private property/method ko sirf same class ke andar access karne deta hai.
Sensitive/internal data ko directly modify/access karne se rokna.
Example:
class BankAccount {

    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {

        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }
}
Outside user:
const account = new BankAccount(10000);

account.deposit(5000);

console.log(account.getBalance());

--> protected ⭐ <--
protected ka matlab:
Same class aur uski subclasses ke andar accessible, but outside directly accessible nahi.

Example:
class Animal {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}
Child class:
class Dog extends Animal {

    bark() {
        console.log(`${this.name} says Woof`);
    }
}
Ye valid hai:
this.name
because Dog Animal ko extend karta hai.
But:
const dog = new Dog("Tommy");

console.log(dog.name);
❌ Outside access allowed nahi.

--> readonly ⭐ <--
readonly property ko initialize hone ke baad change nahi karne deta.

--> static ⭐ <--
static member class ke object ka nahi, class itself ka hota hai.
Example:
class MathUtils {

    static PI = 3.14159;
}
Access:
console.log(MathUtils.PI);
✅
Not:
const math = new MathUtils();

console.log(math.PI);
❌
*/
class MathUtils {
    static add(a: number, b: number): number {
        return a + b;
    }
}
//Call:
console.log(MathUtils.add(10, 20));

//Getters ⭐
//Getter property ki tarah access hone wala method hota hai.
class Userr2 {

    constructor(
        private firstName: string,
        private lastName: string
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const userr2 = new Userr2("Abdul", "Azeem");

console.log(userr2.fullName);


// --> Setters ⭐ <--
//Setter ka use property ko assign karte waqt custom logic run karne ke liye hota hai.
class Userr3 {

    private _age: number = 0;

    set age(value: number) {

        if (value >= 0) {
            this._age = value;
        }
    }

    get age(): number {
        return this._age;
    }
}
const userr3 = new Userr3();
userr3.age = 20;
console.log(userr3.age);

/*
--> Parameter Properties ⭐⭐⭐ <--
Ye TypeScript ka very useful feature hai.
Normally:
class User {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
TypeScript ise short karne deta hai:
class User {

    constructor(
        private name: string,
        private age: number
    ) {}
}
That's it.
TypeScript automatically properties create + initialize kar deta hai.
*/