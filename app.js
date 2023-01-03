import colors from 'colors';
import { argv } from './config/yargs.js';
import { crearArchivo } from './helpers/multiplicar.js';


// console.log(process.argv)
// console.log(argv);
// console.log('base: yargs', argv.base);

// let base = 6;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
    .catch((err) => console.log(err))


