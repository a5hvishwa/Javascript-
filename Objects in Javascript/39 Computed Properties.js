const key1 = "object1";
const key2 = "object2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     object1 : "myvalue1",
//     object2 : "myvalue2",
// }

// const obj = {
//     [key1]:value1,
//     [key2]:value2
// }

const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);