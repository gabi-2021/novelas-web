

var formulario=document.getElementById('formulario')
        formulario.addEventListener('submit',function (pr){  
        var nombre=document.getElementById('nombreApellido').value
        var correo=document.getElementById('correoElectronico').value
        var contraseña=document.getElementById('contraseñaReal').value
        var confirmarContraseña=document.getElementById('contraseñaConfirmar').value
        
        if(nombre=="" ){
            alert('El campo nombre esta vacio')
           }else{
            if (nombre.length<4) {
                alert('El nombre es demasido corto minimo 4 caracteres')
            }
           }
        if(correo==""){
            alert('El campo correo esta vacio')
        };
        if(contraseña==""){
            alert('El campo contraseña esta vacio')
        };
        if(confirmarContraseña==""){
            alert('El campo confirmar contraseña esta vacio')
        };
        if(nombre.length>40){
            alert('El campo nombre es demasiado largo maximo 40 caracteres')
        }
        if ((confirmarContraseña.length>=4&&contraseña.length>=4)&&confirmarContraseña==contraseña) {
            alert('Ingreso y confirmo correctamente la contraseña')
        }else{if (confirmarContraseña!=contraseña) {
            alert('Vuelva a ingresar la contraseña')
        }
           
        }
        })
