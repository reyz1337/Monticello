$(document).ready(function(){
    $('.list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true, 
        autoplay: true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
  });

  function initMap() {
    const CENTER = { lat: 40.67469454302943, lng: -73.90019021540337 };
    const MAP = new google.maps.Map(document.getElementById("map"), {
        center: CENTER,
        zoom: 13
      });
      let svg_marker = {
        url: '../img/google-map-marker.svg'
      };
      let marker = new google.maps.Marker({
        position: { lat: 40.67939822201896, lng: -73.89861065122321},
        map: MAP,
        animation: google.maps.Animation.DROP,
        icon: svg_marker
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    function menu (){
        const BTN = document.querySelector('#menu-btn');
        const MENU = document.querySelector('.navigation');
        const BODY = document.body;
        BTN.addEventListener('click', function (){
            MENU.classList.toggle('navigation_active');
            BODY.classList.toggle('noscroll');
        });
    }
    menu();
});