// Ejercicio 4: Sistema de Empleados
// Crea una clase Empleado con atributos como nombre y sueldo. Luego, crea clases derivadas como EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Cada tipo de empleado tendrá un método para calcular el sueldo total en función de las horas trabajadas. Utiliza un arreglo para almacenar diferentes tipos de empleados y muestra sus sueldos.


class Empleado {
    constructor(nombre, sueldo) {
      this.nombre = nombre;
      this.sueldo = sueldo;
    }
  }
  
  class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldo) {
      super(nombre, sueldo);
    }
    
    sueldoTotal() {
      return this.sueldo; 
    }
  }
  
  class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldo) {
      super(nombre, sueldo);
    }
    
    sueldoTotal() {
      return this.sueldo * 0.5; // 50% de sueldo para medio tiempo
    }
  }
  

  let empleados = [];
  

  function guardarEmpleados() {
    const nombre = document.getElementById('nombre').value;
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const contrato = document.getElementById('contrato').value;
    
    let nuevoEmpleado;
    
    if (contrato === "tiempoCompleto") {
      nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, sueldo);
    } else {
      nuevoEmpleado = new EmpleadoMedioTiempo(nombre, sueldo);
    }
  
    empleados.push(nuevoEmpleado); 
    document.getElementById('nombre').value = '';
    document.getElementById('sueldo').value = '';
    document.getElementById('contrato').value = 'tiempoCompleto'; 
  }
  
 
  function listar() {
    const empleadoTextarea = document.getElementById('empleados');
    empleadoTextarea.value = ''; 
  
    empleados.forEach(empleado => {
      const sueldoCalculado = empleado.sueldoTotal();
      empleadoTextarea.value += `Nombre: ${empleado.nombre}, Sueldo: ${sueldoCalculado}\n`;
    });
  }
  