//--Funcion imprimir con JQuery

$(function () {
  $("#printbtn").click(function () {
    window.print();
  });
  //Muestro texto con hover
  $("#printbtn").hover(
    function () {
      $(this).append($("<span> Imprimir</span>"));
    },
    function () {
      $(this).find("span").last().remove();
    }
  );
  $("#printbtn.fade").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });
});
