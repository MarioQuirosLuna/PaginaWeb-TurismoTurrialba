
let menu = document.getElementById('links-nav');
let open = document.getElementById('menu-burger');
let close = true;

function opener(){
    if(close){
        menu.style.width = '50vw'
        close = false
    }else{
        menu.style.width = '0%'
        menu.style.overflow = 'hidden'
        close = true
    }
}

window.addEventListener('click', function(e){
    if(!close){
        let span = document.querySelector('span')
        if(e.target !== span && e.target !== open){ //Touch outside, close menu
            menu.style.width = '0%'
            menu.style.overflow = 'hidden'
            close = true
        }
    }
})

window.addEventListener('resize', function(){
    if(screen.width>=700){
        close = true
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
})

open.addEventListener('click',function(){
    opener();
});