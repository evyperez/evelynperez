# Evelyn Perez Portfolio

Multilingual professional portfolio built with [Hugo](https://gohugo.io/) and SCSS. It is available in English, Portuguese (Portugal), Portuguese (Brazil), and Spanish.

## Requirements

- [Hugo](https://gohugo.io/installation/)
- Node.js 18 or later
- npm

## Run Locally

```bash
npm install
npm start
```

Open `http://localhost:1313` in your browser.

## Production Build

```bash
npm run build
```

The static website is generated in `public/`.

## Project Structure

```text
assets/       JavaScript and SCSS source files
content/      Localized pages and blog posts
i18n/         Interface translations
layouts/      Hugo templates and reusable partials
static/       Images and generated CSS
config.yaml   Hugo configuration
```

## Customize

- Update contact information and social links in `config.yaml`.
- Edit localized site content in `content/` and labels in `i18n/`.
- Update styles in `assets/stylesheets/`.
- Add project images in `static/images/` and reference them from the relevant template.
