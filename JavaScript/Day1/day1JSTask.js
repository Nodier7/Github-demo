//Task 1
//Create a variable that stores your name and log a string to the console that greets you using template
//literals. 

 let myName = "Nodi"
console.log(`My name is ${myName}.`)

//Task 2
//Create Variables storing your name, your age and your favourite 
//film or tv series. Using template literals I want you to log a 
//sentence including these values to the console.

let firstName = "Nodi"
let age = "100"
let favSeries = "Friends"
console.log("My name is " + firstName + ", I am " + age + 
" and my favourite tv series is " + favSeries + ".")

//Task 3
//3: Generate a number between 1 and 50 and log it to the console. 

let randNumber = (Math.random() * 50) + 1
console.log(Math.round(randNumber))

//Task 4
//Create variables storing what you ate for breakfast, lunch and 
//dinner yesterday and a log a sentence to the console. Without 
//overwriting the initial variable declarations I would like you to 
//set new variable values to what you have eaten / plan to eat today 
//and log another sentence to the console.

let breakfast = "bread, avocado, ham and green tea"
let lunch = "apple, dried prunes and cranberry juice"
let dinner = "rice, spinach, chicken and tomato juice"
console.log("Yesterday, I had " + breakfast + " for breakfast.")
console.log("Then, I had " + lunch + " for lunch.")
console.log("Finally, I had " + dinner + " for dinner.")

breakfast = "bread, avocado, salami and dried prunes and lemon tea"
lunch = "orange, seeds, croissant and grape juice"
dinner = "chips, fish, salad, ketchup and tomato juice"

console.log("Today, I had " + breakfast + " for breakfast.")
console.log("Then, I had " + lunch + " for lunch.")
console.log("And I will have " + dinner + " for dinner.")



