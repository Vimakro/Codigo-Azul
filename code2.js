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
    const btnCodigAzul = document.createElement("button");
    btnCodigAzul.style.backgroundColor = "#2A26EA";
    btnCodigAzul.textContent = "Codigo Azul";
    btnCodigAzul.classList.add("btnAsistencia");
    const btnEmergencia = document.createElement("button");
    btnEmergencia.style.backgroundColor = "#FF0000";
    btnEmergencia.textContent = "Emergencia";
    btnEmergencia.classList.add("btnAsistencia");

    unicoDiv.appendChild(btnNormal);
    unicoDiv.appendChild(btnCodigAzul);
    unicoDiv.appendChild(btnEmergencia);

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