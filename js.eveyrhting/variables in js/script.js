// document.title = "variables in java script"

console.log("hey this is tutorial 55 ")

var a = 5;
var b = 5;
var c = "naetik";
var _a = "shubham";
// var 55a = "rohan"; this is wrong the variable can not or should not start with a number
// moreover , js is a case sensitive language that is harry and Harry is different 

console.log(a + b + 8)

console.log(typeof a, typeof b, typeof c)



// we dont need to specify the type of a variable just like in c++ javascript has a built in function that finds out the type of the variable automatically

// look there are three types of variables const, let and var 
// we dont use var we generally use let has both global and block scope now what do you mean by block and global scope it simply means agar maine kisi bhi variable ko let ke sath sabse upar matlb global variable ki tarah use kardia that means it is a global variable this we already no but agar mai uss let ko kisi if ya loop ke andar use kardia toh uska block scope hogaya that means voh ek local variable ban gaya for example

// let a = 10;
// {
//     let a = 55
//     console.log(a)

// }

// console.log(a)

// here the output will be in the block it will be 55 as we know let a inside the block is acting like a local variable and we know local vairbale overrides  the global varoable one 
// but the ouput for console.log outside the block will be 5 as let a  = 5 and it is aglobal vairbale so let acts as both local and global vairblr

// var variable
// var variable is only a global varialbe it doesnt act  block variable this is how
var a2 = 5;
{
    var a2 = 10;
    console.log(a2)

}
// console.log(a)
// here the ouput for both the consoles will be 10 as the a2 inside the block becomesa global variable that is why it is recommended to use only let 

// const varibale

// const is keyword which is used before a variable it means making a value const or we can say once the value of constant is created it can not e modified its same like c++

// const d = 10;
// d+=1; this is wrong as constant variable once declared can not be modified



// data types in javascript
// primitive data type
// null,boolean,number,undefined,string, symbol,bigint

// for example

let x = " naetik bhai";
let y = 22;
let z= null;
const p = true;
let q = undefined;
let r = 3.55;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// also remember that null ka type of humesha object aata hai why because ye bhot phele se chalte hue aah raha h and kahi devlopers ne isko incorrect bhi bola but iss object ke upar ans ike andar bhot zara code hai aur voh dependent hai toh now we cant change this type of null that is object 


// how to make a object in java script...
// objects in js are justlike dictionary in python they are the key value pair that means there exist and there will be a value corresponding to every key 

// this is how we create a object in java script


let o = {
    "name" : "naetik",
    "job code" : 5000,
    "is_handsome": true

}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "5000 crores";
console.log(o);


// this is how we create a object in js 
// also if ur key that are name job code or is  handsome contains space then it is mandatory to put them in a double quotes cuz it constains space just like we do in git
// if u wanna add salary then u can do like this 

