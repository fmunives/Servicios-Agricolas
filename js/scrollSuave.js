$(document).ready(function() {
  let volverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function() {
    let proyectoSize = $('#proyectos').offset().top;
    let windowTop = $(window).scrollTop();
    if (windowTop >= proyectoSize) {
      volverArriba.css('right', '20px');
    } else if (windowTop <= proyectoSize) {
      volverArriba.css('right', '-60px');
    }
  });

  $('a.volver-arriba').on('click', function(e) {
    e.preventDefault();
    if ($(window).scrollTop() != 0) {
      $('html, body')
        .stop()
        .animate({ scrollTop: 0 }, 1000);
    }
  });

  $('a.scroll-suave').on('click', function(e) {
    e.preventDefault();
    let sectionOffsetTop = $($(this).attr('href')).offset().top;
    $('html, body')
      .stop()
      .animate({ scrollTop: sectionOffsetTop }, 1000);
  });

  $('a.scroll-acercaDe').on('click', function(e) {
    e.preventDefault();
    let sectionOffsetTop = $($(this).attr('href')).offset().top - 120;
    $('html, body')
      .stop()
      .animate({ scrollTop: sectionOffsetTop }, 1000);
  });
});
