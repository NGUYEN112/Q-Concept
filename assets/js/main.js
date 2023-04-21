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


  //services
  const cursor = document.querySelector(".bg-cover-service");
  const windowWidth = window.outerWidth
  const windowHeight = window.outerHeight
  document.addEventListener("mousemove", function(e) {
      let posX = e.clientX
      let posY = e.clientY
      setTimeout(()=>{
          cursor.style.left = posX - (windowWidth/100*15) + "px";
          cursor.style.top = posY - (windowHeight/100*15) + "px";
          cursor.style.backgroundPositionX = -(posX - (windowWidth/100*15)) + "px"  ;
          cursor.style.backgroundPositionY = -(posY - (windowHeight/100*15)) + "px"  ;
      },200)
  });

  const observerServiceOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  }
  const observerServiceOptionsOut = {
    root: null,
    rootMargin: "0px",
    threshold: 0.44,
  }

  const bgCoverUrl = [
    "url('/assets/images/services/service-bg.jpg')",
    "url('/assets/images/services/service-bg-01.jpg')",
    "url('/assets/images/services/service-bg-02.jpg')",
    "url('/assets/images/services/service-bg-03.png')"
  ]


  const servicesCallBack = (services, observer) => {
    services.forEach((service,index) => {
      if(service.isIntersecting) {
        service.target.classList.add('active')
        let idEle = service.target.id
        let bgCover = document.querySelector(".bg-cover-service")
        switch (idEle) {
          case "logo":
            bgCover.style.backgroundImage = bgCoverUrl[0]
            break;
          case "brand":
            bgCover.style.backgroundImage = bgCoverUrl[1]
            break;
          case "package":
            bgCover.style.backgroundImage = bgCoverUrl[2]
            break;
          case "website":
            bgCover.style.backgroundImage = bgCoverUrl[3]
            break;
        }
      }
    })
  }
  const servicesCallBackOut = (services, observer) => {
    services.forEach((service,index) => {
      if(!service.isIntersecting) {
        service.target.classList.remove('active')
      }
    })
  }
  const observerService = new IntersectionObserver(servicesCallBack, observerServiceOptions);
  const observerServiceOut = new IntersectionObserver(servicesCallBackOut, observerServiceOptionsOut);
  const serviceElement = document.querySelectorAll('.main__services');
  
  serviceElement.forEach(ser => observerService.observe(ser))
  serviceElement.forEach(ser => observerServiceOut.observe(ser))
});
