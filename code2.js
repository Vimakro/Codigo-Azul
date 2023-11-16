segundaPestaña();


function segundaPestaña () {
    const back2 = document.querySelector('.back-2-1');
    back2.innerHTML = '';
    back2.classList.add("centrar");

    const unicoDiv = document.createElement("div");
    unicoDiv.classList.add("unicoDiv");

    const btnNormal = document.createElement('button');
    btnNormal.style.backgroundColor = "#D9D9D9";
    btnNormal.style.color = "black";
    btnNormal.textContent = "Normal";
    btnNormal.style.fontWeight = "bold";
    btnNormal.classList.add("btnAsistencia");
    btnNormal.addEventListener("click", function(event) {
        cuartaPestaña("#D9D9D9", "black", "Normal");
        event.preventDefault();
    });

    const btnCodigAzul = document.createElement("button");
    btnCodigAzul.style.backgroundColor = "#2A26EA";
    btnCodigAzul.textContent = "Codigo Azul";
    btnCodigAzul.classList.add("btnAsistencia");
    btnCodigAzul.addEventListener("click", function(event) {
        cuartaPestaña("#2A26EA", "white", "Azul");
        event.preventDefault();
    });

    const btnEmergencia = document.createElement("button");
    btnEmergencia.style.backgroundColor = "#FF0000";
    btnEmergencia.textContent = "Emergencia";
    btnEmergencia.classList.add("btnAsistencia");
    btnEmergencia.addEventListener("click", function(event) {
        cuartaPestaña("#FF0000", "white", "Emergencia");
        event.preventDefault();
    });

    unicoDiv.appendChild(btnNormal);
    unicoDiv.appendChild(btnCodigAzul);
    unicoDiv.appendChild(btnEmergencia);

    back2.appendChild(unicoDiv);
    
    cambiarPagina("Asistencia", "asistencia");
}

function cuartaPestaña (color, letra, tipo) {
    const back2 = document.querySelector('.back-2-1');
    back2.innerHTML = '';
    back2.classList.add("centrar");

    const unicoDiv = document.createElement("div");
    unicoDiv.classList.add("notificacionCompleta");
    const otrodiv = document.createElement("div");
    otrodiv.classList.add("notificacionTiempo");
    const divArriba = document.createElement("div");
    divArriba.classList.add("divArriba");
    const divAbajo = document.createElement("div");
    divAbajo.classList.add("divAbajo");
    const valortiempoReal = document.createElement("h1");
    valortiempoReal.textContent = "--:--:--";

    let primeraVez = true;
    const valorInicial = document.createElement("p");
    const valorFinal = document.createElement("p");
    const timeReal = setInterval(function() {
        let fechaHora = new Date();

        let horas = fechaHora.getHours();
        let minutos = fechaHora.getMinutes();
        let segundos = fechaHora.getSeconds();

        if (primeraVez) {
            valorInicial.textContent = `${horas}:${minutos}:${segundos}`
            valorFinal.textContent = `${horas + 1}:${minutos}:${segundos}`
            primeraVez = false;
        }
        valortiempoReal.textContent = `${horas}:${minutos}:${segundos}`
    }, 10);

    divArriba.appendChild(valortiempoReal);
    divAbajo.appendChild(valorInicial);
    divAbajo.appendChild(valorFinal);
    otrodiv.appendChild(divArriba);
    otrodiv.appendChild(divAbajo);

    const btn = document.createElement("button");
    btn.style.backgroundColor = color;
    btn.style.color = letra;
    btn.textContent = "Parar";
    btn.classList.add("btnAsistencia");
    const botoninicio = document.getElementById("notificacion");
    btn.addEventListener("click", function() {
        let piso = ["Piso 1", "Piso 2", "Piso 3"];
        let pisoAleatorio = piso[Math.floor(Math.random() * piso.length)];
        nuevanoti = [tipo, pisoAleatorio, valorInicial.innerText, "Atendido", "Cama", valortiempoReal.innerText];
        
        clearInterval(timeReal);
        setTimeout(() => {
            window.location.href = "CodigoAzulPaciente.html";
        }, 1000);
        return nuevanoti;
    });

    unicoDiv.appendChild(otrodiv);
    unicoDiv.appendChild(btn);

    back2.appendChild(unicoDiv);
    
    cambiarPagina("Asistencia", "asistencia");
}

function cambiarPagina(titulo, icono) {
    let TituloPagina = document.getElementById("TituloAreas");
    TituloPagina.textContent = titulo;

    const iconos = ["asistencia"];
    
    iconos.forEach((icon) => {
        const elementoIcono = document.getElementById(icon);
        elementoIcono.style.color = (icono === icon ? "#2A26EA" : "#4A4A4A");
    });
}



