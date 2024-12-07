document.addEventListener('DOMContentLoaded', () => {
    const totalClientesElement = document.querySelector('#totalClientes');

    // URL del endpoint para obtener el conteo de clientes
    const apiUrl = 'http://localhost:3002/cant_clientes';

    // Función para obtener y mostrar el conteo de clientes
    const cargarTotalClientes = async () => {
        try {
            const response = await fetch(apiUrl);

            // Verifica si la respuesta es correcta
            if (!response.ok) {
                throw new Error('Error al obtener el total de clientes');
            }

            const data = await response.json();

            // Actualiza el contenido en el HTML
            totalClientesElement.textContent = data.total_clientes;
        } catch (error) {
            console.error('Error al cargar el total de clientes:', error);
            totalClientesElement.textContent = 'Error';
        }
    };

    // Carga el conteo de clientes al cargar la página
    cargarTotalClientes();
});
