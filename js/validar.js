$(document).ready(function() {

    $("#form").submit(function(e) {
        e.preventDefault();

        const nombreField = $("#nombre");
        const direccionField = $("#direccion");
        const correoField = $("#correo");
        const telefonoField = $("#telefono");
        const contraseñaField = $("#contraseña");

        if (!nombreField.val()) {
            alert("Ingrese su nombre");
        } else if (!direccionField.val()) {
            alert("Ingrese su dirección");
        } else if (!correoField.val() ||!correoField.is(":valid")) {
            alert("Ingrese una dirección de correo electrónico válida");
        } else if (!telefonoField.val()) {
            alert("Ingrese su teléfono");
        } else if (!contraseñaField.val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
            alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número");
        } else {
            alert("Cuenta creada exitosamente!");
            window.location.href = "login.html";
        }
    });
  });