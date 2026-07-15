

function ValidarDatos() {

    var Ventas = document.getElementById("Ventas").value;
    var Fecha = document.getElementById("Fecha").value;
    var Ingresos = document.getElementById("Ingresos").value;
    var Egresos = document.getElementById("Egresos").value;
    var Valor = document.getElementById("Valor").value;
    var Concepto = document.getElementById("Concepto").value;

    if (Ventas == "" || Fecha == "" || Ingresos == "" || Egresos == "" || Valor == "" || Concepto == "") {
        console.log("los campos estan vacios");
            Swal.fire({
                icon: "error",
                title: "Campos vacios",
                text: "Campos vacios",
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
    }
    else {
        if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(Fecha)) {
            console.log('Formato incorrecto');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Formato incorrecto ", //Formato incorrecto (dd-mm-aaaa)
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\d+$/.test(Ingresos)) {
            console.log('los datos so incorrectos');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingresos solo permite numeros", //Ingresos solo permite numeros
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\d+$/.test(Egresos)) {
            console.log('Egresos solo permite numeros');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: " Egresos solo permite numeros", // Egresos solo permite numeros
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\d+$/.test(Valor)) {
            console.log(' Valor solo permite numeros');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: " Valor solo permite numeros", // Valor solo permite numeros
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }
        console.log("Ventas :" + Ventas + "Fecha :" + Fecha + "Ingresos:" + Ingresos + "Egresos :" + Egresos + "Valor :" + Valor + "Concepto :" + Concepto)

        Swal.fire({
            title: "Dato guardados correctamente",
            icon: "success",
            draggable: true
        });
    }
}

document.getElementById("btn-guardar").onclick = ValidarDatos;

