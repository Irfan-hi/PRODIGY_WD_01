const navbar = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
    if(window.screenY > 50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});