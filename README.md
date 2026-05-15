# Scrubee Landing Page

Gotowy landing page React/Vite z Tailwindem i zdjęciami w folderze `public/images/scrubee`.

## Jak uruchomić lokalnie

```bash
npm install
npm run dev
```

Potem otwórz adres pokazany w terminalu, zwykle: `http://localhost:5173`.

## Struktura plików

```txt
scrubee-landing-ready/
  index.html
  package.json
  tailwind.config.js
  postcss.config.js
  public/
    images/
      scrubee/
        lookbook-navy.png
        lookbook-sage.png
        lookbook-graphite.png
        lookbook-dusty-rose.png
        product-top-navy.png
        product-pants-navy.png
        product-top-sage.png
        product-pants-sage.png
        product-top-graphite.png
        product-pants-graphite.png
        product-top-dusty-rose.png
        product-pants-dusty-rose.png
  src/
    App.jsx
    main.jsx
    index.css
```

## Gdzie wrzucić na GitHubie

Wrzucasz całą zawartość folderu `scrubee-landing-ready` do głównego katalogu repozytorium.

Czyli na GitHubie w root repo powinny być pliki:

```txt
index.html
package.json
tailwind.config.js
postcss.config.js
src/
public/
```

Nie wrzucaj samego folderu `scrubee-landing-ready` jako podfolderu, chyba że wiesz, że hosting będzie startował z tego podfolderu.

## Deploy

Najprościej: Vercel albo Netlify.

Vercel:
1. Importujesz repo z GitHub.
2. Framework: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.

Netlify:
1. Importujesz repo z GitHub.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

## Ważne

Zdjęcia są odczytywane z publicznych ścieżek, np.:

```js
/images/scrubee/product-top-navy.png
```

Dlatego folder `images` musi być dokładnie w:

```txt
public/images/scrubee/
```
