var Producto = document.getElementById("Producto")
var Direccion = document.getElementById("Direccion")
var nombre_usuario = document.getElementById("Nombre_usuario")
var Cantidad = document.getElementById("Cantidad")
var metodo_pago = document.getElementById("Metodo_pago")
var Telefono = document.getElementById("Telefono")

function ValidarDatos(nombre_usuario){
    if( Producto == '' && Direccion == '' && nombre_usuario == '' && cantidad == '' && metodo_pago == '' && Telefono =='' && nombre_completo == ''){
        console.log("los campos estan vacios")

    }
    else {
        if(nombre_usuario != /[a-zA-Z]/){
            console.log('los datos son incorrectos')
        }

        if (telefono.lenght() > 10){
            console.log("los datos son incorrectos")

        }
        if (metodo_pago != /[a-zA-Z]/){
            console.log("los datos son incorrectos")
        }
        if(cantidad == /[a-zA-Z]/){
           console.log('los datos son incorrectos')
     
       }
        if(producto != /[a-zA-Z]/){
           console.log('los datos son incorrectos')
     
       }

    }

}