// Ejercicio 7: Sistema de Cursos
// Crea una clase Curso con atributos como nombreCurso y un arreglo de Estudiantes (usa la clase Estudiante del Ejercicio 1). Cada curso tendrá métodos para agregar estudiantes y calcular el promedio del curso en función de las calificaciones de los estudiantes. Hereda esta clase en subclases como CursoOnline y CursoPresencial.


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }

    calcularPromedio() {
        if (this.calificaciones.length >= 2) {
            let resultado = 0;
            this.calificaciones.forEach(calificacion => {
                resultado += calificacion;
            });
    
            return resultado / this.calificaciones.length; 
        }
        return 0;
    }
}

class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiantes(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedioCurso() {
        if (this.estudiantes.length > 0) {
            let totalPromedio = 0;
            this.estudiantes.forEach(estudiante => {
                totalPromedio += estudiante.calcularPromedio(); 
            });
            
            return totalPromedio / this.estudiantes.length; 
        }
        return 0; 
    }
    
}

class CursoPresencial extends Curso {
    constructor(nombreCurso) {
        super(nombreCurso);
    }
}

class CursoOnline extends Curso {
    constructor(nombreCurso) {
        super(nombreCurso);
    }
}


function guardar() {
    const nombre = document.querySelector('#nombreEstudiante').value;
    const edad = parseInt(document.querySelector('#edadEstudiante').value);
    const calificacion1 = parseFloat(document.querySelector('#calificacion1').value);
    const calificacion2 = parseFloat(document.querySelector('#calificacion2').value);
    const calificacion3 = parseFloat(document.querySelector('#calificacion3').value);

    if (!nombre || isNaN(edad) || isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3)) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }


    const estudiante = new Estudiante(nombre, edad);
    estudiante.agregarCalificacion(calificacion1);
    estudiante.agregarCalificacion(calificacion2);
    estudiante.agregarCalificacion(calificacion3);


    cursoPresencial.agregarEstudiantes(estudiante);
    console.log(`Estudiante agregado a ${cursoPresencial.nombreCurso}:`, estudiante);

    const promedioCurso = cursoPresencial.calcularPromedioCurso();
    console.log(`Promedio del curso ${cursoPresencial.nombreCurso}: ${promedioCurso}`);


    document.querySelector('#promedioPresencial').value = promedioCurso.toFixed(2);
    limpiarFormulario();
}

function limpiarFormulario() {
    document.querySelector('#nombreEstudiante').value = '';
    document.querySelector('#edadEstudiante').value = '';
    document.querySelector('#calificacion1').value = '';
    document.querySelector('#calificacion2').value = '';
    document.querySelector('#calificacion3').value = '';
}

const cursoPresencial = new CursoPresencial('Curso Presencial');
const cursoOnline = new CursoOnline('Curso Online');
