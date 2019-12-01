$(document).ready(function() {
  let menu = $('#menuClon');
  $(window).on('scroll', function() {
    let proyectoSize = $('#proyectos').offset().top / 2;
    let windowTop = $(window).scrollTop();

    if (windowTop >= proyectoSize) {
      menu.css('margin-top', 0);
    } else if (windowTop <= proyectoSize) {
      menu.css('margin-top', '-68px');
    }
  });
});
