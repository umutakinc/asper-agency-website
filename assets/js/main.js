// Aşağı doğru scroll ettikçe headerın arka planının boyanması fonksiyonu
function animateNavbar() {
    let $navbarHidden =  $('#navbarHidden');
    let screenHeight = $(document).height() - $(window).height(); // Ekranın yüksekliği hesaplandı (İçerik Dahil)
    let scrollPercent = (100 * $(window).scrollTop()) / screenHeight; // Kullanıcının y ekseninde yüzde ne kadar scroll ettiği

    $navbarHidden.css('height', `${scrollPercent}%`);
}

$(document).ready(function () {
    $(window).on('scroll', function() {
        animateNavbar();
    })
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});