// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const tablaVentas = document.querySelector('#dataTable tbody');

    // Realiza una solicitud al backend
    fetch('http://localhost:3002/7')
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) {
          const fila = document.createElement('tr');
          fila.innerHTML = '<td colspan="2">No hay datos disponibles</td>';
          tablaVentas.appendChild(fila);
          return;
        }

        // Procesar y mostrar los datos en la tabla
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${data.titulo_libro}</td>
          <td>${data.total_devolucion}</td>
        `
        ;
        tablaVentas.appendChild(fila);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        const fila = document.createElement('tr');
        fila.innerHTML = '<td colspan="2">Error al cargar los datos</td>';
        tablaVentas.appendChild(fila);
      });
  });