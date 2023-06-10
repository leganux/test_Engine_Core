const CatalogoUsuario = require('./models/CatalogoUsuario.model').CatalogoUsuario
const LogOperaciones = require('./models/LogOperaciones.model').LogOperaciones
let {Crypt} = require('unpc')
let {SCryptHashingAdapter} = require('unpc/scrypt')


const crypt = new Crypt({
    default: "scrypt",
    adapters: [SCryptHashingAdapter],
    options: {encoding: "hex"}
});


let install = async function () {
    try {
        console.info('Eliminando y creando tabla de usuarios...')
        await CatalogoUsuario.sync({force: true});
        console.info('Eliminando y creando tabla de logOperaciones...')
        await LogOperaciones.sync({force: true});
        console.info('Insertando data...')
        await CatalogoUsuario.bulkCreate([
            {
                username: "erick",
                password: await crypt.hash('12345'),
            },
            {
                username: "pedro",
                password: await crypt.hash('12345a'),
            },
            {
                username: "paco",
                password: await crypt.hash('12345b'),
            }
        ]);

        console.info('Corroborando la existencia de datos...')
        banks = await CatalogoUsuario.findAll({
            raw: true,
            nest: true,
        });
        console.info('Data creada de forma exitosa', banks)
    } catch (e) {
        console.error('Ocurrio un error al relizar la instalacion', e)
    }
}

console.info('Instalando...')
setTimeout(function () {
    install()
}, 3000)

