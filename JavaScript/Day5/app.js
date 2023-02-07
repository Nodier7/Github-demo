///Objects

//properties are data contained within the object
//methods are things that the object can do

//Objects are constructed of key:value pairs
//key - descriptor to what property is
//value- is the data contained in the property

//Object Example

const coffeeShop ={
    name: "Costa",
    branchNumber: 250,
    specialOffers: true,
    drinkMenu: [
        "Americano",
        "Latte",
        "Tea"
    ]

}

console.log(coffeeShop)

//Dot notation
console.log(coffeeShop.name)

//Bracket notation
console.log(coffeeShop.branchNumber)

//Combination of dot and bracket notation
console.log(coffeeShop.drinkMenu[1])

//Objects are mutable - you can change them o/ update them
//Add a new property to the object
coffeeShop.muffins= ["Blueberry", "Chocolate"]

console.log(coffeeShop)

//change / update a property
coffeeShop.branchNumber = 100

console.log(coffeeShop)

coffeeShop.breakfastOffer = "Free bagel with any coffee."
coffeeShop.lunchOffer = "Free coffee with any sandwich."

let offer= "no offer"
let time = 1200

if (time < 1100) {
    offer = coffeeShop.breakfastOffer
    console.log(offer)
} else if (time < 1500){
    offer = coffeeShop.lunchOffer
    console.log(offer)
}

//Methods
coffeeShop.open = () =>{
    return "We are open , come on in!"
}

coffeeShop.close = () =>{
    return "Sorry we are closed!"
}

console.log(coffeeShop.open())
console.log(coffeeShop.close())

// Alarm Clock Object
const alarm ={
    weekendAlarm: "sleep in, it's the weekend",
    weekdayAlarm: "Get up at 7:00 am",
    checkAlarm(day){
        if (day === "Saturday" || day === "Sunday"){
            return this.weekendAlarm
        } else {
           return this.weekdayAlarm
        }
    }
}

console.log(alarm.checkAlarm("Monday"))


//Hoisting
//If you call an arrow function, it must always be done after the function declaration
//Arrow function syntax
const squaredArrow = (number) => {
    return number * number
}

console.log(squaredArrow(5))

//Function Declaration
// With a function expression, the function can be called before declaration
function squaredDeclaration(number){
    return number * number
}