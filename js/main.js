console.log("Juego de piedra, papel y tijeras\n");

let usuario = "piedra";

let maquina = "piedra"; //Debe elegir valores al azar


if (usuario == maquina) {
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Empate!");
}

//Piedra
else if (usuario == "tijeras" && maquina == "piedra"){
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Gana máquina!");
} else if(usuario == "papel" && maquina == "piedra"){
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Gana usuario!");
}

//Papel
else if (usuario == "piedra" && maquina == "papel"){
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Gana maquina!");
} else if(usuario == "tijeras" && maquina == "papel"){
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Gana usuario!");
}

//tijeras
else if (usuario == "piedra" && maquina == "tijeras"){
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Gana usuario!");
} else if(usuario == "papel" && maquina == "tijeras"){
    console.log(`Usted eligio: ${usuario}`);
    console.log(`La maquina eligio: ${maquina}`);
    console.log("Gana maquina!");
}