const image = document.querySelector('img');
const div = document.querySelector('#div-poster')
const colorThief = new ColorThief();

image.onload = function() {
  const colors = colorThief.getPalette(image, 2); // Obter as duas cores predominantes da imagem
  const color1 = colors[0];
  const color2 = colors[1];
  const [R1, G1, B1] = color1;
  const [R2, G2, B2] = color2;

  // Aplicar gradiente da esquerda para a direita com as duas cores predominantes e cor de fundo original
  document.body.style.background = `radial-gradient(circle at 0%, rgb(${R1}, ${G1}, ${B1}), rgb(${R2}, ${G2}, ${B2}) 30%, #1e1e1e 50%)`;
};
