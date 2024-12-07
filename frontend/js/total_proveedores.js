document.addEventListener('DOMContentLoaded', () => {
    const totalProveedoresElement = document.querySelector('#totalProveedores');

    const apiUrl = 'http://localhost:3002/cant_proveedores';

    const cargarTotalProveedores = async () => {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error al obtener el total de proveedores');
            }

            const data = await response.json();

            totalProveedoresElement.textContent = data.total_proveedores;
        } catch (error) {
            console.error('Error al cargar el total de proveedores:', error);
            totalProveedoresElement.textContent = 'Error';
        }
    };

    cargarTotalProveedores();
});