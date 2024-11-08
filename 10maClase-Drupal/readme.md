# Documentación para Drupal

## ¿Qué es Drupal?

Drupal es un sistema de gestión de contenidos (CMS) potente y flexible diseñado para crear sitios web complejos y dinámicos. A diferencia de otros CMS, Drupal se caracteriza por ser altamente modular y escalable, lo cual permite construir desde blogs y sitios informativos hasta portales de gran envergadura. Es una plataforma de código abierto, gratuita, y mantenida por una amplia comunidad de desarrolladores que continuamente contribuyen con módulos, temas y mejoras.

## Ventajas y Desventajas de Drupal

### Ventajas

- **Modularidad**: Drupal permite crear sitios muy personalizados a través de módulos que añaden funcionalidades específicas.
- **Seguridad robusta**: Es uno de los CMS más seguros, utilizado por gobiernos y empresas grandes que requieren altos estándares de seguridad.
- **Escalabilidad**: Ideal para sitios grandes con grandes volúmenes de contenido y usuarios.
- **Flexibilidad en roles y permisos**: Permite configurar permisos muy detallados para diferentes tipos de usuarios.
- **Gran comunidad**: Al ser de código abierto, cuenta con una comunidad activa que desarrolla y mantiene módulos, temas y documentaciones.

### Desventajas

- **Curva de aprendizaje**: Drupal puede ser difícil de aprender para principiantes, ya que tiene una interfaz más compleja y técnicas avanzadas de personalización.
- **Requiere conocimiento técnico**: Para aprovechar al máximo sus capacidades, es útil tener conocimientos de desarrollo web.
- **Rendimiento**: Sin la optimización adecuada, puede ser más pesado en comparación con otros CMS.
- **Actualizaciones complejas**: Las actualizaciones de Drupal a veces requieren intervenciones manuales, especialmente al pasar de una versión principal a otra.

## Instalación de Drupal en Local

Para instalar Drupal en un servidor local, sigue estos pasos:

### Requisitos previos

