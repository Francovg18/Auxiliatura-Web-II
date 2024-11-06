# Guía para Iniciar un Proyecto de React

Este documento proporciona instrucciones paso a paso para comenzar a trabajar con React, utilizando `create-react-app` y Vite. Se asume que solo tienes Visual Studio Code instalado en tu computadora.

## Paso 1: Instalar Node.js y npm

Primero, necesitas instalar Node.js, que incluye npm (Node Package Manager). Esto es esencial para gestionar paquetes y ejecutar comandos en React.

1. **Descargar e instalar Node.js**:

   - Ve a la página oficial de [Node.js](https://nodejs.org/) y descarga la versión recomendada (LTS).
   - Sigue las instrucciones de instalación para tu sistema operativo.

2. **Verificar la instalación**:
   - Abre la terminal (puedes usar la terminal integrada en VS Code).
   - Ejecuta los siguientes comandos para asegurarte de que Node.js y npm están instalados:
     ```bash
     node -v
     npm -v
     ```
     Deberías ver los números de versión de ambos.

## Paso 2: Crear un Proyecto con `create-react-app`

`create-react-app` es una herramienta oficial para crear aplicaciones de React con configuración mínima.

1. **Crear una nueva aplicación de React**:

   - En la terminal, navega hasta la carpeta donde deseas crear el proyecto y ejecuta:
     ```bash
     npx create-react-app nombre-de-tu-app
     ```
   - Esto creará una carpeta llamada `nombre-de-tu-app` con la estructura de archivos básica.

2. **Iniciar la aplicación de React**:
   - Navega dentro del directorio del proyecto:
     ```bash
     cd nombre-de-tu-app
     ```
   - Ejecuta el siguiente comando para iniciar la aplicación:
     ```bash
     npm start
     ```
   - Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Paso 3: Crear un Proyecto con Vite

Vite es una alternativa ligera y rápida para crear aplicaciones de React.

1. **Crear un nuevo proyecto con Vite**:

   - Ejecuta el siguiente comando en la terminal:
     ```bash
     npm create vite nombre-proyecto
     ```
   - Luego, elige un nombre para tu proyecto y selecciona "React" como el framework y "JavaScript" o "TypeScript" según prefieras.

2. **Instalar dependencias**:

   - Navega al directorio de tu proyecto:
     ```bash
     cd nombre-de-tu-proyecto
     ```
   - Instala las dependencias:
     ```bash
     npm install
     ```

3. **Iniciar la aplicación de Vite**:
   - Ejecuta:
     ```bash
     npm run dev
     ```
   - Esto abrirá la aplicación en tu navegador en `http://localhost:5173` (o el puerto que indique la terminal).

## Recomendaciones Adicionales

- **Extensiones para Visual Studio Code**:
  - Instala extensiones como "ES7+ React/Redux/React-Native snippets" y "Prettier" para facilitar el desarrollo.
- **Instalar Git** si aún no lo tienes, para gestionar versiones de tu proyecto.
