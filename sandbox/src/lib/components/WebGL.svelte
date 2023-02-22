<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
    import utils from "$lib/utils";

    let canvas: HTMLCanvasElement;

    let currentX: number = 0;
    let currentY: number = 0;

    
    onMount(() => {
        // Setup
        const scene = new THREE.Scene();

        const cubes: any[] = [];

        for(let i = 0; i < 100; i++){
            console.log(i);
            const cube = utils.createCube();
            cubes.push(cube);
            scene.add(cube);
        }
        
        const sizes = { width:  window.innerWidth, height: window.innerHeight};
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 6;
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(sizes.width, sizes.height);
        scene.add(camera);

        // window.addEventListener("wheel", (event) => {
        //     if(event.deltaY > 0){
        //         camera.position.z -= 1
        //     } else {
        //         camera.position.z += 1
        //     }
        // })

        const clock = new THREE.Clock();

        // Animation loop
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();

            cubes.forEach(cube => {
                cube.rotation.x = elapsedTime;
            })

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        }


        tick();
    })

</script>

<div>
    <div class="container">
        <div class="sub">
            <h1>Adam Phi Vo</h1>
            <h4>creative web developer</h4>
        </div>
    </div>
    <canvas bind:this={canvas}></canvas>
</div>

<style>

    .sub {
        width: 100%;
        border: 1px solid rgb(20, 20, 20);
        background-color: rgba(0, 0, 0, 0.075);
        backdrop-filter: blur(0px) saturate(100%) brightness(200%);
        opacity: 1;
        z-index: 2;
        color: whitesmoke;
        padding: 40px;
        background-image: url("https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png");
background-position: 0px 0px;
    }

    h4 {
        margin-top: 0;
        color: rgb(45, 65, 71);
    }

    h1 {
        margin-bottom: 0;
        font-size: 36px;
    }

    .container {
        box-sizing: border-box;
        padding: 25px;
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        font-family: monospace;
    }

    canvas {
        position: absolute;
        z-index: 1;
        width: 100%;
    }
</style>