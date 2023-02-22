  //An anonymous function
  let a = "";
  a = function() 
  {
      return"This is an anonymous function";
  }
  document.getElementById("regularfunction").innerHTML =  a();

  //Arrow functions let us get rid of the word function to reduce code
  let b = "";
  b = () => {
      return "Arrow function example 1"
  }
  document.getElementById("example1").innerHTML =  b();

  //Since arrow functions return a value by default we don't really need the return
  let c = "";
  c = () => "Arrow function example 2";
  
  document.getElementById("example2").innerHTML =  c();

  //Arrow functions can even use parameters!
  let d = "";
  d = val => "Arrow function" + val;

  document.getElementById("example3").innerHTML =  d(" example 3");

  //When using multiple parameters, we have to use the parentheses around the parameters.
  let e = "";
  e = (val1, val2) => "This function " + val1 + " " + val2;

  document.getElementById("example4").innerHTML = e("takes", document.getElementById("text").innerHTML)
  
  //Now it's your turn to experiment.
  //Can you bind a event?
  let messageDisplayed = true; 
  document.addEventListener("click", function(){
       if(messageDisplayed == true){
         document.getElementById("div1").innerHTML = "All messages have been deleted"
         messageDisplayed = false;
      }
       else{
        document.getElementById("regularfunction").innerHTML = a();
        document.getElementById("example1").innerHTML =  b();
        document.getElementById("example2").innerHTML =  c();
        document.getElementById("example3").innerHTML =  d(" example 3");
        document.getElementById("example4").innerHTML = e("takes", document.getElementById("text").innerHTML);
        messageDisplayed = true;
  
       }
  })


  //What happens if you want more than one line of code in the function?



