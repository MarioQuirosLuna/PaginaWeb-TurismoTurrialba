let elementsNav = document.querySelectorAll('.btnNav');
let elementsMenu = document.querySelectorAll('.filter');
let elementCont = document.querySelectorAll('.cont');

function filter(){
    /**
     * Recorre elementos => Agrega eventos de click => Define el elemento activado
     */
    [...elementsNav].forEach(btnKey => btnKey.addEventListener('click',e => setActive(btnKey)));

    [...elementsMenu].forEach(btnKey => btnKey.addEventListener('click',e => setActive(btnKey)));
}


const setActive = element =>{
    /**
     * Define solo un elemento como activo
     */
    [...element.parentElement.children].forEach(sib => sib.classList.remove('active'));
    element.classList.add('active');
    changeFilter(element);
}

function changeFilter(element){
    var atributeName = element.getAttribute('data-name');
    if(atributeName == 'informacion'){
        showHide(atributeName);
    }else if(atributeName == 'todos'){
        showAllElement(atributeName);
    }else if(atributeName == 'paisajes'){
        showHide(atributeName);
    }else if(atributeName == 'fauna'){
        showHide(atributeName);
    }else if(atributeName == 'flora'){
        showHide(atributeName);
    }
}

function showHide(element){
    for(let k = 0; k < elementCont.length; k++){
        if(elementCont[k].getAttribute('name') !== element){
            elementCont[k].style.display='none';
        }else{
            elementCont[k].style.display='';
        }
    }
}

function showAllElement(element){
    for(let k = 0; k < elementCont.length; k++){
        elementCont[k].style.display='';
    }
}

window.addEventListener('load',function(){
    filter();
})