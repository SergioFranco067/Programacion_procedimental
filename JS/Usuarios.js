
function ValidarDatos() {

    var Nombre_completo = document.getElementById("Nombre_completo").value;
    var Usuario = document.getElementById("Usuario").value;
    var Estado_civil = document.getElementById("Estado_civil").value;
    var profesion = document.getElementById("profesion").value;
    var Fecha_nacimiento = document.getElementById("Fecha_nacimiento").value;
    var Documento_identidad = document.getElementById("Documento_identidad").value;
    var Direccion = document.getElementById("Direccion").value;
    var Rol = document.getElementById("Rol").value;
    var Telefono = document.getElementById("Telefono").value;
    var contraseña = document.getElementById("Contraseña").value;


    if (Nombre_completo == '' || Usuario == '' || Estado_civil == '' || profesion == '' || Fecha_nacimiento == '' || Documento_identidad == '' || Direccion == '' || Rol == '' || Telefono == '' || Correo_electronico == '') {
        console.log("los campos estan vacios")

    }
    else {
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(Nombre_completo)) {
            console.log('solo puede contener letras');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "solo puede contener letras", //solo puede contener letras
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(Telefono)) {
            console.log("el formato de telefono esta incorrecto");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "el formato de telefono esta incorrecto", //el formato de telefono esta incorrecto
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }
        if (!/^\d+$/.test(Documento_identidad)) {
            console.log('solo puede tener letras');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "solo puede tener letras", // solo puede tener letras
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(Contraseña)) {
            console.log('tiene que ingresar una contraseña mas segura');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "tiene que ingresar una contraseña mas segura", //tiene que ingresar una contraseña mas segura
                footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            return;
        }
        console.log("Nombre_completo  :" + Nombre_completo + "Usuario:" + Usuario + "Estado_civil:" + Estado_civil + "profesion:" + profesion + "Fecha_nacimiento :" + Fecha_nacimiento + "Documento_identidad :" + Documento_identidad + "Direccion :" + Direccion + "Rol :" + Rol + "Telefono :" + Telefono + "Contraseña :" + Contraseña)

        Swal.fire({
            title: "Dato guardados correctamente",
            icon: "success",
            draggable: true
        });

    }

}


document.getElementById("btn-guardar").onclick = ValidarDatos;







