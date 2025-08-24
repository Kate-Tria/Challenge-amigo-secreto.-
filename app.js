// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigos 
let amigos = []

//Funcion para agregar un amigo
function agregarAmigo(){
    //Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    //Validar la entreda
    if(nombre === ""){
        alert("Porfavor, Insertar un nombre.");
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombre);

    //Limpiar el campo de entrada
    input.value ="";

    //Mostar la lista 
    mostrarLista();
}

//Funcion para mostrar la lista de amigos 
function mostrarLista(){
    //Obtener el elemento UL
    let lista = document.getElementById("listaAmigos");

    //Limpiar lista existente
    lista.innerHTML = "";

    //Recorrer el array con el bucle for
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    }

    //Generar indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener nombre sorteodo
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
} 