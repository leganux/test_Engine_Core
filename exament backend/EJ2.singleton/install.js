const bankModel = require('./models/bank.model').Bank

let install = async function () {
    try {
        console.info('Eliminando y creando tabla de bancos...')
        await bankModel.sync({force: true});
        console.info('Insertando data...')
        await bankModel.bulkCreate([
            {
                Nombre: "Banamex",
                Descripcion: "Banco Nacional de México",
            },
            {
                Nombre: "BBVA",
                Descripcion: "BBVA Bancomer SA",
            },
            {
                Nombre: "Santander",
                Descripcion: "Banco Santander SA",
            }
        ]);

        console.info('Corroborando la existencia de datos...')
        banks = await bankModel.findAll({
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

