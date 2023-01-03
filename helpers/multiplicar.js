import {writeFileSync} from 'fs';
import colors from "colors";

export const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
        }

        if (listar) {
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);
            console.log(consola);
        }

        // writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })

        writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt creado`);
    } catch (err) {
        throw err;
    }
}

