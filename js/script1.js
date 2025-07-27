// Create a smooth transition effect for the hero image
document.addEventListener('DOMContentLoaded', function() {
    const heroImg = document.querySelector('.hero-img');
    
    // Preload the image to prevent flickering
    const img = new Image();
    img.src = heroImg.src;
    
    // Apply transition styles
    heroImg.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    heroImg.style.opacity = '0';
    heroImg.style.transform = 'scale(1.05)';
    
    // When image is loaded, fade it in
    img.onload = function() {
        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1)';
    };
    
    // Optional: Add hover effect
    heroImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03)';
    });
    
    heroImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    

    const images = ['img/1.jpg', 'img/6.jpg', 'img/7.jpg'];
    let currentIndex = 0;
    
    function changeHeroImage() {
        currentIndex = (currentIndex + 1) % images.length;
        heroImg.style.opacity = '0';
        
        setTimeout(() => {
            heroImg.src = images[currentIndex];
            heroImg.style.opacity = '1';
        }, 500);
    }
    
    setInterval(changeHeroImage, 5000);

});