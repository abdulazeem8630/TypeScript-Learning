// --> Enums <--
//TypeScript me Enum ka use related fixed values ko ek named group me organize karne ke liye hota hai.
//Jab tumhare paas kuch fixed / predefined values hain aur unhe meaningful names dene hain, tab enum useful ho sakta hai.
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let direction: Direction = Direction.Down;
console.log(direction);

//Numeric Enum me Custom Values
enum Status {
    Pending = 1,
    Success = 2,
    Failed = 3
}
/*
--> Numeric Enum Auto Increment <--
Agar ek value manually set kar di:
enum Status {
    Pending = 1,
    Success,
    Failed
}

--> String Enum <--
String enum me har member ko string value deni hoti hai.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
Use:
console.log(Direction.Up);
Output:
UP
*/

//Enum Access
//Enum members ko dot notation se access karte hain:
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Red);
console.log(Color.Green);

//Enum + Function
enum Direction0 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function move(direction: Direction0): void {
    console.log(`Moving ${direction}`);
}
//Call:
move(Direction0.Up);
move(Direction0.Left);