/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { loadVideo } from "./loader";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// ❌ CORRECCIÓN: Eliminamos la línea que estaba aquí afuera
// const THREE = window.MINDAR.IMAGE.THREE;

function RutaPlaza() {
  useEffect(() => {
    const start = async () => {
      // ✅ PASO 1: Verificación de seguridad y reintento
      if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.log("MindAR no detectado, reintentando...");
        setTimeout(start, 200); // Reintenta en 200ms si no ha cargado
        return;
      }

      // ✅ PASO 2: Definimos THREE localmente una vez que MindAR existe
      const THREE = window.MINDAR.IMAGE.THREE;

      const spinner = document.getElementById("spinner");
      if (spinner) spinner.style.display = "block";

      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-conteiner"),
        imageTargetSrc: 'https://res.cloudinary.com/dcpgesnzc/raw/upload/v1774737815/capitulo3.mind',
      });

      const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

      const loadAndShowVideo = async (videoUrl) => {
        const video = document.createElement("video");
        video.setAttribute('crossorigin', 'anonymous');
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('playsinline', 'true');
        video.src = videoUrl;
        video.load();

        await new Promise((resolve) => {
          video.oncanplaythrough = () => resolve();
        });

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBAFormat;

        const geometry = new THREE.PlaneGeometry(1, 1204 / 1980);
        const material = new THREE.MeshBasicMaterial({ map: texture });

        const plane = new THREE.Mesh(geometry, material);
        const plane1 = new THREE.Mesh(geometry, material);
        const plane2 = new THREE.Mesh(geometry, material);

        const anchore = mindarThree.addAnchor(0); 
        anchore.group.add(plane);
        
        const anchor = mindarThree.addAnchor(1); 
        anchor.group.add(plane1);

        const anchores = mindarThree.addAnchor(2); 
        anchores.group.add(plane2);

        const handlePlay = () => {
          if (video.paused) {
            video.play().catch(e => console.error("Error al reproducir:", e));
          }
        };

        anchor.onTargetFound = handlePlay;
        anchore.onTargetFound = handlePlay;
        anchores.onTargetFound = handlePlay;

        anchor.onTargetLost = () => {};
        anchore.onTargetLost = () => {};
        anchores.onTargetLost = () => {};

        video.addEventListener('ended', () => {
          video.currentTime = 0;
          video.play().catch(e => console.error("Error al re-iniciar:", e));
        });

        await mindarThree.start();
        if (spinner) spinner.style.display = "none";

        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
          cssRenderer.render(cssScene, camera);
        });
      };

      const createVideoSelectionButtons = () => {
        const container = document.createElement('div');
        container.className = 'video-selection-buttons';

        const buttonSpanish = document.createElement('button');
        buttonSpanish.textContent = 'Iniciar';
        buttonSpanish.classList.add('ButtonCla');
        buttonSpanish.addEventListener('click', () => {
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774736861/sp7x8xwawdnjhpt9zulz.mp4'); 
          adjustContainerStyle(); 
        });

        container.appendChild(buttonSpanish);
        document.querySelector("#ar-conteiner").appendChild(container);
      };

      const adjustContainerStyle = () => {
        const arContainer = document.querySelector("#ar-conteiner");
        const starts = document.querySelector("#starts");
        const volver = document.querySelector("#volver");
        const ardiv = document.querySelector("#ardiv");
        const btn = document.querySelector(".ButtonCla");

        if (arContainer) arContainer.style.background = "none";
        if (starts) starts.style.display = "flex";
        if (volver) volver.style.display = "none";
        if (ardiv) ardiv.style.display = "none";
        if (btn) btn.style.display = "none";
      };

      const iconPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";
      const htmlContent = document.createElement('div');
      htmlContent.innerHTML = `
       <div class="ico icon ">
          <div class='ic'>
            <div class="space gastro">
              <a class="flotar" href="https://wa.me/+573243314035" target="_blank">
                <img class="img-conteiner" src="${iconPath}whastapp.svg"/>
                <span class="texticon"> WhatsApp</span>
              </a>
            </div>
            <div class="space hotel">
              <a class="flotar" href="https://www.instagram.com/navegantesonorocolombia/" target="_blank">
                <img class="img-conteiner" src="${iconPath}instagram.png"/>
                <span class="texticon">Instagram</span>
              </a>
            </div>
            <div class="space planes">
              <a class="flotar" href="https://www.facebook.com/NaveganteSonoro" target="_blank">
                <img class="img-conteiner" src="${iconPath}facebook.png"/>
                <span class="texticon">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      `;

      const cssObject = new CSS3DObject(htmlContent.cloneNode(true));
      cssObject.position.set(0, -466, 0);
      cssObject.scale.set(2, 2, 2); 

      const cssAnchore = mindarThree.addCSSAnchor(0);
      const cssAnchor = mindarThree.addCSSAnchor(1);
      const cssAnchores = mindarThree.addCSSAnchor(2);
      
      cssAnchore.group.add(cssObject);
      cssAnchor.group.add(cssObject.clone());
      cssAnchores.group.add(cssObject.clone());

      createVideoSelectionButtons(); 
    };

    start(); 
  }, []);

  return null; 
}

export default RutaPlaza;