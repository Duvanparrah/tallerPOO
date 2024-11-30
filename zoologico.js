class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}

class Leon extends Animal {
    rugir() {
        return `${this.nombre} ¡Hola leoncito!`;
    }
}

class Elefante extends Animal {
    trompetear() {
        return `${this.nombre} ¡Hola elefantito!`;
    }
}

class Tigre extends Animal {
    gorrear() {
        return `${this.nombre} ¡Hola gatito!`;
    }
}

class Zoologico {
    constructor() {
        this.animales = [];
    }

    agregarAnimal(animal) {
        this.animales.push(animal);
    }

    mostrarSonidos() {
        const sonidosDiv = document.querySelector('#sonidos'); //
    
        sonidosDiv.innerHTML = '';
        
        this.animales.forEach(animal => {
            let sonido;
            if (animal instanceof Leon) {
                sonido = animal.rugir();
            } else if (animal instanceof Elefante) {
                sonido = animal.trompetear();
            } else if (animal instanceof Tigre) {
                sonido = animal.gorrear();
            }
            sonidosDiv.innerHTML += `<p>${sonido}</p>`;
        });
    }
}

// Crear una instancia del Zoologico
const zoologico = new Zoologico();
zoologico.agregarAnimal(new Leon('Simba', 'león'));
zoologico.agregarAnimal(new Elefante('Dumbo', 'elefante'));
zoologico.agregarAnimal(new Tigre('Shere Khan', 'tigre'));
