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
        imageTargetSrc: '/images/capitulo6.mind',
      });

      const { renderer, cssRenderer, scene, cssScene, camera } = mindarThree;

      const loadAndShowVideo = async (videoUrl) => {
        const video = await loadVideo(videoUrl);
        const texture = new THREE.VideoTexture(video);
        const geometry = new THREE.PlaneGeometry(1, 1204 / 1980);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        material.map.minFilter = THREE.LinearFilter;

        const plane = new THREE.Mesh(geometry, material);
        plane.geometry.scale(1, 1, 1);

        const plane1 = new THREE.Mesh(geometry, material);
        plane.geometry.scale(1, 1, 1);

        const plane2 = new THREE.Mesh(geometry, material);
        plane.geometry.scale(1, 1, 1);


        const anchore = mindarThree.addAnchor(0);  // Corregido
        anchore.group.add(plane);
        
        const anchor = mindarThree.addAnchor(1);  // Corregido
        anchor.group.add(plane1);

        const anchores = mindarThree.addAnchor(2);  // Corregido
        anchores.group.add(plane2);

        anchor.onTargetFound = () => {
          video.play();
        };
        anchor.onTargetLost = () => {
          // Aquí puedes agregar lógica si lo necesitas
        };

        anchore.onTargetFound = () => {
          video.play();
        };
        anchore.onTargetLost = () => {
          // Aquí puedes agregar lógica si lo necesitas
        };

        anchores.onTargetFound = () => {
          video.play();
        };
        anchores.onTargetLost = () => {
          // Aquí puedes agregar lógica si lo necesitas
        };

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
          loadAndShowVideo('/videos/capitulo6ns.mp4'); // Cargar video en español
          adjustContainerStyle(); // Ajustar estilos del contenedor
        });

        const buttonEnglish = document.createElement('button');
        buttonEnglish.textContent = 'English';
        buttonEnglish.classList.add('ButtonClass');
        buttonEnglish.addEventListener('click', () => {
          loadAndShowVideo('/videos/capitulo6ns.mp4'); // Cargar video en inglés
          adjustContainerStyle(); // Ajustar estilos del contenedor
        });

        container.appendChild(buttonSpanish);
        // container.appendChild(buttonEnglish);

        document.querySelector("#ar-conteiner").appendChild(container);
      };

      // Función para ajustar estilos del contenedor
      const adjustContainerStyle = () => {
        document.querySelector("#ar-conteiner").style.background = "none";
        document.querySelector("#starts").style.display = "flex";
        document.querySelector("#volver").style.display = "none";
        document.querySelector("#ardiv").style.display = "none";
        document.querySelector(".ButtonCla").style.display = "none";
      };

      // Crear y añadir el contenido HTML en 3D
      const htmlContent = document.createElement('div');
      htmlContent.innerHTML = `
       <div class="ico icon ">
       
          <div class='ic'>
            <div class="space gastro">
              <a class="flotar" href="https://wa.me/+573243314035" target="_blank">
                          <img class="img-conteiner" src="/image/whastapp.svg"/>
                <span class="texticon"> WhastApp</span>
              </a>
            </div>

            <div class="space hotel">
              <a class="flotar" href="https://www.instagram.com/navegantesonorocolombia/" target="_blank">
                          <img class="img-conteiner" src="/image/instagram.png"/>
                <span class="texticon">Instagram</span>
              </a>
            </div>

            <div class="space planes">
              <a class="flotar" href="https://www.facebook.com/NaveganteSonoro" target="_blank">
                          <img class="img-conteiner" src="/image/facebook.png"/>
                <span class="texticon">Facebook</span>
              </a>
            </div>
            
          </div>
        </div>
        
      `;
      const ico = htmlContent.querySelector('.ico');
      const cssObject = new CSS3DObject(htmlContent);
      cssObject.position.set(0, -466, 0);
      cssObject.scale.set(2, 2, 2); // Ajusta la posición debajo del video
     
      const cssObject1 = new CSS3DObject(htmlContent);
      cssObject1.position.set(0, -466, 0);
      cssObject1.scale.set(2, 2, 2); // Ajusta la

      const cssObject2 = new CSS3DObject(htmlContent);
      cssObject2.position.set(0, -466, 0);
      cssObject2.scale.set(2, 2, 2); // Ajusta la

     
      const cssAnchore = mindarThree.addCSSAnchor(0);
      const cssAnchor = mindarThree.addCSSAnchor(1);
      const cssAnchores = mindarThree.addCSSAnchor(2);
      cssAnchore.group.add(cssObject);
      cssAnchor.group.add(cssObject1);
      cssAnchores.group.add(cssObject2);

      createVideoSelectionButtons(); // Llamar función para crear los botones de selección de video al iniciar

    };

    start(); // Llamar función principal para iniciar la configuración inicial

  }, []);

  return null; // No renderizamos nada directamente en este componente
}

export default RutaCatedral;
