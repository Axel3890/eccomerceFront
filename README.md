## Frontend

Este proyecto fue desarrollado con Next.js utilizando React. La estructura del frontend se organiza de la siguiente manera dentro de la carpeta `src`:

### Carpeta `app`

Dentro de la carpeta `app` se encuentran diferentes subcarpetas:

- **productos**: Contiene todo lo relacionado con las vistas de los productos y su renderización.
- **dashboard**: Aquí se encuentran todos los componentes necesarios para gestionar productos.
- **api**: Carpeta donde se gestionan todas las solicitudes al servidor del backend.
- **utils**: Contiene las funciones utilizadas para obtener, crear o actualizar algún producto.

### Funcionalidades

La primera vista al ingresar es un pequeño login con dos opciones:

- **Invitado**: Permite ver los distintos productos sin necesidad de autenticación.
- **Administrador**: Permite acceder al dashboard para gestionar los productos. Aquí se pueden realizar acciones como eliminar, editar o crear nuevos productos.

Para acceder como administrador, utiliza las siguientes credenciales:
- Correo electrónico: `admin@admin.com`
- Contraseña: `contraseña`

### Cómo levantar la página localmente

Para ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. Asegúrate de tener el backend en ejecución localmente.
2. Clona este repositorio en tu máquina local.
3. Instala las dependencias del proyecto utilizando npm:

    ```bash
    npm install
    ```

4. Asegúrate de cambiar las rutas de las funciones en la carpeta `utils` y la autenticación del login a `localhost:3000/api`.
5. Ejecuta el proyecto utilizando el siguiente comando:

    ```bash
    npm run dev
    ```

Esto iniciará el servidor localmente y podrás acceder a la aplicación en `http://localhost:3000`.
