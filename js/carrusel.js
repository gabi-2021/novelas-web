'use strict'

const grande    = document.querySelector('.grande');
const punto     = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
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
 
        punto.forEach( ( cadaPunto , i )=>{

            punto[i].classList.remove('activo')
        })
 
        punto[i].classList.add('activo')

    })
})