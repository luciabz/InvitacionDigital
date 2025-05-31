# Invitación Digital

Este proyecto consiste en una **invitación digital interactiva** creada como parte de una aplicación web para eventos. Está desarrollada utilizando **React**, **Vite**, **Tailwind CSS** y **Redux**. La invitación incluye funcionalidades como una **cuenta regresiva**, un **formulario de confirmación** de asistencia, y una **galería de fotos**, todo con un diseño responsivo y moderno.


## Características

- **Cuenta regresiva**: Muestra el tiempo restante hasta el evento.
- **Formulario de confirmación**: Permite a los invitados confirmar su asistencia y dejar un mensaje sobre su música favorita.
- **Galería de fotos**: Carrusel para mostrar imágenes relacionadas con el evento.
- **Responsive**: Diseño adaptado a diferentes tamaños de pantalla (móvil, tablet, desktop).
- **Animaciones AOS**: Efectos de animación al hacer scroll en las secciones.

## Tecnologías Utilizadas

- **React**: Para la construcción de interfaces de usuario interactivas.
- **Vite**: Herramienta de desarrollo rápida para React.
- **Tailwind CSS**: Framework de diseño para la creación de interfaces modernas y responsivas.
- **Redux**: Manejo global del estado, utilizado en la rama `redux-rsvp` para gestionar el estado de confirmaciones de asistencia.
- **AOS**: Librería para animaciones al hacer scroll.
- **Swiper**: Carrusel de imágenes para la galería de fotos.

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/InvitacionDigital.git
```
2.Navega a la carpeta del proyecto:
```bash
cd Victoria-mis-xv
```
3.Instala las dependencias:
```bash
npm install
```
4.Inia el servidor de desarrollo
```bash
npm run dev
```
5.Abre tu navegador y visita:
```bash
http://localhost:5173

```
Estructura del Proyecto

```bash

/src
│
├── /components         # Componentes reutilizables (Navbar, CoverSection, etc.)
├── /redux              # Configuración de Redux (store y slice) [Disponible en la rama 'redux-rsvp']
├── /styles             # Archivos CSS (Tailwind y otros estilos)
├── /App.jsx
├── /main.jsx



```
## Configuracion de Redux 
La funcionalidad de Redux para el manejo de la confirmación de asistencia se encuentra en la rama redux-rsvp. La implementación incluye:

store.js: Configura el store de Redux.

rsvpSlice.js: Define el slice para manejar el estado de la confirmación de asistencia.

Para trabajar con Redux, debes cambiar a la rama redux-rsvp:
```bash
git checkout redux-rsvp
```
Esta configuración permite gestionar de manera global el estado de la confirmación de asistencia de los usuarios.



