console.log("Hello World")

// Variables

var oldschool = "Var is an older variable declaration method and it should be avoided"
console.log(oldschool)

//Let - moder method of declaring variables that we may want to redeclare

let changeable ="A value stored in a variable that can be redeclared."
console.log(changeable)
changeable = "A new value has been passed to this variable"
console.log(changeable)

//const
const constant = "A value that cannot be redeclared."
console.log(constant)

//Redeclaring a variable

let x = 100
console.log(x)

x = x + 100
// += adds the value then assigns result as the new value

x+= 100
console.log(x)

// Data types
// String - represents text enclose in quote mark (single '' or double "")

let string = "I am a string"
console.log(string)

//Numbers (integers or decimal numbners)
console.log(100)
console.log(0.555)

let question = "1000" 
//"1000" is a string
console.log(question)

//Booleans -True or False
console.log(x == 300)

console.log(true)
console.log(false)

//Null
console.log(null)

// undefined
console.log(undefined)

// Properties and Methods
//Property - Qualities or info about the data
let propertyString = "Hello World"
console.log(propertyString)
console.log(propertyString.length)
console.log(propertyString.toUpperCase())

//Method() - Actions or doing something with the data
console.log("Argument")

//Math Library
//Javascript starts counting from 0
//Zero index language
//In-built mathematical methods and properties
//Generate a random number
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))
// Math.ceil - Always rounds up to a whole number
console.log(Math.ceil(Math.random() * 10))

// Math.round - rounds up or down depending on the number
console.log(Math.round(Math.random() * 10))

// Access variables and template Literals
let firstName= "Christian"
console.log("My name is " + firstName)

console.log(`My name is ${firstName}.`)

