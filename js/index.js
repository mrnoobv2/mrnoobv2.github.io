'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('ð¥° Dime tu nombre ð¥°');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' â¤';

const zomosNobios = () => {
  // alert('ðNow zomos ParTnEr ' + ${partner} + 'ð');
  alert(`ðNo te alejes de mi ${partner} ð`);
  alert('ð± Eres lo mejor que me pudo pasar ð±');
  location.href = "https://youtu.be/am1_JLFDFMw?t=19";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);