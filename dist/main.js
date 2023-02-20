'use strict';
const formulario = document.getElementById('form');

formulario.addEventListener("submit", eventoform)

const precio = 400000;

function eventoform(e) {
   e.preventDefault();
   const cantidad = document.getElementById('cantidad').value;
   const total = cantidad * precio;
   const resp = document.getElementById('print');
   const color = document.getElementById('color').value;

   if (color === 'azul') {
      resp.innerHTML = `
      <li>Total:$</li>${total}
      <li>Cantidad:</li> ${cantidad}
      <li>Color:</li>
      <div class="color_azul"></div>`;
   } else if (color === 'rojo') {
      resp.innerHTML = `
      <li>Total:$</li>${total}
      <li>Cantidad:</li> ${cantidad}
      <li>Color:</li>
      <div class="color_rojo"></div>`;
   } else if (color === 'morado') {
      resp.innerHTML = `
      <li>Total:$</li>${total}
      <li>Cantidad:</li> ${cantidad}
      <li>Color:</li>
      <div class="color_morado"></div>`;
   } else if (color === 'negro') {
      resp.innerHTML = `
      <li>Total:$</li>${total}
      <li>Cantidad:</li> ${cantidad}
      <li>Color:</li>
      <div class="color_negro"></div>`;
   }
}



