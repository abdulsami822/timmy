import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "../style.css";

import vShader from "../shaders/vertex.glsl";

import fShader from "../shaders/fragment.glsl";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

// const vShader = `
//   uniform float u_time;
//   void main(){
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const fShader = `
// uniform float u_time;
//   void main(){

//     gl_FragColor = vec4(1,0.5,0.5,1);
//   }
// `;

const uniforms = {
  u_time: { type: "f", value: 0.0 },
};
const geometry = new THREE.TorusGeometry();
const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  // wireframe: true,
  uniforms,
});
const obj = new THREE.Mesh(geometry, material);
scene.add(obj);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbitControls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 6);
orbitControls.update();

const clock = new THREE.Clock();
const animate = () => {
  uniforms.u_time.value = clock.getElapsedTime();
  renderer.render(scene, camera);
};

window.addEventListener("resize", function (e) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

renderer.setAnimationLoop(animate);
