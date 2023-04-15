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

  $(".navBar__hambuger").click(function(){
    $(".navBar__hambuger").toggleClass("active");
    $(".navBar__fixedBar").toggleClass("active");
    if($(".navBar__hambuger").hasClass("active")) {
      $("#logoCommon").attr("src",logoSrcWhite);
    }else {
      $("#logoCommon").attr("src",logoSrcBlack);
    }
  })
  // auto play video bg 
  if(document.getElementById("video1") && document.getElementById("video2") && document.getElementById("video3") && document.getElementById("video4")){
    document.getElementById("video1").addEventListener("ended", function(){ playVideo("video2","video1"); });
    document.getElementById("video2").addEventListener("ended", function(){ playVideo("video3","video2"); });
    document.getElementById("video3").addEventListener("ended", function(){ playVideo("video4","video3"); });
    document.getElementById("video4").addEventListener("ended", function(){ playVideo("video1","video4"); });
  }
    
  function playVideo(videoID,currentVideoID){
    let videoElement = document.getElementById(videoID);
    let currentVideo = document.getElementById(currentVideoID)
    currentVideo.classList.add("hide")
    videoElement.classList.remove("hide")
    videoElement.play();
  }

//  lazy load image 
  const observerObtions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  }
  const lazyLoadingCallBack = (elements, observer) => {
    elements.forEach((element,index) => {
      if(element.isIntersecting) {
        const img = element.target.getElementsByTagName("img")[0]
        const dataSrc = img.dataset.src
        img.setAttribute('src',dataSrc)
        img.classList.add("fadeIn")
        element.target.classList.add('fadeIn')
      }else {
        element.target.classList.remove('fadeIn')
      }
    })
  }
  const observer = new IntersectionObserver(lazyLoadingCallBack, observerObtions);
  const lazyElement = document.querySelectorAll('.lazy');

  lazyElement.forEach(ele => observer.observe(ele))
});
