import { registerImage } from "./lazy";

const Minimun = 1;
const Maximun = 98;

const random = () => Math.floor(Math.random() * (Maximun - Minimun)) + Minimun;

const createImageNode = () => {
    const container =document.createElement('div')
    container.className = 'p-4';

 const imagen = document.createElement("img");
 imagen.className = "mx-auto";
 imagen.width = "500";
    imagen.dataset.src = 'https://source.unsplash.com/random';

container.appendChild(imagen);

return container;

};
const nuevaImagen = createImageNode();
const mountNode = document.getElementById ("images");

const addbutton = document.querySelector("button");

const addImagen = () => {
    const newImagen = createImageNode();
    mountNode.append(newImagen);
    registerImage(newImagen);
};
addbutton.addEventListener("click", addImagen);