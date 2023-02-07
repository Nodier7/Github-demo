//Task 1: Write a function with parameters of first name and 
//surname, that outputs a personalised greeting using the arguments
// passed to the function. 

const  persGreeting = (firstName, surname) =>{

     //console.log(`Hello ${firstName} ${surname}, I hope you're doing well`)     
     return `Hello ${firstName} ${surname}, I hope you're doing well`     
    }

//persGreeting("Bob", "Johnson")
console.log(persGreeting("Bob", "Johnson"))


2//Task 2: Write a function that takes in a number and checks 
//whether or not it is odd or even. 

function oddEven(number){

    if (number % 2 === 0){
     
      //console.log(number + " is an even number")
      return number + " is an even number"
    } else{
    //console.log(number + " is an odd number")
    return number + " is an odd number"
    }
}

console.log(oddEven(5))
console.log(oddEven(10))

//Task 3: Write an ATM function that takes in parameters of 
//withdrawAmount and pinNumber. The function should check that 
//the pinNumber is correct and that the withdrawAmmount is less 
//than the account balance. If the pin is correct and the 
//balance is sufficient, approve the transaction. If not 
//decline the transaction. 

let balance = 1000.00
let pin = 4570

function ATM(withdrawAmount, pinNumber){
    if (withdrawAmount <= balance){
        if (pinNumber === pin){
            //console.log("Transaction approved")
            return "Transaction approved"
        } else{
            //console.log("Transaction declined, PIN incorrect")
            return "Transaction declined, PIN incorrect"
        }

    } else{
        //console.log("Transaction declined, insufficient balance")
        return "Transaction declined, insufficient balance"
    }
        
}

console.log(ATM(400, 1111))
console.log(ATM(1100, 4570))
console.log(ATM(450, 4570))