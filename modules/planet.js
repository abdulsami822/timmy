import * as THREE from "three";

export const createPlanet = ({ radius, texture }) => {
  const TextureLoader = new THREE.TextureLoader();
  const geometry = new THREE.SphereGeometry(radius, 10, 10);
  const material = new THREE.MeshStandardMaterial({
    map: TextureLoader.load(texture),
  });
  const planet = new THREE.Mesh(geometry, material);
  return planet;
};
