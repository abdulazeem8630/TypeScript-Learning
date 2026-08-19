// --> Promise Typing ⭐⭐⭐⭐⭐ <--

const promise: Promise<string> = new Promise((resolve) => {
    resolve("Hello");
});
//Promise<number>
const promiseA1: Promise<number> = new Promise((resolve) => {
    resolve(100);
});

// --> Promise with Object ⭐⭐⭐⭐⭐
//Real projects me Promise usually object return karta hai.
type UserA22 = {
    id: number;
    name: string;
};
//Now:
const promiseA2: Promise<UserA22> = new Promise((resolve) => {
    resolve({
        id: 1,
        name: "Azeem"
    });
});

// --> Promise with Array
type UserA23 = {
    id: number;
    name: string;
};
const promiseA3: Promise<UserA23[]> =
    Promise.resolve([
        {
            id: 1,
            name: "Azeem"
        },
        {
            id: 2,
            name: "Ali"
        }
    ]);

/*
--> Generic Promise ⭐⭐⭐⭐⭐ <--
Promise khud ek generic type hai.
Promise<T>
Example:
Promise<string>
Promise<number>
Promise<boolean>
Promise<User>
Promise<User[]>
Yahan T alag-alag type ho sakta hai.
*/ 

// --> async Function ⭐⭐⭐⭐⭐ <--
async function getUser3(): Promise<string> {
    return "Azeem";
}

// --> await ⭐⭐⭐⭐⭐ <--
//await Promise ke resolved value ko obtain karta hai.
async function getUser2(): Promise<string> {
    return "Azeem";
}
async function main() {

    const name = await getUser2();

    console.log(name);
}

// --> Promise<void> <--
//Agar async function kuch return nahi karti:
async function saveUser(): Promise<void> {
    console.log("User saved");
}

// --> Error Handling ⭐⭐⭐⭐⭐ <--
// Async code me common pattern:
// try {
//     // async operation
// }
// catch (error) {
//     // error
// }
// Example:
async function getUser0(): Promise<User> {
    throw new Error("User not found");
}
async function main0() {

    try {
        const user = await getUser0();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

// --> Generic API-like Function ⭐⭐⭐⭐⭐
//Suppose tumhare paas generic API function hai:
async function fetchData<T>(
    data: T
): Promise<T> {
    return data;
}

// --> Generic API Response ⭐⭐⭐⭐⭐
//Real backend/API development me ye pattern bahut important hai.
type ApiResponse0<T> = {
    success: boolean;
    data: T;
    message: string;
};
async function getUser1():
    Promise<ApiResponse0<UserA23>> {
    return {
        success: true,
        data: {
            id: 1,
            name: "Azeem"
        },
        message: "User fetched"
    };
}

// --> Promise<T> + .then() <--
function getName(): Promise<string> {
    return Promise.resolve("Azeem");
}
//Then:
getName().then(name => {
    console.log(name);
});

// // Promise.all() ⭐⭐⭐⭐⭐
// //Multiple async operations:
// const userPromise = getUser();
// const usersPromise = getUsers();
// //Then:
// const [user, users] =
//     await Promise.all([
//         userPromise,
//         usersPromise
//     ]);

// //Promise.allSettled()
// Kabhi hume chahiye hota hai ki ek Promise fail ho jaye tab bhi baaki operations continue karein.
// const results = await Promise.allSettled([
//     getUser(),
//     getUsers()
// ]);
// Result me har operation ka status hota hai:
// fulfilled
// or
// rejected
// Ye batch API operations me useful hai.


// --> Most Important Cheat Sheet <--
// Concept	Meaning
// Promise<T>	Future me T value
// async	Function Promise return karegi
// await	Promise ki resolved value deta hai
// Promise<void>	Async function kuch useful return nahi karti
// Promise<User>	Future me User
// Promise<User[]>	Future me User[]
// Promise<T>	Generic Promise
// async function f(): Promise<T>	Typed async function
// try/catch	Async errors handle karna
// Promise.all()	Multiple Promises parallel handle
// Promise.allSettled()	Success/failure dono results
// ApiResponse<T>	Generic API response
// Promise<ApiResponse<T>>	Typed async API response