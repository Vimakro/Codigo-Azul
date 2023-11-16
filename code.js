
let user = document.getElementById("user");
let password = document.getElementById("pass");


let cuentaAdmin = ["pepe@gmail.com", "pepe123"];

let cuentasComunes = [
    ["jose@gmail.com", "jose123"],
    ["text@gmail.com", "roman123"]
];

document.getElementById("entrarButton").addEventListener("click", function() {
    
    for (let cuenta of cuentasComunes) {
        if (user.value === cuenta[0] && password.value === cuenta[1]) {
            window.location.href = "CodigoAzulPaciente.html";
            return;
        }
    }

    if (user.value === cuentaAdmin[0] && password.value === cuentaAdmin[1]) {
        window.location.href = "CodigoAzul.html";
        return;
    }

    user.placeholder = "Debe ingresar usuario";
    password.placeholder = "Debe ingresar contraseña";
});
