// --> Modules <--
export const addA1 = (a:number, b:number)=>{
    return a+b;
}
export const subtract = (a: number, b: number) => {
    return a - b;
};
export const multiply = (a: number, b: number) => {
    return a * b;
};

// --> Default Export ⭐⭐⭐ <--
export default function greet(name: string) {
    console.log(`Hello ${name}`);
}