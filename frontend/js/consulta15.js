// Espera a que el DOM estÃ© completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const tablaBeneficios = document.querySelector('#dataTable tbody');
  
    // Realiza una solicitud al backend
    fetch('http://localhost:3002/15')
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) {
          const fila = document.createElement('tr');
          fila.innerHTML = '<td colspan="2">No hay datos disponibles</td>';
          tablaBeneficios.appendChild(fila);
          return;
        }
  
        // Procesar y mostrar los datos en la tabla
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${data.Tipo_Membresia}</td>
          <td>${data.Beneficios}</td>
        `;
        tablaBeneficios.appendChild(fila);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        const fila = document.createElement('tr');
        fila.innerHTML = '<td colspan="2">Error al cargar los datos</td>';
        tablaBeneficios.appendChild(fila);
      });
  });