let array1 = ["item1","item2"];

//Method 1 cloning of array
// let array2 = array1.slice(0);

//Method 2 cloning of array
// let array2 = [].concat(array1);

//Method 3 (spread Operator)
// let array2 = [...array1];

// Extra item adding in arrays

//Method 1
// let array2 = array1.slice(0).concat(["item3","item4"]);

//Method 2
// let array2 = [].concat(array1,["item3","item4"]);

//Method 3
// let array2 = [...array1,"item3","item4"];

//Method 4
let oneMoreArray = ["item3","item4","item5"];
let array2 = [...array1, ...oneMoreArray];

console.log(array1);
console.log(array2);