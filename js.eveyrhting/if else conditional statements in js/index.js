console.log("we are studying conditional statements in javascript");

console.log("Hello I am conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/

// there is a thing called repl in node js it stands for  Read Evaluate Print Loop,
// open terminal and then write node 
// and then u can use it as a calculator 
// also one more thing if u wanna compare the value then use == double equal to but if u wanna compare the type as well as equal to then use === triple equal to
// for example if i compare "3" == 3 it shows true as it only compares the value but if i wanna compare the type then use === so "3" === 3  it gives false as 3 is a string and 3 is number but if i write "3"==="3" then true