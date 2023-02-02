// Conditions in JavaScript
//Weather If / Else example

let weather = "Foggy"

if (weather == "Sunny"){
    console.log("Grab a pair of sunglasses!")
} else if(weather == "Rain"){
    console.log("Bring your umbrella!")
} else{
    console.log("Unsure, maybe bring a hoodie.")
}

// Equal to - Comparison Operator - "=="
//checks the value of variable to see if it is equal

let a = "10"
console.log(a == 10)

//Equal to and Equal type - "==="
// checks the vaklue and data type of a variable are equal - 

console.log(a === 10)
// Comparison operators
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// Logical operators
// || - or
// && - and
// ! - not

// Traffic Light Example - If / Else

let trafficLight = "Green"

if (trafficLight === "Red" || trafficLight === "Amber"){
    console.log("Stop")
}  else{
    console.log("Go!")
}

if (trafficLight !== "Green") {
    console.log("Stop")
} else{
    console.log("Go!")
}

// Numbers Example If / Else
// Check whether a number is between 5 and 10
let num1 = 11

if (num1 >= 5 && num1 <=10){
    console.log(`${num1} is between 5 and 10.`)
} else{
    console.log(`${num1} is NOT between 5 and 10.`)
}

// Switch statements
// Alternative to If / Else
//Commonly used when checking a condition against multiple arguments

let day = "Tuesday"

switch (day){
    case "Monday":
        console.log("Weeknd is over!  Happy Monday!")
        break;

    case "Tuesday":
        console.log("Weeknd is over!  Happy Tuesday!")
        break;
    
    case "Wednesday":
        console.log("Weeknd is over!  Happy Wednesday!")
        break;

    case "Thursday":
        console.log("Weeknd is over!  Happy Thursday!")
        break;
    
    case "Friday":
        console.log("Weeknd is over!  Happy Friday!")
        break;   
    
        // If no case matches, it executes the default code
    default:
        console.log("It's the weekend!")
    
}

// Switch Statement - Grades Example

let testScore = 75

switch(true){

   case testScore >= 70:
      console.log("Distinction")
      break

    case testScore >= 60:
        console.log("Merit")
        breaks
    
    case testScore >= 60:
        console.log("Merit")
        breaks

    case testScore >= 50:
        console.log("Pass")
        breaks

    default:
        console.log("Fail")
             
}

// Ternery operator
// Shorthand conditional statement
// condition ? what you run if condition true: what you run when condition false

let score = 50

score >= 50  ? console.log("You Win") : console.log("You lose!")
