var Ventas = document.getElementById("Ventas");
var Fecha = document.getElementById("Fecha")
var Ingresos = document.getElementById("Ingresos")
var Egresos = document.getElementById("Egresos")
var Valor = document.getElementById("Valor")
var concepto = document.getElementById("concepto")

function ValidarDatos(ventas) {
    if (Ventas == ' ' && Fecha == '' && Ingresos == '' && Egresos == '' && Valor == '' && concepto == '') {
        console.log("los campos estan vacios")

    }
    else {
        if (fecha == /[a-zA-Z]/) {
            console.log('los datos son incorrectos')

        }

        if (Ingresos == /[a-zA-Z]/) {
            console.log('los datos son incorrectos')

        }

        if (Egresos == /[a-zA-Z]/) {
            console.log('los datos son incorrectos')

        }

        if (Valor == /[a-zA-Z]/) {
            console.log('los datos son incorrectos')

        }

    }



}

