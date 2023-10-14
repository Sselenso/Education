$(document).ready(function () {
  $(".menu__wrapper-menu").click(function (event) {
    event.stopPropagation();
    $(this).toggleClass("active");
    $(this).find(".menu__wrapper-item").slideToggle();
  });

  $(".menu__wrapper-item").click(function (event) {
    if ($(".menu__wrapper-menu").hasClass("active")) {
      event.stopPropagation();
    }
  });

  $(document).click(function () {
    $(".menu__wrapper-menu").removeClass("active");
    $(".menu__wrapper-item").slideUp();
  });
});
