# Guía Completa de Flexbox

## ¿Qué es Flexbox?

Flexbox es un modelo de diseño en CSS que permite organizar y distribuir los elementos dentro de un contenedor de manera eficiente. Se utiliza principalmente para alinear elementos de forma horizontal o vertical dentro de un contenedor flexible, adaptándose a diferentes tamaños de pantalla y disposiciones.

## Conceptos Claves de Flexbox

### Contenedor Flex (`display: flex;`)

Para usar Flexbox, se debe definir un contenedor como `display: flex;` o `display: inline-flex;` para que sus elementos hijos sean flexibles.

### Propiedades del Contenedor Flex

| Propiedad         | Descripción                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `display`         | Convierte un elemento en contenedor flex (`flex` o `inline-flex`).                                                                                              |
| `flex-direction`  | Define la dirección de los elementos (`row`, `column`, `row-reverse`, `column-reverse`).                                                                        |
| `justify-content` | Controla la alineación de los elementos en el eje principal (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`).              |
| `align-items`     | Alinea los elementos en el eje secundario (`stretch`, `flex-start`, `flex-end`, `center`, `baseline`).                                                          |
| `align-content`   | Controla la alineación de filas en el eje secundario cuando hay varias líneas (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`). |
| `gap`             | Define el espacio entre los elementos flexibles.                                                                                                                |
| `flex-wrap`       | Permite que los elementos se ajusten en varias líneas (`nowrap`, `wrap`, `wrap-reverse`).                                                                       |

### Propiedades de los Elementos Flexibles

| Propiedad     | Descripción                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `flex-grow`   | Define la capacidad de crecimiento del elemento dentro del contenedor.                                                      |
| `flex-shrink` | Controla la capacidad de reducción del elemento en caso de falta de espacio.                                                |
| `flex-basis`  | Define el tamaño inicial del elemento antes de aplicar `grow` o `shrink`.                                                   |
| `flex`        | Shorthand para `flex-grow`, `flex-shrink` y `flex-basis` en un solo valor.                                                  |
| `align-self`  | Permite sobrescribir `align-items` en un solo elemento (`auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`). |
| `order`       | Define el orden de aparición de los elementos, por defecto es 0.                                                            |

## Ejemplo de Uso Básico

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.item {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
```

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

## Consejos y Buenas Prácticas

- Usa `flex-wrap: wrap;` cuando quieras que los elementos se ajusten en varias filas.
- `gap` es mejor que `margin` para separar elementos flexibles sin afectar bordes externos.
- Usa `align-self` si un solo elemento necesita un alineamiento diferente.
- Experimenta con `order` para reorganizar elementos sin modificar el HTML.

Flexbox es una herramienta poderosa que facilita la creación de diseños responsivos y bien alineados sin necesidad de usar `float` o `position`.

Hecho con 💻 y ☕ por [Franco Alex](https://github.com/Francovg18)
