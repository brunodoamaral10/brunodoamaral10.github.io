const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

function fecharGaleria() {
    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";
}

function abrirGaleria(src) {
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(0.7)";
    iGM.src = src
}

$(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior","smooth");
    })
});