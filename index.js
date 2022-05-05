const { Input, AutoComplete } = require('enquirer');

const askFila = new Input({
    name: 'fila',
    message: 'Ingrese la fila: '
});

const askColumna = new Input({
    name: 'columna',
    message: 'Ingrese la columna'
})


const run = async () => {
    const fila = await askFila.run()
    const columna = await askColumna.run()
}

run();

// 1. Cualquier célula viva con menos de dos vecinas vivas muere, como si la causa fuera la subpoblación.
// 2. Cualquier celda viva con más de tres vecinos vivos muere, como por hacinamiento.
// 3. Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
// 4. Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.