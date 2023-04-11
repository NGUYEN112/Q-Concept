$(window).ready(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$(window).on("load", function () {
  
  setInterval(() => {
    $(".maxims__border").toggleClass("collapse");
  }, 4800);
  $(".hasAni").addClass("animation");
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
        // if(index === 0 || index % 2 ==0) {
        //   element.target.classList.add('fadeInRight')
        // }else {
        //   element.target.classList.add('fadeInLeft')
        // }
        element.target.classList.add('fadeIn')
      }else {
        element.target.classList.remove('fadeIn')
        // if(index === 0 || index % 2 ==0 ) {
        //   element.target.classList.remove('fadeInRight')
        // }else {
        //   element.target.classList.remove('fadeInLeft')
        // }
      }
    })
  }
  const observer = new IntersectionObserver(lazyLoadingCallBack, observerObtions);
  const lazyElement = document.querySelectorAll('.lazy');

  lazyElement.forEach(ele => observer.observe(ele))
});

// let windowHeight = $(window).outerHeight();

// if (windowWidth > 768) {
//   $(window).scroll(function () {
//     let windowTop = $(window).scrollTop();
//     var indexEle = 1;
//     var breakPoint = 0;
//     var elementHeight =  $(".scale#item" + indexEle).height();
//     if((windowTop +  elementHeight - breakPoint) > maxEleHeight) {
//       indexEle += 1;
//       breakPoint = windowTop - max
//     }
//     console.log($(".scale#item-"+indexEle).height(),);
//   });
// }
