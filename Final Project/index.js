// Hero Section
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");

    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }

    slides[slideIndex].style.opacity = "1";
}

// Auto Slide
setInterval(() => {
    changeSlide(1);
}, 10000); // Change slide every 10 seconds


// Service Section
window.addEventListener("scroll", function() {
    let colItems = document.querySelectorAll(".col");
    let windowHeight = window.innerHeight;

    colItems.forEach(function(item) {
        let positionFromTop = item.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            item.classList.add("fade-in");
        }
    });
});

