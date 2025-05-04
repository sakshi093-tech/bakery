// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter popup functionality
const newsletterPopup = document.querySelector('.newsletter-popup');
const closePopup = document.querySelector('.close-popup');

// Show popup after 5 seconds
setTimeout(() => {
    newsletterPopup.style.display = 'block';
}, 5000);

// Close popup when clicking the close button
closePopup.addEventListener('click', () => {
    newsletterPopup.style.display = 'none';
});

// Product filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.textContent.toLowerCase();
        
        productCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.querySelector('.fa-shopping-cart');

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'Added to cart!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
});

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'mobile-menu-button';
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-container').appendChild(mobileMenuButton);

const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
    newsletterPopup.style.display = 'none';
});

// Live chat functionality
const liveChatButton = document.querySelector('.live-chat');
const chatWindow = document.createElement('div');
chatWindow.className = 'chat-window';
chatWindow.innerHTML = `
    <div class="chat-header">
        <h3>Chat with us</h3>
        <button class="close-chat">×</button>
    </div>
    <div class="chat-messages"></div>
    <div class="chat-input">
        <input type="text" placeholder="Type your message...">
        <button>Send</button>
    </div>
`;

document.body.appendChild(chatWindow);

liveChatButton.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.close-chat').addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Add some sample testimonials
const testimonials = [
    {
        text: "The best coffee I've ever tasted, and knowing it's sustainable makes it even better!",
        name: "Sarah M."
    },
    {
        text: "BrewKind's commitment to sustainability is truly inspiring. The coffee is amazing too!",
        name: "John D."
    },
    {
        text: "I love that I can enjoy great coffee while supporting ethical practices.",
        name: "Emma R."
    }
];

const testimonialContainer = document.querySelector('.testimonial-carousel');
let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialContainer.innerHTML = `
        <div class="testimonial">
            <p>"${testimonial.text}"</p>
            <span class="customer-name">- ${testimonial.name}</span>
        </div>
    `;
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Update testimonial every 5 seconds
updateTestimonial();
setInterval(updateTestimonial, 5000); 