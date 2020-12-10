 //Artur`s scripts

// Katalog images
let k_img = document.querySelectorAll('.katalog_image');
// katalog text "Детальніше"
let k_p = document.querySelectorAll(".katalog_button");
//Katalog div
let container = document.querySelectorAll('.container2')

for(let i=0; i<container.length;i++){

    container[i].addEventListener('mouseenter',function(){
        k_img[i].style.filter = "blur(5px) brightness(0.55)"
        k_p[i].style.display = "block"
        k_p[i].style.opacity = "1"
        k_p[i].style.border = "2px solid rgba(255, 255, 255, 1)"

    })

    container[i].addEventListener('mouseleave',function(){
        k_img[i].style.filter = ""
        k_p[i].style.opacity = "0"
        k_p[i].style.border = "2px solid rgba(255, 255, 255, 0)"
        k_p[i].style.display = "none"


    })
}


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});
