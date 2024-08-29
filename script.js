document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos
  const checkBtn = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const resultDiv = document.getElementById("result");

  // Función para verificar si un texto es un palíndromo
  function esPalindromo(texto) {
    // Eliminar espacios, guiones bajos y convertir a minúsculas
    const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
    // Comprobar si el texto es igual al texto invertido
    return textoLimpio === textoLimpio.split('').reverse().join('');
  }

  // Añadir un event listener al botón de chequeo
  checkBtn.addEventListener("click", function () {
    // Obtener el valor del campo de entrada
    const inputValue = textInput.value.trim();

    // Comprobar si el campo de entrada está vacío
    if (inputValue === "") {
      // Mostrar una alerta si el campo de entrada está vacío
      alert("Please input a value");
    } else if (esPalindromo(inputValue)) {
      // Si es un palíndromo, mostrar el mensaje correspondiente
      resultDiv.textContent = `${inputValue} is a palindrome`;
      resultDiv.classList.remove("hidden");
    } else {
      // Si no es un palíndromo, mostrar el mensaje correspondiente
      resultDiv.textContent = `${inputValue} is not a palindrome`;
      resultDiv.classList.remove("hidden");
    }
  });
});