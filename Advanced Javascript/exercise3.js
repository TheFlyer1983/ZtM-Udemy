// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = test;


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;

const {firtName, lastName, age, eyeColor} = person

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const messate = `Hello ${firstname} have I met you before? I think we met in ${city} last summber no???`;

// default arguments
// default age to 10;
function isValidAge(age=30) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) =>{
  if (username && location) {
    return "I am not lost"
  }
  else {
    return "I am totally lost."
  }
}
