# NEXUS // The Gallery Collection

Sitio de una sola página (one-page scrollytelling) que presenta una colección de sneakers de lujo como si fueran obras de arte expuestas en un museo. Combina tipografía editorial, scroll suave y animaciones de parallax para crear una experiencia narrativa por escenas.

![status](https://img.shields.io/badge/status-est%C3%A1tico-brightgreen) ![license](https://img.shields.io/badge/license-uso%20interno-lightgrey)

## Demo / Vista previa

Abrir `index.html` en cualquier navegador moderno. No requiere servidor ni build para funcionar en local (aunque se recomienda un servidor estático, ver [Uso](#uso)).

## Tabla de contenidos

- [Características](#características)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Uso](#uso)
- [Estructura narrativa (escenas)](#estructura-narrativa-escenas)
- [Personalización](#personalización)
- [Compatibilidad](#compatibilidad)
- [Rendimiento](#rendimiento)
- [Créditos](#créditos)

## Características

- **Scroll cinematográfico** mediante `Lenis` para un desplazamiento suave e inercial.
- **Animaciones basadas en scroll** con `GSAP` + `ScrollTrigger`: parallax, reveals, stagger de tarjetas y split-text.
- **8 escenas narrativas** con contador dinámico en la navegación (`01 / 08` … `08 / 08`).
- **Elementos "reliquia" flotantes** con efecto glassmorphism que simulan objetos 3D sin necesidad de modelos reales.
- **Grano cinemático** (`.noise-overlay`) y textura de museo con paleta oscura y dorada.
- **Interacción de mouse** en el hero: parallax sutil siguiendo el cursor.
- **Totalmente responsive** vía unidades fluidas (`clamp`, `vw`, `min()`).

## Estructura del proyecto

```
nexus/
├── index.html      # Marcado HTML y contenido de las 8 escenas
├── styles.css       # Estilos (paleta, tipografía, layout, componentes)
├── main.js          # Lógica de scroll, parallax y animaciones GSAP
└── README.md         # Este documento
```

## Tecnologías

| Tecnología | Uso |
|---|---|
| [GSAP 3.12.5](https://gsap.com/) | Motor de animación principal |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Animaciones ancladas al scroll |
| [Lenis](https://github.com/darkroomengineering/lenis) | Scroll suave e inercial |
| Google Fonts | `Cormorant Garamond` (serif editorial) + `Space Grotesk` (sans técnica) |
| HTML5 / CSS3 / JavaScript vanilla | Estructura, estilos y lógica |

Todas las dependencias se cargan vía CDN; no se requiere `npm install` ni bundler.

## Uso

1. Clonar o descargar la carpeta del proyecto.
2. Servir los archivos con cualquier servidor estático (recomendado para evitar restricciones de CORS con fuentes/scripts):

   ```bash
   # Con Python
   python3 -m http.server 8080

   # Con Node (http-server)
   npx http-server -p 8080
   ```

3. Abrir `http://localhost:8080` en el navegador.

> También puede abrirse `index.html` directamente con doble clic, aunque algunos navegadores pueden restringir ciertas peticiones en modo `file://`.

## Estructura narrativa (escenas)

| # | Escena | Descripción |
|---|--------|-------------|
| 1 | Hero | Título principal, partículas ambientales y reliquia flotante interactiva |
| 2 | Prólogo | Texto introductorio con letra capital |
| 3 | El Jardín | Cuadro clásico en sticky-scroll con reliquia superpuesta |
| 4 | La Colección | Grid de 3 ediciones (tarjetas con stagger de entrada) |
| 5 | Editorial | Titular con animación de palabras (split-text) |
| 6 | La Ascensión | Segundo cuadro en sticky-scroll con parallax |
| 7 | Manifiesto | Cita central estilo declaración de marca |
| 8 | Cierre | Llamada a la acción y pie de página |

Cada `<section>` usa el atributo `data-scene="N"` para que `main.js` actualice el contador de navegación automáticamente al hacer scroll.

## Personalización

- **Colores**: modificar las variables CSS en `:root` dentro de `styles.css` (`--bg-museum`, `--gold-master`, `--crimson-velvet`, `--text-light`).
- **Tipografías**: cambiar el `<link>` de Google Fonts en `index.html` y actualizar `font-family` en `styles.css`.
- **Imágenes**: las imágenes de referencia se sirven desde Unsplash vía URL; sustituir por assets propios para producción.
- **Cantidad de partículas**: ajustar el bucle `for (let i = 0; i < 25; i++)` en `main.js`.
- **Velocidad del scroll**: modificar `duration` y `easing` en la configuración de `Lenis` (`main.js`).

## Compatibilidad

Probado en navegadores modernos con soporte para `backdrop-filter`, `aspect-ratio` y `clamp()`:

- Chrome / Edge (última versión)
- Firefox (última versión)
- Safari 16+

> `backdrop-filter` puede requerir el prefijo `-webkit-` en Safari (ya incluido en `styles.css`).

## Rendimiento

- Las animaciones de parallax usan `scrub` para sincronizarse con el scroll sin sobrecargar el hilo principal.
- El efecto de grano (`.noise-overlay`) usa `mix-blend-mode` y una animación CSS ligera en lugar de imágenes o videos.
- Se recomienda comprimir/optimizar las imágenes finales antes de pasar a producción y considerar `loading="lazy"` en los `<img>`.

## Créditos

- Imágenes de referencia: [Unsplash](https://unsplash.com/)
- Fuentes: [Google Fonts](https://fonts.google.com/) — Cormorant Garamond, Space Grotesk
- Animación: [GSAP](https://gsap.com/) y [Lenis](https://github.com/darkroomengineering/lenis)

---

Proyecto de demostración/portafolio. Sustituir imágenes de stock y textos de marcador de posición antes de cualquier uso comercial.
