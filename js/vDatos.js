document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');
    const email = document.getElementById('email_secundario'); 
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const tipo = document.getElementById('tipo');
    const numero = document.getElementById('doc');
    const fechaNacimiento = document.getElementById('fecha_nacimiento');
    const telefono = document.getElementById('telefono');
    const guardarBtn = document.getElementById('guardarBtn');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
    const nombreApellidoRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ' -]+$/;

    function validateForm() {
        const emailValido = emailRegex.test(email.value);
        const nombreValido = nombreApellidoRegex.test(nombre.value);
        const apellidoValido = nombreApellidoRegex.test(apellido.value);
        const tipoValido =  tipo.value === 'DNI' || tipo.value === 'CI' || tipo.value === 'PASAPORTE';
        const numeroValido = numero.value !== '' && !isNaN(numero.value);
        const fechaValida = fechaNacimiento.value && new Date().getFullYear() - new Date(fechaNacimiento.value).getFullYear() >= 16;
        const telefonoValido = /^[0-9()+-]+$/.test(telefono.value); 

        // Se habilita el botón solo si todos los campos son válidos
        const allValid = emailValido && nombreValido && apellidoValido && tipoValido && numeroValido && fechaValida && telefonoValido;
        
        guardarBtn.disabled = !allValid; // Habilita o deshabilita el botón
    }

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (guardarBtn.disabled) {
            alert('Por favor, completa todos los campos obligatorios correctamente.');
        } else {
            alert('Formulario enviado exitosamente.');
        }
    });
});