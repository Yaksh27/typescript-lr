//Type aliases
//CANNOT DO THIS WITH INTERFACES. 

type StringOrNumber = string | number 

type StringOrNumberArray = (string | number)[]


interface Guitarist  {
    name: string;
    active?: boolean; //optional 
    albums : StringOrNumberArray
}

type UserId = StringOrNumber //type can be type

// literal types 
let myName : 'Yaksh'

// myName = 'Patel' // won't work this is bad.

let userName : 'John' | 'Robert' | 'Bran'
userName = 'John'

//functions 

const add = (a:number,b:number) : number => {
    return a+b;
}

const logMsg = (message:string | number): void => { 
    console.log(message);
}

logMsg('hello...')
logMsg('hello...')
// logMsg(add(2,3)); will log 5 but shows error too in editor

let subtract = function( c:number, d:number):number {

     return c-d;
    
};

type MathFunction = (a:number, b:number) => number;

// interface MathFunction2 {
//     (a:number, b:number) : number
// }

let multiply : MathFunction = function(c,d,){    
    return c*d
}
logMsg(multiply(3,4))

// optional parameters 

const addAll = (a:number, b:number , c?:number) : number=> { 
    if(typeof c!== 'undefined'){
        return a+b+c
    }
    return a+b
}

// default parameters (cannot achieve with type aliases or interfaces.)

const sumAll = (a:number, b:number , c:number = 2) : number => { 
    return a+b+c;
}

logMsg(addAll(2,2,3))
logMsg(addAll(2,2))
logMsg(sumAll(2,3))

//rest parameter 

const total = (a:number, ...nums : number[]): number =>{
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))

//never type - functions that explicity throw errors.
const createError = (errMsg : string) : never =>{
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while(true){
        i++
        //prevent return type from NEVER - endless loop
        if(i>100) break
    }
}

const isNumber = (value : any) : boolean => { 
    return typeof value === 'number' ? true : false

}

const numberOrString = (value: number | string): string => { 
    if (typeof value === 'string') return 'string'
    if (isNumber(value) ) return 'number'
    return createError('this should never happen')
}



