document.addEventListener('keydown', function(event){
     if(event.code == 'Numpad3'){
        alert('Numpad3 was pressed');
     }
     else if (event.code =='ArrowRight'){
        alert('Right was pressed');
        document.getElementById("circ").style.fill = "blue";
     }
})

document.addEventListener('keypress', function(event){
   if(event.code == 'Numpad8'){
      alert('Numpad8 was pressed');
      document.getElementById("rect1").style.fill= "red";
   }
})

document.addEventListener('keyup', function(event){
   if(event.code == 'Numpad3'){
      alert('Numpad3 was depressed')
   }
})


