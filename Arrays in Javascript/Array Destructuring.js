const myArray = ["value1","value2","value3"];
let [myvar1,myvar2,...mynewarray] = myArray;
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log(mynewarray);