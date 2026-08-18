// --> Type Narrowing <--
//typeof Narrowing
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
printValue("Azeem");
printValue(123456);

/*
function check(value: unknown) {

    if (typeof value === "string") {
        // string
    }

    if (typeof value === "number") {
        // number
    }

    if (typeof value === "boolean") {
        // boolean
    }

    if (typeof value === "function") {
        // function
    }
}
    */

//instanceof Example
const date01 = new Date();
console.log(date01 instanceof Date);

//in ka Real Example
type Car = {
    drive(): void;
};

type Boat = {
    sail(): void;
};

function move0(vehicle: Car | Boat) {

    if ("drive" in vehicle) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}

//Equality Narrowing
//Equality checks bhi TypeScript ko type narrow karne me help karte hain.
function compare(
    value: string | number,
    other: string
) {

    if (value === other) {
        console.log(value.toUpperCase());
    }
}

//Discriminated Union Narrowing
//Ye Phase 11 me padha tha, ab ise type narrowing mechanism ke perspective se samjho.
type Admin0 = {
    role: "admin";
    permissions: string[];
};

type User21 = {
    role: "user";
    email: string;
};

type Account = Admin0 | User21;
function handleAccount(account: Account) {

    if (account.role === "admin") {
        console.log(account.permissions);
    } else {
        console.log(account.email);
    }
}

//Control Flow with Multiple Checks
function process(value: string | number | null) {

    if (value === null) {
        return;
    }

    if (typeof value === "string") {
        console.log(value.toUpperCase());
        return;
    }

    console.log(value.toFixed(2));
}

//Type Predicates ⭐
function isAdmin00(user: User | Admin): user is Admin {
    return "permissions" in user;
}
// Yahan:
// user is Admin
// type predicate hai.
// Meaning:
// Agar function true return kare, to TypeScript user ko Admin maan sakta hai.

//Array.isArray() Narrowing
//TypeScript built-in checks ko bhi recognize karta hai.
function process0(value: string | string[]) {

    if (Array.isArray(value)) {
        console.log(value.length);
    } else {
        console.log(value.toUpperCase());
    }
}