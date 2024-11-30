// Ejercicio 3: Inventario de Productos
// Define una clase Producto con atributos como nombre, precio y cantidadEnStock. Luego crea una clase Electrodomestico que herede de Producto y agregue un atributo adicional marca. Implementa un arreglo para almacenar varios productos y un método que liste aquellos que tienen una cantidad en stock menor a 10.


class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }

    agregarStock() {
        const nombre = document.querySelector('#tipo').value;
        const precio = parseFloat(document.querySelector('#precio').value);
        const cantidadEnStock = parseInt(document.querySelector('#stock').value);
        const marca = document.querySelector('#marca').value;

        const nuevoProducto = new Electrodomestico(nombre, precio, cantidadEnStock, marca);
        inventario.agregarProducto(nuevoProducto); 

        // Limpiar los campos después de agregar
        document.querySelector('#tipo').value = '';
        document.querySelector('#precio').value = '';
        document.querySelector('#stock').value = '';
        document.querySelector('#marca').value = '';
    }

    listarStock() {
        const productosBajosStock = inventario.obtenerProductosBajoStock();

        if (productosBajosStock.length > 0) {
            let mensaje = 'Productos con stock bajo:\n';
            productosBajosStock.forEach(producto => {
                mensaje += `- ${producto.nombre} (Stock: ${producto.cantidadEnStock})\n`;
            });
            alert(mensaje);
        } else {
            alert('No hay productos con stock bajo.');
        }
    }
}
class Inventario {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProductosBajoStock() {
        return this.productos.filter(producto => producto.cantidadEnStock < 10);
    }
}

const inventario = new Inventario();

function guardar() {
    const electrodomestico = new Electrodomestico();
    electrodomestico.agregarStock();
}

function listar() {
    const electrodomestico = new Electrodomestico();
    electrodomestico.listarStock();
}
