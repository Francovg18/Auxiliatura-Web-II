# 🖥️ Clase 1: Introducción a Git, GitHub y Recordatorio de HTML

¡Bienvenidos a la primera clase de **Programación Web 2**! 🎉 En esta sesión, aprenderemos los conceptos fundamentales de **Git** y **GitHub**, y repasaremos algunos aspectos básicos de **HTML** para establecer una base sólida.

## 🛠️ Git: Sistema de Control de Versiones

**Git** es una herramienta esencial para todo desarrollador. Nos permite administrar distintas versiones de nuestro proyecto en nuestra computadora de manera local. Es fundamental para mantener un historial de cambios y colaborar en proyectos de manera eficiente.

### Instalación de Git

- Visita el sitio oficial para descargar e instalar Git: [Git - Download](https://git-scm.com/)

### Conceptos Clave de Git

- **Control de versiones:** Sistema encargado de administrar los cambios realizados en programas de computadora o conjuntos de archivos.
- **Repositorio:** Colección de archivos de distintas versiones de un proyecto.
- **Commit:** Registro del estado de un proyecto, componentes básicos de la línea del tiempo de un proyecto en Git.
- **Git Bash:** Herramienta que te permite ejecutar comandos de Git desde una línea de comandos.

### Comandos Básicos en Git Bash

1. **Configurar datos:**
   \```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tuemail@example.com"
   \```
2. **Crear un repositorio local:**
   \```bash
   git init
   \```
3. **Agregar archivos a la zona de preparación:**
   \```bash
   git add .
   \```
4. **Hacer un commit:**
   \```bash
   git commit -m "Mensaje del commit"
   \```
5. **Crear y cambiar de ramas (branches):**
   \```bash
   git branch nueva-rama
   git checkout nueva-rama
   \```

## 🌐 GitHub: Hosting de Repositorios Remotos

**GitHub** es un servicio de hosting que nos permite almacenar proyectos de desarrollo de software y control de versiones usando Git de manera remota.

### Primeros Pasos en GitHub

1. **Crear una cuenta:** Regístrate en [GitHub](https://github.com/).
2. **Crear un repositorio remoto:**
   - Sube tus proyectos a GitHub para tener un respaldo y compartirlo con otros.
3. **Clonar un repositorio:**
   \```bash
   git clone https://github.com/usuario/repositorio.git
   \```
4. **Actualizar cambios en el repositorio remoto:**
   \```bash
   git push origin rama
   \```
5. **Gestionar Issues y Pull Requests:** Colabora en proyectos gestionando tareas (issues) y revisando cambios propuestos (pull requests).

### Conceptos Clave de GitHub

- **Marge:** Combinar o fusionar ramas de código en un proyecto.
- **Repositorio Remoto:** Un repositorio almacenado en GitHub que puede ser accedido desde cualquier lugar.

## 🔄 Recordatorio de HTML

Repasaremos la estructura básica de una página web utilizando HTML, enfocándonos en la correcta organización del código.

---

Esta clase sienta las bases para manejar el control de versiones y colaborar en proyectos utilizando Git y GitHub, mientras repasamos conceptos básicos de HTML. ¡Prepárate para profundizar más en las próximas sesiones!

Hecho con 💻 y ☕ por [Alex](https://github.com/Francovg18)
