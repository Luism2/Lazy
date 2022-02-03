const IsIntersecting = (entry) =>{
    return entry.isIntersecting;
};

const loadImage = (entry) =>{
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //carga de imagen 

    imagen.src = url;

    //console.log(nodo.nodeNAme);
    //quita la imagen 
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(IsIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
observer.observe (imagen)
};