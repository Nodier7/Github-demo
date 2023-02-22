/*function timesup()  {
    alert("Kaboom!");
}*/

const myTimeout = setTimeout(timesup, 20000);

function timesup() {
  document.getElementById("form1").innerHTML = "Sorry, the page has timed out. You took too long to fill out the form"
}

function formSubmitted(){
  document.getElementById("form1").innerHTML ="The form has been submitted"
  clearTimeout(myTimeout);
}