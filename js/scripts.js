/*CÓDIGO PARA SACAR MENU DEL LATERAL */
const btnMenu = document.getElementById("btn-menu");
const nav  = document.getElementById("nav");

btnMenu.addEventListener("click", () => {

    nav.classList.toggle("mostrar");
   
});



/*CÓDIGO PARA HACER LA VENTANA MODAL*/

//en la variable openModal se guarda el valor del boton: "contactanos"
const openModal = document.querySelector('.hero__cta');
//en la variable modal se guarda el elemento section
const modal = document.querySelector('.modal');
// en la variable closeModal se guarda el elemento a de cerrar el modal
const closeModal = document.querySelector('.modal__close');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    
});



