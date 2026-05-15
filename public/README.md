# Scrubee assets

Wrzuc folder `images` do folderu `public` w projekcie.

Finalna struktura:

```txt
public/
  images/
    scrubee/
      hero-navy.png
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
```

W React/Next/Vite odczytujesz je tak:

```js
const images = {
  hero: "/images/scrubee/lookbook-navy.png",
  topNavy: "/images/scrubee/product-top-navy.png",
  pantsNavy: "/images/scrubee/product-pants-navy.png",
};
```
