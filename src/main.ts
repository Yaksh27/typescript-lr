let stringArr = ["one" , "hey" , "Yaksh"]

let guitars = ['Strat' , 'Les Paul' , 5150]

let mixedData = ['EVH' , 1984 , true]

stringArr[0] = '33';
stringArr.push('Patel');

console.log(stringArr);

guitars[0] = 1984;
guitars.unshift('Unshift')
console.log(guitars);

let newArr:string[] = [];
newArr.push('String push will work');

// tuples 
let myTuple : [string,number,boolean] = ['Yaksh', 27 , true];
let mixed = ['Patel' , 1 , false]

mixed = myTuple; //WORKS cuz of it being a union type which the tupleHas

// myTuple = mixed; // mixed COULD be less than 3 size 

//OBJECTS

let myObj : object;
myObj = [];

console.log(typeof myObj)


const exampleObj = {
    prop1: 'Yaksh',
    prop2 : true,
}

exampleObj.prop1 = 'Patel';
exampleObj.prop2 = false;

type Guitarist = {
    name: string;
    active?: boolean; //optional 
    albums : (string | number)[]
}

let evh:Guitarist = {
    name :"Yaksh", 
    active : true,
    albums : ['its lit' , 2003]
}