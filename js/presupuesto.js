// Variables globales
let elementosPresupuesto = ['producto', 'plazo', 'extra1', 'extra2', 'extra3'];

// Evento cuando el DOM está cargado 
document.addEventListener('DOMContentLoaded', function() {
    // Configurar evento para validación en tiempo real
    document.getElementById('nombre').addEventListener('input', validarNombre);
    document.getElementById('apellidos').addEventListener('input', validarApellidos);
    document.getElementById('telefono').addEventListener('input', validarTelefono);
    document.getElementById('email').addEventListener('input', validarEmail);

    // Configurar eventos para calcular presupuesto
    elementosPresupuesto.forEach(function(id) {
        document.getElementById(id).addEventListener('change', calcularPresupuesto);
        document.getElementById(id).addEventListener('input', calcularPresupuesto);
    });

    // Calcular presupuesto inicial
    calcularPresupuesto();
});

// Función de validación
function validarNombre() {
    let nombre = document.getElementById('nombre').value;
    let error = document.getElementById('nombreError');

    if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(nombre)) {
        error.textContent = "El nombre solo puede contener letras.";
        return false;
    } else if (nombre.length > 15) {
        error.textContent = "El nombre no puede exceder los 15 caracteres.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarApellidos() {
    let apellidos = document.getElementById('apellidos').value;
    let error = document.getElementById('apellidosError');

    if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(apellidos)) {
        error.textContent = "Los apellidos solo pueden contenr letras.";
        return false;
    } else if (apellidos.length > 40) {
        error.textContent = "Los apellidos no pueden exceder los 40 caracteres";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarTelefono() {
    let telefono = document.getElementById('telefono').value;
    let error = document.getElementById('telefonoError');

    if(!/^\d+$/.test(telefono)) {
        error.textContent = "El telefono solo puede contener números.";
        return false;
    } else if (telefono.length > 9) {
        error.textContent = "El telefono no puede exceder los 9 dígitos.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarEmail() {
    let email = document.getElementById('email').value;
    let error = document.getElementById('emailError');

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "Por favor, introdce un correo electrónico válido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Función para calcular el presupesto 
function calcularPresupuesto() {
    let producto = parseFloat(document.getElementById('producto').value) || 0;
    let plazo = parseInt(document.getElementById('plazo').value) || 0;

    // Calcular extras
    let extras = 0;
    document.querySelectorAll('input[name="extras"]:checked').forEach(function(extra) {
        extras += parseFloat(extra.value);
    });

    // Aplicar descuento por plazo 
    let descuento = 0;
    if (plazo >= 30) {
        descuento = 0.1; // 10% de descuento para los 30 días o más 
    } else if (plazo >= 15) {
        descuento = 0.05;//5% de descuento para plazos de 15-29 días o más 
    } 

    let subtotal = producto + extras;
    let total = subtotal * (1 - descuento);

    //Mostrar el presupuesto 
    document.getElementById('presupuestoTotal').textContent = 
        `Presupuesto: ${total.toFixed(2)}€` + 
        (descuento > 0 ? `(incluye ${descuento*100}% de descuento por plazo)` : '');
}

//Función para validar todo el formulario antes de enviar
function validarFormulario() {
    let valido = true;

    if (!validarNombre()) valido = false;
    if (!validarApellidos()) valido = false;
    if (!validarTelefono()) valido = false;
    if ( validarEmail()) valido = false;

    if (!document.getElementById('condiciones').checked) {
        alert("Debes aceptar las condiciones de privacidad.");
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente. Presupuesto generado.");
        // Aquí normalmente haríamos una llamada AJAX o similar para enviar los datos al servidor
        return true;
    } else {
        alert("Por favor, corrige los errores en el formulario.");
        return false;
    }
}


