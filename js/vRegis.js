const passwordInput = document.getElementById("password");
const iniciar = document.getElementById("iniciar");
const emailInput = document.getElementById("email");

const passwordRegex =
  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|org|net)$/;

function validateForm() {
  const emailValido = emailInput.value.trim() !== "";
  const passwordValida = passwordInput.value.trim() !== "";

  if (emailValido && passwordValida) {
    iniciar.disabled = false;
    iniciar.classList.add('habilitar');
  } else {
    iniciar.disabled = true;
    iniciar.classList.remove('habilitar');
  }
}

document.addEventListener("DOMContentLoaded", validateForm);

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (
      !emailRegex.test(emailInput.value) &&
      !passwordRegex.test(passwordInput.value)
    ) {
      alert(
        "Email no válido. Debe contener un @ y terminar en .com, .org o .net\n\nContraseña no válida. Debe tener entre 8 y 12 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial de los siguientes: # ? ! % $"
      );
    } else if (!passwordRegex.test(passwordInput.value)) {
      alert(
        "Contraseña no válida. Debe tener entre 8 y 12 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial de los siguientes: # ? ! % $"
      );
    } else {
      alert("Formulario válido");
    }
  });

