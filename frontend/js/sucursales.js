document.addEventListener('DOMContentLoaded', () => {
    const selectSucursales = document.querySelector('#nombre_sucursal');

    // URL del endpoint para obtener las sucursales
    const apiUrl = 'http://localhost:3002/sucursales';

    // Función para cargar los nombres de las sucursales
    const cargarSucursales = async () => {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            const sucursales = await response.json();

            // Limpia el select antes de llenarlo
            selectSucursales.innerHTML = '';

            // Agrega las opciones de las sucursales al select
            sucursales.forEach(sucursal => {
                const option = document.createElement('option');
                option.value = sucursal.nombre_sucursal;
                option.textContent = sucursal.nombre_sucursal;
                selectSucursales.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar las sucursales:', error);
            selectSucursales.innerHTML = '<option value="">Error al cargar sucursales</option>';
        }
    };

    // Carga las sucursales al iniciar la página
    cargarSucursales();
});
