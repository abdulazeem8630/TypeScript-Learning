// --> Encapsulation ⭐ <--
//Data aur us data par kaam karne wale methods ko ek unit/class ke andar rakhna aur unnecessary direct access ko control karna.
class BankAccount {
    private balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(10000);
account.deposit(5000);
console.log(account.getBalance());

// --> Inheritance ⭐ <--
//Ek class doosri class ki properties/methods ko inherit karti hai.
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const dog = new Dog("Tommy");
dog.eat();
dog.bark();
//Dog ko Animal se eat() mil gaya.

// --> super <--
//Child class parent constructor/method ko access karne ke liye super use kar sakti hai.
class Animal0 {
    constructor(public name: string) {}
}
class Dog0 extends Animal0 {
    constructor(name: string, public breed: string) {
        super(name);
    }
}
//super(name);
//parent constructor call karta hai.

// --> Polymorphism ⭐⭐⭐ <--
//Same interface/method, different behavior.
//"Poly" = many
//"Morph" = forms
class Animal1 {
    speak() {
        console.log("Animal sound");
    }
}
class Dog1 extends Animal1 {
    speak() {
        console.log("Woof");
    }
}
class Cat extends Animal1 {
    speak() {
        console.log("Meow");
    }
}
const animals: Animal1[] = [
    new Dog1(),
    new Cat()
];
for (const animal of animals) {
    animal.speak();
}

// --> Method Overriding ⭐ <--
//Child class parent ke existing method ko apne behavior ke according redefine karti hai.
class Animal2 {
    speak() {
        console.log("Some sound");
    }
}
class Dog2 extends Animal2 {
    override speak() {
        console.log("Woof");
    }
}
//Yahan Dog ne Animal ke speak() ko override kiya.

// --> Abstract Classes <--
//TypeScript me abstraction ke liye abstract class use kar sakte hain.
abstract class Payment0 {
    abstract pay(amount: number): void;
    receipt() {
        console.log("Receipt generated");
    }
}
class CreditCardPayment extends Payment0 {
    override pay(amount: number) {
        console.log(`Paid ${amount} using card`);
    }
}
class UPIPayment0 extends Payment0 {

    override pay(amount: number) {
        console.log(`Paid ${amount} using UPI`);
    }
}
const payments: Payment0[] = [
    new CreditCardPayment(),
    new UPIPayment0()
];
for (const payment of payments) {
    payment.pay(1000);
}
//That's abstraction + polymorphism together.

// --> implements ⭐⭐⭐ <--
//implements ka use class ko batane ke liye hota hai:
//"Meri class ko is interface ka contract follow karna hai."
interface Usera {
    name: string;
    age: number;
    greet(): void;
}
class Studentt implements Usera {
    constructor(
        public name: string,
        public age: number
    ) {}
    greet(): void {
        console.log(`Hello ${this.name}`);
    }
}
const studentt = new Studentt("Azeem", 20);

// --> Composition ⭐⭐⭐ <--
//Ek class doosri class ke object ko contain/use karti hai instead of inheriting from it.
class Engine {
    start() {
        console.log("Engine started");
    }
}
class Carr {
    constructor(
        private engine: Engine
    ) {}
    start() {
        this.engine.start();
        console.log("Car started");
    }
}
const engine = new Engine();
const car = new Carr(engine);

car.start();
// Relationship:
// Car
//  │
//  └── has an → Engine
// This is has-a relationship.