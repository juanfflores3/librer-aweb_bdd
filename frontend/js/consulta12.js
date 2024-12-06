document.addEventListener('DOMContentLoaded', () => {
    const tablaClientes = document.querySelector('#dataTable tbody');

    // Realiza una solicitud al backend
    fetch('http://localhost:3002/12')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }
            return response.json();
        })
        .then((data) => {
            // Limpia la tabla antes de llenarla
            tablaClientes.innerHTML = '';

            if (!data || data.length === 0) {
                const fila = document.createElement('tr');
                fila.innerHTML = '<td colspan="2">No hay datos disponibles</td>';
                tablaClientes.appendChild(fila);
                return;
            }

            // Itera sobre los datos y crea las filas dinámicamente
            data.forEach((item) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${item.Proveedor}</td>
                    <td>${item.Libros_Suministrados}</td>
                `;
                tablaClientes.appendChild(fila);
            });
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);

            // Muestra un mensaje de error en la tabla
            tablaClientes.innerHTML = `
                <tr>
                    <td colspan="2">Error al cargar los datos</td>
                </tr>
            `;
        });
});