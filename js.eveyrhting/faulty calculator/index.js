console.log("Hey this is a faulty calculator")

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


function mul(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function exponential(a, b) {
    return a ** b;
}

let a = parseFloat(prompt("enter first number :"));
let b = parseFloat(prompt("enter second number :"));

let result1 = add(a, b);
let result2 = sub(a, b);
let result3 = mul(a, b);
let result4 = divide(a, b);
let result5 = exponential(a, b);



if (Math.random() < 0.1) {
    console.log("the addition of two numbers is:", result2);
    console.log("the multiplication of two numbers is:", result1);
    console.log("the subtraction of two numbers is:", result4);
    console.log("the division of two numbers is:", result5);
}
else {
    console.log("the addition of two numbers is:", result1);
    console.log("the subtractions of two numbers is:", result2);
    console.log("the multiplication of two numbers is:", result3);
    console.log("the divison of two numbers is:", result4);

}


// “Prompt browser mein chalta hai, Node.js mein nahi. Aur prompt string return karta hai, isliye hum usse integer ya float mein convert karte hain.”



