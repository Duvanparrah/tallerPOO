// Ejercicio 8: Biblioteca
// Crea una clase base Libro con atributos como titulo y autor. Luego, crea clases derivadas como LibroDigital y LibroFisico, cada una con atributos adicionales específicos. Utiliza un arreglo para almacenar libros y un método para listar todos los libros de un autor específico.

class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo; 
        this.autor = autor;  
    }
}

class LibroDigital extends Libro {
    constructor(titulo, autor, formato) {
        super(titulo, autor); 
        this.formato = formato; 
    }
}

// Clase derivada LibroFisico
class LibroFisico extends Libro {
    constructor(titulo, autor, peso) {
        super(titulo, autor); 
        this.peso = peso; 
    }
}

let libros = [];

function agregarLibro(titulo, autor, tipoLibro, formato, peso) {
    let nuevoLibro;
    if (tipoLibro === 'digital') {
        nuevoLibro = new LibroDigital(titulo, autor, formato);
    } else {
        nuevoLibro = new LibroFisico(titulo, autor, peso);
    }
    
    libros.push(nuevoLibro);
    alert(`Libro agregado: ${titulo} por ${autor}`);
}

document.getElementById('formLibro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const tipoLibro = document.getElementById('tipoLibro').value;
    const formato = tipoLibro === 'digital' ? document.getElementById('formato').value : null;
    const peso = tipoLibro === 'fisico' ? document.getElementById('peso').value : null;

    agregarLibro(titulo, autor, tipoLibro, formato, peso);
    this.reset();
});

function buscarLibros() {
    const autorBuscar = document.getElementById('autorBuscar').value.trim().toLowerCase();
    const resultados = libros.filter(libro => libro.autor.toLowerCase() === autorBuscar);
    
    if (resultados.length > 0) {
        const titulos = resultados.map(libro => libro.titulo).join(', ');
        alert(`Libros de ${autorBuscar}: ${titulos}`);
    } else {
        alert('No se encontraron libros de este autor.');
    }
}


document.getElementById('buscarBtn').addEventListener('click', buscarLibros);


document.getElementById('tipoLibro').addEventListener('change', function() {
    if (this.value === 'digital') {
        document.getElementById('formato').classList.remove('hidden');
        document.getElementById('peso').classList.add('hidden');
    } else {
        document.getElementById('peso').classList.remove('hidden');
        document.getElementById('formato').classList.add('hidden');
    }
});
