import React, { useEffect } from 'react';
import { loadVideo } from "./loader";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// ❌ ELIMINADO: Ya no definimos THREE aquí afuera para evitar que falle en el deploy de Vercel
// const THREE = window.MINDAR.IMAGE.THREE;

function RutaCasa() {
  useEffect(() => {
    const start = async () => {
      // ✅ PASO 1: Verificación de seguridad y reintento si MindAR no ha cargado aún
      if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.log("Esperando a que MindAR cargue en el navegador...");
        setTimeout(start, 200); 
        return;
      }

      // ✅ PASO 2: Definimos THREE localmente ahora que sabemos que existe
      const THREE = window.MINDAR.IMAGE.THREE;

      const spinner = document.getElementById("spinner");
      if (spinner) spinner.style.display = "block";

      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-conteiner"),
        // URL de Cloudinary para el .mind del Capítulo 4
        imageTargetSrc: 'https://res.cloudinary.com/dcpgesnzc/raw/upload/v1774737820/capitulo4.mind',
      });

      const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

      const loadAndShowVideo = async (videoUrl) => {
        // 👉 USAMOS CREACIÓN MANUAL PARA EVITAR ERRORES DE CORS EN CLOUDINARY
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

        // 👉 LÓGICA DE PERSISTENCIA: El video NO se pausa al perder el target
        const handlePlay = () => {
          if (video.paused) {
            video.play().catch(e => console.error("Error al reproducir:", e));
          }
        };

        anchor.onTargetFound = handlePlay;
        anchore.onTargetFound = handlePlay;
        anchores.onTargetFound = handlePlay;

        // OnTargetLost vacío para que el audio/video siga fluyendo
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
          // URL de Cloudinary para el video .mov del Capítulo 4
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774736925/vylc3xwrvrxzvqjosxyh.mov'); 
          adjustContainerStyle(); 
        });

        const buttonEnglish = document.createElement('button');
        buttonEnglish.textContent = 'English';
        buttonEnglish.classList.add('ButtonClass');
        buttonEnglish.addEventListener('click', () => {
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774736925/vylc3xwrvrxzvqjosxyh.mov'); 
          adjustContainerStyle(); 
        });

        container.appendChild(buttonSpanish);
        // container.appendChild(buttonEnglish);

        document.querySelector("#ar-conteiner").appendChild(container);
      };

      const adjustContainerStyle = () => {
        document.querySelector("#ar-conteiner").style.background = "none";
        document.querySelector("#starts").style.display = "flex";
        document.querySelector("#volver").style.display = "none";
        document.querySelector("#ardiv").style.display = "none";
        const btn = document.querySelector(".ButtonCla");
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

export default RutaCasa;