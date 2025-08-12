 document.addEventListener('DOMContentLoaded', function() {
            const thumbnails = document.querySelectorAll('.thumbnail');
            const mainImage = document.getElementById('main-image');
            const leftBtn = document.querySelector('.left-btn');
            const rightBtn = document.querySelector('.right-btn');
            
            const images = [
                "Images/house1/504624881.jpg?text=Image+1",
                "Images/house1/504624881.jpg?text=Image+2",
                "/Images/house1/504649304.jpg?text=Image+3",
                "https://via.placeholder.com/600x400/006400/FFFFFF?text=Image+4"
            ];
            
            let currentIndex = 0;
            
            function updateImage(index) {
                // Ensure index stays within bounds
                if (index < 0) index = images.length - 1;
                if (index >= images.length) index = 0;
                
                // Update main image
                mainImage.src = images[index];
                
                // Update active thumbnail
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                thumbnails[index].classList.add('active');
                
                // Scroll thumbnail into view
                thumbnails[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
                
                currentIndex = index;
            }
            
            // Thumbnail click event
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    updateImage(index);
                });
            });
            
            // Navigation buttons
            leftBtn.addEventListener('click', () => updateImage(currentIndex - 1));
            rightBtn.addEventListener('click', () => updateImage(currentIndex + 1));
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') updateImage(currentIndex - 1);
                if (e.key === 'ArrowRight') updateImage(currentIndex + 1);
            });
        });