document.querySelector('#devolverLibroForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email_cliente = document.querySelector('#email_cliente').value;
  
    try {
      const response = await fetch(`http://localhost:3002/libros-cliente/${email_cliente}`);
      if (!response.ok) {
        throw new Error('Error al obtener los libros del cliente');
      }
  
      const { id_cliente, libros } = await response.json();
  
      // Redirige a la segunda página con datos del cliente
      window.location.href = `devolver_libro2.html?id_cliente=${id_cliente}`;
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      alert('No se pudo obtener la información del cliente');
    }
  });
  