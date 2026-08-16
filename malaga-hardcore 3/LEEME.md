# Málaga Hardcore — Web de la asociación

Web estática de varias páginas con estética oscura hardcore-punk. No necesita
servidor ni base de datos: son archivos HTML que se abren en cualquier navegador.

## Archivos

- `index.html` — Inicio / Quiénes somos
- `eventos.html` — Próximos eventos con enlaces de compra de entradas
- `merch.html` — Merchandising
- `historico.html` — Archivo de eventos pasados (fotos + vídeos)
- `css/style.css` — Todos los estilos (colores, tipografías, diseño)
- `img/` — Aquí van vuestras imágenes (logo, carteles, fotos...)

## Cómo verla

Haz doble clic en `index.html` y se abrirá en el navegador. Los enlaces entre
páginas funcionan sin necesidad de nada más.

## Qué falta por rellenar (busca estos textos en los archivos)

1. **Logo** — en la cabecera pone `MÁLAGA HC` como texto. Para usar vuestro logo,
   guardad la imagen en `img/logo.png` y sustituid en cada página:
   ```html
   <a href="index.html" class="logo">MÁLAGA<span class="acento">HC</span></a>
   ```
   por:
   ```html
   <a href="index.html" class="logo"><img src="img/logo.png" alt="Málaga Hardcore"></a>
   ```

2. **Textos** — el "Quiénes somos" tiene un texto de ejemplo marcado con
   `<!-- TEXTO PROVISIONAL -->`. Reemplazadlo por vuestra historia real.

3. **Enlaces de entradas** — en `eventos.html`, cambiad
   `https://ENLACE-DE-ENTRADAS.com` por vuestra URL de venta (Wegow, Entradium,
   Dice, etc.).

4. **Enlaces de compra de merch** — en `merch.html`, cambiad
   `https://ENLACE-DE-COMPRA.com`. Si tenéis tienda (Bandcamp, Big Cartel...),
   avisadme y la enlazo directamente.

5. **Fotos y vídeos** — en `historico.html`, cada `<div class="foto">FOTO</div>`
   se reemplaza por una imagen real, y cada botón de vídeo lleva su enlace de
   YouTube/Instagram.

6. **Redes y contacto** — en el pie de cada página (`IG`, `YT`, `BC` y el email).

## Cambiar el color de acento

El rojo se define en `css/style.css`, en la variable `--rojo`. Cambia ese valor
y se actualiza en toda la web.

## Publicarla en internet (gratis)

- **Netlify**: arrastra esta carpeta a https://app.netlify.com/drop y listo.
- **GitHub Pages**: sube la carpeta a un repositorio y actívalo en Settings → Pages.
- **Cloudflare Pages / Vercel**: similar, conectando el repositorio.

Cualquiera de estas os da una URL pública. Si queréis un dominio propio
(malagahardcore.com), se compra aparte y se conecta.
