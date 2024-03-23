  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('usernameForm');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que se envíe el formulario automáticamente
  
      const username = form.elements.username.value;
      checkAvailability(username);
    });
  
    function checkAvailability(username) {
      const xhr = new XMLHttpRequest();
      const url = `check_username.php?username=${encodeURIComponent(username)}`;
  
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            handleResponse(response);
          } else {
            resultDiv.textContent = 'Error al verificar disponibilidad.';
          }
        }
      };
  
      xhr.send();
    }
  
    function handleResponse(response) {
      if (response.available) {
        resultDiv.textContent = 'El nombre de usuario está disponible.';
      } else {
        resultDiv.textContent = 'El nombre de usuario no está disponible.';
  
        if (response.suggestions && response.suggestions.length > 0) {
          resultDiv.textContent += ' Sugerencias: ' + response.suggestions.join(', ');
        }
      }
    }
  });
  