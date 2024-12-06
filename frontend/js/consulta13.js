// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const tablaLibros = document.querySelector('#dataTable tbody');

    // Realiza una solicitud al backend
    fetch('http://localhost:3002/13')
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
                fila.innerHTML = '<td colspan="2">No hay datos disponibles</td>';
                tablaLibros.appendChild(fila);
                return;
            }

            // Itera sobre los datos y crea las filas dinámicamente
            data.forEach((item) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${item.Sucursal}</td>
                    <td>${item.Sueldo_Promedio}</td>
                `;
                tablaLibros.appendChild(fila);
            });
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);

            // Muestra un mensaje de error en la tabla
            tablaLibros.innerHTML = `
                <tr>
                    <td colspan="2">Error al cargar los datos</td>
                </tr>
            `;
        });
});
