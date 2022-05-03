const { Input, AutoComplete } = require('enquirer');

let grid = [
    ['x', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
]

const askFila = new Input({
    name: 'fila',
    message: 'Ingrese la fila: '
});

const askColumna = new Input({
    name: 'columna',
    message: 'Ingrese la columna'
})

function changeValue(x, y, v) {

    grid.forEach((element,index )=> {
        if (x==index)
        {
            element[y]= v;
        }
    });

}

function isLife(){

    let pos=-1;
   // grid.forEach((element,index )=> {
        
    //});

    
        console.log(grid[0][0]);
    



     /*
    let fila_arriba=x-1;
    let fila_abajo=x+1;
    let izquierda=false;
    let derecha=false;
    let arriba=false;
    let abajo=false;

   
    if(fila_arriba==index){
            
        element[y];
        console.log(element[y]);
        if(element[y]!='0')
        {
            arrriba=true;
        }
    }
    */
    console.log(' esta viva ');
}



function printArray() {

    grid.forEach((element) => {
        console.log(element.join(' '));
    });
}

const run = async () => {
    printArray();
    const fila = await askFila.run()
    const columna = await askColumna.run()
    changeValue(fila, columna, "x")
    
    printArray();
    isLife()
    //await run();
}

run();
