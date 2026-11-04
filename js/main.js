console.log("Juego de piedra, papel y tijeras\n");

let usuario = "piedra";

//inciar blucle de juego hasta que el usuario elija terminar

//Utilizar esta función para devolver los valores de juego aleatorio para maquina.
// 1 = piedra, 2 = papel, 3 = tijeras

//obtener numero aleatorio entre 2 valores, incluyendo ambos
function getRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1))+min;
}

//asignación de restultados con retorno en strings
function playMachine(maquina){
    if (maquina == 1) {
        return "piedra";
    } else if (maquina == 2){
        return "papel";
    } else if (maquina == 3){
        return "tijeras";
    }
}

let num = getRandomNum(1,3);
console.log(playMachine(num));

/*if (usuario == maquina) {
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
}*/