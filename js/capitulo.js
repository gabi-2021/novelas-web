function cambiar(){
    var x=document.getElementById('luna-sol');
    if(x.className=="fas fa-moon"){
        x.className="fas fa-sun"
        var y=document.getElementsByClassName("contenedor-de-todo");
        y[0].style.backgroundColor="black";
        y[0].style.color="white";
    }else{
        x.className="fas fa-moon"
        var z=document.getElementsByClassName("contenedor-de-todo");
        z[0].style.backgroundColor="white";
        z[0].style.color="black";
    }
}
$(function(){
    function tamañoDeLetra(){
        tamaño = $(".texto" ).css("font-size");
        tamaño = parseInt(tamaño,10);
        return tamaño
    }
    tamañoDeLetra()
})
function disminuirTamaño(){ 
    if((tamaño-2) >= 11){
        $(".texto").css("font-size","-=2") 
        tamaño-=2;
}}
function aumentarTamaño(){ 
    if((tamaño+2) <= 25){
        $(".texto").css("font-size","+=2")
        tamaño+=2;
    }
}
function reestablecer(){ 
    $(".texto").css("font-size", "initial");
}
