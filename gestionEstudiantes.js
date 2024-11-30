// Ejercicio 1: Gestión de Estudiantes
// Crea una clase Persona con atributos básicos como nombre, edad y un método saludar(). Luego crea una clase Estudiante que herede de Persona y agregue un atributo calificaciones (un arreglo). Añade métodos para agregar una calificación y calcular el promedio del estudiante.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, mi nombre es: ${this.nombre}, y tengo: ${this.edad} años`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(notas) {
        const calificacionNumerica = parseFloat(notas);
        if (
            !isNaN(calificacionNumerica) && calificacionNumerica >= 0 && calificacionNumerica <= 5
        ) {
            this.calificaciones.push(calificacionNumerica);
            console.log(`Calificación ${calificacionNumerica} añadida.`);
        } else {
            console.log("Debes ingresar un valor válido entre 0 y 5.");
        }
    }

    calcularPromedio() {
        if (this.calificaciones.length > 0) {
            const resultado = this.calificaciones.reduce((sum, calificacion) => sum + calificacion, 0);
            const promedio = resultado / this.calificaciones.length;
            return promedio.toFixed(2);
        } else {
            return "No hay calificaciones para calcular el promedio.";
        }
    }
}
let estudianteActual;
function guardarEstudiante() {
    const nombre = document.querySelector('input[type="text"]').value;
    const edad = document.querySelector('input[type="number"]').value;
    estudianteActual = new Estudiante(nombre, edad);
    alert(estudianteActual.saludar());
}
function guardarCalificacion() {
    const primerExamen = document.querySelector('input[type="text"]').value;
    const segundoExamen = document.querySelectorAll('input[type="number"]')[0].value;
    const tercerExamen = document.querySelectorAll('input[type="number"]')[1].value;

    estudianteActual.agregarCalificacion(primerExamen);
    estudianteActual.agregarCalificacion(segundoExamen);
    estudianteActual.agregarCalificacion(tercerExamen);
    alert("Calificaciones guardadas.");
}
function calcularPromedio() {
    const promedio = estudianteActual.calcularPromedio();
    const promedioInput = document.getElementById('promedio');
    promedioInput.value = promedio;
}
