document.addEventListener('DOMContentLoaded', async () => {
    const categoriaSelect = document.querySelector('#categoria');
  
    try {
      // Solicitar las categorías del backend
      const response = await fetch('http://localhost:3002/categorias');
      if (!response.ok) {
        throw new Error('Error al obtener las categorías');
      }
  
      const categorias = await response.json();
  
      // Llenar el select con las categorías
      categorias.forEach((cat) => {
        const option = document.createElement('option');
        option.value = cat.categoria;
        option.textContent = cat.categoria;
        categoriaSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error al cargar las categorías:', error);
    }
  });
  