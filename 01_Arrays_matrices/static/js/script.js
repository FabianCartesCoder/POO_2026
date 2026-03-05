console.log("conectao");

/* Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios. */

function construirFrase() {
    let palabras = ["programar", "es"];
    palabras.push("increíble");
    palabras.push("borrar");
    palabras.pop("borrar");
    alert(palabras.join(" "));
}

/* Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];.
Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]". */

function gestionarFila() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("Luis");
    let alumnoEntrado = alumnos.shift();
    alert(`Entró ${alumnoEntrado} y la fila ahora es: ${alumnos.join(", ")}`);
}

/* Ejercicio 3: Reordenando Números (Lógica de Índices)
Instrucciones: Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
Accede al número 3 y súmale 2 directamente en la operación de concatenación.
Construye la frase: "5 gatos negros duermen plácidamente".
Muestra el resultado con alert(). */

function reordenarNumeros() {
    let datos = [3, "gatos", "negros", "duermen"];
    let frase = (datos[0] + 2) + " " + datos[1] + " " + datos[2] + " " + datos[3] + " plácidamente";
    alert(frase);
}

/* Ejercicio 4: Coordenadas en la Matriz (Suma Simple)
Instrucciones: En una función, define:
JavaScript
let matriz = [
    [10, 20],
    [30, 40]
];
Accede al número 10 y al 40.
Suma ambos valores y muestra el resultado con un alert() que explique qué posiciones sumaste (ej: "Suma de [0][0] y [1][1]"). */

function sumaMatriz() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];
    let suma = matriz[0][0] + matriz[1][1];
    alert(`Suma de [0][0] y [1][1]: ${suma}`);
}

/* Ejercicio 5: El Intruso en la Tercera Dimensión
Instrucciones: Crea una función con la matriz: let datos = [1, [2, [3, 4]]];.
Accede al número 4.
Usa .push() para agregar el número 5 al mismo sub-arreglo donde está el 4.
Muestra la matriz completa en un alert(). */

function intrusoTerceraDimension() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push(5);
    alert(datos);
}

/* Ejercicio 6: Traductor de Acciones (Matriz + Arreglo)
Instrucciones: Define let sujetos = ["El programador", "La computadora"]; y una matriz let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];.
Crea una función que tome a "El programador" y la acción "analiza".
Concatena la frase y lánzala por alert(). */

function traductorAcciones() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    let frase = `${sujetos[0]} ${verbos[0][1]}`;
    alert(frase);
}

/*  Ejercicio 7: Limpieza de Datos (Pop y Unshift)
Instrucciones: Tienes el arreglo let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];.
Elimina el primer elemento ("Error") y el último ("Virus").
Agrega "Monitor" al inicio.
Muestra el inventario final con alert(). */

function limpiezaInventario() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("Monitor");
    alert(`Inventario final: ${inventario.join(", ")}`);
}

/* Ejercicio 8: La Matriz de Identidad Modificada
Instrucciones: Define una matriz de 3x3 llena de ceros.
JavaScript
let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
Cambia todos los ceros de la diagonal principal (superior izquierda a inferior derecha) por el número 1.
Muestra el resultado de la fila central por alert(). */

function matrizIdentidadModificada() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (let i = 0; i < tablero.length; i++) {
        tablero[i][i] = 1;
    }
    alert(`Fila central: ${tablero[1].join(", ")}`);
}

/* Ejercicio 9: El Consultorio Médico (Complejo)
Instrucciones: Crea una función con un arreglo let pacientes = ["Ana", "Betto"];.
Llegan dos pacientes más: "Carlos" y "Diana" (usa .push()).
Atienden al primero (usa .shift()).
Llega una urgencia: "Sonia" debe ser atendida de inmediato (usa .unshift()).
Muestra cuántos pacientes quedan y quién es el siguiente en la lista. */

function consultorioMedico() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos", "Diana");
    pacientes.shift();
    pacientes.unshift("Sonia");
    alert(`Quedan ${pacientes.length} pacientes. El siguiente en la lista es: ${pacientes[0]}`);
}

/*  Ejercicio 10: Extracción de Profundidad (Matriz 3x3x3)
Instrucciones: Dada la siguiente estructura:
JavaScript
let caja = [
    ["frutas", "verduras"],
    [["manzana", "pera"], ["tomate", "lechuga"]]
];
Accede a "pera" y a "lechuga".
Crea una frase que diga: "En la canasta hay pera y lechuga".
Muestra con alert(). */

function extraccionProfundidad() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    let fruta = caja[1][0][1];
    let verdura = caja[1][1][1];
    alert(`En la canasta hay ${fruta} y ${verdura}`);
}