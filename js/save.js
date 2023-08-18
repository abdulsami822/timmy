import "../style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import StarsTexture from "../public/stars.jpg";
import SunTexture from "../public/sun-texture.jpeg";
import EarthTexture from "../public/earth-texture.jpeg";

//scene
const scene = new THREE.Scene();

const starsTextureLoader = new THREE.CubeTextureLoader().load([
  StarsTexture,
  StarsTexture,
  StarsTexture,
  StarsTexture,
  StarsTexture,
  StarsTexture,
]);

scene.background = starsTextureLoader;

const axesHelpers = new THREE.AxesHelper(30);
// scene.add(axesHelpers);

const gridHelper = new THREE.GridHelper(30, 50);
// scene.add(gridHelper);

//camera
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const earthDistance = 10;
const jupiterDistance = 15;
const venusDistance = 6;
const plutoDistance = 21;

const TextureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(1, 10, 10);
const earthMaterial = new THREE.MeshStandardMaterial({
  map: TextureLoader.load(EarthTexture),
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(-earthDistance, 0, 0);
scene.add(earth);

const venusGeometry = new THREE.SphereGeometry(0.8, 50, 50);
const venusMaterial = new THREE.MeshStandardMaterial({
  color: "#c18f17",
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(-venusDistance, 0, 0);
scene.add(venus);

const jupiterGeometry = new THREE.SphereGeometry(2, 50, 50);
const jupiterMaterial = new THREE.MeshStandardMaterial({ color: "#bcafb2" });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(-jupiterDistance, 0, 0);
scene.add(jupiter);

const plutoGeometry = new THREE.SphereGeometry(0.7, 50, 50);
const plutoMaterial = new THREE.MeshStandardMaterial({ color: "#9ca6b7 " });
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
pluto.position.set(-plutoDistance, 0, 0);
scene.add(pluto);

const sunGeometry = new THREE.SphereGeometry(4);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: TextureLoader.load(SunTexture),
  // emissive: "#F9d71c",
  // emissiveIntensity: 3,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const sunlight = new THREE.PointLight("#ffffff", 50);
scene.add(sunlight);

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 3, 22);
orbit.update();

const moveEarth = (time) => {
  const newX = Math.cos(time / 1000) * -1 * earthDistance;
  const isLeftToRight = newX > earth.position.x;
  const newZ = Math.sqrt(Math.pow(earthDistance, 2) - Math.pow(newX, 2));
  earth.position.x = newX;
  earth.position.z = isLeftToRight ? newZ : -newZ;
};

const movepluto = (time) => {
  const newX = Math.cos(time / 1000) * -1 * plutoDistance;
  const isLeftToRight = newX > pluto.position.x;
  const newZ = Math.sqrt(Math.pow(plutoDistance, 2) - Math.pow(newX, 2));
  pluto.position.x = newX;
  pluto.position.z = isLeftToRight ? newZ : -newZ;
};

const moveJupiter = (time) => {
  const newX = Math.cos(time / 1000) * -1 * jupiterDistance;
  const isLeftToRight = newX > jupiter.position.x;
  const newZ = Math.sqrt(Math.pow(jupiterDistance, 2) - Math.pow(newX, 2));
  jupiter.position.x = newX;
  jupiter.position.z = isLeftToRight ? newZ : -newZ;
};

const moveVenus = (time) => {
  const newX = Math.cos(time / 1000) * -1 * venusDistance;
  const isLeftToRight = newX > venus.position.x;
  const newZ = Math.sqrt(Math.pow(venusDistance, 2) - Math.pow(newX, 2));
  venus.position.x = newX;
  venus.position.z = isLeftToRight ? newZ : -newZ;
};

const moveSun = (time) => {
  sun.rotation.y += 0.01;
};

const animate = (time) => {
  moveEarth(time);
  moveSun(time);
  moveJupiter(time);
  moveVenus(time);
  movepluto(time);
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);

animate();
