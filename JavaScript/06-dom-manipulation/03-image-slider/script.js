const images = [
    "https://picsum.photos/id/237/400/300",
"https://picsum.photos/id/10/400/300",
"https://picsum.photos/id/1025/400/300"
];
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const image = document.getElementById("sliderImg");
let currentIndex = 0;
image.src = images[0];

nextBtn.addEventListener("click", () => {
    currentIndex++;)
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
    image.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    image.src = images[currentIndex];
});
