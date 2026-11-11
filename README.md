# YUNNY · Sitio web

Sitio estático (HTML + CSS + JavaScript, sin dependencias). Solo abre `index.html` en el navegador.

## Estructura

- `index.html` — estructura de la página (inicio, catálogo, nosotros, cómo pedir, contacto).
- `styles.css` — estilos con la paleta de marca (`#f5ecdd`, `#d9687c`, `#f4b6bb`).
- `app.js` — catálogo, filtros, búsqueda, modal de producto y carrito.

## Cómo personalizar

En `app.js`:

- `CONFIG.whatsapp`: pon tu número con lada (ej. `5216641234567`). Los pedidos del carrito se envían por WhatsApp a ese número.
- `PRODUCTS`: lista de productos. Los incluidos son de ejemplo; cambia nombre, precio, descripción, imagen, color y datos.
  Campos: `name`, `category`, `origin`, `flag` (código de `assets/flags/`), `img` (nombre del archivo en `assets/products/`), `price`, `color`, `badge` (opcional), `featured` (orden en "Destacados"), `desc`, `facts`.

Las imágenes están en `assets/` (`products/`, `icons/`, `flags/`, en formato SVG). Para usar fotos reales, guarda tu archivo en `assets/products/` y cambia la función `prodSrc()` en `app.js` (o el valor `img` de cada producto) para que apunte a él, por ejemplo `.jpg` o `.webp`.

En `index.html`: actualiza el enlace de Instagram en la sección de contacto.

## Publicarlo gratis

Puedes subir la carpeta a GitHub Pages, Netlify o Vercel (arrastrar y soltar en Netlify Drop).
