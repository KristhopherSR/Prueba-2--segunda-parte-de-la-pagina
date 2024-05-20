function validarFormulario() {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    if (email!== "jhondoe@gmail.com") {
        alert("El email es incorrecto");
        return false;
    }else if (contraseña!== "Contrasena123") {
        alert("La contraseña es incorrecta");
        return false;
    }else {
        alert("Inicio de sesion Correctamente");
        return true;
    }
}

function redireccionar() {
    window.location.href = "index.html";
}