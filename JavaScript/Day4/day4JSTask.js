//Task 1: Write a function with parameters of first name and 
//surname, that outputs a personalised greeting using the arguments
// passed to the function. 

const  persGreeting = (firstName, surname) =>{

     console.log(`Hello ${firstName} ${surname}, I hope you're doing well`)     
}

persGreeting("Bob", "Johnson")


2//Task 2: Write a function that takes in a number and checks 
//whether or not it is odd or even. 

function oddEven(number){

    if (number % 2 === 0){
     
      console.log(number + " is an even number")
    } else{
    console.log(number + " is an odd number")
    }
}

oddEven(5)
oddEven(10)

//Task 3: Write an ATM function that takes in parameters of 
//withdrawAmount and pinNumber. The function should check that 
//the pinNumber is correct and that the withdrawAmmount is less 
//than the account balance. If the pin is correct and the 
//balance is sufficient, approve the transaction. If not 
//decline the transaction. 

const balance = 1000.00
const pin = 4570

function ATM(withdrawAmount, pinNumber){
    if (withdrawAmount <= balance){
        if (pinNumber === pin){
            console.log("Transaction approved")
        } else{
            console.log("Transaction declined, PIN incorrect")
        }

    } else{
        console.log("Transaction declined, insufficient balance")
    }
        
}

ATM(400, 1111)
ATM(1100, 4570)
ATM(450, 4570)