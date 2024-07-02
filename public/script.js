const title = document.getElementById('title');
const startDate = new Date('2024-04-26');
const endDate = new Date('2024-08-22');
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
const today = new Date();
const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
title.innerText = `Recorrido (día ${daysPassed} de ${totalDays})`;

const herFace = document.getElementById('her-face');
const myFace = document.getElementById('my-face');

// Coordenadas de las posiciones iniciales y finales en el mapa
const startX = 0.9 * window.innerWidth;
const startY = 0.01 * window.innerHeight;
const endX = 0 * window.innerWidth;
const endY = 0.9 * window.innerHeight;

// Calcular la posición actual de la imagen de ella
const fractionOfJourney = daysPassed / totalDays;
const currentX = startX + (endX - startX) * fractionOfJourney;
const currentY = startY - (startY - endY) * fractionOfJourney;  // Invertir Y para el recorrido

// Posicionar las imágenes
herFace.style.left = `${currentX}px`;
herFace.style.top = `${currentY}px`;
myFace.style.left = `${endX}px`;
myFace.style.top = `${endY}px`;