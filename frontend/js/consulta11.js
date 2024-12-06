document.addEventListener('DOMContentLoaded', () => {
    const tablaProductos = document.querySelector('#dataTable tbody');

    // Realiza una solicitud al backend
    fetch('http://localhost:3002/11')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }
            return response.json();
        })
        .then((data) => {
            // Limpia la tabla antes de llenarla
            tablaProductos.innerHTML = '';

            if (!data || data.length === 0) {
                const fila = document.createElement('tr');
                fila.innerHTML = '<td colspan="2">No hay datos disponibles</td>';
                tablaProductos.appendChild(fila);
                return;
            }

            // Itera sobre los datos y crea las filas dinámicamente
            data.forEach((item) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${item.Proveedor}</td>
                    <td>${item.Libros_Suministrados}</td>
                `;
                tablaProductos.appendChild(fila);
            });
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);

            // Muestra un mensaje de error en la tabla
            tablaProductos.innerHTML = `
                <tr>
                    <td colspan="2">Error al cargar los datos</td>
                </tr>
            `;
        });
});