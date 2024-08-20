# Movie Finder

Aplicacion de vuejs 3 en Nuxt con Primevue y Nuxt 3

Servicio desplegado en la siguiente Url: [https://moviefinder-1.netlify.app/](https://moviefinder-1.netlify.app/)

## Tabla de Contenidos

- [Library Versions](#setup)
- [Setup](#setup)
- [Instalación](#instalación)

## Library Versions

- **Nuxt**: `^3.11.2`
- **Pinia/Nuxt**: `5.0.1`
- **Vue**: `^3.4.27`
- **Vue-router**: `^4.3.2`
- **Prime-vue**: `^4.3.2`

## Setup

Previamente para poder realizar las pruebas en entorno de desarrollo correspondientes se necesita generar un TOKEN con la Api de TMBD para consumir las recursos de la base de datos, demas valores son para consumo de la api de tmdb, en el build gracias a `nuxt.config.ts` se compila con el token relacionado al `.env`

```env
NUXT_TOKEN_ACCESS=<TOKEN_TMBD>
NUXT_API_KEY=<API_KEY>
```

Para Instalar:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
