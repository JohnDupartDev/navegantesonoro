// 1. Importación correcta desde la librería (Vite lo resuelve solo)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTF = (path) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      path, 
      (gltf) => resolve(gltf),
      undefined,
      (error) => reject(error) // Es buena práctica manejar el error
    );
  });
}

export const loadAudio = (path) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.AudioLoader();
    loader.load(path, (buffer) => {
      resolve(buffer);
    }, undefined, (err) => reject(err));
  });
}

export const loadVideo = (path) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.addEventListener('loadedmetadata', () => {
      video.setAttribute('playsinline', '');
      resolve(video);
    });
    video.onerror = (err) => reject(err);
    video.src = path;
  });
}

export const loadTexture = (path) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(path, (texture) => {
      resolve(texture);
    }, undefined, (err) => reject(err)); 
  });
}

export const loadTextures = (paths) => {
  const loader = new THREE.TextureLoader();
  const promises = paths.map(path => {
    return new Promise((resolve, reject) => {
      loader.load(path, (texture) => resolve(texture), undefined, (err) => reject(err));
    });
  });
  return Promise.all(promises);
}