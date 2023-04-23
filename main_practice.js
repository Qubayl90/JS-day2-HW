// The Switch case statement
let day = new Date().getDay();
let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)

switch(day){
    case 0:
        console.log('Sunday, go to church');
        break;
    case 1:
        console.log('Monday, write code');
        break;
    case 2:
        console.log('Tuesday, test code');
        break;
    case 3:
        console.log('It is wednesdat');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('TGIF');
        break;
    case 6:
        console.log('Saturday night');
        break;
    default:
        console.log('No Day');     
}

// Objects creation 
let person = {
    name: 'Bill',
    age: 28, 
    fav_color: 'Yellow'
}
console.log(person.name);
console.log(person['name']);

let person2 = {
    name: "Johny",
    age: 31,
    prog_lang: ['Python', 'C++', 'Java', 'SQL', 'JavaScript'],
    fav_color: 'Green',
    teams: [
        {
            baseball: 'chhabdf asdvsdv',
            football: 'sdfgdfggfb sdbdgb',
            hockey: ['sdgsdfg asbs', 'yjtrjssv']
        },
        {
            baseball: 'asdfs',
            basketball: 'ads sbdfb dfbdfb c',
            hockey: ['45vd sdf', 'agfdsv', 'erwgf']
        },
    ]
};

console.log(person2.prog_lang[2]);
console.log(person2.teams[1].baseball[1]);

// JS Object Prototype Methods - Object Literal
console.log(Object.keys(person2));
console.log(Object.values(person2));

for(let i=0; i< Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]);
}
for(let i=0; i< Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}


// Create our own Object Prototypes -- Like classes 
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    //A Method
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model} and has ${wheels} wheels and the color is ${color}`);
        return "Returned value";
    }
}
//Creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019);
console.log(my_car.printInfo(4, 'Dark White'));


//JavaScript Classes
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printInfo(){
        return `Name is ${this.name}\n Age is ${this.age} \n and Gender is: ${this.gender}`
    }
}

let Spidy = new Human('Spidy', 28, 'Male');
console.log( Spidy.printInfo());

//Inheritance using classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking;
    }
    isBabyWalking(){
        if(this.walking == true){
            return 'Baby is walking';
        }else {
            return 'Baby is not walking yet';
        }
    }
}

//Create instance of baby
let Johny = new Baby('Johny', 1, 'male', true);
console.log(Johny.printInfo());
console.log(Johny.isBabyWalking());

// Js is weird 
/*
main_practice.js:131 
[]+[]
''
{}+ []
0
[]+{}
'[object Object]'
{} + {}
NaN
{}+{}
NaN
Array(5)
(5) [empty × 5]
Array(5).join(' JS is weird ' +1)
' JS is weird 1 JS is weird 1 JS is weird 1 JS is weird 1'
*/


// JavaScript Closures
// A closure is a self-invoking function that only runs once
// One of the most important parts is that it has private data inside of it
// Closure are also a variable data type

var outsideNum = 5
var addNums = function (){
    var insideNum = 6;
    return outsideNum + insideNum;
}
console.log(addNums());
console.dir(addNums);


let newAdd = function(outer_var){
    let innerAdd = function (inner_var){
        return outer_var + inner_var;
    };
    return innerAdd;
}

let addFive = new newAdd(5);
let addSix = new newAdd(6);

console.log(addFive(4));
console.dir(addFive);
console.log(addSix(4));
console.dir(addSix);



let count_up = (function(){
    let counter = 0; //This will be our private variable
    console.log('Hit');
    return function() {return counter ++}
}) ()

console.log(count_up())
console.log(count_up())
console.log(count_up())
console.dir(count_up)



let addNames = (function(){
    let names = []; //This is the private variable stored
    console.log('Adding Names');
    return function (name){
        console.log(names)
        return names.push(name);
    }
})()

console.log(addNames('Brandon'))
console.log(addNames('Linda'))
console.dir(addNames)
console.log(addNames('Joey'))
console.log(addNames('Tom'))


//////////////////////////  Async JavaScript
/*
Simply put: A Callback is a function that is to be executed after another function has finished its execution, hence the name callback
More Complex Definition: In a JavaScript, functions are objects. Becasue of this, functions can take other functions as arguments(parameters), and can return functions by other functions.
Functions that do this are called 'Higher order functions'. Any function, that is passed as an argument is called a 'Callback function'
Why do we need them?
The reason is, becasue the JS Event loop. In a nutshell, JS is an event driven language. So, instead of waiting for a response before moving on, JS will keep executing while listening for other events   
*/
function first(){
    console.log(1);
}
function second(){
    console.log(2);
}
first();
second();
//What if there is delay
function first_delayed(){
    setTimeout(function(){
        console.log(1)
    }, 5000)
}
function second_delayed(){
    console.log(2);
}
first_delayed();
second_delayed();

//Callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    callback();
}
// doHomework('JS online', function(){
//     console.log('Homework done');
// })
// doHomework('JS online', function(){
//     console.log('Homework done');
// })

//Callback hell
/*
function1(()=>{
    function2(()=>{
        function3(()=>{
            function4(()=>{
                //may be Something here.... 
            })
        })
    })
})
*/
//JS Promises 

const isEvenNumber = (num) => {
    return new Promise ((resolve, reject)=>{
        if(num%2 == 0){
            resolve(true);
        }else{
            reject(false);
        }
    })
}

//Using the promise
isEvenNumber(10)
//Happy path - resolve
.then((result) =>{
    console.log(`Even number ${result}`);
})
//Sad reject path
.catch((error) =>{
    console.log(`Odd number ${error}`);
})

//console.dir(isEvenNumber())
//console.dir(isEvenNumber(6))
//console.dir(isEvenNumber)


// Another Example using Async/Await
//Syntatical Sugar
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary ${new_salary}`);
    return new_salary;
}
//Function to add to base salary slowely 
function slow_addition(n1, n2){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(n1+n2), 2000);
    })
}
function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary;
}
async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new Salary is ${new_salary}`);
    return new_salary;
}
async_increase_salary(50000, 5000);
