$(document).ready(function() {
  let banner = $('#banner');

  function ejecutarVH() {
    let vpaltura = $(window).height();
    banner.css('height', vpaltura);
  }
  ejecutarVH();
  $(window).resize(ejecutarVH);
});
