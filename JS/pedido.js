console.log("hola")

function ValidarDatos() {

    var Producto = document.getElementById("Producto").value;
    var Direccion = document.getElementById("Direccion").value;
    var Nombre_completo= document.getElementById("Nombre_completo").value;
    var Cantidad = document.getElementById("Cantidad").value;
    var Metodo_pago = document.getElementById("Metodo_pago").value;
    var Telefono = document.getElementById("Telefono").value;

    if (Producto == '' ||  Direccion == '' ||  Nombre_completo == '' || Cantidad == '' ||  Metodo_pago == '' ||  Telefono == '') {
        console.log("los campos estan vacios")
    }
    else {
        if(!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(Nombre_completo)){
            console.log(' solo puede econtener letras')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: " solo puede econtener letras", // solo puede econtener letras
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(Telefono)) {
            console.log("formato incorrecto de telefono")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "formato incorrecto de telefono", //formato incorrecto de telefono
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
         return;
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(Metodo_pago)) {
            console.log("solo puede contener letras este metodo")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "solo puede contener letras este metodo",// solo puede contener letras este metodo
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }
        if (!/^\d+$/.test(Cantidad)) {
            console.log('solo puede contener numeros la cantidad')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "solo puede contener numeros la cantidad", //solo puede contener numeros la cantidad
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(Producto)) {
            console.log('el producto ssolo puede expresarse en letras')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "el producto ssolo puede expresarse en letras", // el producto ssolo puede expresarse en letras
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            
            });
            return;
        }
console.log("Producto :" + Producto + "Direccion:" + Direccion + "Nombre_completo:" + Nombre_completo + "Cantidad:" + Cantidad + "Metodo_pago :" + Metodo_pago + "Telefono :" + Telefono)
      Swal.fire({
            title: "Dato guardados correctamente",
            icon: "success",
            draggable: true
        });
}

}

document.getElementById("btn-guardar").onclick = ValidarDatos;