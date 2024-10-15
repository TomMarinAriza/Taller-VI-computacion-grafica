// Punto 1: Crear objetos literales, almacenarlos en un array e imprimirlos
let objetos = [];

function agregarObjeto() {
  let nombre = prompt("Ingrese el nombre del objeto:");
  let tipo = prompt("Ingrese el tipo del objeto:");
  let valor = prompt("Ingrese el valor del objeto:");

  let objeto = {
    nombre: nombre,
    tipo: tipo,
    valor: valor
  };

  objetos.push(objeto);
}

function imprimirObjetos() {
  console.log("Objetos creados:");
  objetos.forEach(objeto => {
    console.log(objeto);
  });
}

// Punto 2: Modificar, añadir o eliminar atributos de los objetos
function modificarObjeto(index) {
  let atributo = prompt("Ingrese el nombre del atributo a modificar o añadir:");
  let nuevoValor = prompt(`Ingrese el nuevo valor para ${atributo}:`);

  if (objetos[index]) {
    objetos[index][atributo] = nuevoValor; // Añadir o modificar
  } else {
    console.log("No existe el objeto en ese índice.");
  }
}

function eliminarAtributo(index, atributo) {
  if (objetos[index] && objetos[index][atributo]) {
    delete objetos[index][atributo];
  } else {
    console.log("El atributo o el objeto no existen.");
  }
}

// Punto 3: Pedir números de más de dos cifras y mostrar la cantidad de cifras
let numeros = [];

function agregarNumero() {
  let numero = parseInt(prompt("Ingrese un número de más de dos cifras:"));
  
  if (numero > 99) {
    numeros.push(numero);
  } else {
    console.log("El número no tiene más de dos cifras.");
  }
}

function imprimirNumeros() {
  numeros.forEach(numero => {
    console.log(`Número: ${numero}, Cantidad de cifras: ${numero.toString().length}`);
  });
}

// Punto 4: Crear un arreglo con números aleatorios y mostrar una cuarta parte
let numerosAleatorios = [];

function generarAleatorios() {
  for (let i = 0; i < 100; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 1000)); // Números entre 0 y 999
  }
}

function imprimirCuartaParte() {
  let cuarto = Math.floor(numerosAleatorios.length / 4);
  console.log("Un cuarto del arreglo es:", numerosAleatorios.slice(0, cuarto));
}

// Punto 5: Reemplazar números pares por "par"
function reemplazarPares() {
  let numeros = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
  
  numeros = numeros.map(numero => numero % 2 === 0 ? "par" : numero);

  console.log(numeros);
}

// Punto 6: Calculadora con 10 operaciones y uso de botones (HTML y JS)
function calcular(operacion) {
  const num1 = parseFloat(prompt("Ingrese el primer número:"));
  const num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      resultado = num1 / num2;
      break;
    case 'potencia':
      resultado = Math.pow(num1, num2);
      break;
    case 'modulo':
      resultado = num1 % num2;
      break;
    case 'raiz':
      resultado = Math.sqrt(num1);
      break;
    case 'logaritmo':
      resultado = Math.log(num1);
      break;
    case 'maximo':
      resultado = Math.max(num1, num2);
      break;
    case 'minimo':
      resultado = Math.min(num1, num2);
      break;
    default:
      resultado = "Operación no válida";
  }

  console.log("Resultado: " + resultado);
}

// Llamadas de prueba (puedes descomentar según lo que quieras probar)

// Punto 1 y 2
// agregarObjeto();
// imprimirObjetos();
// modificarObjeto(0); // Modificar el primer objeto
// eliminarAtributo(0, 'valor'); // Eliminar atributo del primer objeto
// imprimirObjetos();

// Punto 3
// agregarNumero();
// imprimirNumeros();

// Punto 4
// generarAleatorios();
// imprimirCuartaParte();

// Punto 5
// reemplazarPares();

// Punto 6
// calcular('suma'); // Puedes cambiar por la operación deseada
