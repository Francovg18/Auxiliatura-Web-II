# Clase 2: Flexbox en Programación Web II

En esta segunda clase de Programación Web II, hemos explorado el uso de Flexbox en CSS para diseñar layouts responsivos y flexibles. A continuación, se presentan dos ejemplos de cómo aplicar Flexbox para crear diferentes tipos de diseños.

## Ejemplo 1: Menú de Navegación

Este primer ejemplo muestra cómo crear un menú de navegación usando Flexbox. Aquí se utiliza una lista (`<ul>`) con elementos de lista (`<li>`) que se distribuyen horizontalmente.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: rgb(10, 0, 56);
        font-family: sans-serif;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        background-color: white;
        list-style: none;
        margin: 0;
        padding: 0;
        height: 10rem;
        display: flex;
        flex-wrap: wrap;
        align-content: safe center;
        gap: 0.3rem;
    }
    li {
        background-color: rgb(0, 194, 178);
        color: white;
        border: solid 1px black;
        padding: 0.3rem 0.7rem;
    }
</style>
<body>
    <nav>
        <ul>
            <li><a href="#">Caja 1</a></li>
            <li><a href="#">Caja 2 Lorem ipsum dolor sit amet consectetur adipisicing elit...</a></li>
            <li><a href="#">Caja 3</a></li>
        </ul>
    </nav>
</body>
</html>
