// --> Utility Types ⭐⭐⭐ <--

//--> Partial<T> ⭐⭐⭐⭐⭐
//Partial<T> kisi type ki saari properties ko optional bana deta hai.
//Suppose:
type UserA4 = {
    id: number;
    name: string;
    email: string;
};
//Normally:
// const userA4: UserA4 = {
//     id: 1,
//     name: "Azeem",
//     email: "azeem@gmail.com"
// };
//Teeno properties required hain.
//Lekin:
type PartialUser = Partial<UserA4>;
//Ab:
const userA4: PartialUser = {
    name: "Azeem"
};
//Valid hai.

//--> Required<T> ⭐⭐⭐⭐
//Required<T> iska opposite hai.
//Ye saari optional properties ko required bana deta hai.
type UserA5 = {
    name: string;
    age?: number;
};
//Normally:
// const userA5: UserA5 = {
//     name: "Azeem"
// };
//Valid.
//But:
type RequiredUser = Required<UserA5>;
//Ab:
const userA5: RequiredUser = {
    name: "Azeem",
    age: 20
};
//age mandatory ho gaya.

//--> Readonly<T> ⭐⭐⭐⭐
//Readonly<T> object ki properties ko readonly bana deta hai.
type UserA6 = {
    name: string;
    age: number;
};
type ReadonlyUserA6 = Readonly<UserA6>;
//Result:
// type ReadonlyUserA6 = {
//     readonly name: string;
//     readonly age: number;
// };
//Now:
const userA6: ReadonlyUserA6 = {
    name: "Azeem",
    age: 20
};

// --> Pick<T, K> ⭐⭐⭐⭐⭐
//Pick kisi type ki sirf selected properties leta hai.
type UserA7 = {
    id: number;
    name: string;
    email: string;
    password: string;
};
//Suppose frontend ko sirf:
//id
//name
//chahiye.
type UserPreviewA7 = Pick<UserA7, "id" | "name">;
//Result:
// type UserPreviewA7 = {
//     id: number;
//     name: string;
// };

//--> Omit<T, K> ⭐⭐⭐⭐⭐
//Omit = selected properties ko remove karo.
//Agar:
type UserA8 = {
    id: number;
    name: string;
    email: string;
    password: string;
};
//Password remove:
type SafeUser = Omit<UserA8, "password">;
//Result:
// type SafeUser = {
//     id: number;
//     name: string;
//     email: string;
// };

// --> Record<K, T> ⭐⭐⭐⭐⭐
//Record ek object type banata hai jisme specified keys ke corresponding values ka same type hota hai.
//Syntax:
//Record<K, T>
//Example:
type UserRoles = Record<
    string,
    string
>;
//Meaning:
//string key
//   ↓
//string value
//So:
const roles: UserRoles = {
    admin: "Administrator",
    user: "Normal User",
    guest: "Guest"
};

// --> Exclude<T, U> ⭐⭐⭐⭐⭐
//Exclude union type me se specified members ko remove karta hai.
//Example:
type Role =
    | "admin"
    | "user"
    | "guest";
type NonAdminRole = Exclude<
    Role,
    "admin"
>;
//Result:
//"user" | "guest"

//--> Extract<T, U> ⭐⭐⭐⭐⭐
//Extract ko Exclude ka opposite samajh sakte ho.
//Extract union me se matching members ko rakhta hai.
type RoleA1 =
    | "admin"
    | "user"
    | "guest";
type Selected = Extract<
    RoleA1,
    "admin" | "guest"
>;
//Result:
//"admin" | "guest"

// --> NonNullable<T> ⭐⭐⭐⭐
//NonNullable<T> se:
//null
//undefined
//remove ho jaate hain.
//Example:
type Value =
    | string
    | null
    | undefined;
type CleanValue = NonNullable<Value>;
//Result:
//string

// --> Parameters<T> ⭐⭐⭐⭐⭐
//Parameters function ke parameters ka tuple type nikalta hai.
//Function:
function createUser0(
    name: string,
    age: number,
    active: boolean
) {
    // ...
}
type Params = Parameters<typeof createUser0>;
// Result:
// [string, number, boolean]
// Notice ye array nahi hai.
// Ye tuple hai.

// --> ReturnType<T> ⭐⭐⭐⭐⭐
//ReturnType function ka return type extract karta hai.
function getUser() {
    return {
        id: 1,
        name: "Azeem"
    };
}
type UserA9 = ReturnType<typeof getUser>;
// Result:
// {
//     id: number;
//     name: string;
// }

//--> ConstructorParameters<T> ⭐⭐⭐⭐
//Ye class constructor ke parameters ka tuple type nikalta hai.
//Class:
class UserA0 {

    constructor(
        public name: string,
        public age: number
    ) {}
}
//Now:
type UserConstructorParams =
    ConstructorParameters<typeof UserA0>;
// Result:
// [string, number]

// --> InstanceType<T> ⭐⭐⭐⭐
//InstanceType class constructor type se instance ka type nikalta hai.
class UserA21 {

    constructor(
        public name: string,
        public age: number
    ) {}

    greet() {
        console.log("Hello");
    }
}
type UserInstance =
    InstanceType<typeof UserA21>;
//Result conceptually:
//User
//Yaani:
const userA21: UserInstance =
    new UserA21("Azeem", 20);

// --> Awaited<T> ⭐⭐⭐⭐⭐
//Awaited asynchronous values ke resolved type ko extract karta hai.
//Example:
type AA1 = Awaited<Promise<string>>;
//Result:
//string
//Similarly:
type BB1 = Awaited<Promise<number>>;
//Result:
//number



// --> Utility Types ka Complete Cheat Sheet <--
// Utility	Kya karta hai
// Partial<T>	Sab properties optional
// Required<T>	Sab properties required
// Readonly<T>	Sab properties readonly
// Pick<T, K>	Selected properties rakhta hai
// Omit<T, K>	Selected properties hataata hai
// Record<K, T>	Keys + common value type ka object
// Exclude<T, U>	Union se matching members remove
// Extract<T, U>	Union se matching members keep
// NonNullable<T>	null + undefined remove
// Parameters<T>	Function parameters ka tuple
// ReturnType<T>	Function return type
// ConstructorParameters<T>	Constructor parameters ka tuple
// InstanceType<T>	Class instance type
// Awaited<T>	Promise/async resolved type