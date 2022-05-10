// toggle navbar 

let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click',togleNav)
 function togleNav(){
    navToggler.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open')
}

// close nav 
document.addEventListener('click',(e)=>{
    if(e.target.closest(".nav-item")) {
        togleNav()
    }
})
