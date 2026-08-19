// --> Error Handling ⭐⭐⭐ <--

// --> try ⭐⭐⭐⭐⭐
//try block me wo code likhte hain jahan error aa sakta hai.
// try {
//     const result = 10 / 2;
//     console.log(result);
// }

//Agar try ke andar error aata hai, execution catch me chali jaati hai.

// --> catch ⭐⭐⭐⭐⭐
try {
    const result = JSON.parse("invalid json");

    console.log(result);
} catch (error) {
    console.log("Invalid JSON");
}

// --> Error Type Narrowing ⭐⭐⭐⭐⭐
//Agar catch me error unknown hai:
try {
    // ...
} catch (error) {

    if (error instanceof Error) {
        console.log(error.message);
    }
}

// --> throw ⭐⭐⭐⭐⭐ <--
//throw manually error generate karta hai.
//throw new Error("Something went wrong");
//Example:
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
//Now:
try {
    console.log(divide(10, 0));
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

// --> finally ⭐⭐⭐⭐⭐ <--
//finally block normally chahe error aaye ya na aaye, execute hota hai.
try {
    console.log("Try");
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally");
}

// --> Custom Error Classes ⭐⭐⭐⭐⭐
//Real applications me sirf:
//new Error("Something went wrong")
//har jagah use karna useful nahi hota.
//Hum custom error classes bana sakte hain.
class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UserNotFoundError";
    }
}
//Use:
throw new UserNotFoundError("User not found");


// --> unknown Error Safely Handle Karna ⭐⭐⭐⭐⭐ <--
//Best basic pattern:
try {

    // risky operation

} catch (error: unknown) {

    if (error instanceof Error) {
        //console.log(error.message);
    } else {
        console.log("Unknown error:", error);
    }
}

