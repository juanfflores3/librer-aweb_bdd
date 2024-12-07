document.addEventListener('DOMContentLoaded', () => {
    const totalEmpleadosElement = document.querySelector('#totalEmpleados');

    const apiUrl = 'http://localhost:3002/cant_empleados';

    const cargarTotalEmpleados = async () => {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error al obtener el total de empleados');
            }

            const data = await response.json();

            totalEmpleadosElement.textContent = data.total_empleados;
        } catch (error) {
            console.error('Error al cargar el total de empleados:', error);
            totalEmpleadosElement.textContent = 'Error';
        }
    };

    cargarTotalEmpleados();
});