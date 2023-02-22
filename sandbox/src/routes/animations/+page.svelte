<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
	import { Sphere } from "three";
    
    let canvas: HTMLCanvasElement;

    onMount(() => {
        const sizes = { width:  window.innerWidth, height: window.innerHeight};

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 3;
        scene.add(camera);

        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );

        // Sphere
        const geometry = new THREE.BoxGeometry(1,1,1);
        const mesh = new THREE.MeshBasicMaterial({color: "red"});
        const shpere = new THREE.Mesh(geometry, mesh);
        shpere.position.x = 1;
        scene.add(shpere);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);
    })
</script>

<div>
    <canvas bind:this={canvas}></canvas>
</div>