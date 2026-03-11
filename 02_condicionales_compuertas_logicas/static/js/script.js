/* Bloque 1: Calentamiento (Lógica Básica)
1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App".
Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad". */

function bloque1() {
    let edad = parseInt(prompt('Ingrese su edad:'));
    if (edad >= 18) {
        alert('Acceso permitido a la App');
    } else if (isNaN(edad)) {
        alert('ingrese un número válido');
    } else {
        alert('Acceso denegado: necesitas ser mayor de edad');
    }
}

/* 2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".*/

function bloque1_2() {
    let nombre = prompt('Ingrese su nombre:');
    if (nombre) {
        let usuarios = [];
        usuarios.push(nombre);
        alert('Nombre agregado: ' + usuarios.join(", "));
    } else {
        alert('Error: El nombre no puede estar en blanco');
    }
}

/*Bloque 2: Gestión de Inventarios y Listas
3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".*/

function bloque2_3() {
    let productos = ['celular', 'teclado', 'mouse'];
    let nuevoProducto = prompt('Ingrese un nuevo producto:');
    if (!productos.includes(nuevoProducto)) {
        productos.push(nuevoProducto);
        alert('Producto agregado: ' + productos.join(", "));
    } else {
        alert('El producto ya está en el inventario');
    }
}

/* 4. Control de Stock Máximo
Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ['caja1', 'caja2', 'caja3', 'caja4', 'caja5', 'caja6'];
Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible". */

let bodega = ['caja1', 'caja2', 'caja3', 'caja4', 'caja5', 'caja6'];
function bloque2_4() {
    if (bodega.length > 5) {
        bodega.pop();
        alert('Bodega llena, eliminando último ingreso');
    } else {
        alert('Espacio disponible');
    }
}

/* 5. Limpieza de Datos
A veces recibimos datos basura. let colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0) es igual a "error_404", elimínalo usando .shift() y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta". */

function bloque3_5() {
    let colaEspera = ['error_404', 'Juan', 'Sofía'];
    if (colaEspera[0] === 'error_404') {
        colaEspera.shift();
        alert('Cola limpia: ' + colaEspera.join(", "));
    } else {
        alert('La lista de espera está correcta');
    }
}

/*6. Acceso VIP
Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push().*/

function bloque3_6() {
    let foro = ['User1', 'User2'];
    let rol = prompt('Ingrese su rol (Admin o User):');
    if (rol === 'Admin') {
        let nombre = prompt('Ingrese su nombre:');
        foro.unshift(nombre);
        alert("Acceso VIP concedido. Lista actualizada: " + foro.join(", "));
    } else {
        let nombre = prompt('Ingrese su nombre:');
        foro.push(nombre);
        alert('Usuario agregado. Lista actualizada: ' + foro.join(", "));
    }
}

/* 7. Sistema de Calificaciones Chile (Escala 1 a 7)
Crea una variable nota.
Si la nota es 6 o superior: "Excelente, eximido".
Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
Si es menor a 4: "Reprobado".
(Pista: Usa else if).*/

function bloque4_7() {
    let nota = parseFloat(prompt('Ingrese su nota (1 a 7):'));
    if (nota >= 6) {
        alert('Excelente, eximido');
    } else if (nota >= 4 && nota < 5.9) {
        alert('Aprobado, vas a examen');
    } else if (nota < 4) {
        alert('Reprobado');
    } else {
        alert('Ingrese una nota válida entre 1 y 7');
    }
}

/*8. Buscador de Invitados
let invitados = ["Ana", "Luis", "Camila", "Diego"];
Crea una variable persona.
Si la persona está en la lista, muestra: "¡Bienvenido/a [nombre]! Pasa a la fiesta".
Si no está, muestra: "Lo siento, no estás en la lista de invitados".*/

function bloque4_8() {
    let invitados = ['Ana', 'Luis', 'Camila', 'Diego'];
    let persona = prompt('Ingrese su nombre para verificar la lista de invitados:');
    if (invitados.includes(persona)) {
        alert(`¡Bienvenido/a ${persona}! Pasa a la fiesta`);
    } else {
        alert('Lo siento, no estás en la lista de invitados');
    }
}

/* 9. El Almacén de Matrices (2D Arrays)
Imagina una estantería con dos niveles (una matriz):
let estanteria = [ ["Manzanas", "Peras"], ["Leche", "Yogur"] ];
Crea una variable seccion (0 o 1) y una variable producto.
Accede a la sección elegida. Si el producto solicitado está en esa sub-lista, muestra: "Producto encontrado en el estante".
Si no, muestra: "No tenemos ese producto en esa sección".*/

function bloque4_9() {
    let estanteria = [['Manzanas', 'Peras'], ['Leche', 'Yogur']];
    let seccion = parseInt(prompt('Ingrese la sección (0 para frutas, 1 para lácteos):'));
    let producto = prompt('Ingrese el producto que busca:');
    if (seccion >= 0 && seccion < estanteria.length) {
        if (estanteria[seccion].includes(producto)) {
            alert('Producto encontrado en el estante');
        } else {
            alert('No tenemos ese producto en esa sección');
        }
    } else {
        alert('Sección inválida. Por favor ingrese 0 o 1.');
    }
}

/* 10. Registro Maestro de Visitas
Crea un arreglo vacío llamado bitacora.
Declara las variables nombreVisita y esVip (booleano).
Si el nombre está vacío: Mostrar error.
Si el nombre existe y esVip es true: Agregarlo al inicio con .unshift().
Si el nombre existe y esVip es false: Agregarlo al final con .push().
Al final, muestra cuántas personas hay en total usando .length.*/

function bloque4_10() {
    let bitacora = [];
    let nombreVisita = prompt('Ingrese el nombre de la visita:');
    let esVip = confirm('¿Es VIP? (Aceptar para Sí, Cancelar para No)');
    if (!nombreVisita) {
        alert('Error: El nombre no puede estar vacío');
    } else if (esVip) {
        bitacora.unshift(nombreVisita);
        alert(`Visita VIP registrada: ${nombreVisita}. Total de visitas: ${bitacora.length}`);
    } else {
        bitacora.push(nombreVisita);
        alert(`Visita registrada: ${nombreVisita}. Total de visitas: ${bitacora.length}`);
    }
}