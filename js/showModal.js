$(document).ready(function() {
  $('.imagen-proyecto').on('click', function() {
    let rutaImagen = $(this).attr('src');
    let modal = `
    <div class="modal" id="modal">
      <img src="${rutaImagen}" alt="imagen-proyecto">
      <div class="btn-cerrar" id="btnCerrar">
        <i class="fas fa-times"></i>
      </div>
    </div>
    `;

    $('#proyectos').after(modal);

    $('#btnCerrar').on('click', function() {
      $('#modal').remove();
    });
  });

  $(document).on('keyup', function() {
    $('#modal').remove();
  });
});
