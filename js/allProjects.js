setInterval(function () {
    const callImg = document.querySelector(".call__img-code");
    const intervalID = setInterval(function () {
        console.log("start 1");
        callImg.classList.add("call__img-code--red");
    }, 800);

    const timeoutID = setTimeout(function () {
        console.log("start 2");
        callImg.classList.remove("call__img-code--red");
        clearInterval(intervalID);
    }, 1600);
}, 1600);

const turnOn = document.querySelector(".menu");
const btn = document.querySelector(".menu__button");
const overlay = document.querySelector(".overlay");
btn.addEventListener("click", function () {
    turnOn.classList.toggle("turn_on");
    overlay.classList.toggle("overlay_turnOn");
});

// разработака overlay
overlay.addEventListener("click", () => {
    console.log("click");
    turnOn.classList.remove("turn_on");
    overlay.classList.remove("overlay_turnOn");
});
