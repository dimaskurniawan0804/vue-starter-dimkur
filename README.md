# Vue 3 Starter Template

This is a Vue 3 starter template built with Vite and includes the following libraries:

- **Vite** – Fast and modern build tool
- **PrimeVue** – UI component library for Vue 3
- **Remix Icon** – Icon library
- **PrimeIcons** – Icons for PrimeVue components
- **Vue I18n** – Internationalization plugin for Vue 3

## Installation

Before using the project, update all packages to ensure you have the latest versions:

```sh
pnpm update
# or
npm update
# or
yarn upgrade
```

Then install dependencies:

```sh
pnpm install
# or
npm install
# or
yarn install
```

## Development Server

```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

## Build for Production

```sh
pnpm build
# or
npm run build
# or
yarn build
```

## Features

- Vue 3 with Composition API
- Pre-configured Vite setup
- PrimeVue components and styling
- Remix and PrimeIcons for icons
- Internationalization support with Vue I18n

## Folder Structure

```
├── src
│   ├── assets        # Static assets like images
│   ├── components    # Reusable Vue components
│   ├── locales       # i18n translation files
│   ├── plugins       # Plugin configurations
│   ├── router        # Vue Router setup
│   ├── stores        # Vuex or Pinia store
│   ├── views         # Page views
│   ├── App.vue       # Root Vue component
│   ├── main.ts       # Entry point
│   ├── vue.d.ts      # TypeScript declaration file
├── public            # Static files
├── index.html        # Main HTML file
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Dependencies and scripts
```

## License

This project is licensed under the MIT License.
