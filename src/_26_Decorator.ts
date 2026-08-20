// --> Class Decorator
//Class ke upar lagta hai.
function Logger(constructor: Function) {
    console.log("Class created:", constructor.name);
}

@Logger
class UserB1 {
}
// @Logger → User class par apply ho raha hai.
// Use: class ke behavior/metadata ko handle karne ke liye.

// --> Method Decorator
//Class ke method ke upar lagta hai.
function LogMethod() {
    console.log("Method decorator");
}

class UserB2 {

   // @LogMethod
    greet() {
        console.log("Hello");
    }
}
//Method decorators ka use commonly method ke behavior ko inspect/modify karne jaise cases me hota hai.

/*
--> Property Decorator
Class property ke upar lagta hai.
function Required() {
    console.log("Property decorator");
}

class User {

    @Required
    name: string = "";
}
Yahan @Required → name property par laga hai.

//--> Parameter Decorator
Method ya constructor ke parameter par lagta hai.
function Inject() {
    console.log("Parameter decorator");
}

class User {

    greet(@Inject name: string) {
        console.log(name);
    }
}
Ye mainly advanced frameworks/libraries me dependency injection jaise concepts me mil sakta hai.


*/