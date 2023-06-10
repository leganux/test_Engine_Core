const BankClass = require('./classes/Bank.class')

let bancos = new BankClass()

let main = async function () {
    console.log(await bancos.getStoredBanks())
    console.log(await bancos.getBankByClave(1))
    console.log(await bancos.getStoredBanks())
    console.log(await bancos.getBankByClave(1))
    console.log(await bancos.getBankByClave(2))
    console.log(await bancos.getBankByClave(3))
    console.log(await bancos.getBankByClave(3))
    console.log(await bancos.getBankByClave(3))
}

main()
