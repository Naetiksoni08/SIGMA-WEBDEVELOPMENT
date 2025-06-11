console.log("this is the code for finding factorial of a number : ");

let n = 1;
function fact(n) {
    if(n==1) {
        return 1;

    }
    else{
        return n * fact(n-1);
    }

    
}
console.log(fact(4));