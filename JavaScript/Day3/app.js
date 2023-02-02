//Arrays & loops
// learning Objectives:
//To understand  what an array is
//To make use pf array methods
// To explore loops and integrate them into your code.

let coffeeOrder = [
    "james - Americano",
    "Hannah - Frappuccino",
    "Alex - Latte"
]

//log the array to the console
console.log(coffeeOrder)

//Log a specific array item
console.log(coffeeOrder[1])

//change a value of an array item
coffeeOrder[1] = "Hannah - Tea"

console.log(coffeeOrder)

//When using the length property with an array it will return the number of array items
//Array property
console.log(coffeeOrder.length)

//Array methods
//push("item") method will add an item at the end of the array 
coffeeOrder.push("Christian - Water")
console.log(coffeeOrder)

//pop() method will remove an item at the end of the array
coffeeOrder.pop()
console.log(coffeeOrder)

//Loops

let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black"
]

console.log(colours)

console.log(colours[0])
console.log(colours[1])
console.log(colours[2])
console.log(colours[3])
console.log(colours[4])
console.log(colours[5])

//For Loop

for (let i = 0; i < colours.length; i++){
    console.log(colours[i])
}

//Multiples of Two - For l00p

//Declare an empty array
let multipleTwo = []

for (let i = 1; i < 21; i++){
    if(i % 2 === 0) {
        multipleTwo.push(i)
    }
}

console.log(multipleTwo)

//While Loop
//Runs continuously whilst the specified condition is true.

let number = 1

while (number < 11){
    console.log(number)
    number ++
}

//Do Whilw Loop
// checks the condition after the code has run
//Therefore will always run at least once.

let x = 5
let y =0

do{
  x = x + y
  console.log(x)
  y++
} while (y < 10)

//While loop example 2

let cards = ["Diamond", "Spade", "Club", "Heart"]
let currentCard = "Club"

while (currentCard != "Spade"){
    console.log(currentCard)
    currentCard= cards[Math.floor(Math.random()* 4)]
}

console.log(currentCard)