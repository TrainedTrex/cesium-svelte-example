# Cesium SvelteKit Example

A minimal example showing how to integrate CesiumJS with SvelteKit.

## Overview

This repository demonstrates basic integration of CesiumJS into a SvelteKit application. CesiumJS is a powerful JavaScript library for creating 3D globes and maps in a web browser without plugins.

## Features

- Full-screen Cesium globe viewer
- SvelteKit project structure

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- npm or pnpm

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/trainedtrex/cesium-svelte-example.git
cd cesium-svelte-example
```

### Install Dependencies

```bash
npm install
# or if using pnpm
pnpm install
```

### Run the Development Server

```bash
npm run dev
# or
pnpm dev
```

Navigate to `http://localhost:5173` to see the application.

## Project Structure

```text
cesium-svelte-example/
├── src/
│   ├── lib/
│   │   └── components/
│   │       └── CesiumViewer.svelte  # Cesium component
│   ├── routes/
│   │   ├── +layout.svelte           # SvelteKit layout
│   │   └── +page.svelte             # Home page
│   ├── app.css                      # Global CSS
│   └── app.html                     # HTML template
├── static/                          # Static assets
├── vite.config.js                   # Vite configuration
├── svelte.config.js                 # Svelte configuration
└── package.json                     # Project dependencies
```

## Key Files

### vite.config.js

This file configures Vite to properly handle Cesium's static assets:

### CesiumViewer.svelte

The main Cesium component that initializes and displays the 3D globe:

### +page.svelte

The home page that includes the Cesium viewer:

## Dependencies

- [SvelteKit](https://kit.svelte.dev/) - Svelte application framework
- [CesiumJS](https://cesium.com/platform/cesiumjs/) - 3D mapping library
- [vite-plugin-static-copy](https://www.npmjs.com/package/vite-plugin-static-copy) - For copying Cesium static assets

## Common Issues

### Cesium Viewer Not Filling the Screen

If the Cesium viewer isn't filling the entire browser window, make sure:

1. The container has absolute positioning with all sides (top, left, right, bottom) set to 0
2. All parent elements have proper height and width settings
3. There's no margin or padding blocking expansion

### Missing Cesium Assets

If you see errors about missing Cesium assets:

1. Verify the `vite.config.js` has the correct paths to Cesium assets
2. Check that `CESIUM_BASE_URL` is defined correctly
3. Ensure `vite-plugin-static-copy` is properly installed and configured

## Resources

- [CesiumJS Documentation](https://cesium.com/learn/cesiumjs/ref-doc/)
- [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction)
- [Cesium Sandcastle Examples](https://sandcastle.cesium.com/)

## License

MIT License - see the LICENSE file for details.

## Acknowledgements

- [CesiumJS](https://cesium.com/platform/cesiumjs/) for their amazing 3D globe platform
- [SvelteKit](https://kit.svelte.dev/) for the web application framework
