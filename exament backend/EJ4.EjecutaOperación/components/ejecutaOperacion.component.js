const CatalogoUsuario = require('./../models/CatalogoUsuario.model').CatalogoUsuario
const LogOperaciones = require('./../models/LogOperaciones.model').LogOperaciones
let {Crypt} = require('unpc')
let {SCryptHashingAdapter} = require('unpc/scrypt')
const {DataTypes} = require("sequelize");


const crypt = new Crypt({
    default: "scrypt",
    adapters: [SCryptHashingAdapter],
    options: {encoding: "hex"}
});

let functions = {
    operation: async function (param1, param2, ope, id) {
        await functions.log(id, 'operacion ' + ope)
        let response = false
        switch (ope.toLowerCase()) {
            case 'suma':
                response = param1 + param2
                break;
            case 'resta':
                response = param1 - param2
                break;
            case 'division':
                response = param1 / param2
                break;
            case 'multiplicacion':
                response = param1 * param2
                break;
        }
        return response


    },
    validate_empty: async function (user, password, param1, param2, ope) {
        await functions.log(undefined, 'validar')
        if (!user || !password || !param1 || !param2 || !ope) {

            return {
                success: false,
                message: 'parametros no validos, alguno esta vacio'
            }
        }
        if (!"suma,resta,multiplicacion,division".split(',').includes(ope.trim())) {
            return {
                success: false,
                message: 'Operacion invalida'
            }
        }
        if (typeof param1 != 'number' || typeof param2 != 'number') {
            return {
                success: false,
                message: 'Parametro no es numerico'
            }
        }
        return {
            success: true,
            message: 'parametros  validos'
        }
    },
    auth: async function (hash, password, id) {
        await functions.log(id, 'autenticar')
        return await crypt.verify(hash, password);
    },
    exec: async function (user, password, param1, param2, ope) {
        try {
            let validate = await functions.validate_empty(user, password, param1, param2, ope)
            if (!validate.success) {
                throw new Error(validate.message)
            }

            let usuario = await CatalogoUsuario.findOne({
                where: {
                    username: user
                }, raw: true
            })
            if (!usuario) {
                throw new Error('ùsuario no localizado')
            }
            let auth = await functions.auth(usuario.password, password, usuario.id)
            if (!auth) {
                throw new Error('Contraseña incorrecta')
            }
            let resp = await functions.operation(param1, param2, ope, usuario.id)
            return resp

        } catch (e) {
            throw e
        }

    },
    log: async function (user, action) {
        try {
            await LogOperaciones.create({
                user: user,
                action: action
            })

        } catch (e) {
            console.error('Ocurrio un error al momento de crear el log')
            throw e
        }
    },

}

module.exports = functions
