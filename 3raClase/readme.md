# 📘 3ra Clase Web II: HTML y CSS Avanzado

## 📝 Resumen

Hoy repasamos los siguientes conceptos importantes de **HTML** y **CSS**. A continuación se detalla el progreso y los temas tratados durante la clase:

## 🏗️ Estructura del Documento HTML

| Concepto                  | Descripción                                             |
| ------------------------- | ------------------------------------------------------- |
| `<!DOCTYPE html>`         | Define el tipo de documento como HTML5.                 |
| `<head>`                  | Contiene metadatos como el charset y los enlaces a CSS. |
| `<body>`                  | Contiene el contenido visible de la página.             |
| `<header>`                | Definición de encabezado principal.                     |
| `<section>` y `<article>` | Agrupación de contenidos en secciones y artículos.      |

## 🖼️ Imágenes y Multimedia

Incluimos una imagen y un PDF embebido dentro del documento HTML. Ejemplos:

- Imagen: `<img src="img.jpg" alt="imagen">`
- PDF: `<iframe src="practica.pdf" frameborder="0" height="250px"></iframe>`

## 📝 Formularios

Repasamos cómo crear formularios con distintos tipos de inputs:

| Tipo de Input           | Descripción                                  |
| ----------------------- | -------------------------------------------- |
| `text`                  | Campo de texto                               |
| `password`              | Campo para contraseñas                       |
| `number`                | Campo para números                           |
| `date`, `time`, `color` | Campos para fechas, horas y colores          |
| `radio`, `checkbox`     | Botones de opción y casillas de verificación |

## 📑 Listas

Vimos ejemplos de listas desordenadas y ordenadas:

- **Listas desordenadas**: `<ul><li>Elemento</li></ul>`
- **Listas ordenadas**: `<ol><li>Elemento</li></ol>`

## 📊 Tablas Anidadas

Trabajamos con tablas que tienen filas, columnas y tablas anidadas:

| Nombre | Apellido | Edad  |
| ------ | -------- | ----- |
| Pepito | Quispe   | 17    |
| Pepe   | Quispe   | -     |
|        |          | 1,2,3 |

También vimos cómo usar atributos como `colspan` y `rowspan`.

## 🗺️ Ubicación

Incrustamos un mapa de Google con la ubicación de la UMSA:

```html
<iframe
  src="https://maps.google.com/maps?q=umsa&t=&z=13&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="300"
></iframe>
```
