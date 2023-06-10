const bankModel = require('./../models/bank.model').Bank

class Bank {
    memoryStoredBanks = {}
    clave = 0

    constructor() {
        console.log('Clase banco creada')
        this.clave = 0
    }

    async getBankByClave(clave) {
        if (this.memoryStoredBanks[clave]) {
            console.log('Retornando desde memoria')
            return this.memoryStoredBanks[clave]
        }
        let data = await bankModel.findOne({
            where: {Clave: clave},
            raw: true,
            nest: true,
        })
        if (!data) {
            return 'Registro no localizado'
        }
        this.memoryStoredBanks[clave] = data
        console.log('Retornando desde DB')
        return data

    }

    async insertBank(obj) {
        try {
            await bankModel.create(obj)
            return true
        } catch (e) {
            throw e
        }
    }

    async getStoredBanks() {
        return this.memoryStoredBanks
    }


}

module.exports = Bank
