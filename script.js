// Products Data Array
const products = [
    {
        model: 'G20',
        name: 'Modelo G20',
        capacity: 258,
        capacityUnit: 'litros',
        doors: 1,
        weight: 67,
        weightUnit: 'kg',
        width: 64,
        widthUnit: 'cm',
        image: 'https://guerramx.com/wp-content/uploads/2025/11/M20-6-1-683x1024.jpg'
    },
    {
        model: 'G55',
        name: 'Modelo G55',
        capacity: 946,
        capacityUnit: 'litros',
        doors: 1,
        weight: 102,
        weightUnit: 'kg',
        width: 115,
        widthUnit: 'cm',
        image: 'https://guerramx.com/wp-content/uploads/2025/11/M55-5-1-683x1024.jpg'
    },
    {
        model: 'G95',
        name: 'Modelo G95',
        capacity: 1095,
        capacityUnit: 'litros',
        doors: 1,
        weight: 120,
        weightUnit: 'kg',
        width: 115,
        widthUnit: 'cm',
        image: 'https://guerramx.com/wp-content/uploads/2025/11/M95-7-1-683x1024.jpg'
    },
    {
        model: 'G190',
        name: 'Modelo G190',
        capacity: 2189,
        capacityUnit: 'litros',
        doors: 2,
        weight: 250,
        weightUnit: 'kg',
        width: 229,
        widthUnit: 'cm',
        image: 'https://guerramx.com/wp-content/uploads/2025/11/Modelo190-5-1-1024x683.jpg'
    }
];

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            interest: document.getElementById('interest').value,
            quantity: document.getElementById('quantity').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.interest) {
            showMessage('Por favor completa todos los campos requeridos.', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Por favor ingresa un correo electrónico válido.', 'error');
            return;
        }

        // Si la validación fue exitosa, enviamos el formulario directamente a Formspree
        contactForm.submit();
    });
}

// Show form message
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            formMessage.classList.remove('success');
            formMessage.textContent = '';
        }, 5000);
    }
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards and service items
document.querySelectorAll('.product-card, .service-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
