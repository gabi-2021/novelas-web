'use strict'

const grande    = document.querySelector('.grande');
const punto     = document.querySelectorAll('.punto');

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i;
        parseInt(posicion);
        var operacion1=0;
        var operacion2=-34;
        var operacion3=-67;
        switch (posicion){
            case 0:
                grande.style.transform = `translateX(${ operacion1 }%)`
                break;
            case 1:
                grande.style.transform = `translateX(${ operacion2 }%)`
                break;
            case 2:
                grande.style.transform = `translateX(${ operacion3 }%)`
                break;
        }
        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})