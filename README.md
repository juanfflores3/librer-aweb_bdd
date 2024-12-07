# libreria_bdd_web

Este proyecto tiene como finalidad demostrar el funcionamiento de una base de datos para una libreria llamada "Read is Wisdom",

## Estructura del Proyecto

- `backend/`: Contiene el código del servidor backend.
- `bdd_info/`: Contiene scripts SQL para la base de datos.
- `frontend/`: Contiene el código del frontend.
- `help/`: Archivos de ayuda y documentación.
- `init-scripts/`: Scripts de inicialización.
- `docker-compose.yml`: Archivo de configuración de Docker Compose.
- `README.md`: Este archivo.

## Requisitos

- Docker
- Node.js
- npm

## Instalación

1. Clonar el repositorio:
    ```sh
    git clone git@github.com:juanfflores3/libreria_bdd_web.git
    cd libreria_bdd_web
    ```

2. Instalar dependencias del backend:
   ```sh
    cd backend
    npm install
    ```

3. Configurar la base de datos
   - Asegúrate de tener Docker instalado y corriendo.
   - Ejecuta el siguiente comando para iniciar los servicios (asegurate de encontrate en la carpeta raiz)
   ```sh
        cd ..
        docker-compose up -d
    ```
4. Verificar que la base de datos se haya importado correctamente:
   - ```sh
     docker exec -it mysql_container mysql -u root -p
     ```
    Este también te permitirá verificar cualquier modificación a una de las tablas.

## Uso

1. Iniciar el servidor backend:
   ```sh
    cd backend
    node server.js
    ```

2. Abrir el frontend:
   - Abre tu navegador y navega a `http://localhost:3000/frontend/vistas/cliente/indexCli.html` o `http://127.0.0.1:3000/frontend/vistas/cliente/indexCli.html` para acceder a la interfaz de la aplicación

## Scripts
- ´backend/config/db.js´
- ´Libreria_RIW.sql´