1. Descargar e instalar **XAMPP** (o cualquier otro servidor local que incluya Apache y MySQL).
2. Tener acceso a la última versión de Drupal, que puedes descargar desde [Drupal.org](https://www.drupal.org/download).

### Pasos de Instalación

1. **Iniciar XAMPP**:

   - Abre el panel de XAMPP.
   - Da clic en `Start` para los servicios de **Apache** y **MySQL**.

2. **Descargar Drupal**:

   - Ve a [Drupal.org](https://www.drupal.org/download) y descarga la última versión de Drupal.
   - Descomprime el archivo descargado.

3. **Mover los archivos**:

   - Copia la carpeta descomprimida de Drupal y pégala en el directorio `htdocs` de XAMPP (usualmente `C:\xampp\htdocs\`).
   - Renombra la carpeta si deseas; este nombre será la URL para acceder a Drupal en `localhost`.

4. **Crear una Base de Datos en MySQL**:

   - Abre `http://localhost/phpmyadmin` en tu navegador.
   - Selecciona `Base de datos` y crea una nueva base de datos (por ejemplo, `drupal_db`).

5. **Configurar Drupal**:

   - En tu navegador, ve a `http://localhost/nombre_carpeta_Drupal` (reemplaza `nombre_carpeta_Drupal` con el nombre que le diste en `htdocs`).
   - Selecciona el idioma y sigue los pasos del asistente de instalación.
   - Cuando se solicite, ingresa los siguientes datos de la base de datos:
     - **Nombre de la base de datos**: La que creaste en `phpMyAdmin`.
     - **Nombre de usuario**: `root` (o el nombre de usuario que configuraste en MySQL).
     - **Contraseña**: (si usas `root`, generalmente se deja en blanco).
     - **Servidor de la base de datos**: `localhost`.

6. **Completar la Configuración**:

   - Define el nombre del sitio, elige un nombre de usuario y contraseña para el administrador y proporciona tu correo electrónico.
   - Finaliza el asistente de instalación.

7. ¡Listo! Ahora puedes acceder a tu sitio de Drupal en local y comenzar a personalizarlo.

## Recursos Adicionales

- [Documentación oficial de Drupal](https://www.drupal.org/documentation)
- [Módulos populares en el repositorio de Drupal](https://www.drupal.org/project/project_module)
- [Temas gratuitos en el repositorio de Drupal](https://www.drupal.org/project/project_theme)

---

## Comparación entre Drupal y WordPress

### Similitudes entre Drupal y WordPress

- **Ambos son CMS de código abierto**: Tanto Drupal como WordPress son gratuitos y cuentan con grandes comunidades de desarrolladores que contribuyen al crecimiento de ambas plataformas.
- **Facilidad de gestión de contenido**: Ambos CMS permiten crear, editar y gestionar contenido de manera eficiente, aunque WordPress es más intuitivo en este aspecto para usuarios novatos.
- **Extensibilidad**: Ambos soportan plugins o módulos que permiten añadir nuevas funcionalidades. WordPress usa "plugins" y "temas", mientras que Drupal emplea "módulos" y "temas".
- **Soporte para SEO**: WordPress y Drupal pueden optimizarse para SEO mediante plugins (en WordPress) o módulos (en Drupal), aunque WordPress facilita el uso de herramientas SEO desde el inicio.

### Ventajas de WordPress sobre Drupal

- **Facilidad de uso**: WordPress es conocido por su interfaz intuitiva, ideal para principiantes o proyectos donde no se requieran conocimientos técnicos avanzados.
- **Variedad de temas y plugins**: WordPress cuenta con una cantidad enorme de temas y plugins listos para instalar, lo cual permite personalizar el sitio rápidamente.
- **Actualizaciones simples**: Las actualizaciones de WordPress suelen ser más fáciles de realizar sin intervenciones manuales.

### Ventajas de Drupal sobre WordPress

- **Seguridad avanzada**: Drupal es conocido por su enfoque en seguridad y es el CMS preferido para sitios gubernamentales y grandes organizaciones.
- **Flexibilidad y personalización**: Drupal es más flexible que WordPress en cuanto a personalización de roles y permisos, lo cual es esencial para sitios que requieren complejas jerarquías de acceso.
- **Escalabilidad**: Drupal es excelente para sitios de gran envergadura y de tráfico elevado. Permite manejar grandes volúmenes de contenido sin comprometer el rendimiento.

### Desventajas de WordPress y Drupal

- **Desventajas de WordPress**:

  - Es más vulnerable a ataques si no se actualizan los plugins y temas regularmente.
  - Depende mucho de plugins para funcionalidades avanzadas, lo cual puede afectar el rendimiento si no se optimiza correctamente.

- **Desventajas de Drupal**:
  - Tiene una curva de aprendizaje más alta y es más técnico, lo cual puede ser una barrera para los principiantes.
  - Requiere conocimientos avanzados para sacarle el máximo provecho y para realizar actualizaciones significativas, como pasar de una versión principal a otra.

### Recomendación en la actualidad

Para elegir entre WordPress y Drupal actualmente, consideraremos el tipo de proyecto y la experiencia técnica disponible:

- **Recomendacion de WordPress** para proyectos pequeños o medianos, especialmente si se busca una solución rápida y fácil de manejar, como blogs, portafolios personales o sitios corporativos sin requisitos técnicos complejos. WordPress sigue siendo una excelente opción para usuarios con conocimientos básicos de desarrollo web.

- **Recomiendacion de Drupal** para proyectos de gran escala o sitios que requieren alta seguridad y personalización, como portales gubernamentales, sitios de grandes empresas o e-commerce de alta complejidad. En 2024, Drupal continúa siendo una de las plataformas más confiables para entornos exigentes donde la seguridad y escalabilidad son primordiales.

Welcome to Drupal :D 🫡
