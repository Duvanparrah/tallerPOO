// Ejercicio 6: Catálogo de Vehículos
// Crea una clase base Vehiculo con atributos como marca, modelo y año. Luego, crea clases derivadas como Auto y Moto que hereden de Vehiculo. Agrega métodos específicos a cada clase, como conducir() en Auto. Usa un arreglo para almacenar vehículos y crea un método que los liste según su tipo.

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}


class Carro extends Vehiculo {
    conducir() {
        return `Conduciendo el auto ${this.año} ${this.marca} ${this.modelo}...`;
    }
}


class Moto extends Vehiculo {
    conducir() {
        return `Conduciendo la moto ${this.año} ${this.marca} ${this.modelo}...`;
    }
}


const vehiculos = [];


function guardar() {
    const tipo = document.getElementById("tipo").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const año = document.getElementById("año").value;

    let vehiculo;
    if (tipo === "carro") {
        vehiculo = new Carro(marca, modelo, año);
    } else {
        vehiculo = new Moto(marca, modelo, año);
    }

    vehiculos.push(vehiculo);
    alert("Vehículo guardado correctamente");

    document.getElementById("tipo").value = "moto"; 
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("año").value = "";

}
function listar(tipo) {
    const lista = vehiculos
        .filter((vehiculo) => (tipo === "carro" ? vehiculo instanceof Carro : vehiculo instanceof Moto))
        .map((vehiculo) => `${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.año})`)
        .join("\n");

    document.getElementById("empleados").value = lista || "No hay vehículos de este tipo";
}
