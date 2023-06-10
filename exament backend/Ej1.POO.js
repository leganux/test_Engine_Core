class Vehicle {
    type = '';
    name = '';
    person_capacity = 0;
    fuel_type = ''

    constructor() {
        console.log("Object  already constructed")
    }
    getInfo() {
        return {
            type: this.type,
            person_capacity: this.person_capacity,
            fuel_type: this.fuel_type,
            name: this.name,
            tires_number: this.tires_number || 0,
            flyTypes: this.flyTypes || false,
            hasHelix: this.hasHelix || false,
        }
    }
    setType(type) {
        if ("aéreo,terrestre,acuático".split(',').includes(type.toLowerCase())) {
            this.type = type
        } else {
            throw new Error('Tipo de vehiculo no  reconocido')
        }
    }

    setTypeFuel(type) {
        if ("gasolina,turbosina,diesel".split(',').includes(type.toLowerCase())) {
            this.fuel_type = type
        } else {
            throw new Error('Tipo de combustible no reconocido')
        }
    }

    setPersonCapacity(count = 0) {
        this.person_capacity = count

    }

    setName(name) {
        console.log('name', name)

        this.name = name

    }
}

class Land_vehicle extends Vehicle {
    tires_number = 0
    type = "terrestre"

    constructor() {
        super();
        console.log("Constructor hijo finalizado.");
    }

    setTires(count = 0) {
        this.tires_number = count
    }
}

class Air_vehicle extends Vehicle {
    tires_number = 0
    type = "aéreo"
    flyTypes = []
    hasHelix = false

    constructor() {
        super();
        console.log("Constructor hijo finalizado.");
    }

    setTires(count = 0) {
        this.tires_number = count
    }

    setFlyTypes(types) {
        this.flyTypes = types
    }

    setHelix() {
        this.hasHelix = true
    }
}

class Acuatic_vehicle extends Vehicle {
    type = "acuático"
    constructor() {
        super();
        console.log("Constructor hijo finalizado.");
    }
}


let automovil = new Land_vehicle()
automovil.setTires(4)
automovil.setName('Automóvil')
automovil.setTypeFuel('gasolina')
automovil.setPersonCapacity(5)
console.log(automovil.getInfo())

let camion = new Land_vehicle()
camion.setTires(10)
camion.setName('Camión')
camion.setTypeFuel('diesel')
camion.setPersonCapacity(3)
console.log(camion.getInfo())


let avion = new Air_vehicle()
avion.setTires(5)
avion.setName('Avión')
avion.setTypeFuel('turbosina')
avion.setPersonCapacity(100)
avion.setFlyTypes(['Horizontal'])
console.log(avion.getInfo())

let helicoptero = new Air_vehicle()
helicoptero.setTires(0)
helicoptero.setName('Helicóptero')
helicoptero.setTypeFuel('turbosina')
helicoptero.setPersonCapacity(7)
helicoptero.setFlyTypes(['Horizontal','Vertical'])
helicoptero.setHelix()
console.log(helicoptero.getInfo())


let yate = new Acuatic_vehicle()
yate.setName('Yate')
yate.setTypeFuel('Diesel')
yate.setPersonCapacity(20)
console.log(yate.getInfo())

let crucero = new Acuatic_vehicle()
crucero.setName('crucero')
crucero.setTypeFuel('Diesel')
crucero.setPersonCapacity(400)
console.log(crucero.getInfo())

