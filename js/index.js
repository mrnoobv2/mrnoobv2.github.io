'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('🥰 Dime tu nombre 🥰');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' ❤';

const zomosNobios = () => {
  // alert('💞Now zomos ParTnEr ' + ${partner} + '💞');
  alert(`💞No te alejes de mi ${partner} 💞`);
  alert('😱 Eres lo mejor que me pudo pasar 😱');
  location.href = "https://youtu.be/am1_JLFDFMw?t=19";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);