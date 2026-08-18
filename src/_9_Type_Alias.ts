// --> Type Alias <--

/*   type
type TypeName = ExistingType;
Example:
type Age = number;
Ab:
let age: Age = 20;
Same as:
let age: number = 20;
*/

//Custom Types
//Tum apne meaningful types bana sakte ho.
type Username = string;
type UserId = number;
type IsActive = boolean;
let name12: Username = "Azeem";
let id: UserId = 101;
let active: IsActive = true;

//Reusable Types
//Ek type define karo aur multiple places par reuse karo.
type UserId0 = number;
let id11: UserId0 = 101;
let id12: UserId0 = 102;
let id13: UserId0 = 103;

//Object Type Alias
//Without alias:
const user16: {
    name: string;
    age: number;
} = {
    name: "Azeem",
    age: 20
};
//Agar same structure multiple objects me chahiye to repetitive ho jayega.
//Type alias:
type User12 = {
    name: string;
    age: number;
};
//Ab:
const user001: User12 = {
    name: "Azeem",
    age: 20
};

const user002: User12 = {
    name: "Ali",
    age: 21
};

//Function Type Alias
type Greet = (name: string) => string;
const greet0: Greet = (name) => {
    return `Hello ${name}`;
};
Use:
console.log(greet0("Azeem"));

//Union with type
type ID = string | number;
//Ab:
let id01: ID = 101;
let id02: ID = "user-101";
//Dono valid.

//Intersection with type
//Intersection operator: &
//ka use karke multiple types ko combine kar sakte ho.
type Person = {
    name: string;
};
type Employee = {
    employeeId: number;
};
//Ab:
type EmployeePerson = Person & Employee;
//So object ko dono properties chahiye:
const employee: EmployeePerson = {
    name: "Azeem",
    employeeId: 101
};

/*
--> Literal Types <--
Literal type ka matlab hai variable ko specific exact value tak restrict karna.
type Direction = "left";
Ab:
let direction: Direction = "left";
Allowed:
direction = "left";
Not allowed:
direction = "right";

--> String Literal Types <--
type Direction =
    "left"
    | "right"
    | "up"
    | "down";
Now:
let direction: Direction = "left";
direction = "right"; // ✅
direction = "up";    // ✅
direction = "down";  // ✅
But:
direction = "forward";
❌ Error.
*/