const bloques    = document.querySelectorAll('.bloque')
 bloques.forEach((bloque) => {
     bloque.addEventListener('click',function(){
         bloque.classList.toggle("activo")
     })
 });
        

  