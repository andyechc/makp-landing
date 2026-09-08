# MAKP Landing

Landing page pública para **MAKP** — reproductor nativo macOS.

- **URL:** https://andyechc.github.io/makp-landing/
- **Repo privado (source):** https://github.com/andyechc/makp
- **Descarga DMG:** https://github.com/andyechc/makp-landing/releases/latest/download/MAKP-1.1.dmg

Esta landing está separada del código fuente para poder mantener el repo principal privado mientras la web y el binario son públicos.

## Cómo publicar una nueva versión del DMG

1. En el repo privado, genera el DMG:
   ```bash
   ./scripts/create-dmg.sh
   # o universal
   ./scripts/create-dmg.sh --universal
   ```

2. Publica el DMG en **este** repo (público):
   ```bash
   gh release create v1.1 dist/MAKP-1.1.dmg \
     --repo andyechc/makp-landing \
     --title "MAKP v1.1" \
     --generate-notes
   # o si ya existe el tag:
   gh release upload v1.1 dist/MAKP-1.1.dmg --repo andyechc/makp-landing --clobber
   ```

3. La landing detecta automáticamente la última release via `api.github.com/repos/andyechc/makp-landing/releases/latest` y actualiza el botón.

## Deploy

GitHub Pages vía Actions: cada push a `main` publica `index.html`+assets.

## Editar landing

Edita `index.html`, `styles.css`, `app.js` y haz push.

