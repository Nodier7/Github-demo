//Task 1:  Create an object called person with keys of name age 
//and city. Create a function / method that returns a sentence
// containing the persons details. 

const person ={
    name: "Patrick",
    age: 53,
    city: "London",

}

person.returnDetails = () =>{
    return `My name is ${person.name}, I am ${person.age} and I live in
     ${person.city}`
}

console.log(person)
console.log(person.returnDetails())


//Task 2: Without editing the original person object add a list of 
//your favourite songs to the person object and log the first song 
//on the list to the console. 

person.favSongs = [
    "Dilemma",
    "Ebony and Ivory",
    "Human Nature",
    "Henriquet",
    "Bizorbi"
]

console.log(person)
console.log(person.favSongs[0])

//Task 3: Create a pet object with key values of name, typeOfAnimal,
// age and colour. Add functions / methods to your object named eat 
//and drink. The methods should return a string saying "(pet name) 
//is eating" and "(pet name) is drinking". Make use of the “this” 
//keyword.

const pet = {
    name: "Milou",
    typeOfAnimal: "dog",
    age: 4,
    colour: "black",

    eat(){
        return `${this.name} is eating`
    },

    drink(){
        return `${this.name} is drinking`
    } 

}

console.log(pet)

console.log(pet.eat())
console.log(pet.drink())