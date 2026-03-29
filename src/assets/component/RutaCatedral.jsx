import React, { useEffect } from 'react';
import { loadVideo } from "./loader";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const THREE = window.MINDAR.IMAGE.THREE;

function RutaCatedral() {
  useEffect(() => {
    const start = async () => {
      document.getElementById("spinner").style.display = "block";
      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-conteiner"),
        // URL de Cloudinary para el archivo .mind del Capítulo 6
        imageTargetSrc: 'https://res.cloudinary.com/dcpgesnzc/raw/upload/v1774737829/capitulo6.mind',
      });

      const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

      const loadAndShowVideo = async (videoUrl) => {
        // 👉 CREACIÓN MANUAL DEL ELEMENTO DE VIDEO PARA EVITAR ERROR TEXIMAGE2D (CORS)
        const video = document.createElement("video");
        video.setAttribute('crossorigin', 'anonymous');
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('playsinline', 'true');
        video.src = videoUrl;
        video.load();

        // Esperamos a que el video esté listo
        await new Promise((resolve) => {
          video.oncanplaythrough = () => resolve();
        });

        const texture = new THREE.VideoTexture(video);
        // Filtros para evitar errores de seguridad y potencias de dos
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBAFormat;

        const geometry = new THREE.PlaneGeometry(1, 1204 / 1980);
        const material = new THREE.MeshBasicMaterial({ map: texture });

        const plane = new THREE.Mesh(geometry, material);
        plane.geometry.scale(1, 1, 1);

        const plane1 = new THREE.Mesh(geometry, material);
        plane1.geometry.scale(1, 1, 1);

        const plane2 = new THREE.Mesh(geometry, material);
        plane2.geometry.scale(1, 1, 1);

        const anchore = mindarThree.addAnchor(0); 
        anchore.group.add(plane);
        
        const anchor = mindarThree.addAnchor(1); 
        anchor.group.add(plane1);

        const anchores = mindarThree.addAnchor(2); 
        anchores.group.add(plane2);

        // 👉 LÓGICA DE PERSISTENCIA: El audio y video siguen aunque se pierda el target
        const handlePlay = () => {
          if (video.paused) {
            video.play().catch(e => console.log("Esperando interacción:", e));
          }
        };

        anchor.onTargetFound = handlePlay;
        anchore.onTargetFound = handlePlay;
        anchores.onTargetFound = handlePlay;

        // OnTargetLost queda vacío para que no se pause la historia
        anchor.onTargetLost = () => {};
        anchore.onTargetLost = () => {};
        anchores.onTargetLost = () => {};

        video.addEventListener('ended', () => {
          video.currentTime = 0;
          video.play();
        });

        await mindarThree.start();
        document.getElementById("spinner").style.display = "none";

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
          // URL del video .mov de Cloudinary para el Capítulo 6
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774733685/capitulo6ns_qoblmh.mov'); 
          adjustContainerStyle(); 
        });

        const buttonEnglish = document.createElement('button');
        buttonEnglish.textContent = 'English';
        buttonEnglish.classList.add('ButtonClass');
        buttonEnglish.addEventListener('click', () => {
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774733685/capitulo6ns_qoblmh.mov'); 
          adjustContainerStyle(); 
        });

        container.appendChild(buttonSpanish);
        document.querySelector("#ar-conteiner").appendChild(container);
      };

      const adjustContainerStyle = () => {
        document.querySelector("#ar-conteiner").style.background = "none";
        document.querySelector("#starts").style.display = "flex";
        document.querySelector("#volver").style.display = "none";
        document.querySelector("#ardiv").style.display = "none";
        document.querySelector(".ButtonCla").style.display = "none";
      };

      const htmlContent = document.createElement('div');
      const iconPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";
      
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

      const cssObject = new CSS3DObject(htmlContent);
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

export default RutaCatedral;