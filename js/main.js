const botones= document.querySelectorAll('.boton')
const sinSinopsis=document.querySelectorAll('.sin-sinopsis')
botones.forEach((boton,i)=>{
    boton.addEventListener('click',function(){
        var posicionDelBoton=i
        sinSinopsis[posicionDelBoton].classList.toggle("sinopsis")
        x=sinSinopsis[i];
        console.log(x)
        if(x.className=="sin-sinopsis sinopsis"){
            x=document.getElementsByClassName('boton')
            x[posicionDelBoton].innerHTML = 'Ver menos';
        }else{
            x=document.getElementsByClassName('boton')
            x[posicionDelBoton].innerHTML = 'Ver mas';
        }
    })
});
const btn=document.querySelector('.barras');
const menu=document.querySelector('.menu')
btn.addEventListener('click',()=>{
    menu.classList.toggle('menu-activo');
}
);
