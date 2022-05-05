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

const condicionesDeVida = () => {
	for (let x = 1; x < filas - 1; x++) {
        for (let y = 1; y < columnas - 1; y++) {
			let vecinos = 0;
			for (let i = -1; i <= 1; i++) {
				for (let j = -1; j <= 1; j++) {
					vecinos += tabla[x+i][y+j];
				}
			}
			vecinos -= tabla[x][y]
			console.log('celula: ' + tabla[x][y] + ' x: ' + x + ' y: ' + y + ' Vecinos: ' + vecinos)
			if ((tabla[x][y] == 1) && (vecinos < 2)) { // 1. Cualquier célula viva con menos de dos vecinas vivas muere, como si la causa fuera la subpoblación.
				console.log('celula: ' + tabla[x][y] + ' x: ' + x + ' y: ' + y + ' Muere por regla 1')
				console.log('antes: ', proximaTabla[x][y]);
				proximaTabla[x][y] = 0
				console.log('despues: ', proximaTabla[x][y]);
			}
			if ((tabla[x][y] == 1) && (vecinos > 3)) { // 2. Cualquier celda viva con más de tres vecinos vivos muere, como por hacinamiento.
				console.log('celula: ' + tabla[x][y] + ' x: ' + x + ' y: ' + y + ' Muere por regla 2')
				console.log('antes: ', proximaTabla[x][y]);
				proximaTabla[x][y] = 0
				console.log('despues: ', proximaTabla[x][y]);
			}
			if ((tabla[x][y] == 1) && (vecinos == 2 || vecinos == 3)) { // 3. Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
				console.log('celula: ' + tabla[x][y] + ' x: ' + x + ' y: ' + y + ' Sigue con vida por regla 3')
				console.log('antes: ', proximaTabla[x][y]);
				proximaTabla[x][y] = 1
				console.log('despues: ', proximaTabla[x][y]);
			}
			// 4. Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.
		}
	}
}

const run = async () => {
    const fila = await askFila.run()
    const columna = await askColumna.run()
	filas = isNumber(fila) ? parseInt(fila) : 4 // Fila 4 por defecto
	columnas = isNumber(columna) ? parseInt(columna) : 8 // Columnas 8 por defecto
	tabla = new Array(filas)
	for (let i = 0; i < filas; i++) {
		tabla[i] = new Array(columnas)
	}
	proximaTabla = new Array(filas)
	for (let i = 0; i < filas; i++) {
		proximaTabla[i] = new Array(columnas)
	}
	for (let i = 0; i < filas; i++) {
		for (let j = 0; j < columnas; j++) {
			if (i == 0 || j == 0 || i == filas-1 || j == columnas-1) tabla[i][j] = 0
			else tabla[i][j] = Math.round(Math.random() * (1 - 0) + 0)
			proximaTabla[i][j] = 0
    	}
	}
	condicionesDeVida()
	console.log('Generacion 1')
	tabla.forEach(f => {
        console.log(f.join(' '))
    })
	console.log('Generacion 2')
	proximaTabla.forEach(f => {
        console.log(f.join(' '))
    })
	console.log(filas, columnas)
}

run();