document.querySelector('#filtroForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const categoria = document.querySelector('#categoria').value;
    const tablaLibros = document.querySelector('#dataTable tbody');
  
    try {
      // Solicitar los libros filtrados por categoría
      const response = await fetch(`http://localhost:3002/filtrar-libros?categoria=${encodeURIComponent(categoria)}`);
      if (!response.ok) {
        throw new Error('Error al filtrar los libros');
      }
  
      const libros = await response.json();
  
      // Limpiar la tabla antes de llenarla con los libros filtrados
      tablaLibros.innerHTML = '';
  
      if (libros.length === 0) {
        const fila = document.createElement('tr');
        fila.innerHTML = '<td colspan="6">No hay libros disponibles en esta categoría</td>';
        tablaLibros.appendChild(fila);
        return;
      }
  
      // Llenar la tabla con los libros filtrados
      libros.forEach((libro) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${libro.titulo_libro}</td>
          <td>${libro.numero_paginas}</td>
          <td>${libro.genero}</td>
          <td>${libro.categoria}</td>
          <td>${libro.ano_publicacion}</td>
          <td>${libro.nombre_editorial}</td>
        `;
        tablaLibros.appendChild(fila);
      });
    } catch (error) {
      console.error('Error al filtrar los libros:', error);
      tablaLibros.innerHTML = '<tr><td colspan="6">Error al cargar los datos</td></tr>';
    }
  });
  