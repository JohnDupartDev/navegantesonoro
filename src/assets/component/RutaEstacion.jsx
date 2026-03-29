import React, { useEffect } from 'react';
import { loadVideo } from "./loader";
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// ❌ ELIMINADO: Ya no definimos THREE aquí afuera para evitar errores de 'undefined' en Vercel
// const THREE = window.MINDAR.IMAGE.THREE;

function RutaEstacion() {
  useEffect(() => {
    const start = async () => {
      // ✅ PASO 1: Verificación de seguridad y reintento si MindAR no ha cargado
      if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.log("MindAR no detectado en RutaEstacion, reintentando...");
        setTimeout(start, 200); 
        return;
      }

      // ✅ PASO 2: Definimos THREE localmente ahora que sabemos que existe
      const THREE = window.MINDAR.IMAGE.THREE;

      const spinner = document.getElementById("spinner");
      if (spinner) spinner.style.display = "block";

      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-conteiner"),
        // URL de Cloudinary para el archivo .mind del Capítulo 1
        imageTargetSrc: 'https://res.cloudinary.com/dcpgesnzc/raw/upload/v1774737805/capitulo1.mind',
      });

      const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

      const loadAndShowVideo = async (videoUrl) => {
        try {
          // 👉 CREACIÓN MANUAL DEL ELEMENTO DE VIDEO PARA EVITAR ERROR DE CORS
          const video = document.createElement("video");
          video.setAttribute('crossorigin', 'anonymous');
          video.setAttribute('webkit-playsinline', 'true');
          video.setAttribute('playsinline', 'true');
          video.src = videoUrl;
          video.load();

          // Esperamos a que el video esté listo para ser usado como textura
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

          // 👉 LÓGICA DE PERSISTENCIA: El video sigue sonando aunque se pierda la imagen
          const handlePlay = () => {
            if (video.paused) {
              video.play().catch(e => console.error("Error al reproducir:", e));
            }
          };

          anchor.onTargetFound = handlePlay;
          anchore.onTargetFound = handlePlay;
          anchores.onTargetFound = handlePlay;

          // Eliminamos la pausa en onTargetLost para mantener el audio/video corriendo
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
        } catch (error) {
          console.error("Error detallado cargando el video:", error);
          if (spinner) spinner.style.display = "none";
        }
      };

      const createVideoSelectionButtons = () => {
        const container = document.createElement('div');
        container.className = 'video-selection-buttons';

        const buttonSpanish = document.createElement('button');
        buttonSpanish.textContent = 'Iniciar';
        buttonSpanish.classList.add('ButtonCla');
        buttonSpanish.addEventListener('click', () => {
          // URL del video de Cloudinary para el Capítulo 1
          loadAndShowVideo('https://res.cloudinary.com/dcpgesnzc/video/upload/v1774736856/zcbc70rn4vet9l4g1dp3.mp4'); 
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

      // Contenido HTML en 3D con iconos de Cloudinary
      const iconPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";
      const htmlContent = document.createElement('div');
      htmlContent.innerHTML = `
       <div class="ico icon ">
       
          <div class='ic'>
            <div class="space gastro">
              <a class="flotar" href="https://wa.me/+573243314035" target="_blank">
                          <img class="img-conteiner" src="${iconPath}whastapp.svg"/>
                <span class="texticon"> WhastApp</span>
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
     
      const cssObject1 = new CSS3DObject(htmlContent.cloneNode(true));
      cssObject1.position.set(0, -466, 0);
      cssObject1.scale.set(2, 2, 2); 

      const cssObject2 = new CSS3DObject(htmlContent.cloneNode(true));
      cssObject2.position.set(0, -466, 0);
      cssObject2.scale.set(2, 2, 2); 

     
      const cssAnchore = mindarThree.addCSSAnchor(0);
      const cssAnchor = mindarThree.addCSSAnchor(1);
      const cssAnchores = mindarThree.addCSSAnchor(2);
      
      cssAnchore.group.add(cssObject);
      cssAnchor.group.add(cssObject1);
      cssAnchores.group.add(cssObject2);

      createVideoSelectionButtons(); 

    };

    start(); 

  }, []);

  return null; 
}

export default RutaEstacion;