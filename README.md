# Espacio Baume · Sitio web

Landing page de Espacio Baume (General Belgrano): consultorios para profesionales de la salud y un espacio para la comunidad.

Sitio estático en HTML5, CSS y JavaScript, sin dependencias ni proceso de compilación.

## Estructura

```
index.html          Contenido de la página
css/styles.css      Estilos (colores y tipografías del manual de marca)
js/main.js          Menú en celulares y links de WhatsApp con mensaje precargado
assets/img/         Logos y la imagen que se ve al compartir el link
favicon.svg         Ícono de la pestaña (isotipo)
apple-touch-icon.png
```

## Publicar en GitHub Pages

1. Subí esta carpeta a un repositorio (por ejemplo `espacio-baume-web`).
2. En el repo: **Settings → Pages → Build and deployment**, elegí *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
3. En un par de minutos queda online en `https://<tu-usuario>.github.io/espacio-baume-web/`.

Para usar un dominio propio (por ejemplo `espaciobaume.com.ar`), cargalo en **Settings → Pages → Custom domain**.

## Cambios frecuentes

- **Número de WhatsApp y mensajes precargados:** al principio de `js/main.js`.
- **Fotos de la casa:** guardalas en `assets/img/` y descomentá el bloque *"Fotos en los redondeles"* en `css/styles.css`.
- **Imagen al compartir:** cuando el sitio tenga su dirección definitiva, cambiá `og:image` en `index.html` por la URL completa (por ejemplo `https://espaciobaume.com.ar/assets/img/og-espacio-baume.png`) para que WhatsApp la muestre siempre.
- **Colores y tipografías:** variables al principio de `css/styles.css`.
