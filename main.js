import * as THREE from "three";
import { createSun } from "./modules/sun";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
// const axesHelpers = new THREE.AxesHelper(3);
// scene.add(axesHelpers);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const sun = createSun({ radius: 2 });
sun.name = "sun";
sun.position.set(0, 0, 0);
scene.add(sun);

const radius = 5;
const sun2 = createSun({ radius: 1 });
sun2.name = "sun2";
sun2.position.set(-radius, 0, 0);
scene.add(sun2);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

const orbitControls = new OrbitControls(camera, renderer.domElement);

const mouseVector = new THREE.Vector2();

camera.position.set(0, 2, 20);
orbitControls.update();

const animate = (time) => {
  renderer.render(scene, camera);
  rotate(time);
};

const rotate = (time) => {
  const newX = Math.cos(time / 1000) * -1 * radius;
  const isLeftToRight = newX > sun2.position.x;
  const newZ = Math.sqrt(Math.pow(radius, 2) - Math.pow(newX, 2));
  sun2.position.x = newX;
  sun2.position.z = isLeftToRight ? newZ : -newZ;
};

renderer.setAnimationLoop(animate);
animate();

window.addEventListener("mousemove", function (e) {
  mouseVector.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = (e.clientY / window.innerHeight) * -2 + 1;
});

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
