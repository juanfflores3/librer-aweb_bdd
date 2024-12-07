document.addEventListener('DOMContentLoaded', () => {
    const totalLibrosElement = document.querySelector('#totalLibros');

    const apiUrl = 'http://localhost:3002/cant_libros';

    const cargarTotalLibros = async () => {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error al obtener el total de libros');
            }

            const data = await response.json();

            totalLibrosElement.textContent = data.total_libros;
        } catch (error) {
            console.error('Error al cargar el total de libros:', error);
            totalLibrosElement.textContent = 'Error';
        }
    };

    cargarTotalLibros();
});