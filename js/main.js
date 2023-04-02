const tabItem = document.querySelectorAll(".tabs__btn-item")
const tabContent = document.querySelectorAll(".tabs__content-item")

tabItem.forEach(btn=>{
  btn.addEventListener("click", (e)=>{
    const tabTarget = e.currentTarget
    const button = tabTarget.dataset.button

    tabItem.forEach(item=>{
      if(item.classList.contains("tabs__btn-item--active")) item.classList.remove("tabs__btn-item--active")
    })
    
    tabTarget.classList.add("tabs__btn-item--active")

    tabContent.forEach(item=>{
      if(item.classList.contains("tabs__content-item--active")) item.classList.remove("tabs__content-item--active")
    })

    document.querySelector(`#${button}`).classList.add("tabs__content-item--active")
  })
})



const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
});