// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const selectLibros = document.querySelector('#titulo_libro');

    // URL del endpoint para obtener los libros
    const apiUrl = 'http://localhost:3002/libros';

    // Función para cargar los títulos de los libros
    const cargarLibros = async () => {
        try {
            const response = await fetch(apiUrl);

            // Verifica si la respuesta es correcta
            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            const libros = await response.json();

            // Limpia el select antes de llenarlo
            selectLibros.innerHTML = '';

            // Agrega las opciones de los libros al select
            libros.forEach(libro => {
                const option = document.createElement('option');
                option.value = libro.titulo;
                option.textContent = libro.titulo;
                selectLibros.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar los libros:', error);
            selectLibros.innerHTML = '<option value="">Error al cargar libros</option>';
        }
    };

    // Carga los libros al iniciar la página
    cargarLibros();
});
