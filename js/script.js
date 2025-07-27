document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-container');
    
    logo.addEventListener('click', function() {
        // Animate scale up with easing
        this.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' }
        ], {
            duration: 200,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            fill: 'forwards'
        });
        
        // Animate back to normal
        setTimeout(() => {
            this.animate([
                { transform: 'scale(1.1)' },
                { transform: 'scale(1)' }
            ], {
                duration: 300,
                easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                fill: 'forwards'
            });
        }, 200);
    });
});