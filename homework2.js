//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
//Method 1
console.log(Object.values(person3));
console.log('***************************************************************************');

//Method 2
const personInfo = (person) => {
    for(let i=0; i< Object.keys(person).length; i++){
        //console.log(`${Object.keys(person)[i]} : ${Object.values(person)[i]}`);
        console.log(`\n${Object.keys(person)[i]} :`);
        console.log(Object.values(person)[i]);
    }
}
personInfo(person3);
console.log('***************************************************************************');

//Method 3
const personInfo2 = (person) => {
    for(let i=0; i< Object.keys(person).length; i++){
        //console.log(`${Object.keys(person)[i]} : ${Object.values(person)[i]}`);
        console.log(`\n${Object.keys(person)[i]} :`);
        if(Array.isArray(Object.values(person)[i])){
            console.log(JSON.stringify(Object.values(person)[i]));
        }
        else{        
            console.log(Object.values(person)[i]);
        }
    }
}
personInfo2(person3);

//Method 4
console.log('***************************************************************************');
const personInfo3 = (person) => {
    for(let i=0; i< Object.keys(person).length; i++){
        //console.log(`${Object.keys(person)[i]} : ${Object.values(person)[i]}`);
        console.log(`--------------- Food Dish Type - ${Object.keys(person)[i]}: ---------------`);
        if(Array.isArray(Object.values(person)[i])){
            temp_object = Object.values(person)[i]
            for(let j=0; j< temp_object.length; j++){
                console.log(temp_object[j]);
            }
        }
        else{        
            console.log(Object.values(person)[i]);
        }
    }
}
personInfo3(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

console.log('//=======Exercise #2=========//');
function Person(name, age){
    this.name = name;
    this.age = age;
    //A Method
    this.printInfo = () => {
        console.log(`Person name is a ${this.name}, and is age is ${this.age}.`);
    }
    this.addAge = (no_of_years = 1) => {
        this.age = this.age + no_of_years;
        return "this.age";
    }
}
//Creating an instance of a prototype
let first_person = new Person('Peter Parker', 25);
first_person.printInfo();
first_person.addAge();
first_person.printInfo();
first_person.addAge(2);
first_person.printInfo();
first_person.addAge(1);
first_person.printInfo();
first_person.addAge(0);
first_person.printInfo();

let second_person = new Person('Neo Anderson', 27);
second_person.printInfo();
second_person.printInfo();
second_person.addAge(3);
second_person.printInfo();
second_person.addAge();
second_person.printInfo();
second_person.addAge(2);
second_person.printInfo();
second_person.addAge(0);
second_person.printInfo();

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
console.log('// =============Exercise #3 ============//');
const isLengthGreaterThanTen = (str) => {
    return new Promise ((resolve, reject)=>{
        if(str.length > 10){
            resolve(true);
        }else{
            reject(false);
        }
    })
}

//Using the promise
isLengthGreaterThanTen('This is Long String')
//Happy path - resolve
.then((result) =>{
    console.log(`Big Word ${result}`);
})
//Sad reject path
.catch((error) =>{
    console.log(`Small String ${error}`);
})

isLengthGreaterThanTen('Short One')
.then(() =>{
    console.log(`Big Word`);
})
.catch(() =>{
    console.log(`Small String`);
})
