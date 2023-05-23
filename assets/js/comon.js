$(window).ready(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
$(window).on("load", function () {
    const logoSrcWhite = "./assets/images/logo.png";
    const logoSrcBlack = "./assets/images/logo-revert.png"
    setInterval(() => {
        $(".maxims__border").toggleClass("collapse");
    }, 4800);
    $(".hasAni").addClass("animation");
    $(".navBar__hambuger").click(function () {
        $(".navBar__hambuger").toggleClass("active");
        $(".navBar__fixedBar").toggleClass("active");
        if ($(".navBar__hambuger").hasClass("active")) {
            $("#logoCommon").attr("src", logoSrcWhite);
        } else {
            $("#logoCommon").attr("src", logoSrcBlack);
        }
    })
});
