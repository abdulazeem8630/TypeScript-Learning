// --> Interface <--
interface User002 {
    name:string;
    age:number;
}
const user17 : User002 = {
    name:"Azeem",
    age:26
};
console.log(user17);


//Interface Methods
//Interface ke andar methods define kar sakte ho.
interface User003 {
    name001: string;

    greet(): void;
}
//Implementation:
const user18: User003 = {
    name001: "Azeem",

    greet() {
        console.log(`Hello ${this.name001}`);
    }
};

//Function Interfaces
//Interface ka use function ka structure define karne ke liye bhi ho sakta hai.
interface AddFunction {
    (a: number, b: number): number;
}
const add01: AddFunction = (a, b) => {
    return a + b;
};
//Use:
console.log(add01(10, 20));

//Extending Interfaces
//Interface ki sabse important features me se ek hai:
interface Person01 {
    name: string;
    age: number;
}
interface Employee01 extends Person01 {
    employeeId: number;
}
//Employee ke paas automatically:
//Person
//├── name
//└── age
//Employee
//└── employeeId
const employee01: Employee01 = {
    name: "Azeem",
    age: 20,
    employeeId: 101
};

//Declaration Merging
//Agar same naam ka interface do baar declare karo:
interface User004 {
    name: string;
}

interface User004 {
    age: number;
}
//TypeScript dono declarations ko merge kar deta hai.
// interface User {
//     name: string;
//     age: number;
// }


