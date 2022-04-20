const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida, consola ='';
        
        for (let i = 1; i <= hasta; i++) {
            const resultado = base * i;
            
            salida += (`${base} x ${i} = ${resultado}\n`)
            consola += (`${base} ${ 'x'.bgMagenta} ${i} ${'='.green} ${resultado}\n`)
            
        }
    

        if(listar){
            console.log('============================'.green);
            console.log('      Tabla del: '.blue, colors.red( base))
            console.log('============================'.green);

            console.log(consola);
        }
        
        
        

      
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return (`tabla-${base}.txt`)


        
    } catch (err) {
        console.log(err)
        
    }


      
}

module.exports = {
     crearArchivo
}