function ValidarDatos() {

    var Email = document.getElementById("Email")
    var Message = document.getElementById("Message")

    if (Email == '' || Message == '')

        if (Email == '' && Message == '') {
            console.log("los campos estan vacios")

        }
        else {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
                console.log('falta el @ del correo')
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "falta el @ del correo", //falta el @ del correo
                    footer: "<a href=\"#\">Why do I have this issue?</a>"
                });
                return;
            }

            if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(Message)) {
                console.log('//El mensaje es incorrecto')
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "//El mensaje es incorrecto", //El mensaje es incorrecto
                    footer: "<a href=\"#\">Why do I have this issue?</a>"
                });
                return;
            }
            console.log("Email :" + Email + "Message :" + Message)
            Swal.fire({
                title: "Dato guardados correctamente",
                icon: "success",
                draggable: true
            });

            console.log("Email :" + Email + "Message :" + Message)
            Swal.fire({
                title: "Dato guardados correctamente",
                icon: "success",
                draggable: true
            });
        }

}

document.getElementById("btn-guardar").onclick = ValidarDatos;

