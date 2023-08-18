import * as THREE from "three";
import * as CANNON from "cannon-es";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../style.css";
import {
  createBall,
  createPlank,
  createSphere,
  loadAndCreateText,
  loadTimmy,
} from "../modules/balls";

const scene = new THREE.Scene();
const primaryYellow = new THREE.Color("#e7af4c");
const primaryDarkYellow = new THREE.Color("#2a848d");
scene.background = primaryYellow;
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
const orbitControls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 10);
orbitControls.update();

const pointLight = new THREE.DirectionalLight("#ffffff", 5);
pointLight.position.set(0, 5, 3);
pointLight.castShadow = true;
scene.add(pointLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);

// const pointLight2 = new THREE.PointLight("#ffffff", 5);
// pointLight2.position.set(0, -5, 3);
// pointLight2.lookAt(timmy.position);
// pointLight2.castShadow = true;
// scene.add(pointLight2);

// const lightHelper2 = new THREE.PointLightHelper(pointLight2);
// scene.add(lightHelper2);

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0),
});

const mouse = new THREE.Vector2();
const intersectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();
const rayCaster = new THREE.Raycaster();

const spheres = [];
const sphereBodies = [];

const {
  plankMesh: plankOneMesh,
  plankCannonBody: plankOneCannonBody,
  plankCannonMat: plankOneCannonMat,
} = createPlank();
scene.add(plankOneMesh);
plankOneCannonBody.position.copy(new CANNON.Vec3(-5, 4, -2));
plankOneCannonBody.quaternion.setFromEuler(-Math.PI / 2.1, 0.5, 0);
world.addBody(plankOneCannonBody);

const {
  plankMesh: plankTwoMesh,
  plankCannonBody: plankTwoCannonBody,
  plankCannonMat: plankTwoCannonMat,
} = createPlank();
scene.add(plankTwoMesh);
plankTwoCannonBody.position.copy(new CANNON.Vec3(5, 4, -2));
plankTwoCannonBody.quaternion.setFromEuler(-Math.PI / 2, -0.5, 0);
world.addBody(plankTwoCannonBody);

const { ballMesh, ballCannonBody, ballCannonMat } = createBall();
scene.add(ballMesh);
ballCannonBody.position.copy(new CANNON.Vec3(1, 1, -1));
world.addBody(ballCannonBody);

const { textMesh } = await loadAndCreateText({
  color: primaryDarkYellow,
  text: `Don't click here, It might hurt TIMMY`,
});
const textBoundingBox = new THREE.Box3().setFromObject(textMesh);
const textSize = new THREE.Vector3();
textBoundingBox.getSize(textSize);
textMesh.position.set(-textSize.x / 2, 6, 0);
scene.add(textMesh);

let currentAction;
const { timmy, animations, mixer, TIMMY_ANIMATIONS } = await loadTimmy();
const timmyCollideActions = [
  TIMMY_ANIMATIONS.die,
  TIMMY_ANIMATIONS.zombieDie,
  TIMMY_ANIMATIONS.jab,
  TIMMY_ANIMATIONS.wave,
  TIMMY_ANIMATIONS.dance,
];
timmy.scale.set(0.02, 0.02, 0.02);
timmy.position.set(9, -7, 1);
timmy.rotation.y = -1.5;
scene.add(timmy);
animations[TIMMY_ANIMATIONS.walk].play();
currentAction = animations[TIMMY_ANIMATIONS.walk];
const timmyBoundingBox = new THREE.Box3().setFromObject(timmy);
const timmySize = new THREE.Vector3();
timmyBoundingBox.getSize(timmySize);
timmySize.x /= timmy.scale.x;
timmySize.y /= timmy.scale.y;
timmySize.z /= timmy.scale.z;
const timmyCannonMat = new CANNON.Material();

const cylinderShape = new CANNON.Cylinder(
  timmySize.x / 2,
  timmySize.x / 2,
  timmySize.y,
  16
); // Adjust dimensions as needed

// Create spherical shape for the top hemisphere
const topSphereShape = new CANNON.Sphere(timmySize.x / 1.5);
const timmyCannonBody = new CANNON.Body({});
const cylinderOffset = new CANNON.Vec3(0, 0, 0);
timmyCannonBody.addShape(cylinderShape, cylinderOffset);
const topSphereOffset = new CANNON.Vec3(0, 1, 0);
timmyCannonBody.addShape(topSphereShape, topSphereOffset);
timmyCannonBody.material = timmyCannonMat;
timmyCannonBody.position.copy(timmy.position);
world.addBody(timmyCannonBody);

timmyCannonBody.addEventListener("collide", function (e) {
  if (currentAction === animations[TIMMY_ANIMATIONS.walk]) {
    currentAction.fadeOut();
    currentAction =
      animations[
        timmyCollideActions[
          Math.floor((Math.random() * 10) % timmyCollideActions.length)
        ]
      ];
    currentAction.reset().fadeIn().play();
    currentAction.loop = THREE.LoopOnce;
  }
});

