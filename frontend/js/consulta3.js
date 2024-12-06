// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const tablaLibros = document.querySelector('#dataTable tbody');

    // Realiza una solicitud al backend
    fetch('http://localhost:3002/3')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }
            return response.json();
        })
        .then((data) => {
            // Limpia la tabla antes de llenarla
            tablaLibros.innerHTML = '';

            if (!data || data.length === 0) {
                const fila = document.createElement('tr');
                fila.innerHTML = '<td colspan="3">No hay datos disponibles</td>';
                tablaLibros.appendChild(fila);
                return;
            }

            // Itera sobre los datos y crea las filas dinámicamente
            data.forEach((item) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${item.Autor}</td>
                    <td>${item.Libro}</td>
                    <td>${item.stock}</td>
                `;
                tablaLibros.appendChild(fila);
            });
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);

            // Muestra un mensaje de error en la tabla
            tablaLibros.innerHTML = `
                <tr>
                    <td colspan="3">Error al cargar los datos</td>
                </tr>
            `;
        });
});
