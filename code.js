const mobileMenu = document.querySelector('.mobile-Button');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');

    if(navMenu.classList.contains('nav-menu_visible')){
        mobileMenu.setAttribute("aria-label", "Cerrar menú");
    }else{
            mobileMenu.setAttribute("aria-label", "Abrir menú");
        }
    
})


//google maps

function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}