let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 700) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 10000 / goal);
}

var div_back = document.querySelectorAll(".div_back");
for (let i = 0; i < div_back.length; i++) {
    var chekd = div_back[i];
    chekd.addEventListener("click", function () {
        for (let i = 0; i < div_back.length; i++) {
            div_back[i].classList.remove("actve");
        }
        this.classList.add("actve");
    });
}