# Documentación para WordPress

## ¿Qué es WordPress?

WordPress es un sistema de gestión de contenidos (CMS, por sus siglas en inglés) que permite crear y gestionar sitios web de manera sencilla. Originalmente diseñado para la creación de blogs, WordPress ha evolucionado y ahora es una herramienta robusta para construir sitios web completos, tiendas en línea, portafolios, foros, entre otros. Es una plataforma de código abierto, lo cual significa que es gratuita y cuenta con una gran comunidad de desarrolladores que crean temas, plugins y mejoran continuamente su funcionalidad.

## Ventajas y Desventajas de WordPress

### Ventajas

- **Fácil de usar**: No se necesitan grandes conocimientos de programación para crear un sitio.
- **Personalizable**: Hay miles de temas y plugins disponibles que permiten adaptar el sitio a las necesidades de cada usuario.
- **SEO-friendly**: WordPress está optimizado para motores de búsqueda, facilitando que los sitios tengan una mejor visibilidad.
- **Gran comunidad**: Al ser tan popular, cuenta con una gran cantidad de recursos, tutoriales y soporte en línea.
- **Escalable**: Se pueden crear desde blogs personales hasta sitios web de empresas grandes.

### Desventajas

- **Puede ser vulnerable**: Como es una plataforma popular, puede ser blanco de ataques, por lo que es necesario mantener los plugins y el propio WordPress actualizados.
- **Depende de plugins**: Para funcionalidades avanzadas, se requiere de plugins que a veces pueden generar incompatibilidades.
- **Rendimiento**: Si no se optimiza correctamente, un sitio en WordPress puede ser lento, especialmente si tiene muchos plugins instalados.
- **Actualizaciones constantes**: Las actualizaciones frecuentes pueden ser algo tediosas y pueden causar problemas si no se hacen correctamente.

## Instalación de WordPress en Local

Para instalar WordPress en un servidor local, sigue estos pasos:

### Requisitos previos

1. Descargar e instalar **XAMPP** (o cualquier otro servidor local que incluya Apache y MySQL).
2. Tener acceso a la última versión de WordPress, que puedes descargar desde [WordPress.org](https://wordpress.org/download/).

### Pasos de Instalación

1. **Iniciar XAMPP**:

   - Abre el panel de XAMPP.
   - Da clic en `Start` para los servicios de **Apache** y **MySQL**.

2. **Descargar WordPress**:

   - Ve a [WordPress.org](https://wordpress.org/download/) y descarga el archivo de instalación de WordPress.
   - Descomprime el archivo descargado.

3. **Mover los archivos**:

   - Copia la carpeta descomprimida de WordPress y pégala en el directorio `htdocs` de XAMPP (usualmente `C:\xampp\htdocs\`).
   - Renombra la carpeta si deseas, esto determinará la URL en `localhost` para acceder a WordPress.

4. **Crear una Base de Datos en MySQL**:

   - Abre `http://localhost/phpmyadmin` en tu navegador.
   - Selecciona `Base de datos` y crea una nueva base de datos (por ejemplo, `wordpress_db`).

5. **Configurar WordPress**:

   - En tu navegador, ve a `http://localhost/nombre_carpeta_WordPress` (reemplaza `nombre_carpeta_WordPress` con el nombre que le diste en `htdocs`).
   - Elige el idioma y sigue los pasos del asistente.
   - Cuando se solicite, ingresa los siguientes datos:
     - **Nombre de la base de datos**: La que creaste en `phpMyAdmin`.
     - **Nombre de usuario**: `root` (o el nombre de usuario que configuraste en MySQL).
     - **Contraseña**: (si usas `root`, generalmente se deja en blanco).
     - **Servidor de la base de datos**: `localhost`.
     - **Prefijo de tabla**: Puedes dejar `wp_` o cambiarlo si deseas.

6. **Completar la Configuración**:

   - Introduce el nombre del sitio, elige un nombre de usuario y contraseña para el administrador y proporciona tu correo electrónico.
   - Da clic en **Instalar WordPress**.

7. ¡Listo! Ahora puedes acceder a tu sitio de WordPress en local y empezar a personalizarlo.

## Recursos Adicionales

- [Documentación oficial de WordPress](https://wordpress.org/support/)
- [Plugins recomendados para principiantes](https://wordpress.org/plugins/)
- [Temas gratuitos en el repositorio de WordPress](https://wordpress.org/themes/)

---

Welcome to WordPress :D 🫡
