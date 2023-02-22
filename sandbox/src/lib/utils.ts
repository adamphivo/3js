import * as THREE from 'three';

const utils = () => {};

function getRandomNumber() {
	const orientation = Math.random() * 100 < 50;
	return orientation ? Math.random() : Math.random() * -1;
	return Math.random();
}

function getRandomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

utils.createCube = () => {
	const cube = new THREE.Mesh(
		new THREE.BoxGeometry(getRandomNumber(), getRandomNumber(), getRandomNumber()),
		new THREE.MeshBasicMaterial({ color: `#${getRandomColor()}` })
	);

	cube.position.x = getRandomNumber() * 2;
	cube.position.y = getRandomNumber() * 2;
	cube.position.z = getRandomNumber() * 2;
	cube.rotation.y = Math.PI * 0.5;

	return cube;
};

export default utils;
