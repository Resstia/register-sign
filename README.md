##Daniel Garrido y Luis Gomez
# Formulario de Registro Inteligente y Seguro

Proyecto desarrollado con **HTML**, **CSS** y **JavaScript** como parte de un taller práctico de desarrollo web frontend.

> Este README fue redactado con asistencia de Inteligencia Artificial.

---

## Descripción

Aplicación web que permite registrar usuarios e iniciar sesión, con validación en tiempo real, almacenamiento local y una estética visual de estilo vintage.

---

## Funcionalidades

- Registro de usuarios con validación de campos
- Inicio de sesión verificando datos guardados
- Cambio entre formularios sin recargar la página
- Medidor de fortaleza de contraseña en tiempo real
- Validación de coincidencia entre contraseña y confirmación
- Botón para revelar u ocultar contraseña
- Almacenamiento de múltiples usuarios en `localStorage`
- Mensajes de error por campo

---

## Tecnologías utilizadas

- **HTML5** — estructura semántica del formulario
- **CSS3** — estilos, variables, pseudoclases y diseño responsive
- **JavaScript** — validaciones, DOM y almacenamiento local

---

## Estructura del proyecto

```
proyecto/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── scripts.js
```

---

## Conceptos aplicados

- Variables CSS con `:root`
- Pseudoclases `:focus`, `:invalid`, `:not`, `:placeholder-shown`
- Flexbox para el layout
- `localStorage` con arreglo de objetos
- Expresiones regulares con el atributo `pattern`
- Atributos `required`, `minlength` y `novalidate`
- Eventos `input` y `submit` en JavaScript
- Manipulación del DOM con `getElementById` y `classList`
