$(document).ready(function () {


    // MOBILE MENU

    let mobileMenu = document.querySelector('.nav-gamburger-menu');
    let mainMenu = document.querySelector(".navigation");


    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle("active-menu");
        if (mobileMenu.classList.contains("active-menu")) {
            mainMenu.classList.add("active-menu");
        } else {
            mainMenu.classList.remove("active-menu");
        }
    })

    // CLOSE MOBILE MENU

    let closeM = document.querySelector('.close')


    function closeModal() {
        mainMenu.classList.remove("active-menu")

    }

    closeM.addEventListener("click", closeModal)




    // SLIDER


    $('.slider-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    
})
