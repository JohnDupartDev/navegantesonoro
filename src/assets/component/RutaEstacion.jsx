import React, { useEffect } from 'react';
import { loadVideo } from "./loader";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

function RutaEstacion() {
  useEffect(() => {
    const start = async () => {
      
      // 👉 PASO 1: Verificación de seguridad (MindAR debe existir)
      if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.log("MindAR no detectado aún, reintentando lógica 3D...");
        setTimeout(start, 500); 
        return;
      }

      // ✅ PASO 2: Definimos THREE una vez que MindAR es real
      const THREE = window.MINDAR.IMAGE.THREE;
      const spinner = document.getElementById("spinner");

      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-conteiner"),
        imageTargetSrc: 'https://res.cloudinary.com/dcpgesnzc/raw/upload/v1774737805/capitulo1.mind',
      });

      const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

      // 👉 PASO 3: Definimos la función de carga de video DENTRO para que use el THREE correcto
      const loadAndShowVideo = async (videoUrl) => {
        try {
          if (spinner) spinner.style.display = "block";

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
            if (video.paused) video.play().catch(e => console.error(e));
          };

          anchor.onTargetFound = handlePlay;
          anchore.onTargetFound = handlePlay;
          anchores.onTargetFound = handlePlay;

          anchor.onTargetLost = () => {};
          anchore.onTargetLost = () => {};
          anchores.onTargetLost = () => {};

          video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
          });

          await mindarThree.start();
          if (spinner) spinner.style.display = "none";

          renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
            cssRenderer.render(cssScene, camera);
          });
        } catch (error) {
          console.error("Error en la carga:", error);
          if (spinner) spinner.style.display = "none";
        }
      };

      // 👉 PASO 4: Solo creamos los botones cuando MindAR y THREE están listos
      const createVideoSelectionButtons = () => {
        const arContainer = document.querySelector("#ar-conteiner");
        if (!arContainer || document.querySelector(".ButtonCla")) return;

        const container = document.createElement('div');
        container.className = 'video-selection-buttons';

        const buttonSpanish = document.createElement('button');
        buttonSpanish.textContent = 'Iniciar';
        buttonSpanish.classList.add('ButtonCla');
        
        // Ahora loadAndShowVideo ya conoce a THREE perfectamente
        buttonSpanish.onclick = () => {
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774736856/zcbc70rn4vet9l4g1dp3.mp4'); 
          adjustContainerStyle(); 
        };

        container.appendChild(buttonSpanish);
        arContainer.appendChild(container);
      };

      const adjustContainerStyle = () => {
        const arContainer = document.querySelector("#ar-conteiner");
        if (arContainer) arContainer.style.background = "none";
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
            <div class="space gastro"><a class="flotar" href="https://wa.me/+573243314035" target="_blank"><img class="img-conteiner" src="${iconPath}whastapp.svg"/></a></div>
            <div class="space hotel"><a class="flotar" href="https://www.instagram.com/navegantesonorocolombia/" target="_blank"><img class="img-conteiner" src="${iconPath}instagram.png"/></a></div>
            <div class="space planes"><a class="flotar" href="https://www.facebook.com/NaveganteSonoro" target="_blank"><img class="img-conteiner" src="${iconPath}facebook.png"/></a></div>
          </div>
        </div>`;
      
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

export default RutaEstacion;