const obj1 = {
    key1:"value1",
    key2:"value2"
};

const obj2 = {
    key1:"value Unique",
    key2:"value3",
    key3:"value3",
};

const newobject = {...obj2, ...obj1, key62:"value62"};
console.log(newobject);