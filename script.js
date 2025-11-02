document.addEventListener("DOMContentLoaded", function () {

const images = [
    "images/classic-drone.png",
    "images/fairy-form.png",
    "images/minimal-design.png"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
    sliderImage.classList.remove("fade");
    void sliderImage.offsetWidth;
    sliderImage.classList.add("fade");
});

nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
    sliderImage.classList.remove("fade");
    void sliderImage.offsetWidth;
    sliderImage.classList.add("fade");
});

}); // end DOMContentLoaded