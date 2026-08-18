// --> Union & Intersection Types <--

/*
Union Types |
Union ka symbol: |
Meaning: A OR B
Example:
let id: number | string;
Ab id me number ya string aa sakta hai.
id = 101;       // ✅
id = "user101"; // ✅
Lekin:
id = true;
❌ Error.
Because:
number | string
      ↓
number OR string
*/

let value0: string | number;
value0 = "Hello"; // ✅
value0 = 100;     // ✅


/* --> Intersection Types & <--
Ab Intersection.
Symbol: &
Meaning: A AND B
Example:
type A = {
    name: string;
};
type B = {
    age: number;
};
type C = A & B;
Ab C me A aur B dono ki properties hongi.
const person: C = {
    name: "Azeem",
    age: 20
};
*/

type A = {
    id: number;
};
type B = {
    name: string;
};
type C = {
    email: string;
};
type User001 = A & B & C;
const user09: User001 = {
    id: 101,
    name: "Azeem",
    email: "azeem@example.com"
};


/*
Discriminated Unions
Discriminated union ka matlab:
Multiple object types ko ek common literal property ke through identify karna.

Example:
type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    email: string;
};

type Account = Admin | User;
Yahan:
role
discriminant hai.
Aur:
"admin"
"user"
literal values hain.

Discriminated Union ka Use
function printAccount(account: Account) {

    if (account.role === "admin") {
        console.log(account.permissions);
    } else {
        console.log(account.email);
    }
}
*/

//Discriminated Union — Payment Example
//Real-world example:
type CashPayment = {
    method: "cash";
    amount: number;
};

type CardPayment = {
    method: "card";
    amount: number;
    cardNumber: string;
};

type UPIPayment = {
    method: "upi";
    amount: number;
    upiId: string;
};

type Payment =
    | CashPayment
    | CardPayment
    | UPIPayment;
//Ab function:
function processPayment(payment: Payment) {

    if (payment.method === "cash") {
        console.log("Cash payment");
    }

    if (payment.method === "card") {
        console.log(payment.cardNumber);
    }

    if (payment.method === "upi") {
        console.log(payment.upiId);
    }
}