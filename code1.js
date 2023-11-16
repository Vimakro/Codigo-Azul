document.addEventListener('DOMContentLoaded', function() {

let nuevanoti = [];

primeraPestaña();

    
function primeraPestaña () {
    const back2 = document.querySelector('.back-2-1');
    back2.innerHTML = '';
    back2.classList.remove("centrar");
    const topDiv = document.createElement('div');
    topDiv.classList.add('top');
    const h3 = document.createElement('h3');
    h3.textContent = 'Ultimas Horas';
    h3.style.margin = '10px';
    const p = document.createElement('p');
    p.textContent = 'Llamadas dentro de las ultimas horas';
    p.style.margin = '8px';
    const containerNotificaciones = document.createElement('div');
    containerNotificaciones.id = 'containerNotificaciones';
    topDiv.appendChild(h3);
    topDiv.appendChild(p);
    back2.appendChild(topDiv);
    back2.appendChild(containerNotificaciones);
    cambiarPagina("Notificaciones", "notificacion");
    const notificacionesContainer = document.getElementById('containerNotificaciones');
    function agregarNotificacion(nivel, piso, hora, estado, sitio, horaAtencion) {
        const notificacion = document.createElement('div');
        notificacion.style.marginTop = '30px';
        notificacion.classList.add('notificacion');
            
        const lado1 = document.createElement('div');
        lado1.classList.add('notificacionLado');
            
        const notifNivel = document.createElement('p');
            
        notifNivel.classList.add(`notificacionNivel`);
        notifNivel.textContent = nivel;
        elegirColor(notifNivel, nivel);
            
        const notifPiso = document.createElement('p');
        notifPiso.classList.add('notificacionPiso');
        notifPiso.textContent = piso;
            
        const notifHora = document.createElement('p');
        notifHora.classList.add('notificacionHora');
        notifHora.textContent = hora;
            
        lado1.appendChild(notifNivel);
        lado1.appendChild(notifPiso);
        lado1.appendChild(notifHora);
            
        const lado2 = document.createElement('div');
        lado2.classList.add('notificacionLado');
            
        const notifEstado = document.createElement('p');
        notifEstado.classList.add('notificacionEstado');
        notifEstado.textContent = estado;
        elegirColor(notifEstado, estado);
                
        const notifSitio = document.createElement('p');
        notifSitio.classList.add('notificacionSitio');
        notifSitio.textContent = sitio;
                
        const notifEstadoAtencion = document.createElement('p');
        notifEstadoAtencion.classList.add('notificacionEstadoAtencion');
        notifEstadoAtencion.textContent = horaAtencion;
                
        lado2.appendChild(notifEstado);
        lado2.appendChild(notifSitio);
        lado2.appendChild(notifEstadoAtencion);
                
        notificacion.appendChild(lado1);
        notificacion.appendChild(lado2);
                
        notificacionesContainer.appendChild(notificacion);
    }
            
    let elegirColor = (elemento, color) => {
        color==="Azul" ? elemento.classList.add("ColorAzul") : color==="Emergencia" ? elemento.classList.add("ColorRojo") : color==="Normal"?elemento.classList.add("ColorGris"): color==="Atendido"?elemento.classList.add("ColorVerde"): color==="Por atender"?elemento.classList.add("ColorRojo"): elemento.classList.add("ColorGris");
    }

    let Notificaciones = [
        ['Azul', 'Piso 2', '19:01:46', 'Atendido', 'Cama', '20:01:46']
        ,['Emergencia', 'Piso 2', '19:01:46', 'Por atender', 'Cama', 'Esperando']
        ,['Normal', 'Piso 2', '19:01:46', 'Atendido', 'Cama', '19:01:46']
        ,['Emergencia', 'Piso 2', '19:01:46', 'Atendido', 'Cama', '19:01:46']
        ,['Emergencia', 'Piso 2', '19:01:46', 'Por atender', 'Cama', 'Esperando']
        ,['Normal', 'Piso 2', '19:01:46', 'Atendido', 'Cama', '19:01:46']
        ,['Emergencia', 'Piso 2', '19:01:46', 'Atendido', 'Cama', '19:01:46']
        ,['Azul', 'Piso 2', '19:01:50', 'Atendido', 'Cama', '20:01:46']
    ];

    if (nuevanoti.length>0) {
        console.log(nuevanoti);
        Notificaciones.unshift(nuevanoti);
        nuevanoti = [];
        console.log(Notificaciones);
    }
    
    
    if (nuevanoti.length===0) {
        Notificaciones.forEach(notificacion => {
            agregarNotificacion(notificacion[0], notificacion[1], notificacion[2], notificacion[3], notificacion[4], notificacion[5]);
        });
    }
}

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

function tercerPestaña () {
    const back2 = document.querySelector('.back-2-1');
    back2.innerHTML = '';
    back2.classList.remove("centrar");
    cambiarPagina("Reportes", "reportes");
    

    const topDiv = document.createElement('div');
    topDiv.classList.add('containerGraficos');

    const primerdiv = document.createElement("div");
    primerdiv.classList.add("bloqueGraficos");
    const segundodiv = document.createElement("div");
    segundodiv.classList.add("bloqueGraficos");

    const canva = document.createElement("canvas");
    canva.id = "grafica";

    const tituloGrafico1 = document.createElement("h2");
    tituloGrafico1.textContent = 'Atendidos Hoy';

    const descripcionGrafico1 = document.createElement("p");
    descripcionGrafico1.textContent = 'Cantidad semanal de llamadas atendidas en el dia de hoy';

    primerdiv.appendChild(tituloGrafico1);
    primerdiv.appendChild(descripcionGrafico1);
    primerdiv.appendChild(canva);
    back2.appendChild(primerdiv);

    const grafica = document.querySelector("#grafica");
    const etiquetas = ["No Atendidos", "Atentidos"];
    const porcentajes = [30, 70];
    const datosIngresos = {
        data: [porcentajes[0], porcentajes[1]], 
        backgroundColor: [
            'rgba(232,233,161,0.2)',
            'rgba(91, 127, 245)',
        ],
        borderColor: [
            'rgba(0,0,0)',
            'rgba(0,0,0)',
        ],
        borderWidth: 1,
    };
    new Chart(grafica, {
        type: 'pie',
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,
            ]
            
        },
    });
    
    const canva1 = document.createElement("canvas");
    canva1.id = "grafica1";

    const tituloGrafico2 = document.createElement("h2");
    tituloGrafico2.textContent = 'Cantidad Semanal';

    const descripcionGrafico2 = document.createElement("p");
    descripcionGrafico2.textContent = 'Cantidad semanal de llamadas atendidas';

    segundodiv.appendChild(tituloGrafico2);
    segundodiv.appendChild(descripcionGrafico2);
    segundodiv.appendChild(canva1);
    back2.appendChild(segundodiv);
    
    const grafica1 = document.querySelector("#grafica1");
    const etiquetas1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const noAtendidos = {
        label: "No atendidos",
        data: [25, 30, 45, 20, 53, 60, 30], 
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    };
    const atendidos = {
        label: "Atendidos",
        data: [75, 70, 55, 80, 47, 40, 70], 
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
    };

    new Chart(grafica1, {
        type: 'bar',
        data: {
            labels: etiquetas1,
            datasets: [
                noAtendidos,
                atendidos,
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
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
    }, 1000);

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
            botoninicio.click();
        }, 2000);
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

    const iconos = ["notificacion", "asistencia", "reportes"];
    
    iconos.forEach((icon) => {
        const elementoIcono = document.getElementById(icon);
        elementoIcono.style.color = (icono === icon ? "#2A26EA" : "#4A4A4A");
    });
}

document.getElementById("notificacion").addEventListener("click", function() {
    primeraPestaña();
});
document.getElementById("asistencia").addEventListener("click", function() {
    segundaPestaña();
});
document.getElementById("reportes").addEventListener("click", function() {
    tercerPestaña();
});
});

