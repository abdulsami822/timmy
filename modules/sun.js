import * as THREE from "three";

export const createSun = ({ radius }) => {
  const geometry = new THREE.SphereGeometry(radius, 30, 30);
  const material = new THREE.MeshBasicMaterial({
    color: "#FDB813",
  });
  const sun = new THREE.Mesh(geometry, material);
  sun.position.set(0, 0, 0);
  return sun;
};
