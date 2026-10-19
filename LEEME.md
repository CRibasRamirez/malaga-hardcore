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

## Eventos (próximos e histórico)

Todos los eventos están en `eventos-data.js`. Desde ahí se rellenan solos el
carrusel de Inicio, la página de Eventos y el Histórico.

Para pasar un evento al histórico: corta su bloque de `PROXIMOS`, pégalo arriba
del todo en `HISTORICO` (con `anio`, `fecha`, `lugar`, `cartel` y `fotos`) y
mueve su cartel de la raíz a `fotos-historico/`.

## Versión en inglés

La carpeta `en/` tiene las mismas páginas traducidas al inglés (el botón ES | EN
de la cabecera cambia entre ellas). Comparten imágenes, `style.css`,
`bandas.csv` y `eventos-data.js` con la versión en español.

- Si cambiáis un texto de una página, cambiad también su versión en `en/`.
- Los eventos solo se editan una vez, en `eventos-data.js`: los meses se traducen
  solos. Para la descripción de un próximo evento podéis añadir `descripcion_en`.

## Si un cambio de diseño no se ve en la web

Los navegadores guardan `style.css` y `eventos-data.js` en caché. Al cambiar
cualquiera de los dos, sube el número `?v=...` que acompaña a su enlace en
todos los `.html` (por ejemplo, poned la fecha del día) para que se descargue
la versión nueva.

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
