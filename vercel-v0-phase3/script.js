// AETOS Timepieces - Accessible JavaScript
// WCAG 2.1 Level AA Compliant

// ===================================
// Utility Functions
// ===================================

function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
// Welcome Popup Dialog
// ===================================

const popup = document.getElementById('welcome-popup');
const popupClose = document.querySelector('.popup-close');
const popupForm = document.getElementById('popup-form');
let previouslyFocusedElement = null;

function openPopup() {
    previouslyFocusedElement = document.activeElement;
    popup.classList.remove('hidden');
    popup.setAttribute('aria-hidden', 'false');
    
    const firstInput = popup.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
    
    trapFocus(popup);
}

function closePopup() {
    popup.classList.add('hidden');
    popup.setAttribute('aria-hidden', 'true');
    
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
}

// Show popup after 2 seconds
setTimeout(openPopup, 2000);

popupClose.addEventListener('click', closePopup);

popup.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

popupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('popup-email');
    const errorSpan = document.getElementById('popup-email-error');
    const email = emailInput.value.trim();
    
    if (!email) {
        errorSpan.textContent = 'Email is required';
        emailInput.setAttribute('aria-invalid', 'true');
        return;
    }
    
    if (!validateEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email address';
        emailInput.setAttribute('aria-invalid', 'true');
        return;
    }
    
    errorSpan.textContent = '';
    emailInput.setAttribute('aria-invalid', 'false');
    
    alert('Thank you for subscribing! Check your email for your discount code.');
    closePopup();
});

// ===================================
// Mega Menu Navigation
// ===================================

const megaMenuTriggers = document.querySelectorAll('.mega-menu-trigger');

megaMenuTriggers.forEach(trigger => {
    const menuId = trigger.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);
    
    trigger.addEventListener('click', function() {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        
        // Close all other menus
        megaMenuTriggers.forEach(t => {
            t.setAttribute('aria-expanded', 'false');
            const m = document.getElementById(t.getAttribute('aria-controls'));
            if (m) m.setAttribute('aria-hidden', 'true');
        });
        
        // Toggle current menu
        if (!isExpanded) {
            trigger.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-hidden', 'false');
        }
    });
    
    // Keyboard navigation
    trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trigger.click();
        }
    });
});

// Close mega menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.mega-menu-trigger') && !e.target.closest('.mega-menu')) {
        megaMenuTriggers.forEach(trigger => {
            trigger.setAttribute('aria-expanded', 'false');
            const menu = document.getElementById(trigger.getAttribute('aria-controls'));
            if (menu) menu.setAttribute('aria-hidden', 'true');
        });
    }
});

// ===================================
// Mobile Menu
// ===================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

mobileMenuToggle.addEventListener('click', function() {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    mainNav.setAttribute('aria-hidden', isExpanded);
    
    if (!isExpanded) {
        mobileMenuToggle.setAttribute('aria-label', 'Close navigation menu');
    } else {
        mobileMenuToggle.setAttribute('aria-label', 'Open navigation menu');
    }
});

// ===================================
// Predictive Search
// ===================================

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const mockProducts = [
    'Heritage Automatic',
    'Racing Chronograph',
    'Classic Dress',
    'Ocean Sport',
    'Aviation Chronograph',
    'Sport Automatic'
];

let selectedIndex = -1;

searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.setAttribute('aria-expanded', 'false');
        searchInput.setAttribute('aria-expanded', 'false');
        return;
    }
    
    const filtered = mockProducts.filter(product => 
        product.toLowerCase().includes(query)
    );
    
    if (filtered.length > 0) {
        searchResults.innerHTML = filtered.map((product, index) => 
            `<li role="option" id="search-option-${index}" aria-selected="false">${product}</li>`
        ).join('');
        searchResults.setAttribute('aria-expanded', 'true');
        searchInput.setAttribute('aria-expanded', 'true');
        selectedIndex = -1;
    } else {
        searchResults.innerHTML = '<li role="option">No results found</li>';
        searchResults.setAttribute('aria-expanded', 'true');
        searchInput.setAttribute('aria-expanded', 'true');
    }
});

searchInput.addEventListener('keydown', function(e) {
    const options = searchResults.querySelectorAll('li[role="option"]');
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, options.length - 1);
        updateSelectedOption(options);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelectedOption(options);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        options[selectedIndex].click();
    } else if (e.key === 'Escape') {
        searchResults.innerHTML = '';
        searchResults.setAttribute('aria-expanded', 'false');
        searchInput.setAttribute('aria-expanded', 'false');
    }
});

function updateSelectedOption(options) {
    options.forEach((option, index) => {
        if (index === selectedIndex) {
            option.setAttribute('aria-selected', 'true');
            option.style.backgroundColor = '#f5f5f5';
        } else {
            option.setAttribute('aria-selected', 'false');
            option.style.backgroundColor = '';
        }
    });
}

