$(window).on("load",function () {
  // animation 
  setTimeout(()=> {
    document.querySelector(".project__title").classList.add("fadeInX")
    document.querySelector(".project__list").classList.add("fadeInX")
  },1000)
  
  lazyLoadImage()
  countProjectInCategory()
})

//  lazy load image 
function lazyLoadImage() {
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
}
$(document).ready( function () {
  filterProjectListBy("all")
})


// count project in categroy 
const categoryProject = ["Identity","Packaging"]
function countProjectInCategory () {
  var countProjectAll = document.querySelectorAll(".countAll")
  countProjectAll.forEach(element => {
    element.textContent = projectDetailData.length;
  });
  categoryProject.forEach((ele,index) => {
    var filterProject = projectDetailData.filter((project) => project.belongTo === ele);
    document.querySelector(".project__filter").children[index+2].children[0].textContent = (filterProject.length < 10 ? "0"+filterProject.length : filterProject.length)
  })
} 

/* filter project list for category*/
var projectFilterContain = [];
function filterProjectListBy(filterBy) {
  projectFilterContain = []
  if(filterBy === "all") {
    projectFilterContain = projectDetailData
  }else {
    projectFilterContain = projectDetailData.filter((project) => project.belongTo === filterBy);
  }
  document.querySelector(".project__pagination").innerHTML = ""
  for(let pagi = 0; pagi < projectFilterContain.length;pagi+=4) {
    let countPagi = pagi / 4 + 1;
    var pagiButton = document.createElement("button")
    pagiButton.innerText = countPagi
    pagiButton.addEventListener("click", function() {
      renderProjectListBy(countPagi);
    });
    document.querySelector(".project__pagination").appendChild(pagiButton)
  }
  renderProjectListBy(1)
  activeFilterCategory(filterBy)
}
/* */

function activeFilterCategory(cateogory) {
  $(".category-fill").removeClass("active")
  document.getElementById("category-"+cateogory.toLowerCase()).classList.add("active")
}


/* render project list for category*/
function renderProjectListBy(pagiIndex) {
  document.querySelector(".project__list").innerHTML = ""
  for(let i = (pagiIndex*4 - 4); i < pagiIndex*4; i++) {
    var divContain = document.createElement("div")
    divContain.classList.add("project__item")
    divContain.classList.add("lazy")
    divContain.id = i+1

    var divContainImg = document.createElement("div")
    divContainImg.classList.add("project-image")
    var img = document.createElement("img")
    img.classList.add("fade")
    // console.log(pagiIndex);
    img.setAttribute("data-src",projectFilterContain[i].imgBanner[0].src) 
    divContainImg.appendChild(img)

    var divCover = document.createElement("div")
    divCover.classList.add("bg-cover")

    var directTag = document.createElement("a")
    directTag.classList.add("project-show")
    directTag.textContent = "show project"
    directTag.setAttribute("href","javascript:void(0)")
    directTag.addEventListener("click", function () {
      openPop()
    })
    directTag.addEventListener("click",function() {
      renderProject(i)
    })
    divContain.appendChild(divContainImg)
    divContain.appendChild(divCover)
    divContain.appendChild(directTag)
    document.querySelector(".project__list").appendChild(divContain)
  }
  lazyLoadImage()
}
/* */

function closePop() {
  document.querySelector(".popup.project-detail").classList.remove("appear")
  document.querySelector(".popup__bg").classList.remove("appear")
  document.querySelector("body").classList.remove("disable-scroll")
  document.querySelector("html").style.overflow = ""
  clearPopupData()
}

function openPop() {
  document.querySelector(".popup.project-detail").classList.add("appear")
  document.querySelector("body").classList.add("disable-scroll")
  document.querySelector("html").style.overflow = "hidden"
  setTimeout(()=> {
    document.querySelector(".popup__bg").classList.add("appear")
  },500)
}

