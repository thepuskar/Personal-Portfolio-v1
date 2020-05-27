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