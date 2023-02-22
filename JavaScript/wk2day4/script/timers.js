const timeout = setTimeout(timer, 10000);
//Preconditions:
//Postconditions: 
function timerStop(trigger){

    if(trigger == document.getElementById("answer").value){
        clearTimeout(timeout);
        alert("Timer Stopped!");
    }
    else
    {
        alert("Wrong answer")
    };

};
function timer(){
    alert("Times Up!");
};

function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function displayMessage(){
    document.getElementById("p1").innerHTML = "This is a message to say THANK YOU";
}




