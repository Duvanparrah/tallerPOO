// Ejercicio 9: Sistema de Transporte
// Define una clase Transporte con atributos como capacidad y tipoCombustible. Luego, crea subclases como Autobus y Bicicleta que hereden de Transporte. Agrega métodos específicos, como arrancar() para Autobus. Usa un arreglo para almacenar varios medios de transporte y recorre el arreglo ejecutando una acción específica según el tipo de transporte.

class Transporte {
    constructor(capacidad, tipoCombustible) {
        this.capacidad = capacidad; 
        this.tipoCombustible = tipoCombustible; 
    }
}


class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible, puertas) {
        super(capacidad, tipoCombustible);
        this.puertas = puertas; 
    }

    arrancar() {
        return "El autobús ha arrancado.";
    }
}

// Subclase Bicicleta
class Bicicleta extends Transporte {
    constructor(capacidad, tipoCombustible) {
        super(capacidad, tipoCombustible); 
    }

    pedalear() {
        return "La bicicleta está en movimiento.";
    }
}

// Arreglo para almacenar medios de transporte
let transportes = [];

// Agregar algunos transportes al arreglo
transportes.push(new Autobus(50, "Diésel", 2));
transportes.push(new Bicicleta(1, "agua"));


const mostrarTransportes = () => {
    const transportesList = document.getElementById('transportesList');
    transportes.forEach(transporte => {
        const transporteItem = document.createElement('li');
        transporteItem.textContent = `Capacidad: ${transporte.capacidad}, Tipo de combustible: ${transporte.tipoCombustible}`;
        transportesList.appendChild(transporteItem);
    });
};


const ejecutarAcciones = () => {
    transportes.forEach(transporte => {
        let mensaje = `Capacidad: ${transporte.capacidad}, Tipo de combustible: ${transporte.tipoCombustible}. `;
        
        if (transporte instanceof Autobus) {
            mensaje += transporte.arrancar(); // Ejecutar método específico del Autobus
        } else if (transporte instanceof Bicicleta) {
            mensaje += transporte.pedalear(); // Ejecutar método específico de la Bicicleta
        }

        alert(mensaje); // Mostrar el mensaje en un alert
    });
};

window.onload = mostrarTransportes;

document.getElementById('ejecutarBtn').addEventListener('click', ejecutarAcciones);
