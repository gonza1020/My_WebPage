const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const close = document.querySelector('.close');

close.addEventListener('click',()=>{
    contenedorLight.classList.toggle('show');
})

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

const aparecerImagen = (img)=>{

        imagenesLight.src= img;
        contenedorLight.classList.toggle('show');
}