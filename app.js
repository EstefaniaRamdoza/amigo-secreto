let amigos = [];
let sorteados = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    // Validación para permitir solo letras sin números ni caracteres especiales
    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("Por favor, ingresa solo letras.");
        return;
    }
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre); // Almacenamiento del nombre completo
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo; // Muestra el nombre completo
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    // Verifica que todos los nombres se han sorteado
    if (sorteados.length === amigos.length) {
        alert("Todos los nombres han sido sorteados.");
        return;
    }

    // Filtrar amigos que no han sido sorteados
    let nombresDisponibles = amigos.filter(nombre => !sorteados.includes(nombre));
    
    let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
    let nombreSorteado = nombresDisponibles[indiceAleatorio];
    
    sorteados.push(nombreSorteado);
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}

function reiniciarSorteo() {
    amigos = [];
    sorteados = [];
    actualizarLista();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia el resultado del sorteo
    alert("El sorteo ha sido reiniciado. Puedes agregar nuevos amigos.");
}