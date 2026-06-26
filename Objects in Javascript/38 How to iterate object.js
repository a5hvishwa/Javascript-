const person = {
    name : "vishwas",
    age : "21",
    personhobbies : ["sleeping","volleyball","coding"]
}

// For loop
// Object.key

for(let key in person){
    console.log('${key} : ${person[key]}');
    console.log('${key,":" , person[key]}')
}

// console.log(typeof (object.key(person)));
// const val = Array.isArray((object.key(person)));
// console.log(val);