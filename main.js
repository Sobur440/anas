import "./style.css"


//Preloader

const preloader = () => {
  const counter = document.querySelector(".counter")
  let count = 0
  
  const updateCounter = () => {
      count += Math.floor(Math.random() * 10) + 1
      if(count >= 100) {
          count = Math.min(count, 100)
      }

      counter.textContent = count + "%"

  }
  
  setTimeout(() => {
      setInterval(updateCounter, 400)
  }, 400)
}
preloader()

const tl = gsap.timeline()

tl.to(".loader", {
  delay: 9,
  opacity: 0
})
.set(".loader", {
  display: "none"
})
.to("#content", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out"
})

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      gsap.timeline()
      .to(".image1, .image2, .image3", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        stagger: {amount: 0.5}
      })
      .to(".source", {
        opacity: 1
      })
      .to(".checks__container", {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(".footer", {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "<")
    }
  })
}, {threshold: 1})
imgObserver.observe(document.querySelector(".images__container"))