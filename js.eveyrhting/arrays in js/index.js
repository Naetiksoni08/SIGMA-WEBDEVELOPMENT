let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr)

console.log(arr.length)

console.log(arr[3])

// note that arrays are mutable which means once created they can be modified or changed wherease strings are immutable which means they can not be changed or modified once created so if i do this then the value of first item will chnge this is how

// arr[0] = 56;
// console.log(arr[0])

// when u print type of arr in js it will show that arr are objects
// console.log(typeof arr)

// there are some methods in the array 
// -- to string method
console.log(arr.toString())
// output 1,2,3,4,5,6,7
// -- join - it is used to join elements with whatever u want like if i want to joing 1 2 3 4 5 6 7 with and like 1 and 2 and 3 and ... so i can do this

console.log(arr.join(" and "))
// answer 1 and 2 and 3 and 4 and 5 and 6 and 7
console.log(arr.join(" --> "))
// 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 

// pop - used to remove the last element in the array

let a = [12,2,3,4]
console.log(a.pop())

// push - return the length of the array 
let b = [2,3,4,5]
console.log(b.push(60))
console.log(b)
// now we have 5 elements 
console.log(b.push("naetik naetik push"))
console.log(b)
// now we have 6 elements 

// shift method
// opposite of pop ye bas first element ko shift kardega
let c = [12,3,4,5,6,7,8,9]
console.log(c.pop())
console.log(c.shift())
// unshift - basically adds a number or a string at the first place
console.log(c.unshift("naetikop"))
console.log(c)
// so unshift - first element par add karta hai
// push - last element par push krte h ya add karta hai
// pop - last element pop karta h ya remove karta hai
// shift - first element ko remove karta h 

// delete
console.log(delete[4])
console.log(c)
console.log(c[4])
// basically kya karta hai ki delete karoge toh true ayega but length vohi rehati hai kyu kyuki uss element ki jagah par empty aah jata hai aur fir kya hota hai ki jab aap uss element ko print karne ki koshish kroge toh fir output undefined ayega the above code has some erros cuz it is not deleting the element

// concat - concats the array 
let d = [1,2,3]
let d1 = [4,5,6]
let d2 = [7,8,9]
console.log(d.concat(d1,d2))
// this method doent change the exisitng array

// sort - use to sort the no in array

let f = [7,5,4,3,2,8,9]
console.log(f.sort())

