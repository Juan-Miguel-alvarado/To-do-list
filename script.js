let texto = document.getElementById("tarea");
let addTarea = document.getElementById("add");
let addTareaP = document.getElementById("addp");
let addTareaPP = document.getElementById("addpp");
let removeTareaPP = document.getElementById("removepp");
let removeTarea = document.getElementById("remove");
let removeTareaP = document.getElementById("removep");
let tabla = document.getElementById("tabla");
let p1 = document.getElementById("st");
let con = 0;
let textoV;
let tareas = [];

function SinTareas() {
    if (tareas.length == 0) {
        tabla.style.display = "none";
        p1.innerText = "Sin tareas ahora mismo.";
        p1.style.display = "flex";
    } else {
        tabla.style.display = "flex";
        p1.style.display = "none";
    }
}

function maximoTareas() {
    if (con == 5) {
        p1.innerText = "No se admiten más tareas.";
        p1.style.display = "flex";
    } else {
        p1.style.display = "none";
    }
}

function actualizarTabla() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; 
    tareas.forEach((tarea, index) => {
        tbody.innerHTML += `<tr id="f${index + 1}"> <td>${index + 1}</td> <td>${tarea}</td> </tr>`;
    });
}

addTarea.addEventListener("click", () => {
    if (con < 5) {
        textoV = texto.value;

        if (textoV != "") {
            tareas.push(textoV);
            texto.value = "";
            con++;
            actualizarTabla();
            texto.focus();
            SinTareas();
            maximoTareas();
        }
    }
});

addTareaP.addEventListener("click", () => {
    if (con < 5) {
        textoV = texto.value;

        if (textoV != "") {
            let pregunta = parseInt(prompt("Ingresa la posición donde quieres poner tu tarea."), 10);

            if (pregunta >= 1 && pregunta <= tareas.length + 1) {
                tareas.splice(pregunta - 1, 0, textoV); 
                texto.value = "";
                con++;
                actualizarTabla();
                texto.focus();
                SinTareas();
                maximoTareas();
            } else {
                alert("Por favor, ingresa una posición válida.");
            }
        }
    }
});

addTareaPP.addEventListener("click", () => {
    if (con < 5) {
        textoV = texto.value;

        if (textoV != "") {
            tareas.unshift(textoV);
            texto.value = "";
            con++;
            actualizarTabla();
            texto.focus();
            SinTareas();
            maximoTareas();
        }
    }
});

removeTarea.addEventListener("click", () => {
    if (tareas.length > 0) {
        tareas.pop();
        con--;
        actualizarTabla();
        maximoTareas();
        SinTareas();
    }
});

removeTareaP.addEventListener("click", () => {
    let pregunta = parseInt(prompt("Ingresa la posición "), 10);

    if (tareas.length > 0) {
        tareas.splice(pregunta - 1, 1);
        con--;
        actualizarTabla();
        maximoTareas();
        SinTareas();
    }
});

removeTareaPP.addEventListener("click", () => {
    if (tareas.length > 0) {
        tareas.shift();
        con--;
        actualizarTabla();
        maximoTareas();
        SinTareas();
    }
});


