# El Fierro — Sitio Web (Bootstrap 5)

Sitio multipágina con **estructura HTML avanzada**, **estilos CSS personalizados** y **Bootstrap 5** (grillas, utilidades, componentes). Incluye JavaScript para validación de formularios y persistencia local del checklist.

## Páginas
- `index.html` — Portada con hero y tarjetas de funcionalidades.
- `repuestos.html` — Catálogo en grilla responsiva (cards).
- `checklist.html` — Lista de pendientes con guardado en `localStorage`.
- `contacto.html` — Formulario con validación Bootstrap.
- `estilos.css` — Personalizaciones avanzadas sobre Bootstrap (variables, utilidades, layout).
- `assets/js/main.js` — Interacciones básicas.

## Requisitos cubiertos
- **Framework**: Bootstrap 5 por CDN (CSS + JS) y Bootstrap Icons.
- **HTML semántico** y prolijo.
- **Grids + Flexbox**: uso nativo de grillas, utilidades, cards, navbar responsiva.
- **CSS avanzado**: variables CSS, sombras, estados hover, foco accesible, media queries, prevención de overflow-x.
- **Todas las páginas** linkean estilos y scripts pertinentes.
- **Repositorio**: listo para versionar con `.gitignore` y guía Git.

## Publicar en GitHub Pages
1. Creá un repo público en GitHub.
2. Subí estos archivos a `main` (carpeta raíz).
3. Settings → Pages → Deploy from a branch → Branch: main / root.

## Flujo de trabajo con Git (ejemplo)
```bash
git init
git add .
git commit -m "feat: estructura base con Bootstrap, estilos avanzados y JS"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```
