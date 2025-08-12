// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1800);
    }, 1000);

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);

    // Reset interval on manual navigation
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            resetInterval();
        });
    });

    // Initialize first slide
    showSlide(0);

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }

    // Auto testimonial change
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 6000);

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });

    // Initialize first testimonial
    showTestimonial(0);

    // Scroll animations
    const animateElements = document.querySelectorAll('.slide-up, .slide-down, .slide-left, .slide-right, .zoom-in, .fade-in');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translate(0, 0) scale(1)';
            }
        });
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Load properties
    loadProperties();
});

// Property Data
const properties = [
    {
        id: 1,
        title: "Four Bedroom House",
        price: "$8,300,000",
        address: "East Legon Hills, Accra" ,
        bedrooms: 4,
        bathrooms: 4.5,
        sqft: 4200,
        type: "House",
        featured: true,
        image: "Images/img3.jpeg",
        reference:"001"
    },
    {
        id: 2,
        title: "The Gardens ",
        price: "$12,750,000",
        address: " Accra",
        bedrooms: 5,
        bathrooms: 6,
        sqft: 6800,
        type: "Villa",
        featured: true,
        image: "Images/house2/mainbuilding1.jpeg",
        reference:"002"
    },
    {
        id: 3,
        title: "Intimate Studio Apartment",
        price: "£25,000,000",
        address: " Accra",
        bedrooms: 7,
        bathrooms: 8,
        sqft: 12500,
        type: "Mansion",
        featured: true,
       image: "Images/house3/h3.jpeg",
       reference:"003"
    },
    {
        id: 4,
        title: "Modern Apartment",
        price: "$850,000,000",
        address: "Cantonments",
        bedrooms: 3,
        bathrooms: 3.5,
        sqft: 2800,
        type: "Apartment",
        featured: true,
       image: "Images/house4/h4.jpeg",
        reference:"004"
        
    },
    {
        id: 5,
        title: "Two Bedroom Apartment",
        price: "$32,000,000",
        address: "Madina, Accra",
        bedrooms: 6,
        bathrooms: 7,
        sqft: 9800,
        type: "Estate",
        featured: true,
        image: "Images/house5/h5.jpeg",
        reference:"005"
    },
    {
        id: 6,
        title: "Deluxe Kass Studio",
        price: "$18,500,000",
        address: "Airport Residential Area, Accra",
        bedrooms: 5,
        bathrooms: 5.5,       
        sqft: 7500,
        type: "Chalet",
        featured: true,
        image: "Images/house6/h6.jpeg",
        reference:"006"
    }
];

// Load Properties
function loadProperties(filteredProperties = properties) {
    const propertiesGrid = document.querySelector('.properties-grid');
    propertiesGrid.innerHTML = '';

    filteredProperties.slice(0, 6).forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card slide-up';
        
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge">${property.type}</span>
            </div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <h3>${property.title}</h3>
                <p class="property-address">${property.address}</p>
                <div class="property-features">
                    <div class="property-feature">
                        <i class="fas fa-bed"></i> ${property.bedrooms} Bedrooms
                    </div>
                    <div class="property-feature">
                        <i class="fas fa-bath"></i> ${property.bathrooms} Bathrooms
                    </div>
                    <div class="property-feature">
                        <i class="fas fa-ruler-combined"></i> ${property.sqft.toLocaleString()} sqft
                    </div>
                     <div class="property-feature">
                        Reference: ${property.reference} 
                    </div>
                </div>
                <div class="property-footer">
                   
                    <div class="property-actions">
                   
                        <a href="#"><i class="fas fa-heart"></i></a>
                        <a href=""><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        `;
        
        propertiesGrid.appendChild(propertyCard);
    });
}