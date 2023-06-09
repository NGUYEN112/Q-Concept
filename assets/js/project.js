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
  document.querySelector("body").classList.remove("disable-scroll")
  clearPopupData()
}

function openPop() {
  document.querySelector(".popup.project-detail").classList.add("appear")
  document.querySelector("body").classList.add("disable-scroll")
  setTimeout(()=> {
    document.querySelector(".popup__bg").classList.add("appear")
  },500)
}

const projectDetailData = [
  {
    "name" : "project 1" ,
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-01.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project-02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project-03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project-04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project-05.png"
      }
    ],
    "imgMain" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
    ],
    "prjectDesc" : [
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
    ]
  },
  {
    "name" : "project 2" ,
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-02.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project-01.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project-03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project-04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project-05.png"
      }
    ],
    "imgMain" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project01/mainImg02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project01/mainImg03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project01/mainImg04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project01/mainImg05.png"
      },
    ],
    "prjectDesc" : [
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
    ]
  },
  {
    "name" : "project 3" ,
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-03.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project-02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project-01.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project-04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project-05.png"
      }
    ],
    "imgMain" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project01/mainImg02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project01/mainImg03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project01/mainImg04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project01/mainImg05.png"
      },
    ],
    "prjectDesc" : [
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
    ]
  },
  {
    "name" : "project 4" ,
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-04.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project-02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project-03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project-01.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project-05.png"
      }
    ],
    "imgMain" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project01/mainImg02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project01/mainImg03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project01/mainImg04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project01/mainImg05.png"
      },
    ],
    "prjectDesc" : [
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
    ]
  },
  {
    "name" : "project 5" ,
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-05.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project-02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project-03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project-04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project-01.png"
      }
    ],
    "imgMain" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project01/mainImg01.png"
      },
      {
        "id": 2,
        "src": "./assets/images/projects/project01/mainImg02.png"
      },
      {
        "id": 3,
        "src": "./assets/images/projects/project01/mainImg03.png"
      },
      {
        "id": 4,
        "src": "./assets/images/projects/project01/mainImg04.png"
      },
      {
        "id": 5,
        "src": "./assets/images/projects/project01/mainImg05.png"
      },
    ],
    "prjectDesc" : [
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
      "Giới thiệu dự án",
    ]
  }
]
const windowWidth = window.outerWidth
function renderProject(id) {
  $('#pop-content').animate({
    scrollTop: 0
  }, 500);
  document.querySelector(".projectname").innerHTML = projectDetailData[id].name
  renderImgListOfProject(id)
  renderProjectDesc(id)
  renderListProject(id)
  animationAppear(id)
}

function renderImgListOfProject(id) {
  document.querySelector(".listImage").innerHTML = ""
  for(let i = 0; i < projectDetailData[id].imgBanner.length; i++) {
    var itemDiv = document.createElement("div")
    var buttonEle = document.createElement("button")
    var imgEle = document.createElement("img")
    itemDiv.classList.add("itemImage")
    buttonEle.classList.add("btnListImg")
    buttonEle.setAttribute("id","btnImg-"+i)
    buttonEle.onclick = function() {
      renderImgMain(id,i)
    }
    imgEle.src = projectDetailData[id].imgBanner[i].src
    buttonEle.appendChild(imgEle)
    itemDiv.appendChild(buttonEle)
    document.querySelector(".listImage").appendChild(itemDiv)
  }
  renderImgMain(id,0) 
}

function renderImgMain(idProject,idImg) {
  console.log(1);
  $(".btnListImg").removeClass("active")
  $(".itemImage").removeClass("active")
  if(windowWidth > 768) {
    document.getElementById("btnImg-"+idImg).classList.add("active")
  }
  else {
    document.getElementById("btnImg-"+idImg).parentElement.classList.add("active")
  }
  document.getElementById("imgMain").children[0].src = projectDetailData[idProject].imgMain[idImg].src
}

function renderProjectDesc(id) {
  document.querySelector(".projectDesc").innerHTML = ""
  for(let i = 0; i < projectDetailData[id].prjectDesc.length; i++){
    let pTag = "<p>"+projectDetailData[id].prjectDesc[i]+"</p>"
    document.querySelector(".projectDesc").innerHTML += pTag
  }
}

function renderListProject(id) {
  document.querySelector(".projectList-inner").innerHTML = ""
  var divContain = document.createElement("div")
  var divItem = document.createElement("div")
  var divCover = document.createElement("div")
  var divImgContain = document.createElement("div")
  var imgEle = document.createElement("img")
  var btnEle = document.createElement("button")
  btnEle.innerHTML = "show project"
  imgEle.src = projectDetailData[id].imgBanner[0].src
  imgEle.alt = "Project Banner"
  divImgContain.appendChild(imgEle)
  divImgContain.classList.add("imgContain")
  divCover.classList.add("bgCover","disable")
  divItem.classList.add("projectList-item","active")
  divItem.appendChild(divCover)
  divItem.appendChild(divImgContain)
  divItem.appendChild(btnEle)
  divContain.appendChild(divItem)
  document.querySelector(".projectList-inner").appendChild(divContain)
  for(let i = 0; i<projectDetailData.length;i++) {
    if(i != id) {
      var divContain = document.createElement("div")
      var divItem = document.createElement("div")
      var divCover = document.createElement("div")
      var divImgContain = document.createElement("div")
      var imgEle = document.createElement("img")
      var btnEle = document.createElement("button")
      btnEle.innerHTML = "show project"
      imgEle.src = projectDetailData[i].imgBanner[0].src
      imgEle.alt = "Project Banner"
      divImgContain.appendChild(imgEle)
      divImgContain.classList.add("imgContain")
      divCover.classList.add("bgCover")
      divItem.classList.add("projectList-item")
      divItem.appendChild(divCover)
      divItem.appendChild(divImgContain)
      divItem.appendChild(btnEle)
      divContain.appendChild(divItem)
      btnEle.onclick = function() {
        renderProject(i)
      }
      document.querySelector(".projectList-inner").appendChild(divContain)
      
    }
  }
  let newClassSlickContain = "projectList-"+id
  document.getElementById("projectList").className = ""
  document.getElementById("projectList").classList.add("projectList-inner",newClassSlickContain)
  slickSlider(newClassSlickContain)
}

function slickSlider(cl) {
  $("."+cl).slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    centerPadding: "50px"
  });
}

function animationAppear(id) {
  document.getElementById("imgMain").classList.remove("appear")
  document.querySelector(".projectname").classList.remove("appear")
  $(".btnListImg").removeClass("appear")
  setTimeout(()=> {
    document.getElementById("imgMain").classList.add("appear")
    document.querySelector(".projectname").classList.add("appear")
  },500)
  for(let i= 0;i < projectDetailData[id].imgBanner.length;i++) {
    setTimeout(()=> {
      document.getElementById("btnImg-"+i).classList.add("appear")
    },(1500 + (i*200)))
  }
  
}
function clearPopupData () {
  document.querySelector(".listImage").innerHTML = ""
  document.querySelector(".projectDesc").innerHTML = ""
  document.querySelector(".projectList-inner").innerHTML = ""
}



