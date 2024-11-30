// Ejercicio 10: Tienda de Mascotas
// Crea una clase base Mascota con atributos como nombre y tipo. Luego, crea clases derivadas como Perro y Gato, agregando métodos específicos para cada animal, como ladrar() y maullar(). Utiliza un arreglo para almacenar varias mascotas y un método para hacer que cada mascota realice su acción.

class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre; 
        this.tipo = tipo; 
    }
}


class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, 'Perro');
    }

    ladrar() {
        return `${this.nombre} dice: ¡Guau!`;
    }
}

class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, 'Gato');
    }

    maullar() {
        return `${this.nombre} dice: ¡Miau!`;
    }
}


let mascotas = [];


const mostrarMascotas = () => {
    const mascotasList = document.getElementById('mascotasList');
    mascotasList.innerHTML = ''; 
    mascotas.forEach(mascota => {
        const mascotaItem = document.createElement('li');
        mascotaItem.textContent = `Nombre: ${mascota.nombre}, Tipo: ${mascota.tipo}`;
        mascotasList.appendChild(mascotaItem);
    });
};


document.getElementById('formMascota').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;

    let nuevaMascota;
    if (tipo === 'perro') {
        nuevaMascota = new Perro(nombre);
    } else if (tipo === 'gato') {
        nuevaMascota = new Gato(nombre);
    }

    mascotas.push(nuevaMascota); 
    this.reset(); 
    mostrarMascotas(); 
});


const hacerQueMascotasHablen = () => {
    mascotas.forEach(mascota => {
        let mensaje = '';
        if (mascota instanceof Perro) {
            mensaje = mascota.ladrar(); 
        } else if (mascota instanceof Gato) {
            mensaje = mascota.maullar(); 
        }

        alert(mensaje); 
    });
};

document.getElementById('accionesBtn').addEventListener('click', hacerQueMascotasHablen);
