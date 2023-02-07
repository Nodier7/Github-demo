// Day 3 Javascript Tasks
//Task 1:  Create an array of your favourite films / TV shows, up to 
//5 items. Use an array method to add 2 more items to your array. 
//Use a loop to cycle through the array and log each item to the console.

let favFilmsShows = [
    "Friends",
    "My wife and kids",
    "Match of the day",
    "Coming to America",
    "Columbo"
]

favFilmsShows.push("Commando")
favFilmsShows.push("Match of the day 2")
console.log(favFilmsShows.length)

for (let i = 0; i < favFilmsShows.length; i++){
    console.log(favFilmsShows[i])
}

//Task 2: Using a loop generate 10 random numbers between 1-100 and 
//log them to the console.

let number = 1

while (number < 11){
    console.log(Math.round(Math.random()*100 +1))
    number ++
}

//Task 3: Create a loop that counts backwards from 20-0 logging the 
//numbers to console.

let number1 = 20

while (number1 >= 0){
    console.log(number1)
    number1--
}

//Task 4: Using a loop generate 5 random numbers between 1-50. For each
// number generated, check if the number is divisible by 5 or not. 
//Log whether it is divisible or not to the console.

let numbers =[]

for (let i = 0; i < 5; i++){

    numbers[i] = Math.round(Math.random()*59 +1)
}

for (let i = 0; i < numbers.length; i++){

    if (numbers[i] % 5 === 0){
        console.log(`${numbers[i]} is divisible by 5.`)
    } else{
        console.log(`${numbers[i]} is not divisible by 5.`)
    }
} 