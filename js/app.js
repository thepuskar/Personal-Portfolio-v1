//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//navbar links

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})

//Hamburger

const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
})

//Portfolio Gallery

const filterBtn = document.querySelector("#filterBtn").children;
const item = document.querySelector(".gallery").children;

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let k = 0; k < item.length; k++) {
      item[k].style.display = "none";
      if (target == item[k].getAttribute("data-id")) {
        item[k].style.display = "block";
      }
      if (target == "all") {
        item[k].style.display = "block";
      }
    }
  });
}

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

lightbox.addEventListener("click", function () {
  if (event.target != lightboxImg) {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
  }
});

closeLightbox.addEventListener("click", function () {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
});

const gallery = document.querySelector(".gallery");

const galleryItem = document.querySelectorAll(".item");

galleryItem.forEach(function (element) {
  element.querySelector(".fa-plus").addEventListener("click", function () {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImg.src = element.querySelector("img").getAttribute("src");
  });
});

// Testimonials Slider

const sliderContainer = document.querySelector(".testimonials-box");
const slider = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;

const margin = 30;
let itemPerSlide = 0;
let sliderDot;

const responsive = [{
    breakPoint: {
      width: 0,
      item: 1,
    },
  },
  {
    breakPoint: {
      width: 991,
      item: 2,
    },
  },
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      itemPerSlide = responsive[i].breakPoint.item;
    }
  }
  start();
}

function start() {
  totalWidth = 0;
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.width = containerWidth / itemPerSlide - margin + "px";
    slider[i].style.margin = margin / 2 + "px";
    totalWidth += containerWidth / itemPerSlide;
  }
  sliderContainer.style.width = totalWidth + "px";

  sliderDot = Math.ceil(slider.length / itemPerSlide);

  for (let i = 0; i < sliderDot; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.setAttribute("onclick", "controlSlide(this)");
    if (i == 0) {
      div.classList.add("active");
    }
    document.querySelector(".slider").appendChild(div);
  }
}

let currentSlide = 0;
let autoSlide = 0;

function controlSlide(element) {
  clearInterval(timer);
  timer = setInterval(autoPlay, 5000);
  autoSlide = element.id;
  currentSlide = element.id;
  changeSlide(currentSlide);
}

function changeSlide(currentSlide) {
  controlButton = document.querySelector(".slider").children;
  for (let i = 0; i < controlButton.length; i++) {
    controlButton[i].classList.remove("active");
  }
  controlButton[currentSlide].classList.add("active");

  sliderContainer.style.marginLeft = -(containerWidth * currentSlide) + "px";
}

function autoPlay() {
  if (autoSlide == sliderDot - 1) {
    autoSlide = 0;
  } else {
    autoSlide++;
  }
  changeSlide(autoSlide);
}
let timer = setInterval(autoPlay, 5000);

window.onload = load();


//Footer Year 
var year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();