const projectDetailData = [
  {
    "name" : "project 1" ,
    "belongTo": "Identity",
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
    "belongTo": "Identity",
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
    "belongTo": "Identity",
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
    "belongTo": "Identity",
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
    "belongTo": "Identity",
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
  },
  {
    "name" : "project 6" ,
    "belongTo": "Identity",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-06.png"
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
  },
  {
    "name" : "project 7" ,
    "belongTo": "Identity",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-07.png"
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
  },
  {
    "name" : "project 8" ,
    "belongTo": "Identity",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-08.png"
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
  },
  {
    "name" : "project 9" ,
    "belongTo": "Packaging",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-09.png"
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
  },
  {
    "name" : "project 10" ,
    "belongTo": "Packaging",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-10.png"
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
  },
  {
    "name" : "project 11" ,
    "belongTo": "Packaging",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-11.png"
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
  },
  {
    "name" : "project 12" ,
    "belongTo": "Packaging",
    "imgBanner" : [
      {
        "id": 1,
        "src": "./assets/images/projects/project-12.png"
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
  document.querySelector(".projectname").innerHTML = projectFilterContain[id].name
  renderImgListOfProject(id)
  renderProjectDesc(id)
  renderListProject(id)
  animationAppear(id)
}

function renderImgListOfProject(id) {
  document.querySelector(".listImage").innerHTML = ""
  for(let i = 0; i < projectFilterContain[id].imgBanner.length; i++) {
    var itemDiv = document.createElement("div")
    var buttonEle = document.createElement("button")
    var imgEle = document.createElement("img")
    itemDiv.classList.add("itemImage")
    buttonEle.classList.add("btnListImg")
    buttonEle.setAttribute("id","btnImg-"+i)
    buttonEle.onclick = function() {
      renderImgMain(id,i)
    }
    imgEle.src = projectFilterContain[id].imgBanner[i].src
    buttonEle.appendChild(imgEle)
    itemDiv.appendChild(buttonEle)
    document.querySelector(".listImage").appendChild(itemDiv)
  }
  renderImgMain(id,0) 
}

function renderImgMain(idProject,idImg) {
  $(".btnListImg").removeClass("active")
  $(".itemImage").removeClass("active")
  if(windowWidth > 768) {
    document.getElementById("btnImg-"+idImg).classList.add("active")
  }
  else {
    document.getElementById("btnImg-"+idImg).parentElement.classList.add("active")
  }
  console.log(projectFilterContain);
  document.getElementById("imgMain").children[0].src = projectFilterContain[idProject].imgMain[idImg].src
}

function renderProjectDesc(id) {
  document.querySelector(".projectDesc").innerHTML = ""
  for(let i = 0; i < projectFilterContain[id].prjectDesc.length; i++){
    let pTag = "<p>"+projectFilterContain[id].prjectDesc[i]+"</p>"
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
  // var btnEle = document.createElement("button")
  // btnEle.innerHTML = "show project"
  imgEle.src = projectFilterContain[id].imgBanner[0].src
  imgEle.alt = "Project Banner"
  divImgContain.appendChild(imgEle)
  divImgContain.classList.add("imgContain")
  divCover.classList.add("bgCover","disable")
  divItem.classList.add("projectList-item","active")
  divItem.appendChild(divCover)
  divItem.appendChild(divImgContain)
  // divItem.appendChild(btnEle)
  divContain.appendChild(divItem)
  document.querySelector(".projectList-inner").appendChild(divContain)
  for(let i = 0; i<projectFilterContain.length;i++) {
    if(i != id) {
      var divContain = document.createElement("div")
      var divItem = document.createElement("div")
      var divCover = document.createElement("div")
      var divImgContain = document.createElement("div")
      var imgEle = document.createElement("img")
      var btnEle = document.createElement("button")
      btnEle.innerHTML = "show project"
      imgEle.src = projectFilterContain[i].imgBanner[0].src
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
  for(let i= 0;i < projectFilterContain[id].imgBanner.length;i++) {
    setTimeout(()=> {
      document.getElementById("btnImg-"+i).classList.add("appear")
    },(1500 + (i*200)))
  }
  if(windowWidth <= 768) {
    for(let i= 0;i < projectFilterContain[id].prjectDesc.length;i++) {
      setTimeout(()=> {
        document.querySelector(".projectDesc").children[i].classList.add("appear")
      },(1500 + (i*200)))
    }
    document.querySelector(".listTitle").classList.add("appear")
    let listProject = document.querySelectorAll(".projectList-item")
    listProject.forEach((element, index) => {
        setTimeout(()=> {
          element.classList.add("appear")
        },(1500 + (index*200)))
      
    })
  }
}
function clearPopupData () {
  document.querySelector(".listImage").innerHTML = ""
  document.querySelector(".projectDesc").innerHTML = ""
  document.querySelector(".projectList-inner").innerHTML = ""
  document.querySelector(".listTitle").classList.remove("appear")
}



