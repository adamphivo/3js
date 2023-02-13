console.log("Hello Three.js");
console.log(THREE);

// Creates the scene
const scene = new THREE.Scene();

// Creates the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Creates the material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Then we assemble the mesh (geometry + material)
const mesh = new THREE.Mesh(geometry, material);

// Add the mesh object to the scene
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
