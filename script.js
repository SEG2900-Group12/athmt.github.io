// Images
const images = [
    "images/classic-drone.png",
    "images/fairy-form.png",
    "images/minimal-design.png"
];

// drone names
const texts = [
    "Classic Drone",
    "Fairy Form Drone",
    "Minimal Design Drone"
];

// Short description paragraphs per drone
const descriptions = [
    "The Classic Drone offers robust performance and reliable flight for beginners and pros alike.",
    "The Fairy Form Drone is lightweight, colorful, and fun — perfect for creative aerial shots.",
    "Minimal Design Drone is sleek, portable, and quiet, ideal for urban environments."
];

// Features list
const features = [
    ["Enhanced flight", "Outdoor ready", "Advanced sensors", "Long battery life", "Light and durable"],
    ["Advanced emotional AI", "Suited for all ages", "Humanoid assistant", "Adapts to your lifestyle", "Lightweight"],
    ["Sleek Design", "Portable", "Affordable", "Quiet", "Suited for every environment"]
];

// Prices per drone 
const prices = [
    "$1699",
    "$2999",
    "$999"
];

let currentIndex = 0;


const sliderImage = document.getElementById("slider-image");
const sliderText = document.getElementById("slider-big-text");
const sliderDescription = document.getElementById("slider-description");
const sliderParagraph = document.getElementById("slider-paragraph");
const priceButton = document.getElementById("slider-price-button");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Update slider function
function updateSlider() {
    sliderImage.src = images[currentIndex];
    sliderText.textContent = texts[currentIndex];
    sliderParagraph.textContent = descriptions[currentIndex];

    // Update features list
    sliderDescription.innerHTML = "";
    const ul = document.createElement("ul");
    features[currentIndex].forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        ul.appendChild(li);
    });
    sliderDescription.appendChild(ul);

    // Update price button
    priceButton.textContent = prices[currentIndex];
}

// Event listeners for slider controls
prevButton.addEventListener("click", function(event){
    event.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextButton.addEventListener("click", function(event){
    event.preventDefault();
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});
window.onload = updateSlider;