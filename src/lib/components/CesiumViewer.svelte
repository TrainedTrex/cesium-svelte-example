<script>
	import { onMount } from 'svelte';
	import * as Cesium from 'cesium';
	import 'cesium/Build/Cesium/Widgets/widgets.css';
  
	let cesiumContainer;
	let viewer;
  
	async function initializeViewer(container) {
	  const newViewer = new Cesium.Viewer(container, {
		// Optional: Improve the appearance
		terrainProvider: await Cesium.createWorldTerrainAsync(),
		baseLayerPicker: true,
		fullscreenButton: true
	  });
	  
	  // Fly to a default location
	  newViewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400000)
	  });
	  
	  return newViewer;
	}
  
	onMount(() => {
	  initializeViewer(cesiumContainer).then(newViewer => {
		viewer = newViewer;
	  });
  
	  return () => {
		if (viewer && !viewer.isDestroyed()) {
		  viewer.destroy();
		}
	  };
	});
</script>

<style>
/* Critical styles for proper display */
.cesium-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	padding: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
}
</style>
  
<div class="cesium-container" bind:this={cesiumContainer}></div>