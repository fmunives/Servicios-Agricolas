$(document).ready(function() {
  let numero = 1;
  let menuMovil = $('#menuMovilNav');
  $('#btnMenu').on('click', function(e) {
    e.preventDefault();
    if (numero == 1) {
      menuMovil.animate({ right: 0 }, 300, function() {
        numero = 0;
      });
    } else {
      menuMovil.animate({ right: '-100%' }, 300, function() {
        numero = 1;
      });
    }
  });

  $('.menu-movil .mobil-menu a').on('click', function() {
    menuMovil.animate({ right: '-100%' }, 300, function() {
      numero = 1;
    });
  });
});
