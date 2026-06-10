var nombre_completo = document.getElementById("nombre_completo");
var Usuario = document.getElementById("Usuario")
var estado_civil = document.getElementById("estado_civil")
var profesion = document.getElementById("profesion")
var fecha_nacimiento = document.getElementById("fecha_nacimiento")
var Documento_identidad = document.getElementById("Documento_identidad")
var Direccion = document.getElementById("Direccion")
var Rol = document.getElementById("Rol")
var Telefono = document.getElementById("Telefono")
var correo_electronico = document.getElementById("correo_electronico")
var contraseña = document.getElementById("contraseña")

function ValidarDatos(nombre_completo) {
    if (nombre_completo == '' && Usuario == '' && estado_civil == '' && profesion == '' && fecha_nacimiento == '' && Documento_identidad == '' && Direccion == '' && Rol == '' && telefono == '' && correo_electronico == '') {
        console.log("los campos estan vacios")

    }
    else {
        if (nombre_completo != /[a-zA-Z]/) {
            console.log('los datos son incorrectos')
        }

        if (telefono.lenght() > 10) {
            console.log("los datos son incorrectos")

        }
        if (correo_electronico != /(@)/) {
            console.log("los datos son incorrectos")
        }
        if (Documento_identidad == /[a-zA-Z]/) {
            console.log('los datos son incorrectos')

        }

        if (contraseña.lenght() < 8 ) {
            console.log('los datos son incorrectos')

        }

    }

}










