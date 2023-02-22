
//Preconditions: Takes two parameters, thh lowest number min and a highest number max
//Postconditions: Returns a random number from min to max.

/*const min = Number(document.getElementById("minNum").value);
const max = Number(document.getElementById("maxNum").value);

function getRndInteger(min, max) {   
   
    return Math.floor(Math.random() * (max - min +1) ) + min;
}
console.log(min)
console.log(max)
console.log(Math.round(Math.random() * (max - min +1) ) + min);
const btn = document.getElementById("submit");
const num = document.getElementById("p1");

function processRnd(){
    num.innerHTML = getRndInteger(min, max);
    
}*/

/*function displayNumber(){
  return document.getElementById("p1").innerHTML = getRndInteger(min, max);
}*/
const minNum = document.getElementById('minNum');
const maxNum = document.getElementById('maxNum');
const btn = document.getElementById('submit');
const outputNum = document.getElementById('p1');


document.getElementById("random").innerHTML = Math.random(); //Math.random() gives a number from 0 to 1
        
document.getElementById("floor").innerHTML = Math.floor(1.146545); //Rounds a number down to nearest integer

//Can you find the way to round up?
document.getElementById("ceil").innerHTML = Math.ceil(1.146545);

//What if you want to round to the nearest integer?
document.getElementById("round").innerHTML = Math.round(1.146545); 

btn.addEventListener('click', function() {
  const min = parseInt(minNum.value);
  const max = parseInt(maxNum.value);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  outputNum.innerText = `Random number: ${randomNum}`;
}); 