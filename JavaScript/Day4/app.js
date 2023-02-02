//functions
// Ways to compartimentalise our codes

//Declare a function - Arrow function syntax

const greeting = () =>{
    console.log("Hello World")
}

//Calling / invoking a function

greeting()

//Light Switch Example

let lightson = false

const lightSwitch = ()  =>{
    if (lightson){
        lightson = false
        console.log("Lights off")
    } else {
         lightson = true
         console.log("Lights on!")
    }
}

lightSwitch()
lightSwitch()

//Functions that take in parameters / arguments
//parameters are required values that specify when we declare a function

const atm = (accountNumber, amount) =>{
    console.log(`Account Number: ${accountNumber}. Amount Withdrawn): £${amount}`)
}

//Calling a function without required parameters will return undefined variable

atm()


//Arguments are passed when calling functions to make it run appropriately

atm(12345678, 45)

//Global and local scope

//Global scope
const name = "Lydia"
const age = 21
const city = "San Francisco"

//Local Scope
const getPersonInfo = () => {
    const name = "Sarah"
    const age = 22
    return `${name} is ${age} and lives in ${city}`
}

console.log(getPersonInfo())

//Functions that call other functions

const timesTen = (num)  => {
    return num* 10
}

const timesTwenty = (num) => {
    return timesTen(num) * 2
}


// When using return within functions, we need to call the function
//within a console.log to see the output in the console.

console.log(timesTen(10))
console.log(timesTwenty(10))

//Function Syntax options
//Arrow function syntax
const squaredArrow = (number) => {
    return number * number
}

console.log(squaredArrow(5))

//Function Declaration
function squaredDeclaration(number){
    return number * number
}

console.log(squaredDeclaration(10))

// Anonymous Function

const squaredAnon = function (number) {
    return number * number
}

console.log(squaredAnon(3))