document.addEventListener('DOMContentLoaded', () => {
    const tablaAutores = document.querySelector('#dataTable tbody');

    // Realiza una solicitud al backend
    fetch('http://localhost:3002/autores')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }
            return response.json();
        })
        .then((data) => {
            // Limpia la tabla antes de llenarla
            tablaAutores.innerHTML = '';

            if (!data || data.length === 0) {
                const fila = document.createElement('tr');
                fila.innerHTML = '<td colspan="3">No hay datos disponibles</td>';
                tablaAutores.appendChild(fila);
                return;
            }

            // Itera sobre los datos y crea las filas dinámicamente
            data.forEach((item) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${item.id_autor}</td>
                    <td>${item.nombre}</td>
                    <td>${item.pais_origen}</td>
                `;
                tablaAutores.appendChild(fila);
            });
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);
            const fila = document.createElement('tr');
            fila.innerHTML = '<td colspan="3">Error al cargar los datos</td>';
            tablaAutores.appendChild(fila);
        });
});