// --> Variables & Constants <--
//let
let age0 = 20;
age0 = 21;
age0 = 22;
console.log(age0);

//const
const userName0 = "Azeem";
// userName0 = "Rahul"  error const change nhi kr skte
console.log(userName0);


//var
var age1 = 20;
age1 = 22;
console.log(age1);

// --> scope <--
{
    let age = 20;
    console.log(age);
}
//console.log(age); error let block scoped hai
//const bhi block scoped hai

//var scope
{
    var age2 = 25;
}
console.log(age2);
function test(){
    var age3 = 30;
    console.log(age3)
}
//console.log(age3); error dega kyunki var function scoped h
test()

//Redeclaration
//let or const ko redeclare nhi kr skte
//var ko redeclare kr skte hn

//reassignment
//let or var ko reassign kr skte hn
//const ko ressign nhi kr skte