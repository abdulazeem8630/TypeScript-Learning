const title = document.getElementById("title");
const button = document.getElementById("myButton");

if (title) {
    title.textContent = "Hello TypeScript";
}

button?.addEventListener("click", () => {
    console.log("Button clicked!");
})   

/* 
--> HTMLElement ke common properties/methods: <--
element.textContent
element.innerHTML
element.className
element.id
element.style
element.addEventListener()
*/

// --> HTMLInputElement ⭐⭐⭐⭐⭐ <--
//Agar element specifically:
//<input>
//hai, to uska specific TypeScript type:
//HTMLInputElement
//Example:
const input = document.getElementById("myInput");
if (input instanceof HTMLInputElement) {
    console.log(input.value);
}
// Ab TypeScript ko pata hai:
// input → HTMLInputElement
// Aur tum:
// input.value
// use kar sakte ho.

//--> HTMLButtonElement ⭐⭐⭐⭐⭐ <--
// if (button instanceof HTMLButtonElement) {
//     button.disabled = true;
// }

//--> Specific DOM Types <--
// Different HTML elements ke different types hote hain:
// HTMLElement
//    │
//    ├── HTMLInputElement
//    ├── HTMLButtonElement
//    ├── HTMLFormElement
//    ├── HTMLSelectElement
//    ├── HTMLTextAreaElement
//    ├── HTMLImageElement
//    └── HTMLAnchorElement

// --> querySelector() ⭐⭐⭐⭐⭐
//const input =
//    document.querySelector<HTMLInputElement>("#username");

//--> querySelectorAll()
//const buttons =
 //   document.querySelectorAll<HTMLButtonElement>(".btn");

// --> Type Casting / Type Assertion ⭐⭐⭐⭐⭐
//Kabhi tumhe pata hota hai ki selected element actually kya hai.
//Example:
//const input =
//    document.getElementById("username") as HTMLInputElement;

/*
--> Type Assertion vs Narrowing
Assertion:
const input =
    document.getElementById("input") as HTMLInputElement;
Tum TypeScript ko bata rahe ho.
Narrowing:
const input =
    document.getElementById("input");

if (input instanceof HTMLInputElement) {
    console.log(input.value);
}
Yahan TypeScript actual runtime check ke basis par narrow kar raha hai.
Narrowing generally safer hai.
*/

/*
--> Events ⭐⭐⭐⭐⭐
Browser me user actions ko events kehte hain.
Examples:
click
input
change
submit
keydown
keyup
mouseover
mouseenter
mouseleave
*/

if (button) {

    button.addEventListener("click", (event) => {
    console.log(event);
});

}

/*
--> Common Mouse Event Properties
MouseEvent me useful properties:
event.clientX
event.clientY
event.button
event.ctrlKey
event.shiftKey
event.altKey
*/

// --> Keyboard Events ⭐⭐⭐⭐⭐
// Keyboard ke common events:
// keydown
// keyup
// document.addEventListener("keydown", (event) => {
//     console.log(event.key);
// });

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    console.log(event.code);
});

// --> Form Events ⭐⭐⭐⭐⭐
// const form =
//     document.querySelector<HTMLFormElement>("#loginForm");
// if (form) {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log("Form submitted");
//     });
// }

const form =
    document.querySelector<HTMLFormElement>("#loginForm");
const usernameA =
    document.querySelector<HTMLInputElement>("#username");
const password =
    document.querySelector<HTMLInputElement>("#password");
if (form && usernameA && password) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Username:", usernameA.value);
        console.log("Password:", password.value);
    });
}

/*
--> DOM Manipulation ⭐⭐⭐⭐⭐
DOM select karne ke baad hum HTML change kar sakte hain.
Text:
title.textContent = "New Title";
HTML:
box.innerHTML = "<p>Hello</p>";
Class:
box.classList.add("active");
Remove:
box.classList.remove("active");
Toggle:
box.classList.toggle("active");
*/