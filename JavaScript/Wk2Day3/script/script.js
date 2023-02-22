document.addEventListener('keydown', function(event) {
    if(event.code == 'Numpad3') {
        alert('Numpad3 was pressed');
    }
    else if(event.code == 'ArrowRight') {
        alert('Right was pressed');
        document.getElementById("circ").style.fill = "blue";

    }

    
});


document.addEventListener('keyup',function(event){
    if(event.code == 'Numpad3') {
        alert('Numpad3 was depressed');

    }

});