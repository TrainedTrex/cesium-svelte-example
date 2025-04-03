import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const cesiumBaseUrl = 'cesiumStatic';

export default defineConfig({
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/cesium/Build/Cesium/Workers',
          dest: cesiumBaseUrl
        },
        {
          src: 'node_modules/cesium/Build/Cesium/ThirdParty',
          dest: cesiumBaseUrl
        },
        {
          src: 'node_modules/cesium/Build/Cesium/Assets',
          dest: cesiumBaseUrl
        },
        {
          src: 'node_modules/cesium/Build/Cesium/Widgets',
          dest: cesiumBaseUrl
        }
      ]
    })
  ],
  define: {
    CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl)
  }
});