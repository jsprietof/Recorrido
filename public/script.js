const title = document.getElementById('title');
const startDate = new Date('2024-04-26');
const endDate = new Date('2024-08-22');
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
const today = new Date();
const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
title.innerText = `Recorrido (día ${daysPassed} de ${totalDays})`;

const herFace = document.getElementById('her-face');
const myFace = document.getElementById('my-face');
const mapContainer = document.getElementById('map-container');

// Ajustar el tamaño y la posición de las imágenes en función del tamaño del mapa
function adjustFacePositions() {
    const mapRect = mapContainer.getBoundingClientRect();
    const startX = mapRect.width * 0.9;
    const startY = mapRect.height * 0.01;
    const endX = mapRect.width * 0;
    const endY = mapRect.height * 0.9;
    
    const fractionOfJourney = daysPassed / totalDays;
    const currentX = startX + (endX - startX) * fractionOfJourney;
    const currentY = startY + (endY - startY) * fractionOfJourney;

    // Posicionar las imágenes
    herFace.style.left = `${currentX}px`;
    herFace.style.top = `${currentY}px`;
    myFace.style.left = `${endX}px`;
    myFace.style.top = `${endY}px`;

    // Ajustar el tamaño de las caras en función del tamaño del contenedor del mapa
    const faceSize = mapRect.width * 0.05; // Ajustar el tamaño según el ancho del mapa
    herFace.style.width = `${faceSize}px`;
    herFace.style.height = `${faceSize}px`;
    myFace.style.width = `${faceSize}px`;
    myFace.style.height = `${faceSize}px`;
}

// Ajustar las posiciones al cargar la página y al redimensionar la ventana
window.addEventListener('load', adjustFacePositions);
window.addEventListener('resize', adjustFacePositions);