searchResults.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        searchResults.innerHTML = '';
        searchResults.setAttribute('aria-expanded', 'false');
        searchInput.setAttribute('aria-expanded', 'false');
    }
});

// ===================================
// Carousel Functionality
// ===================================

class AccessibleCarousel {
    constructor(carouselId) {
        this.carousel = document.querySelector(`[data-carousel-id="${carouselId}"]`);
        this.track = this.carousel.querySelector('.carousel-track');
        this.prevBtn = document.querySelector(`[data-carousel="${carouselId}"].carousel-prev`);
        this.nextBtn = document.querySelector(`[data-carousel="${carouselId}"].carousel-next`);
        this.pauseBtn = document.querySelector(`[data-carousel="${carouselId}"].carousel-pause`);
        this.statusDiv = this.carousel.nextElementSibling;
        
        this.currentIndex = 0;
        this.isPlaying = true;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        this.pauseBtn.addEventListener('click', () => this.toggleAutoPlay());
        
        this.startAutoPlay();
        
        // Keyboard navigation
        this.carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });
    }
    
    prev() {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
        this.updateCarousel();
    }
    
    next() {
        const items = this.track.children;
        const maxIndex = items.length - 1;
        this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
        this.updateCarousel();
    }
    
    updateCarousel() {
        const items = this.track.children;
        const itemWidth = items[0].offsetWidth;
        const gap = 32; // 2rem gap
        const offset = -(this.currentIndex * (itemWidth + gap));
        
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Update status for screen readers
        this.statusDiv.textContent = `Showing item ${this.currentIndex + 1} of ${items.length}`;
        
        // Update button states
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === items.length - 1;
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            const items = this.track.children;
            if (this.currentIndex < items.length - 1) {
                this.next();
            } else {
                this.currentIndex = 0;
                this.updateCarousel();
            }
        }, 5000);
    }
    
    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
    
    toggleAutoPlay() {
        if (this.isPlaying) {
            this.stopAutoPlay();
            this.pauseBtn.innerHTML = '<span aria-hidden="true">▶</span>';
            this.pauseBtn.setAttribute('aria-label', 'Play automatic scrolling');
            this.isPlaying = false;
        } else {
            this.startAutoPlay();
            this.pauseBtn.innerHTML = '<span aria-hidden="true">⏸</span>';
            this.pauseBtn.setAttribute('aria-label', 'Pause automatic scrolling');
            this.isPlaying = true;
        }
    }
}

// Initialize carousels
new AccessibleCarousel('categories');
new AccessibleCarousel('products');

// ===================================
// Journal Load More
// ===================================

const loadMoreBtn = document.getElementById('load-more-journal');
const journalGrid = document.getElementById('journal-grid');
const journalAnnouncement = document.getElementById('journal-announcement');

const additionalArticles = [
    {
        title: 'The Art of Watch Collecting',
        author: 'Elena Rodriguez',
        date: '2023-12-28',
        excerpt: 'Building a meaningful watch collection requires knowledge, patience, and a discerning eye for quality and craftsmanship.',
        image: 'watch+collection+display',
        link: '/journal/watch-collecting'
    },
    {
        title: 'Swiss Watchmaking Heritage',
        author: 'Thomas Weber',
        date: '2023-12-20',
        excerpt: 'Explore the rich history of Swiss watchmaking and how centuries of tradition continue to influence modern timepieces.',
        image: 'swiss+watchmaking+workshop',
        link: '/journal/swiss-heritage'
    }
];

loadMoreBtn.addEventListener('click', function() {
    additionalArticles.forEach(article => {
        const articleHTML = `
            <article class="journal-card">
                <img src="/placeholder.svg?height=300&width=500" alt="${article.title} featured image">
                <div class="journal-content">
                    <h3>${article.title}</h3>
                    <p class="journal-meta">
                        <span class="journal-author">By ${article.author}</span>
                        <time datetime="${article.date}">${new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </p>
                    <p class="journal-excerpt">${article.excerpt}</p>
                    <a href="${article.link}" class="journal-link">Read more about ${article.title.toLowerCase()}</a>
                </div>
            </article>
        `;
        journalGrid.insertAdjacentHTML('beforeend', articleHTML);
    });
    
    journalAnnouncement.textContent = `${additionalArticles.length} new articles loaded`;
    loadMoreBtn.style.display = 'none';
});

// ===================================
// Newsletter Form
// ===================================

const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletter-email');
    const errorSpan = document.getElementById('newsletter-error');
    const email = emailInput.value.trim();
    
    if (!email) {
        errorSpan.textContent = 'Email is required';
        emailInput.setAttribute('aria-invalid', 'true');
        return;
    }
    
    if (!validateEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email address';
        emailInput.setAttribute('aria-invalid', 'true');
        return;
    }
    
    errorSpan.textContent = '';
    emailInput.setAttribute('aria-invalid', 'false');
    
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});