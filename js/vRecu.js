const iniciar = document.getElementById('iniciar');
const emailInput = document.getElementById('email');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|org|net)$/;

function validateForm() {
    const emailValido = emailInput.value.trim().length > 0;

    iniciar.disabled = !emailValido;

    if (emailValido) {
        iniciar.classList.add('habilitar');
    } else {
        iniciar.classList.remove('habilitar');
    }
}

emailInput.addEventListener('input', validateForm);

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!emailRegex.test(emailInput.value)) {
        alert('Email no válido. Debe contener un @ y terminar en .com, .org o .net');
    } else {
        alert('Formulario válido');
    }
});