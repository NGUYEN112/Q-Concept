$(window).ready(function () {
  let windowHeight = window.outerHeight;
  $(".main").css("min-height", windowHeight - 120);
  setInterval(() => {
    $(".maxims__border").toggleClass("collapse");
  }, 4800);
  $(".hasAni").addClass("animation");
});
$(".navBottom__project").click(function () {
  console.log("abc");
});
