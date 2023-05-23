$(window).on("load", function () {
  // animation 
  setTimeout(()=> {
    document.querySelector(".project__title").classList.add("fadeInX")
    document.querySelector(".project__list").classList.add("fadeInX")
  },1000)
  

  //  lazy load image 
  const observerObtions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  }
  const lazyLoadingCallBack = (elements, observer) => {
    elements.forEach((element, index) => {
      if (element.isIntersecting) {
        const img = element.target.getElementsByTagName("img")[0]
        const dataSrc = img.dataset.src
        img.setAttribute('src', dataSrc)
        img.classList.add("fadeIn")
        element.target.classList.add('fadeIn')
      } else {
        element.target.classList.remove('fadeIn')
      }
    })
  }
  const observer = new IntersectionObserver(lazyLoadingCallBack, observerObtions);
  const lazyElement = document.querySelectorAll('.lazy');

  lazyElement.forEach(ele => observer.observe(ele))
  
})

function closePop() {
  document.querySelector(".popup.project-detail").classList.remove("appear")
  document.querySelector(".popup__bg").classList.remove("appear")
}

function openPop() {
  document.querySelector(".popup.project-detail").classList.add("appear")
  setTimeout(()=> {
    document.querySelector(".popup__bg").classList.add("appear")
  },500)
}


