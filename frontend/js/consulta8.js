// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const tablaLibros = document.querySelector('#dataTable tbody');

    // URL del endpoint en el backend
    const apiUrl = 'http://localhost:3002/8';

    // Función para cargar los datos desde el backend
    const cargarDatos = async () => {
        try {
            const response = await fetch(apiUrl);

            // Verifica si la respuesta es correcta
            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            const data = await response.json();

            // Limpia la tabla antes de llenarla
            tablaLibros.innerHTML = '';

            // Verifica si hay datos disponibles
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
                    <td>${item.Pais_Autor}</td>
                    <td>${item.cantidad_autores}</td>
                `;
                tablaLibros.appendChild(fila);
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);

            // Muestra un mensaje de error en la tabla
            tablaLibros.innerHTML = `
                <tr>
                    <td colspan="2">Error al cargar los datos</td>
                </tr>
            `;
        }
    };

    // Carga los datos al iniciar la página
    cargarDatos();
});
