// Task 1: Write an if statement that checks whether a customer is old enough 
//to be served alcohol at a bar. Declare a variable called age and write 
//an if statement that checks whether age is 18 or above. If age is less 
//than 18 log "Sorry, I can't serve you" to the console, if age is 18 or 
//above log "No problem, what would you like to drink?" 

let age = 21

if ( age >= 18){
    console.log("No problem, what would you like to drink?")
    
} else{
    console.log("Sorry, I can't serve you.")
}

//Task 2: Declare a variable called "Password". Write an if statement 
//that checks how many characters are in the password, if the password 
//has more than 8 characters log the password to the console, if the 
//password has less than 8 characters log to the console that the 
//password is too short. 

//Password will be declared as a string even for numbers  "aa", "34" or "a2"
let password = "fdjuui84"

if (password.length >= 8 ){
    console.log("The password is: " + password + ".")
} else{
    console.log("The password is too short!")
}

//Task 3: Create a variable that stores a number. Check whelet age 
//ther the number is divisible by 3 or 5, if so log "This number is 
//divisible by 3 or 5" to the console. Otherwise log an alternate 
//message to the console.

let num = 7

if ((num % 3 == 0) || (num % 5 == 0)){
    console.log(num + " is divisible by 3 or 5")

} else{
    console.log(num + " is divisible neither by 3 nor by 5")
}

//Task 4: Create a variable that stores a number. If the number is 
//divisible by 3, if so log "fizz" to the console. If the number is 
//divisible by 5 log "buzz" to the console. If the number is divisible 
//by both 3 and 5, log "fizz buzz" to the console. Otherwise log the 
//number to the console.

let number =  7

if (number % 3 == 0 && number % 5 != 0){
        console.log("Fizz")
}

else if (number % 5 == 0  && number % 3 != 0){
           console.log("Buzz")
}

else if (number % 3 == 0 && number % 5 == 0){
        console.log("Fizz buzz")
}

else{       
       console.log(number + " is not divisible either by 3 or by 5")

}

//Stretch Task: Create variable that stores a number. Check if the number
//is a palindrome. (Same backwards as it is forwards)  

let num2 = 1234554321

let strNum = num2.toString() 
let num3 = parseInt(reverseString(strNum))
   
if (num2 == num3){
    console.log(num2 + " is palindrome.")
} 
else {
    console.log(num2 + " is not a palindrome.") 
}

function reverseString( numStr){
   
    let splitStr = numStr.split('')
    let revStr = splitStr.reverse()
    let joinStr = revStr.join('')
    return joinStr
 } 


