// --> keyof ⭐⭐⭐ <--
//keyof kisi object type ki saari keys ka union bana deta hai.
type UserA2 = {
    name: string;
    age: number;
    email: string;
};
type UserKeysA1 = keyof UserA2;
//UserKeys ban jayega:
//type UserKeysA1 = "name" | "age" | "email";
// Example
// let key: keyof User;
// key = "name";   // ✅
// key = "age";    // ✅
// key = "email";  // ✅
// key = "phone";  // ❌

// --> typeof in TypeScript ⭐⭐⭐ <--
/*
typeof as a Type
const user = {
    name: "Azeem",
    age: 20
};

type User = typeof user;
Ab TypeScript automatically:
type User = {
    name: string;
    age: number;
};
create kar deta hai.
*/
//typeof ka Real Use
//Suppose:
const configA1 = {
    host: "localhost",
    port: 3000,
    debug: true
};
//Instead of manually:
// type Config = {
//     host: string;
//     port: number;
//     debug: boolean;
// };
// Tum:
type Config = typeof configA1;
// likh sakte ho.
// Agar config change hota hai:
// const configA1 = {
//     host: "localhost",
//     port: 3000,
//     debug: true,
//     version: "1.0"
// };
// Config bhi automatically update ho jayega.

/*
--> keyof + Indexed Access <--
type UserValues = User[keyof User];
Since:
keyof User
is:
"name" | "age" | "active"
then:
User[keyof User]
becomes:
string | number | boolean
Mental model:
keyof User
      ↓
"name" | "age" | "active"

User[keyof User]
      ↓
string | number | boolean
*/

//Conditional Type Example
type Message<T> =
    T extends string
        ? "String hai"
        : "String nahi hai";
type A1 = Message<string>;
//"String hai"
type B1 = Message<number>;
//"String nahi hai"

// --> Mapped Types ⭐⭐⭐ <--
//Existing type ki properties ko iterate karke new type create karna.
type UserA3 = {
    name: string;
    age: number;
};
//Ab hum sab properties ko optional banana chahte hain.
type OptionalUserA1 = {
    [K in keyof UserA3]?: UserA3[K];
};
// type OptionalUser = {
//     name?: string;
//     age?: number;
// };

/* 
--> Remove Optional <--
Mapped types me modifiers manipulate kar sakte ho.
type RequiredUser = {
    [K in keyof User]-?: User[K];
};
-? ka meaning:
Optional modifier remove karo.

--> Make Everything Readonly <--
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};
Result:
type ReadonlyUser = {
    readonly name: string;
    readonly age: number;
};

--> Remove Readonly <--
type MutableUser = {
    -readonly [K in keyof User]: User[K];
};
-readonly:
readonly modifier remove karo.
*/

/*
--> Template Literal Types ⭐⭐⭐ <--
JavaScript template literals:
`Hello ${name}`
TypeScript me bhi template literals types bana sakte hain.
type Color = "red" | "blue";

type ColorMessage = `${Color}-color`;
Result:
"red-color" | "blue-color"
*/

/*
--> Recursive Types ⭐⭐⭐ <--
Recursive type matlab:
Type definition ke andar wahi type khud ko reference kare.

Simple example:
type Json = {
    value: string;
    children?: Json[];
};
*/

/*
--> infer ⭐⭐⭐ <--
infer ka main purpose:
Conditional type ke andar kisi type ko automatically extract/infer karna.

Syntax:
T extends Something<infer U>
    ? U
    : never
*/

/*
--> satisfies ⭐⭐⭐ <--
satisfies TypeScript ka relatively modern aur very useful operator hai.
Purpose:
Check karo ki value kisi type ko satisfy karti hai, while preserving the value ki more specific inferred type.

Example:
type Config = {
    theme: "light" | "dark";
    fontSize: number;
};
const config = {
    theme: "dark",
    fontSize: 16
} satisfies Config;
TypeScript verify karega ki config Config structure satisfy karta hai.
*/
//satisfies ka Best Use
//Configuration objects:
type Routes = Record<string, {
    path: string;
    auth: boolean;
}>;
const routes = {
    home: {
        path: "/",
        auth: false
    },

    dashboard: {
        path: "/dashboard",
        auth: true
    }
} satisfies Routes;
//Ab TypeScript configuration validate bhi karega.

/*
--> as const ⭐⭐⭐ <--
Normal:
const user = {
    name: "Azeem",
    age: 20
};
Type generally:
{
    name: string;
    age: number;
}
as const:
const user = {
    name: "Azeem",
    age: 20
} as const;
Ab:
{
    readonly name: "Azeem";
    readonly age: 20;
}
Notice:
string
becomes:
"Azeem"
and:
number
becomes:
20
*/
