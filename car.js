
let dacia = {
    make: "Dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    millage: 525327,
    maxSpeed: 180,
    consumMediu: 11.5,
    batteryCapacity: 150,
    baterryCharge:150,
    paint: function (color) {
        this.color = color

    },
    move: function (distanta) {
        consum = this.maxSpeed * distanta / 100
        this.baterryCharge -= this.consumMediu
        this.millage += distanta

    },

    recharge: function () {
        this.baterriCharge = this.batteryCapacity
    }
}

let Audi = {
    make: "Audi",
    model: "A3",
    color: "negru",
    year: 1978,
    millage: 525327,
    maxSpeed: 180,
    paint: function (color) {
        this.color = color

    }
}

dacia.paint("galben")
console.log(dacia)
dacia.move(100)
console.log(Audi)
