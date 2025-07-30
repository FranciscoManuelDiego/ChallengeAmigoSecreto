// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Funcioon agregar amigos */
let listadeAmigos =  [];

function agregarAmigo() {
    let inputAmigos = document.getElementById("amigo").value;
    if(!inputAmigos) return alert("No se ingresaron amigos.");
    if(inputAmigos.length > 10) return alert("El nombre del amigo no puede tener mas de 10 caracteres");
    if(inputAmigos.includes(" ")) return alert("El nombre del amigo no puede contener espacios");
    for(let amigo of inputAmigos.split(" ")) {
        amigo = amigo.trim();
        if(amigo) {
            listadeAmigos.push(amigo);
        }
    }
    mostrarAmigos();
}

function mostrarAmigos() {
    document.getElementById("listaAmigos").innerHTML = listadeAmigos.join(", ");
}


function sortearAmigo(){
    if(listadeAmigos.length === 0) return alert("No hay amigos para sortear.");
    let indiceAleatorio = Math.floor(Math.random() * listadeAmigos.length);
    let amigoSeleccionado = listadeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo seleccionado es ${amigoSeleccionado}`;
}
