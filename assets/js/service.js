$(window).on("load", function () {
    const windowHeight = window.outerHeight
    const windowWidth = window.outerWidth
    if (windowWidth > 768) {
        const cursor = document.querySelector(".bg-cover-service");
        document.addEventListener("mousemove", function (e) {
            let posX = e.clientX
            let posY = e.clientY
            setTimeout(() => {
                cursor.style.left = posX - (windowWidth / 100 * 15) + "px";
                cursor.style.top = posY - (windowHeight / 100 * 15) + "px";
                cursor.style.backgroundPositionX = -(posX - (windowWidth / 100 * 15)) + "px";
                cursor.style.backgroundPositionY = -(posY - (windowHeight / 100 * 15)) + "px";
            }, 200)
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
            "url('./assets/images/services/service-bg.jpg')",
            "url('./assets/images/services/service-bg-01.jpg')",
            "url('./assets/images/services/service-bg-02.jpg')",
            "url('./assets/images/services/service-bg-03.png')"
        ]


        const servicesCallBack = (services, observer) => {
            services.forEach((service, index) => {
                if (service.isIntersecting) {
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
            services.forEach((service, index) => {
                if (!service.isIntersecting) {
                    service.target.classList.remove('active')
                }
            })
        }
        const observerService = new IntersectionObserver(servicesCallBack, observerServiceOptions);
        const observerServiceOut = new IntersectionObserver(servicesCallBackOut, observerServiceOptionsOut);
        const serviceElement = document.querySelectorAll('.main__services');

        serviceElement.forEach(ser => observerService.observe(ser))
        serviceElement.forEach(ser => observerServiceOut.observe(ser))
    }
    else {
        const observerServiceOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        }

        const lazyLoadingCallBack = (elements, observer) => {
            var screenTop = $(document).scrollTop();
            elements.forEach((element, index) => {
              if (element.isIntersecting) {
                element.target.classList.add('active')
                console.log(screenTop);

              } else {
                element.target.classList.remove('active')
              }
            })
          }

        const observerService = new IntersectionObserver(lazyLoadingCallBack, observerServiceOptions);
        const serviceElement = document.querySelectorAll('.main__services');
        serviceElement.forEach(ser => observerService.observe(ser))
    }
})

