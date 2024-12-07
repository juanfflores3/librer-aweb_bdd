document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('actualizarMembresiaForm');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
      // Obtener los datos del formulario
      const email_cliente = document.getElementById('email_cliente').value.trim();
      const tipo = document.getElementById('tipo').value;
  
      if (!email_cliente || !tipo) {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      // Crear el objeto de datos para enviar
      const data = { email_cliente, tipo };
  
      try {
        // Enviar los datos al backend
        const response = await fetch('http://localhost:3002/actualizar_membresia', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        // Manejar la respuesta del servidor
        if (response.ok) {
          const result = await response.json();
          alert(result.message); // Mostrar mensaje de éxito
  
          // Vaciar el formulario
          form.reset();
  
          // Mantener al usuario en la misma página
          return;
        } else {
          const error = await response.json();
          alert(`Error: ${error.error}`); // Mostrar mensaje de error
        }
      } catch (err) {
        console.error('Error al enviar los datos:', err);
        alert('Error al conectar con el servidor');
      }
    });
  });
  