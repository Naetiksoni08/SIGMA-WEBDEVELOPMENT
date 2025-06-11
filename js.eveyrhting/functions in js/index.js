console.log("hey naetik you are a good boy")
console.log("hey naetik you are a good ")
console.log("hey naetik you are a good too")
console.log("hey naetik you are a perfect boy")

function nice(name) {
    console.log("hey " + name + " you are a good boy")
    console.log("hey " + name + " you are a good")
    console.log("hey " + name + " you are a good too")
    console.log("hey " + name + " you are a perfect boy")

}


nice("rohan")
nice("ravi")
nice("shalini")
nice("keshav")
// so basically this nice is the name of the function and we are simply calling it and passing a value note that this nice function can be used multiple times so if we want to change something in a 2000 lines of code we will be using function and we can execute this muliple times then we will be using functions


function sum(a,b,c=9) {
    // console.log(a+b)
    // console.log(a,b,c)
    return a + b + c;
    
}
result1=sum(3)
result2=sum(13,5)
result3=sum(31,15)
result4=sum(30,5,10)

console.log("the sum of these numbers is: ", result1)
console.log("the sum of these numbers is: ", result2)
console.log("the sum of these numbers is: ", result3)
console.log("the sum of these numbers is: ", result4)


const funct1 = (x)=> {
    console.log("I am an arrow function:", x)

}
funct1(45);
funct1(55);
funct1(65);


// basically if we dont do return a+b then it wont give us the ouput as the js dont know which value we are asking for so kya hoga return keyword se ek value return hogi copy hogi a  = 3 and b = 5 and then voh result 1 mai store hogi...
// now c = 9 is a defualt parameter toh 3+5+9 = 17

// agar mai b ki koi value na du toh NAN ayega which means not a number and agar  mai consoole.log karu a,b,c then the value of b will be this 3 undefined 9 undefined 


// <!-- so basically a function is used if we want to execute a block of code again and again -->

