const express = require('express');
const router = express.Router();
const pool = require('../config/db');


///////////////
// Consultas //
///////////////

// 1. ¿Cuál es el libro más vendido en la tienda física?
router.get('/1', async (req, res) => {
  try {
    const [results] = await pool.query(`
        SELECT p.titulo_libro, COUNT(*) AS total_ventas
        FROM Pedido p
        GROUP BY p.titulo_libro
        ORDER BY total_ventas DESC;
      `);
      res.json(results[0]);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 2. ¿Cuál es la fecha donde ha habido más ventas?
router.get('/2', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT p.fecha_compra, COUNT(*) AS total_ventas
      FROM Pedido p
      GROUP BY p.fecha_compra
      ORDER BY total_ventas DESC
      LIMIT 1;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 3. ¿Cuántos libros tenemos de cada autor?
router.get('/3', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT a.nombre AS Autor, l.titulo_libro AS Libro, SUM(i.stock) AS stock
      FROM Autor a            
      JOIN Escribe e ON e.id_autor = a.id_autor           
      JOIN Libro l ON l.titulo_libro = e.titulo_libro
      JOIN Inventario i ON i.titulo_libro = l.titulo_libro
      GROUP BY a.nombre, l.titulo_libro
      ORDER BY stock DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 4. ¿Cuáles son las sucursales que poseen más libros?
router.get('/4', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT s.nombre AS Sucursal, SUM(i.stock) AS stock
      FROM Sucursal s
      JOIN Inventario i ON i.id_sucursal = s.id_sucursal
      GROUP BY s.nombre
      ORDER BY stock DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 5. ¿Cuál es el genero más comprado en la comuna de "Santiago"?
router.get('/5', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT l.genero AS Genero
      FROM Libro l
      JOIN Pedido p ON p.titulo_libro = l.titulo_libro
      JOIN Cliente c ON c.id_cliente = p.id_cliente
      WHERE c.comuna = 'Santiago'
      GROUP BY l.genero
      ORDER BY COUNT(*) DESC
      LIMIT 1;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 6. ¿Cuáles son los géneros de libro más comprado?
router.get('/6', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT l.genero AS Genero, COUNT(*) AS total_compras
      FROM Libro l
      JOIN Pedido p ON p.titulo_libro = l.titulo_libro
      GROUP BY l.genero
      ORDER BY total_compras DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 7. ¿Cuales son los libros que más se ha devuelto?
router.get('/7', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT d.titulo_libro, COUNT(*) AS total_devolucion
      FROM Devolucion d
      GROUP BY d.titulo_libro
      ORDER BY total_devolucion DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 8. ¿Cuáles son los países que poseen más autores?
router.get('/8', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT a.pais_origen AS Pais_Autor, COUNT(*) AS cantidad_autores
      FROM Autor a
      GROUP BY a.pais_origen
      ORDER BY cantidad_autores DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 9. ¿Qué libros se han enviado más con envío?
router.get('/9', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT titulo_libro, COUNT(*) AS total_enviado
      FROM Envio
      GROUP BY titulo_libro
      ORDER BY total_enviado DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 10. ¿Cuál es el cliente que más ha comprado?
router.get('/10', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT c.nombre, COUNT(*) AS total_compras
      FROM Cliente c
      JOIN Pedido p ON p.id_cliente = c.id_cliente
      GROUP BY c.nombre
      ORDER BY total_compras DESC
      LIMIT 1;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 11. ¿Cuántos libros ha suministrado cada proveedor?
router.get('/11', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT p.nombre AS Proveedor, COUNT(s.titulo_libro) AS Libros_Suministrados
      FROM Proveedor p
      JOIN Suministra s ON p.id_proveedor = s.id_proveedor
      GROUP BY p.nombre
      ORDER BY Libros_Suministrados DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 12. ¿Cuál es la cantidad de libros suministrados por los proveedores entre Noviembre y Diciembre del 2024?
router.get('/12', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT p.nombre AS Proveedor, COUNT(s.titulo_libro) AS Libros_Suministrados
      FROM Proveedor p
      JOIN Suministra s ON p.id_proveedor = s.id_proveedor
      WHERE s.fecha_suministro BETWEEN '2024-11-01' AND '2024-12-31'
      GROUP BY p.nombre
      ORDER BY Libros_Suministrados DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 13. ¿Cuál es el sueldo promedio de los empleados en cada sucursal?
router.get('/13', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT s.nombre AS Sucursal, AVG(e.sueldo) AS Sueldo_Promedio
      FROM Sucursal s
      JOIN Empleado e ON s.id_sucursal = e.id_sucursal
      GROUP BY s.nombre
      ORDER BY Sueldo_Promedio DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 14. ¿Cuántos clientes tienen membresías activas por tipo?
router.get('/14', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT m.tipo AS Tipo_Membresia, COUNT(c.id_cliente) AS Total_Clientes
      FROM Membresia m
      JOIN Cliente c ON m.id_membresia = c.id_membresia
      GROUP BY m.tipo
      ORDER BY Total_Clientes DESC;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 15. ¿Qué beneficios tienen los clientes con una membresía Estandar?
router.get('/15', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT m.tipo AS Tipo_Membresia, m.beneficios AS Beneficios
      FROM Membresia m
      WHERE m.tipo = 'Estandar';
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
/////////////////////////////////////////////////////
// Recuperación de datos ////////////////////////////
/////////////////////////////////////////////////////
// Filtrar libros por categoría
router.get('/filtrar-libros', async (req, res) => {
  const { categoria } = req.query;

  try {
    const [results] = await pool.query(
      `
      SELECT l.titulo_libro, l.numero_paginas, l.genero, l.categoria, l.ano_publicacion, e.nombre AS nombre_editorial
      FROM Libro l
      JOIN Editorial e ON l.id_editorial = e.id_editorial
      WHERE l.categoria = ?;
      `,
      [categoria]
    );
    res.json(results);
  } catch (error) {
    console.error('Error al filtrar los libros por categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener todas las categorías de los libros
router.get('/categorias', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT DISTINCT categoria FROM Libro;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener todos los libros con todos sus atributos
router.get('/ver_libros', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT * FROM Libro;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 1. Obtener todos los titulos de los libros
router.get('/libros', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT titulo_libro AS titulo FROM Libro;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 2. Obtener todos los nombres de las sucursales
router.get('/sucursales', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT nombre AS nombre_sucursal FROM Sucursal;
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al obtener las sucursales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 3. Obtener todos el conteo de Clientes en la tabla Ciente
router.get('/cant_clientes', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT COUNT(*) AS total_clientes FROM Cliente;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 4. Obtener la cantidad de libros que vendemos
router.get('/cant_libros', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT COUNT(*) AS total_libros FROM Libro;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 5. Obtener la cantidad de empleados que tenemos entre todas las sucursales
router.get('/cant_empleados', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT COUNT(*) AS total_empleados FROM Empleado;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al obtener los empleados:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 6. Obtener la cantidad de proveedores que tenemos
router.get('/cant_proveedores', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT COUNT(*) AS total_proveedores FROM Proveedor;
    `);
    res.json(results[0]);
  } catch (error) {
    console.error('Error al obtener los proveedores:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 7. Obtener los libros que ha comprado un cliente
router.get('/libros-cliente/:email', async (req, res) => {
  const { email } = req.params;

  try {
    // Obtener el id_cliente a partir del email
    const [cliente] = await pool.query(
      `SELECT id_cliente FROM Cliente WHERE email = ?`,
      [email]
    );

    if (cliente.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const id_cliente = cliente[0].id_cliente;

    // Obtener los títulos de libros asociados al cliente
    const [libros] = await pool.query(
      `SELECT p.titulo_libro 
       FROM Pedido p
       WHERE p.id_cliente = ?`,
      [id_cliente]
    );

    res.json({ id_cliente, libros });
  } catch (error) {
    console.error('Error al obtener los libros del cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

  // Obrener las membresias disponibles para asignar a un cliente
  router.get('/membresias', async (req, res) => {
    try {
      const [results] = await pool.query('SELECT tipo FROM Membresia');
      res.json(results);
    } catch (error) {
      console.error('Error al obtener las membresías:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });



/////////////////////////////////////////////////////
// Inserción, eliminación y actualización de datos //
/////////////////////////////////////////////////////

// Devolución de un libro
router.post('/devolver-libro', async (req, res) => {
  const { email_cliente, titulo_libro, fecha_devolucion, motivo } = req.body;

  try {
    const [cliente] = await pool.query(
      `SELECT id_cliente FROM Cliente WHERE email = ?`,
      [email_cliente]
    );

    if (cliente.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const id_cliente = cliente[0].id_cliente;

    // Insertar en la tabla Devolucion
    await pool.query(
      `INSERT INTO Devolucion (id_cliente, titulo_libro, fecha_devolucion, motivo)
       VALUES (?, ?, ?, ?)`,
      [id_cliente, titulo_libro, fecha_devolucion, motivo]
    );

    // Eliminar el libro de la tabla Pedido
    await pool.query(
      `DELETE FROM Pedido WHERE id_cliente = ? AND titulo_libro = ?`,
      [id_cliente, titulo_libro]
    );

    res.status(200).json({ message: 'Devolución procesada exitosamente' });
  } catch (error) {
    console.error('Error al procesar la devolución:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/crear_pedido', async (req, res) => {
  const { email_cliente, titulo_libro, fecha_compra } = req.body;

  try {
    // Obtener el id_cliente a partir del email del cliente
    const [cliente] = await pool.query(
      `SELECT id_cliente FROM Cliente WHERE email = ?`, 
      [email_cliente]
    );

    if (cliente.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const id_cliente = cliente[0].id_cliente;

    // Insertar el pedido en la tabla Pedido
    await pool.query(
      `INSERT INTO Pedido (id_cliente, titulo_libro, fecha_compra) VALUES (?, ?, ?)`,
      [id_cliente, titulo_libro, fecha_compra]
    );

    res.status(200).json({ message: 'Pedido creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/crear_envio', async (req, res) => {
  const { email_cliente, titulo_libro, nombre_sucursal, direccion, cantidad, fecha_enviado } = req.body;

  try {
      // 1. Obtener el id_cliente a partir del email
      const [cliente] = await pool.query(
          `SELECT id_cliente FROM Cliente WHERE email = ?`,
          [email_cliente]
      );

      if (cliente.length === 0) {
          return res.status(404).json({ error: 'Cliente no encontrado' });
      }

      const id_cliente = cliente[0].id_cliente;

      const [sucursal] = await pool.query(
        `SELECT id_sucursal FROM Sucursal WHERE nombre = ?`,
        [nombre_sucursal]
      );

      const id_sucursal = sucursal[0].id_sucursal;

      // 2. Insertar el envío en la tabla Envio
      await pool.query(
          `INSERT INTO Envio (id_cliente, id_sucursal, titulo_libro, direccion, cantidad, fecha_enviado)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [id_cliente, id_sucursal, titulo_libro, direccion, cantidad, fecha_enviado]
      );

      // 3. Actualizar el stock en la tabla Inventario
      await pool.query(
          `UPDATE Inventario SET stock = stock - ? WHERE id_sucursal = ? AND titulo_libro = ?`,
          [cantidad, id_sucursal, titulo_libro]
      );

      res.status(200).json({ message: 'Compra realizada exitosamente y stock actualizado' });
  } catch (error) {
      console.error('Error al realizar la compra:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});


router.post('/devolucion-libro', async (req, res) => {
  const { email, titulo_libro, fecha_devolucion, motivo } = req.body;

  try {
    // 1. Obtener el ID del cliente a partir del email
    const [cliente] = await pool.query(
      `SELECT id_cliente FROM Cliente WHERE email = ?`,
      [email]
    );

    if (cliente.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const id_cliente = cliente[0].id_cliente;

    // 2. Insertar en la tabla Devolucion
    await pool.query(
      `INSERT INTO Devolucion (id_cliente, titulo_libro, fecha_devolucion, motivo) 
       VALUES (?, ?, ?, ?)`,
      [id_cliente, titulo_libro, fecha_devolucion, motivo]
    );

    res.json({ message: 'Devolución registrada correctamente' });
  } catch (error) {
    console.error('Error al realizar la devolución:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

  // Obtener todos los autores
router.get('/autores', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT id_autor, nombre, pais_origen
      FROM Autor
    `);
    res.json(results);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


router.post('/devolucion_libro', async (req, res) => {
  const { email_cliente, titulo_libro, fecha_devolucion, motivo } = req.body;

  try {
      // 1. Obtener el ID del cliente a partir del email
      const [cliente] = await connection.query(
          `SELECT id_cliente FROM Cliente WHERE email = ?`,
          [email_cliente]
      );

      if (cliente.length === 0) {
          return res.status(404).json({ error: 'Cliente no encontrado' });
      }

      const id_cliente = cliente[0].id_cliente;

      // 2. Insertar en la tabla Devolucion
      await connection.query(
          `INSERT INTO Devolucion (id_cliente, titulo_libro, fecha_devolucion, motivo) 
           VALUES (?, ?, ?, ?)`,
          [id_cliente, titulo_libro, fecha_devolucion, motivo]
      );

      res.status(200).json({ message: 'Devolución registrada correctamente' });
  } catch (error) {
      console.error('Error al registrar la devolución:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/actualizar_membresia', async (req, res) => {
  const { email_cliente, tipo } = req.body;

  try {
    // 1. Obtener el ID de la membresía a partir del tipo proporcionado
    const [membresia] = await pool.query(
      `SELECT id_membresia FROM Membresia WHERE tipo = ?`,
      [tipo]
    );

    if (membresia.length === 0) {
      return res.status(404).json({ error: 'Tipo de membresía no encontrado' });
    }

    const id_membresia = membresia[0].id_membresia;

    // 2. Obtener el ID del cliente a partir del email proporcionado
    const [cliente] = await pool.query(
      `SELECT id_cliente FROM Cliente WHERE email = ?`,
      [email_cliente]
    );

    if (cliente.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const id_cliente = cliente[0].id_cliente;

    // 3. Actualizar la membresía del cliente en la tabla Cliente
    await pool.query(
      `UPDATE Cliente SET id_membresia = ? WHERE id_cliente = ?`,
      [id_membresia, id_cliente]
    );

    res.status(200).json({ message: 'Membresía actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la membresía:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;