mixer.addEventListener("finished", function (e) {
  const clip = e.action._clip;
  if (clip.name === TIMMY_ANIMATIONS.rightTurn) {
    animations[TIMMY_ANIMATIONS.rightTurn].fadeOut();
    timmy.rotation.y += Math.PI;
    animations[TIMMY_ANIMATIONS.walk].reset().fadeIn().play();
    currentAction = animations[TIMMY_ANIMATIONS.walk];
  }
  if (timmyCollideActions.includes(clip.name)) {
    currentAction.fadeOut();
    timmy.rotation.y += (Math.PI * 3.5) / 2;
    animations[TIMMY_ANIMATIONS.twerk].reset().fadeIn().play();
    animations[TIMMY_ANIMATIONS.twerk].loop = THREE.LoopOnce;
    currentAction = animations[TIMMY_ANIMATIONS.twerk];
  }
  if (clip.name === TIMMY_ANIMATIONS.twerk) {
    timmy.rotation.y -= (Math.PI * 3.5) / 2;
    animations[TIMMY_ANIMATIONS.twerk].fadeOut();
    animations[TIMMY_ANIMATIONS.walk].reset().fadeIn().play();
    currentAction = animations[TIMMY_ANIMATIONS.walk];
  }
});

let timmyDirection = -1;
let timmyTotalDistance = 0;
const timmyReverseDistance = 9 * 2;
let timmyVelocity = 1.5;
const moveTimmy = (deltaTime) => {
  const objectWorldPosition = new THREE.Vector3();
  timmy.getWorldPosition(objectWorldPosition);
  const screenPosition = objectWorldPosition.clone();
  screenPosition.project(camera);
  const distance = timmyVelocity * deltaTime;
  if (currentAction === animations[TIMMY_ANIMATIONS.walk]) {
    timmy.position.x += distance * timmyDirection;
    timmyTotalDistance += distance;
  }
  if (timmyTotalDistance > timmyReverseDistance) {
    currentAction = animations[TIMMY_ANIMATIONS.rightTurn];
    animations[TIMMY_ANIMATIONS.walk].fadeOut();
    animations[TIMMY_ANIMATIONS.rightTurn].reset().fadeIn().play();
    animations[TIMMY_ANIMATIONS.rightTurn].loop = THREE.LoopOnce;
    timmyDirection *= -1;
    timmyTotalDistance = 0;
  }
};

const clock = new THREE.Clock();
const animate = () => {
  const deltaTime = clock.getDelta();
  mixer.update(deltaTime);
  moveTimmy(deltaTime);

  // timmy.position.x += timmyVelocity * deltaTime;
  world.step(1 / 60);
  spheres.forEach((sphere, index) => {
    sphere.position.copy(sphereBodies.at(index).position);
    sphere.quaternion.copy(sphereBodies.at(index).quaternion);
  });
  plankOneMesh.position.copy(plankOneCannonBody.position);
  plankOneMesh.quaternion.copy(plankOneCannonBody.quaternion);
  plankTwoMesh.position.copy(plankTwoCannonBody.position);
  plankTwoMesh.quaternion.copy(plankTwoCannonBody.quaternion);
  timmyCannonBody.position.copy(timmy.position);
  timmyCannonBody.quaternion.copy(timmy.quaternion);
  ballMesh.position.copy(ballCannonBody.position);
  // basketMesh.position.copy(basketCannonBody.position);
  // basketMesh.quaternion.copy(basketCannonBody.quaternion);
  renderer.render(scene, camera);
};

window.addEventListener("click", function (e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
  if (mouse.y < 0.5 || Math.abs(mouse.x) > 0.5) return;
  planeNormal.copy(camera.position).normalize();
  plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
  rayCaster.setFromCamera(mouse, camera);
  rayCaster.ray.intersectPlane(plane, intersectionPoint);

  const { sphereMesh, sphereCannonBody, sphereCannonMat } = createSphere();

  scene.add(sphereMesh);
  sphereMesh.position.copy(intersectionPoint);
  sphereCannonBody.position.copy(intersectionPoint);
  world.addBody(sphereCannonBody);
  const plankOneContactMaterial = new CANNON.ContactMaterial(
    plankOneCannonMat,
    sphereCannonMat,
    {
      restitution: 0.8,
    }
  );
  world.addContactMaterial(plankOneContactMaterial);

  const plankTwoContactMaterial = new CANNON.ContactMaterial(
    plankTwoCannonMat,
    sphereCannonMat,
    {
      restitution: 0.8,
    }
  );
  world.addContactMaterial(plankTwoContactMaterial);

  const ballContactMaterial = new CANNON.ContactMaterial(
    ballCannonMat,
    sphereCannonMat,
    {
      restitution: 0.8,
    }
  );
  world.addContactMaterial(ballContactMaterial);

  const timmyContactMaterial = new CANNON.ContactMaterial(
    timmyCannonMat,
    sphereCannonMat,
    {
      restitution: 0.3,
      friction: 0,
    }
  );
  world.addContactMaterial(timmyContactMaterial);

  // const basketContactMaterial = new CANNON.ContactMaterial(
  //   basketCannonMat,
  //   sphereCannonMat,
  //   {
  //     restitution: 0.8,
  //   }
  // );
  // world.addContactMaterial(basketContactMaterial);

  spheres.push(sphereMesh);
  sphereBodies.push(sphereCannonBody);
});

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

renderer.setAnimationLoop(animate);
