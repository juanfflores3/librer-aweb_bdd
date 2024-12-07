document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const email_cliente = params.get('email_cliente'); // Extrae el correo del cliente

  const tituloLibroSelect = document.querySelector('#titulo_libro');
  const form = document.querySelector('#devolverLibroForm'); // Referencia al formulario

  try {
    // Utiliza el correo del cliente en la solicitud
    const response = await fetch(`http://localhost:3002/libros-cliente/${email_cliente}`);
    if (!response.ok) {
      throw new Error('Error al obtener los libros del cliente');
    }

    const { libros } = await response.json();

    // Llenar el select con los libros
    libros.forEach((libro) => {
      const option = document.createElement('option');
      option.value = libro.titulo_libro;
      option.textContent = libro.titulo_libro;
      tituloLibroSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error al cargar los libros:', error);
    alert('No se pudieron cargar los libros del cliente');
  }

  // Manejar el envío del formulario de devolución
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const titulo_libro = tituloLibroSelect.value;
    const fecha_devolucion = document.querySelector('#fecha_devolucion').value;
    const motivo = document.querySelector('#motivo').value;

    try {
      const response = await fetch('http://localhost:3002/devolver-libro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_cliente, // Utiliza el correo en lugar del ID del cliente
          titulo_libro,
          fecha_devolucion,
          motivo,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar la devolución');
      }

      alert('Libro devuelto exitosamente');
      form.reset(); // Limpia el formulario
      window.location.href = 'devolver_libro1.html'; // Redirige a devolver_libro1.html
    } catch (error) {
      console.error('Error al procesar la devolución:', error);
      alert('No se pudo procesar la devolución');
    }
  });
});
