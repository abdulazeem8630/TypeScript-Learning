// --> Objects <--

// --> Object Typing <--
const user1001: {
    name:string;
    age:number;
} = {
    name:"Azeem",
    age:25
};
console.log(user1001);

//Object Type Syntax
//Object type me properties ko ; se separate kar sakte ho:
//Comma bhi allowed hota hai:

//Object Type Inference
//Har baar object ka type manually likhna zaroori nahi.

//Type Alias for Objects
//Agar same object structure baar-baar use karna ho to type best option hai.
type User1001 = {
    name:string;
    age:number;
};
const user1002: User1001 = {
    name:"Abdul",
    age:24
}
const user1003: User1001 = {
    name:"Ali",
    age:27
}

//Interface
//Objects ke structure ko interface se bhi define kar sakte ho:
interface User1002 {
    name0: string;
    age: number;
}
const user1004: User1002 = {
    name0: "Azeem",
    age: 20
};

//Nested Objects
//Object ke andar doosra object ho sakta hai.
const user1005: {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "Azeem",
    age: 20,
    address: {
        city: "Delhi",
        country: "India"
    }
};
console.log(user1005);

//Nested Object with Type Alias
type Address = {
    city: string;
    country: string;
};

type User1003 = {
    name: string;
    age: number;
    address: Address;
};

//Deeply Nested Objects
//Objects multiple levels tak nested ho sakte hain.
type Company = {
    name: string;
    location: {
        address: {
            city: string;
            country: string;
        };
    };
};

//Optional Properties
//Kabhi object ki property required nahi hoti.
type User1004 = {
    name: string;
    age?: number;
};

//Optional Nested Object
//Pura nested object bhi optional ho sakta hai:
type User1005 = {
    name: string;
    address?: {
        city: string;
        country: string;
    };
};

/*
Optional Chaining with Objects 
Agar nested property optional hai
console.log(user.address?.city);
?. ka use karke safely access kar sakte ho.
Agar address nahi hai:
undefined
milega instead of runtime error.
*/

//Readonly Properties
//Agar object ki property ko initialization ke baad modify nahi karna:
type User1006 = {
    readonly id: number;
    name: string;
};
const user1006: User1006 = {
    id: 101,
    name: "Azeem"
};

// --> Object Methods <--
//Object ke andar functions bhi ho sakte hain.
const user1007 = {
    name: "Azeem",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

//Typing Object Methods
//Object type me method ka type define kar sakte ho:
type User1007 = {
    name: string;
    greet: () => void;
};

// --> Method with Parameters <--
type Calculator = {
    add: (a: number, b: number) => number;
};
const calculator0: Calculator = {
    add(a, b) {
        return a + b;
    }
};
Use:
console.log(calculator0.add(10, 20));

//Object Method using this
const user1008 = {
    name: "Azeem",
    age: 20,

    introduce() {
        console.log(
            `My name is ${this.name} and I am ${this.age} years old`
        );
    }
};
user1008.introduce();

//Object Destructuring
//Object ki properties ko variables me directly extract karna:
const user1009 = {
    name1: "Azeem",
    age11: 20
};
const { name1, age11 } = user1009;
console.log(name1);
console.log(age11);

/*
Destructuring with Different Variable Name
Agar property name hai lekin variable ka naam userName chahiye:
const {
    name: userName,
    age
} = user;
Now:
console.log(userName);
console.log(age);
*/

//Destructuring Default Value
//Optional property ke saath default value:
type User1009 = {
    name9: string;
    age9?: number;
};

const user1010: User1009 = {
    name9: "Azeem"
};

const {
    name9,
    age9 = 18
} = user1010;
//Ab agar age missing hai:

//Nested Object Destructuring
const user1011 = {
    name11: "Azeem",
    address: {
        city0: "Delhi",
        country: "India"
    }
};

const {name11,address:{city0,country}}=user1011;

//Spread Operator with Objects
const user1012 = {
    name: "Azeem",
    age: 20
};

const copy11 = {
    ...user1012
};
//copy me properties aa jayengi:

//Merge Objects
const basicInfo = {
    name: "Azeem",
    age: 20
};
const contactInfo = {
    email: "azeem@example.com",
    phone: "1234567890"
};
const user1013 = {
    ...basicInfo,
    ...contactInfo
};
console.log(user1013);

//Spread with Override
//Agar same property dono objects me ho:
const user12 = {
    name: "Azeem",
    age: 20
};
const updatedUser = {
    ...user12,
    age: 21
};
console.log(updatedUser);

/*
--> Index Signatures <--
Agar object me property names pehle se known nahi hain to kya karenge?
Example:
const scores = {
    Azeem: 90,
    Ali: 85,
    Rahul: 80
};
Agar dynamic names aane wale hain:
student name → unknown
score → number
Index signature use kar sakte ho.
type Scores = {
    [studentName: string]: number;
};
Now:
const scores: Scores = {
    Azeem: 90,
    Ali: 85,
    Rahul: 80
};
*/

//Index Signature Syntax
type UserScores = {
    [name: string]: number;
};

// --> Dynamic Properties <--
const scores: UserScores = {};
scores.Azeem = 90;
scores.Ali = 85;
scores.Ahmad = 95;
console.log(scores);

//Index Signature with Number Keys
type Users = {
    [id: number]: string;
};
const users14: Users = {
    101: "Azeem",
    102: "Ali",
    103: "Rahul"
};
Access:
console.log(users14[101]);

/*
Index Signature + Known Properties
You can combine known properties with an index signature, but the known property must be compatible with the index value type.
Valid:
type Scores = {
    total: number;
    [student: string]: number;
};
Because:
total → number
dynamic properties → number
But:
type Scores = {
    total: string;
    [student: string]: number;
};
❌ Conflict.
Because total is also a string key, but index signature says string keys must have number values.
*/

//Dynamic Object Properties
const user14: {
    [key: string]: string;
} = {};
user14.name = "Azeem";
user14.city = "Delhi";
user14.country = "India";

//Dynamic Properties with Different Value Types
//Agar values multiple types ki ho sakti hain:
type DynamicObject = {
    [key: string]: string | number | boolean;
};
const data0: DynamicObject = {
    name: "Azeem",
    age: 20,
    isActive: true
};

//Dynamic Property Access
const user15: {
    [key: string]: string | number;
} = {
    name: "Azeem",
    age: 20
};
const key = "name";
console.log(user15[key]);

//Function Parameter with Object Type
type User10 = {
    name: string;
    age: number;
};

function printUser(user: User10): void {
    console.log(user.name);
    console.log(user.age);
}
Call:
printUser({
    name: "Azeem",
    age: 20
});

//Destructuring Directly in Function
//Tum function parameter ko directly destructure bhi kar sakte ho:
type User11 = {
    name: string;
    age: number;
};

function printUser0({ name, age }: User11): void {
    console.log(name);
    console.log(age);
}
Call:
printUser0({
    name: "Azeem",
    age: 20
});