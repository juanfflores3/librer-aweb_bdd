// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#crearPedidoForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Obtiene los datos del formulario
        const email_cliente = document.querySelector('#email_cliente').value;
        const titulo_libro = document.querySelector('#titulo_libro').value;
        const fecha_compra = document.querySelector('#fecha_compra').value;

        try {
            // Envía los datos al servidor
            const response = await fetch('http://localhost:3002/crear_pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_cliente,
                    titulo_libro,
                    fecha_compra,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Pedido creado exitosamente');
                form.reset(); // Limpia el formulario
            } else {
                alert(result.error || 'Error al crear el pedido');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error al crear el pedido');
        }
    });
});
