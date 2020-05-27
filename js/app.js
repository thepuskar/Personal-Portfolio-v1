const filterBtn = document.querySelector("#filterBtn").children;
const item = document.querySelector(".gallery").children;

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        for (let j = 0; j < filterBtn.length; j++) {
            filterBtn[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
        for (let k = 0; k < item.length; k++) {
            item[k].style.display = "none";
            if (target == item[k].getAttribute("data-id")) {
                item[k].style.display = "block";
            }
            if (target == "all") {
                item[k].style.display = "block";
            }
        }
    })
}

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img")

lightbox.addEventListener('click', function () {
    if (event.target != lightboxImg) {
        lightbox.classList.remove("show")
        lightbox.classList.add("hide")
    }
})

closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("show")
    lightbox.classList.add("hide")
})

const gallery = document.querySelector(".gallery");

const galleryItem = document.querySelectorAll('.item')

galleryItem.forEach(function (element) {
    element.querySelector(".fa-plus").addEventListener("click", function () {
        lightbox.classList.remove("hide")
        lightbox.classList.add("show")
        lightboxImg.src = element.querySelector("img").getAttribute("src");
    })
})


const sliderContainer = document.querySelector(".testimonials-box");
const slider = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;

const margin = 30;
let itemPerSlide = 0;

const responsive = [{
        breakPoint: {
            width: 0,
            item: 1
        }
    },
    {
        breakPoint: {
            width: 991,
            item: 2
        }
    }
]

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            itemPerSlide = responsive[i].breakPoint.item;
        }
    }
    start();
}

function start() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.width = (containerWidth / itemPerSlide) - margin + "px";
        slider[i].style.margin = margin / 2 + "px";
    }
    sliderContainer.style.width = containerWidth * itemPerSlide + "px";

    const sliderDot = Math.ceil(slider.length / itemPerSlide);

    for (let i = 0; i < sliderDot; i++) {
        const div = document.createElement("div");
        div.id = i;
        div.setAttribute("onclick", "controlSlide(this)")
        if (i = 0) {
            div.classList.add("active")
        }
        document.querySelector(".slider").appendChild(div);
    }
}
window.onload = load();


// querySelector(".testimonials-img")