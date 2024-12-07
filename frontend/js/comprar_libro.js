document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#comprarLibroForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Obtiene los datos del formulario
        const email_cliente = document.querySelector('#email_cliente').value;
        const titulo_libro = document.querySelector('#titulo_libro').value;
        const nombre_sucursal = document.querySelector('#nombre_sucursal').value;
        const direccion = document.querySelector('#direccion').value;
        const cantidad = document.querySelector('#cantidad').value;
        const fecha_enviado = document.querySelector('#fecha_enviado').value;

        try {
            // Envía los datos al servidor
            const response = await fetch('http://localhost:3002/crear_envio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_cliente,
                    titulo_libro,
                    nombre_sucursal,
                    direccion,
                    cantidad,
                    fecha_enviado,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Compra realizada exitosamente');
                form.reset(); // Limpia el formulario
            } else {
                alert(result.error || 'Error al realizar la compra');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error al realizar la compra');
        }
    });
});
