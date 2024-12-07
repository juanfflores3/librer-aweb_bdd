document.addEventListener('DOMContentLoaded', async () => {
    const tablaLibros = document.querySelector('#dataTable tbody'); // Seleccionar el cuerpo de la tabla
  
    try {
      // Hacer una solicitud al backend
      const response = await fetch('http://localhost:3002/ver_libros');
  
      // Verificar si la respuesta es correcta
      if (!response.ok) {
        throw new Error('Error al obtener los libros');
      }
  
      const libros = await response.json();
  
      // Limpiar la tabla antes de llenarla
      tablaLibros.innerHTML = '';
  
      // Verificar si hay datos
      if (libros.length === 0) {
        const fila = document.createElement('tr');
        fila.innerHTML = '<td colspan="6">No hay libros disponibles</td>';
        tablaLibros.appendChild(fila);
        return;
      }
  
      // Iterar sobre los libros y crear filas en la tabla
      libros.forEach((libro) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${libro.titulo_libro}</td>
          <td>${libro.numero_paginas}</td>
          <td>${libro.genero}</td>
          <td>${libro.categoria}</td>
          <td>${libro.ano_publicacion}</td>
          <td>${libro.id_editorial}</td> <!-- Cambiar si necesitas mostrar el nombre de la editorial -->
        `;
        tablaLibros.appendChild(fila);
      });
    } catch (error) {
      console.error('Error al cargar los libros:', error);
      const fila = document.createElement('tr');
      fila.innerHTML = '<td colspan="6">Error al cargar los datos</td>';
      tablaLibros.appendChild(fila);
    }
  });
  