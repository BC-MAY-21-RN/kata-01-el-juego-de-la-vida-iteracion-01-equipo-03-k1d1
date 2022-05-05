const { Input, AutoComplete } = require('enquirer');

const askFila = new Input({
    name: 'fila',
    message: 'Ingrese la fila: '
});

const askColumna = new Input({
    name: 'columna',
    message: 'Ingrese la columna'
})

const isNumber = (n) => { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

let filas
let columnas
let tabla
let proximaTabla

const run = async () => {
    const fila = await askFila.run()
    const columna = await askColumna.run()
	filas = isNumber(fila) ? parseInt(fila) : 4 // Fila 4 por defecto
	columnas = isNumber(columna) ? parseInt(columna) : 8 // Columnas 8 por defecto
	tabla = new Array(filas);
	for (let i = 0; i < filas; i++) {
		tabla[i] = new Array(columnas)
	}
	proximaTabla = new Array(filas);
	for (let i = 0; i < filas; i++) {
		proximaTabla[i] = new Array(columnas)
	}
	console.log(filas, columnas, tabla, proximaTabla)
}

run();

// 1. Cualquier célula viva con menos de dos vecinas vivas muere, como si la causa fuera la subpoblación.
// 2. Cualquier celda viva con más de tres vecinos vivos muere, como por hacinamiento.
// 3. Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
// 4. Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.