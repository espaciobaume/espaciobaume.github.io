# Espacio Baume · Sitio web

Landing page de Espacio Baume (General Belgrano): consultorios para profesionales de la salud y un espacio para la comunidad.

Sitio estático en HTML5, CSS y JavaScript, sin dependencias ni proceso de compilación.

## Estructura

Todos los archivos van sueltos en la carpeta principal del repositorio, sin subcarpetas:

```
index.html                     Contenido de la página
styles.css                     Estilos
main.js                        Menú en celulares, links de WhatsApp y calendarios
logo-espacio-baume.svg         Logo
logo-espacio-baume-negativo.svg Logo para fondo malva (pie)
og-espacio-baume.png           Imagen al compartir el link
favicon.svg / apple-touch-icon.png  Íconos
```

Cuando cambies el CSS o el JS, subí el número de versión en index.html (`styles.css?v=7` → `?v=8`) para que los navegadores bajen el archivo nuevo.

## Publicar en GitHub Pages

1. Subí esta carpeta a un repositorio (por ejemplo `espacio-baume-web`).
2. En el repo: **Settings → Pages → Build and deployment**, elegí *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
3. En un par de minutos queda online en `https://<tu-usuario>.github.io/espacio-baume-web/`.

Para usar un dominio propio (por ejemplo `espaciobaume.com.ar`), cargalo en **Settings → Pages → Custom domain**.

## Cambios frecuentes

- **Número de WhatsApp y mensajes precargados:** al principio de `js/main.js`.
- **Fotos de la casa:** guardalas en la carpeta principal y descomentá el bloque *"Fotos en los redondeles"* en `css/styles.css`.
- **Imagen al compartir:** cuando el sitio tenga su dirección definitiva, cambiá `og:image` en `index.html` por la URL completa (por ejemplo `https://espaciobaume.github.io/og-espacio-baume.png`) para que WhatsApp la muestre siempre.
- **Colores y tipografías:** variables al principio de `css/styles.css`.
