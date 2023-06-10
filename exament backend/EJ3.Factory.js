class Auto {
    tipo = ''

    constructor(tipo) {
        this.tipo = tipo;
    }

    avanzar() {
        console.log(`Estoy usando  un  Auto de tipo ${this.tipo}`);
    }

}

class Sedan extends Auto {
    constructor(tipo) {
        super(tipo);
    }
}

class Deportivo extends Auto {
    constructor(tipo) {
        super(tipo);
    }
}

class Hatchback extends Auto {
    constructor(tipo) {
        super(tipo);
    }
}

class PickUp extends Auto {
    constructor(tipo) {
        super(tipo);
    }
}


class AutoFactory {
    tipos = ['sedan', 'deportivo', 'hatchback', 'pickup']

    obtenerAuto() {
        let random = Math.floor(Math.random() * this.tipos.length);
        let tipo = this.tipos[random]
        switch (tipo) {
            case 'sedan':
                return new Sedan(tipo);
            case 'deportivo':
                return new Deportivo(tipo);
            case 'hatchback':
                return new Hatchback(tipo);
            case 'pickup':
                return new PickUp(tipo);

        }
    }
}

let auto1 = new AutoFactory()
auto1.obtenerAuto().avanzar()
let auto2 = new AutoFactory()
auto2.obtenerAuto().avanzar()

