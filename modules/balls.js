import * as THREE from "three";
import * as CANNON from "cannon-es";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

function getDarkColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export const createPlank = () => {
  const plankMesh = new THREE.Mesh(
    new THREE.BoxGeometry(3, 4, 0.1),
    new THREE.MeshStandardMaterial({
      color: getDarkColor(),
    })
  );
  plankMesh.receiveShadow = true;
  const plankCannonMat = new CANNON.Material();
  const plankCannonBody = new CANNON.Body({
    shape: new CANNON.Box(new CANNON.Vec3(1.5, 2, 0.001)),
    material: plankCannonMat,
  });
  return {
    plankMesh,
    plankCannonBody,
    plankCannonMat,
  };
};

export const createBall = () => {
  const ballMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.5),
    new THREE.MeshPhongMaterial({
      color: getDarkColor(),
    })
  );
  ballMesh.receiveShadow = true;
  const ballCannonMat = new CANNON.Material();
  const ballCannonBody = new CANNON.Body({
    shape: new CANNON.Sphere(1.5),
    material: ballCannonMat,
  });
  return {
    ballMesh,
    ballCannonBody,
    ballCannonMat,
  };
};

export const createSphere = () => {
  const sphereMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 50, 50),
    new THREE.MeshPhongMaterial({
      color: Math.random() * 0xffffff,
      shininess: 60,
    })
  );
  sphereMesh.castShadow = true;
  const sphereCannonMat = new CANNON.Material();
  const sphereCannonBody = new CANNON.Body({
    shape: new CANNON.Sphere(0.15),
    mass: 1,
    material: sphereCannonMat,
  });

  return {
    sphereCannonBody,
    sphereMesh,
    sphereCannonMat,
  };
};

const loadFbx = ({ loader, filename }) => {
  return new Promise(
    (res, rej) => {
      loader.load(filename, (fbx) => {
        res(fbx);
      });
    },
    undefined,
    (error) => rej(error)
  );
};

const TIMMY_ANIMATIONS = {
  walk: "walk",
  zombieDie: "zombie_die",
  die: "die",
  rightTurn: "right_turn",
  jab: "jab",
  twerk: "twerk",
  wave: "wave",
  dance: "dance",
};

const loadTimmyAnimations = async ({ loader, mixer }) => {
  let animations = {};
  const files = [
    {
      name: TIMMY_ANIMATIONS.walk,
      file: "strut_walk.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.zombieDie,
      file: "zombie_die.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.jab,
      file: "jab.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.rightTurn,
      file: "right_turn.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.die,
      file: "die.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.twerk,
      file: "twerk.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.wave,
      file: "wave.fbx",
    },
    {
      name: TIMMY_ANIMATIONS.dance,
      file: "dance.fbx",
    },
  ];
  for (let i = 0; i < files.length; i++) {
    const { file, name } = files[i];
    const fbx = await loadFbx({ loader, filename: file });
    const clip = fbx.animations[0];
    clip.name = name;
    const action = mixer.clipAction(clip);
    animations[name] = action;
  }

  return animations;
};

export const loadTimmy = async () => {
  let timmy;
  let mixer;

  const fbxLoader = new FBXLoader();
  fbxLoader.setPath("/assets/characters/timmy/");
  timmy = await loadFbx({
    loader: fbxLoader,
    filename: "timmy.fbx",
  });
  mixer = new THREE.AnimationMixer(timmy);
  const animations = await loadTimmyAnimations({
    loader: fbxLoader,
    mixer,
  });

  return { timmy, animations, mixer, TIMMY_ANIMATIONS };
};

export const loadAndCreateText = ({ color, text }) => {
  return new Promise((res, rej) => {
    const fontLoader = new FontLoader();
    let textMesh;
    fontLoader.load("/assets/fonts/supermario.json", (font) => {
      const textGeometry = new TextGeometry(text, {
        font,
        size: 0.4,
        height: 0.01,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color });

      // Create a mesh from the geometry and material
      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      res({ textMesh });
    });
  });
};
