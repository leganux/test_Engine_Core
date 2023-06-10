const {exec} = require('./components/ejecutaOperacion.component')


let main = async function () {
    console.log(await exec('erick', '12345', 5, 3, 'suma'))
    console.log(await exec('pedro', '12345a', 500, 33, 'division'))
    // console.log(await exec('paco', '12345a', 10, 13, 'resta'))  //contraseña incorrecta
    // console.log(await exec('paco', undefined, 10, 13, 'resta'))  //parametro faltante

}

main()
