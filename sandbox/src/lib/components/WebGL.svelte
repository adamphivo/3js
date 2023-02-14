<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";

    let canvas: HTMLCanvasElement;

    
    onMount(() => {
        // Setup
        const scene = new THREE.Scene();
        const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: "blue"}));
        scene.add(cube);
        cube.rotation.y = Math.PI * 0.5;
        const sizes = { width:  window.innerWidth, height: window.innerHeight};
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 2;
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(sizes.width, sizes.height);
        scene.add(camera);

        const clock = new THREE.Clock();

        // Animation loop
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();

            cube.rotation.y += 0.01;
            cube.rotation.x -= 0.01;

            camera.rotation.x += 0.01;

            cube.position.x = Math.cos(elapsedTime);
            cube.position.y = Math.sin(elapsedTime);

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        }

        tick();
    })
</script>

<div>
    <p>WebGl</p>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    div {
        display: flex;
        position: relative;
        flex: auto;
        width: 100%;
        background-color: red;
        width: 100vw;
        height: 100vh;
    }

    p {
        position: absolute;
        color: red;
    }

    canvas {
        width: 100%;
    }
</style>