document.addEventListener('DOMContentLoaded', async () => {
    const tipoSelect = document.getElementById('tipo');
  
    try {
      // Realizar la solicitud al backend para obtener las membresías
      const response = await fetch('http://localhost:3002/membresias');
      if (!response.ok) {
        throw new Error('Error al obtener las membresías');
      }
  
      const membresias = await response.json();
  
      // Poblar el select con las opciones de membresía
      membresias.forEach((membresia) => {
        const option = document.createElement('option');
        option.value = membresia.tipo;
        option.textContent = membresia.tipo;
        tipoSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error al cargar las membresías:', error);
      // Mostrar un mensaje de error en caso de fallo
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Error al cargar las opciones';
      tipoSelect.appendChild(option);
      tipoSelect.disabled = true;
    }
  });
  