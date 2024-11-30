// Ejercicio 5: Sistema Bancario
// Crea una clase base CuentaBancaria con atributos como numeroCuenta y saldo. Luego, crea clases derivadas como CuentaAhorros y CuentaCorriente que hereden de CuentaBancaria. Cada tipo de cuenta tendrá métodos específicos, como aplicarIntereses() en CuentaAhorros. Usa un arreglo para manejar múltiples cuentas y un método para realizar depósitos y retiros en todas ellas.

const cuentas = [];

class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
        } else {
            alert("Saldo insuficiente");
        }
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }

 
    aplicarIntereses() {
        const interes = this.saldo * 0.02; // Interés del 2%
        this.saldo += interes;
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }
}


function crearAhorro() {
    const numeroCuenta = document.getElementById("numeroCuentaAhorro").value;
    const saldoInicial = parseFloat(document.getElementById("saldoInicialAhorro").value);

    const nuevaCuenta = new CuentaAhorros(numeroCuenta, saldoInicial);
    cuentas.push(nuevaCuenta);
    actualizarOpcionesCuentas();
}

function crearCorriente() {
    const numeroCuenta = document.getElementById("numeroCuentaCorriente").value;
    const saldoInicial = parseFloat(document.getElementById("saldoInicialCorriente").value);

    const nuevaCuenta = new CuentaCorriente(numeroCuenta, saldoInicial);
    cuentas.push(nuevaCuenta);
    actualizarOpcionesCuentas();
}

function listarCuentas() {
    const listaCuentas = document.getElementById('listaCuentas');
    listaCuentas.innerHTML = ''; 

    cuentas.forEach(cuenta => {
        const cuentaElemento = document.createElement('li');
        cuentaElemento.classList.add("bg-white", "p-2", "rounded", "shadow", "border", "text-center");

        cuentaElemento.innerHTML = `
            <strong>Número de Cuenta:</strong> ${cuenta.numeroCuenta} <br>
            <strong>Saldo:</strong> $${cuenta.saldo.toFixed(2)}
        `;

        // Agregar el elemento a la lista
        listaCuentas.appendChild(cuentaElemento);
    });
}

function retirar() {
    const numeroCuenta = document.querySelector("#cuentaRetiro").value;
    const cantidad = parseFloat(document.querySelector("#cantidadRetiro").value);

    const cuenta = cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    if (cuenta) {
        cuenta.retirar(cantidad);
        listarCuentas();
    }
}

function depositar() {
    const numeroCuenta = document.querySelector("#cuentaDeposito").value;
    const cantidad = parseFloat(document.querySelector("#cantidadDeposito").value);

    const cuenta = cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    if (cuenta) {
        cuenta.depositar(cantidad);
        listarCuentas();
    }
}

function actualizarOpcionesCuentas() {
    const opcionesRetiro = document.querySelector("#cuentaRetiro");
    const opcionesDeposito = document.querySelector("#cuentaDeposito");

    opcionesRetiro.innerHTML = "<option value=''>-- Selecciona una cuenta --</option>";
    opcionesDeposito.innerHTML = "<option value=''>-- Selecciona una cuenta --</option>";

    cuentas.forEach(cuenta => {
        const opcionRetiro = document.createElement("option");
        opcionRetiro.value = cuenta.numeroCuenta;
        opcionRetiro.textContent = `Cuenta ${cuenta.numeroCuenta}`;

        const opcionDeposito = opcionRetiro.cloneNode(true);

        opcionesRetiro.appendChild(opcionRetiro);
        opcionesDeposito.appendChild(opcionDeposito);
    });
}
