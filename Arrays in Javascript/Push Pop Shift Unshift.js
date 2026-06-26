let fruits = ["apple" , "banana" , "grapes"]
console.log(fruits);

//push
fruits.push("mango");
console.log(fruits);

//Pop
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("Popped fruit is" , poppedFruit);

//unshift
fruits.unshift("myfruit")
fruits.unshift("another fruit");
console.log(fruits);

//shift
let removedFruit = fruits.shift();
console.log(fruits);
console.log("This is removed fruit",removedFruit);