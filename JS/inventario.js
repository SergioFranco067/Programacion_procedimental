console.log("hola mundo")


function ValidarDatos() {

    var Codigo_producto = document.getElementById("Codigo_producto").value;
    var Nombre_producto = document.getElementById("Nombre_producto").value;
    var Precio_unitario = document.getElementById("Precio_unitario").value;
    var Cantidad_producto = document.getElementById("Cantidad_producto").value;
    var Marca_producto = document.getElementById("Marca_producto").value;
    var Categoria_producto = document.getElementById("Categoria_producto").value;
    var Unidad_media = document.getElementById("Unidad_media").value;

    if (Codigo_producto == ' ' || Nombre_producto == '' || Precio_unitario == '' || Cantidad_producto == '' || Marca_producto == '' || Categoria_producto == '' || Unidad_media == '') {
        console.log("los campos estan vacios")

    }
    else {
        if (!/^\d+$/.test(Codigo_producto)) {
            console.log('el codigo del producto es incorrecto')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "el codigo del producto es incorrecto", //el codigo del producto es incorrecto
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\d+$/.test(Precio_unitario)) {
            console.log('el precio unitario no es el indicado')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "el precio unitario no es el indicado", //el precio unitario no es el indicado
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;

        }

        if (!/^\d+$/.test(Cantidad_producto)) {
            console.log('no es la cantidad exacta del producto')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "no es la cantidad exacta del producto", //no es la cantidad exacta del producto
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(Cantidad_producto)) {
            console.log('no es la cantidad real del producto')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "no es la cantidad real del producto", // no es la cantidad real del producto
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\d+$/.test(Unidad_media)) {
            console.log('no es la unidad media real')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "no es la unidad media real", //no es la unidad media real
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }
        console.log("Codigo_producto :" + Codigo_producto + "Nombre_producto :" + Nombre_producto + "Precio_unitario:" + Precio_unitario + "Cantidad_producto :" + Cantidad_producto + "Marca_producto :" + Marca_producto + "Categoria_producto :" + Categoria_producto + "Unidad_media:" + Unidad_media)
        Swal.fire({
            title: "Dato guardados correctamente",
            icon: "success",
            draggable: true
        });
    }

}

document.getElementById("btn-guardar").onclick = ValidarDatos;