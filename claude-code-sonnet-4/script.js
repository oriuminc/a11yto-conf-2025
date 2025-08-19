// AETOS Timepieces - JavaScript

// Data for products and journal articles
const productsData = [
    { id: 1, name: "Vanguard Chrono - Midnight", category: "Vanguard Chronograph", price: 425, description: "A classic panda dial with deep black subdials and a polished steel case.", image: "https://via.placeholder.com/300x300/000000/ffffff?text=Midnight" },
    { id: 2, name: "Vanguard Chrono - Sterling", category: "Vanguard Chronograph", price: 425, description: "A sunburst silver dial that captures the light, paired with a brown leather strap.", image: "https://via.placeholder.com/300x300/c0c0c0/000000?text=Sterling" },
    { id: 3, name: "Vanguard Chrono - Navy Gold", category: "Vanguard Chronograph", price: 450, description: "A striking deep navy dial with gold-tone hands and indices.", image: "https://via.placeholder.com/300x300/1e3a8a/ffd700?text=Navy+Gold" },
    { id: 4, name: "Sentinel 40 - Classic White", category: "Sentinel Automatic", price: 550, description: "An elegant automatic with a clean white dial and a 40-hour power reserve.", image: "https://via.placeholder.com/300x300/ffffff/000000?text=Classic+White" },
    { id: 5, name: "Sentinel 40 - Onyx", category: "Sentinel Automatic", price: 550, description: "A versatile black dial automatic, perfect for both formal and casual wear.", image: "https://via.placeholder.com/300x300/000000/ffffff?text=Onyx" },
    { id: 6, name: "Sentinel 38 - Exhibition", category: "Sentinel Automatic", price: 575, description: "A slightly smaller case with a stunning exhibition back showing the Miyota movement.", image: "https://via.placeholder.com/300x300/8b4513/ffffff?text=Exhibition" },
    { id: 7, name: "Shoreline Diver - Abyss", category: "Shoreline Diver", price: 495, description: "A 200M water-resistant diver with a ceramic bezel and luminous markers.", image: "https://via.placeholder.com/300x300/1e3a8a/ffffff?text=Abyss" },
    { id: 8, name: "Shoreline Diver - Tropic", category: "Shoreline Diver", price: 495, description: "A vintage-inspired diver with a teal dial and a stainless steel bracelet.", image: "https://via.placeholder.com/300x300/008080/ffffff?text=Tropic" },
    { id: 9, name: "The Minimalist 36 - Pearl", category: "Minimalist 36", price: 295, description: "A refined 36mm quartz watch with a mother-of-pearl dial.", image: "https://via.placeholder.com/300x300/f8f9fa/000000?text=Pearl" },
    { id: 10, name: "The Minimalist 36 - Slate", category: "Minimalist 36", price: 295, description: "A modern, unisex design with a matte grey dial and no indices.", image: "https://via.placeholder.com/300x300/708090/ffffff?text=Slate" },
    { id: 11, name: "Italian Leather Strap - Oak", category: "Leather Straps", price: 75, description: "A rich brown, full-grain leather strap that develops a beautiful patina.", image: "https://via.placeholder.com/300x300/8b4513/ffffff?text=Oak+Leather" },
    { id: 12, name: "Italian Leather Strap - Black", category: "Leather Straps", price: 75, description: "A classic black leather strap with contrast white stitching.", image: "https://via.placeholder.com/300x300/000000/ffffff?text=Black+Leather" },
    { id: 13, name: "Steel Bracelet - Brushed", category: "Steel Bracelets", price: 110, description: "A 316L stainless steel oyster-style bracelet with a brushed finish.", image: "https://via.placeholder.com/300x300/c0c0c0/000000?text=Brushed+Steel" },
    { id: 14, name: "Steel Bracelet - Polished", category: "Steel Bracelets", price: 110, description: "A five-link polished steel bracelet for a more refined, dressy look.", image: "https://via.placeholder.com/300x300/e6e6fa/000000?text=Polished+Steel" },
    { id: 15, name: "Nylon Strap - Forest Green", category: "Nylon Straps", price: 45, description: "A durable, single-pass nylon strap perfect for outdoor use.", image: "https://via.placeholder.com/300x300/228b22/ffffff?text=Forest+Green" },
    { id: 16, name: "Nylon Strap - Khaki", category: "Nylon Straps", price: 45, description: "A versatile and military-inspired khaki nylon strap.", image: "https://via.placeholder.com/300x300/bdb76b/000000?text=Khaki" },
    { id: 17, name: "Canvas Watch Roll - 3 Slot", category: "Watch Rolls & Cases", price: 95, description: "A waxed canvas roll with soft lining to protect three watches during travel.", image: "https://via.placeholder.com/300x300/8b4513/ffffff?text=Canvas+Roll" },
    { id: 18, name: "Leather Watch Case - Single", category: "Watch Rolls & Cases", price: 120, description: "A premium black leather hard case for storing a single cherished timepiece.", image: "https://via.placeholder.com/300x300/000000/ffffff?text=Leather+Case" },
    { id: 19, name: "Spring Bar Tool - Pro", category: "Strap Tools", price: 35, description: "A professional-grade steel tool for easily changing straps.", image: "https://via.placeholder.com/300x300/c0c0c0/000000?text=Spring+Bar+Tool" },
    { id: 20, name: "Travel Pouch - Suede", category: "Watch Rolls & Cases", price: 55, description: "A simple and elegant suede pouch for protecting your watch from scratches.", image: "https://via.placeholder.com/300x300/8b4513/ffffff?text=Suede+Pouch" }
];

const journalData = [
    { id: 1, title: "Automatic vs. Quartz: A Guide", author: "Mark Jennings", date: "Aug 12, 2025", snippet: "Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.", image: "https://via.placeholder.com/400x250/2c3e50/ffffff?text=Automatic+vs+Quartz" },
    { id: 2, title: "How to Pair Your Watch and Strap", author: "Alisha Khan", date: "Aug 05, 2025", snippet: "A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.", image: "https://via.placeholder.com/400x250/34495e/ffffff?text=Watch+Strap+Pairing" },
    { id: 3, title: "The Enduring Appeal of the Dive Watch", author: "Mark Jennings", date: "Jul 28, 2025", snippet: "From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.", image: "https://via.placeholder.com/400x250/1abc9c/ffffff?text=Dive+Watch+Appeal" },
    { id: 4, title: "A Look Inside Our Workshop", author: "David Chen", date: "Jul 21, 2025", snippet: "Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.", image: "https://via.placeholder.com/400x250/8b4513/ffffff?text=AETOS+Workshop" },
    { id: 5, title: "Caring for Your Leather Strap", author: "Alisha Khan", date: "Jul 14, 2025", snippet: "Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.", image: "https://via.placeholder.com/400x250/654321/ffffff?text=Leather+Care" },
    { id: 6, title: "What is Sapphire Crystal?", author: "Mark Jennings", date: "Jul 07, 2025", snippet: "We explain why we use sapphire crystal in all our watches and why it's the gold standard for scratch resistance and clarity.", image: "https://via.placeholder.com/400x250/4169e1/ffffff?text=Sapphire+Crystal" },
    { id: 7, title: "5 Iconic Watches in Cinema", author: "Liam Carter", date: "Jun 30, 2025", snippet: "From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood's biggest stars.", image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Cinema+Watches" },
    { id: 8, title: "The AETOS Design Philosophy", author: "David Chen", date: "Jun 23, 2025", snippet: "Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.", image: "https://via.placeholder.com/400x250/2c3e50/ffffff?text=Design+Philosophy" },
    { id: 9, title: "A Brief History of the Chronograph", author: "Mark Jennings", date: "Jun 16, 2025", snippet: "Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.", image: "https://via.placeholder.com/400x250/e74c3c/ffffff?text=Chronograph+History" },
    { id: 10, title: "Summer Style: The Best Watch Combos", author: "Alisha Khan", date: "Jun 09, 2025", snippet: "Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.", image: "https://via.placeholder.com/400x250/f39c12/ffffff?text=Summer+Style" },
    { id: 11, title: "Why 316L Steel Matters", author: "Mark Jennings", date: "Jun 02, 2025", snippet: "Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.", image: "https://via.placeholder.com/400x250/95a5a6/ffffff?text=316L+Steel" },
    { id: 12, title: "Packing for Travel: The Watch Lover's Guide", author: "Liam Carter", date: "May 26, 2025", snippet: "How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.", image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Travel+Guide" }
];

// DOM elements
let welcomePopup, header, mobileMenuToggle, mainNav, searchInput, searchResults;
let categoriesCarousel, productsCarousel, journalGrid, loadMoreBtn;

// State
let currentJournalPage = 0;
const articlesPerPage = 4;
let carouselPositions = {
    categories: 0,
    products: 0
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeWelcomePopup();
    initializeHeader();
    initializeMobileMenu();
    initializeSearch();
    initializeCarousels();
    initializeJournal();
    initializeForms();
    
    // Show welcome popup after a delay for first-time visitors
    setTimeout(showWelcomePopup, 2000);
});

function initializeElements() {
    welcomePopup = document.getElementById('welcome-popup');
    header = document.getElementById('header');
    mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    mainNav = document.querySelector('.main-nav');
    searchInput = document.getElementById('search');
    searchResults = document.getElementById('search-results');
    categoriesCarousel = document.getElementById('categories-carousel');
    productsCarousel = document.getElementById('products-carousel');
    journalGrid = document.getElementById('journal-grid');
    loadMoreBtn = document.getElementById('load-more-btn');
}

// Welcome Popup functionality
function initializeWelcomePopup() {
    const closeBtn = document.querySelector('.popup-close');
    const welcomeForm = document.getElementById('welcome-form');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideWelcomePopup);
    }
    
    if (welcomeForm) {
        welcomeForm.addEventListener('submit', handleWelcomeFormSubmit);
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && welcomePopup.classList.contains('show')) {
            hideWelcomePopup();
        }
    });
    
    // Close popup when clicking outside
    welcomePopup.addEventListener('click', function(e) {
        if (e.target === welcomePopup) {
            hideWelcomePopup();
        }
    });
}

function showWelcomePopup() {
    // Check if user has already seen the popup (simple localStorage check)
    if (localStorage.getItem('aetos-welcome-shown')) {
        return;
    }
    
    welcomePopup.classList.add('show');
    welcomePopup.setAttribute('aria-hidden', 'false');
    
    // Focus management
    const firstInput = welcomePopup.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
}

function hideWelcomePopup() {
    welcomePopup.classList.remove('show');
    welcomePopup.setAttribute('aria-hidden', 'true');
    localStorage.setItem('aetos-welcome-shown', 'true');
}

function handleWelcomeFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const email = formData.get('email');
    const birthday = formData.get('birthday');
    
    // Simulate form submission
    setTimeout(() => {
        document.querySelector('.popup-form').style.display = 'none';
        document.getElementById('success-message').classList.remove('hidden');
        
        // Hide popup after showing success message
        setTimeout(hideWelcomePopup, 3000);
    }, 500);
}

// Header functionality
function initializeHeader() {
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    if (!mobileMenuToggle || !mainNav) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        const isActive = mainNav.classList.contains('active');
        
        if (isActive) {
            mainNav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            mainNav.classList.add('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Handle dropdown toggles in mobile menu
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const megaMenu = item.querySelector('.mega-menu');
        
        if (link && megaMenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });
}

// Search functionality
function initializeSearch() {
    if (!searchInput || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length < 2) {
            hideSearchResults();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            showSearchResults();
        }
    });
    
    searchInput.addEventListener('blur', function() {
        // Delay hiding to allow for click events
        setTimeout(hideSearchResults, 200);
    });
    
    // Keyboard navigation for search results
    searchInput.addEventListener('keydown', function(e) {
        const items = searchResults.querySelectorAll('.search-result-item');
        const selected = searchResults.querySelector('.search-result-item.selected');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const next = selected.nextElementSibling;
                if (next && next.classList.contains('search-result-item')) {
                    next.classList.add('selected');
                } else if (items.length > 0) {
                    items[0].classList.add('selected');
                }
            } else if (items.length > 0) {
                items[0].classList.add('selected');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const prev = selected.previousElementSibling;
                if (prev && prev.classList.contains('search-result-item')) {
                    prev.classList.add('selected');
                } else if (items.length > 0) {
                    items[items.length - 1].classList.add('selected');
                }
            } else if (items.length > 0) {
                items[items.length - 1].classList.add('selected');
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selected) {
                selected.click();
            }
        }
    });
}

function performSearch(query) {
    const results = [];
    const queryLower = query.toLowerCase();
    
    // Search products
    const productMatches = productsData.filter(product => 
        product.name.toLowerCase().includes(queryLower) ||
        product.category.toLowerCase().includes(queryLower) ||
        product.description.toLowerCase().includes(queryLower)
    ).slice(0, 5);
    
    if (productMatches.length > 0) {
        results.push({ type: 'category', title: 'Products' });
        productMatches.forEach(product => {
            results.push({
                type: 'product',
                title: product.name,
                subtitle: `$${product.price} CAD`,
                url: `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`
            });
        });
    }
    
    // Search categories
    const categories = ['Watches', 'Straps', 'Accessories', 'Vanguard Chronograph', 'Sentinel Automatic', 'Shoreline Diver'];
    const categoryMatches = categories.filter(category => 
        category.toLowerCase().includes(queryLower)
    ).slice(0, 3);
    
    if (categoryMatches.length > 0) {
        results.push({ type: 'category', title: 'Categories' });
        categoryMatches.forEach(category => {
            results.push({
                type: 'link',
                title: category,
                url: `/${category.toLowerCase().replace(/\s+/g, '-')}`
            });
        });
    }
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    results.forEach(result => {
        const item = document.createElement('div');
        
        if (result.type === 'category') {
            item.className = 'search-result-category';
            item.textContent = result.title;
        } else {
            item.className = 'search-result-item';
            item.innerHTML = `
                <div>
                    <div style="font-weight: 500;">${result.title}</div>
                    ${result.subtitle ? `<div style="font-size: 0.9rem; color: #7f8c8d;">${result.subtitle}</div>` : ''}
                </div>
            `;
            
            item.addEventListener('click', function() {
                // Simulate navigation
                console.log('Navigate to:', result.url);
                hideSearchResults();
                searchInput.value = '';
            });
        }
        
        searchResults.appendChild(item);
    });
    
    showSearchResults();
}

function showSearchResults() {
    searchResults.classList.add('show');
    searchResults.setAttribute('aria-hidden', 'false');
    searchInput.setAttribute('aria-expanded', 'true');
}

function hideSearchResults() {
    searchResults.classList.remove('show');
    searchResults.setAttribute('aria-hidden', 'true');
    searchInput.setAttribute('aria-expanded', 'false');
    
    // Clear selection
    const selected = searchResults.querySelector('.search-result-item.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
}

// Carousel functionality
function initializeCarousels() {
    initializeCarousel('categories', categoriesCarousel, 5);
    initializeCarousel('products', productsCarousel, 5);
}

function initializeCarousel(type, carousel, totalSlides) {
    if (!carousel) return;
    
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.parentElement.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.parentElement.querySelector('.carousel-btn-next');
    
    if (!track || !slides.length || !prevBtn || !nextBtn) return;
    
    let currentPosition = 0;
    const slideWidth = slides[0].offsetWidth;
    const slideGap = 24; // 1.5rem in pixels
    const visibleSlides = Math.floor(carousel.offsetWidth / (slideWidth + slideGap));
    const maxPosition = Math.max(0, totalSlides - visibleSlides);
    
    function updateCarousel() {
        const translateX = -currentPosition * (slideWidth + slideGap);
        track.style.transform = `translateX(${translateX}px)`;
        
        prevBtn.disabled = currentPosition === 0;
        nextBtn.disabled = currentPosition >= maxPosition;
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentPosition > 0) {
            currentPosition--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateCarousel();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', function() {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0 && currentPosition < maxPosition) {
                currentPosition++;
            } else if (diffX < 0 && currentPosition > 0) {
                currentPosition--;
            }
            updateCarousel();
        }
    });
    
    // Initialize
    updateCarousel();
    
    // Update on window resize
    window.addEventListener('resize', function() {
        const newVisibleSlides = Math.floor(carousel.offsetWidth / (slideWidth + slideGap));
        const newMaxPosition = Math.max(0, totalSlides - newVisibleSlides);
        
        if (currentPosition > newMaxPosition) {
            currentPosition = newMaxPosition;
        }
        
        updateCarousel();
    });
}

// Journal functionality
function initializeJournal() {
    if (!journalGrid || !loadMoreBtn) return;
    
    loadJournalArticles();
    
    loadMoreBtn.addEventListener('click', function() {
        loadJournalArticles();
    });
}

function loadJournalArticles() {
    const startIndex = currentJournalPage * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = journalData.slice(startIndex, endIndex);
    
    articlesToShow.forEach(article => {
        const articleCard = createJournalCard(article);
        journalGrid.appendChild(articleCard);
        
        // Add fade-in animation
        setTimeout(() => {
            articleCard.classList.add('fade-in');
        }, 100);
    });
    
    currentJournalPage++;
    
    // Hide load more button if no more articles
    if (endIndex >= journalData.length) {
        loadMoreBtn.style.display = 'none';
    }
}

function createJournalCard(article) {
    const card = document.createElement('article');
    card.className = 'journal-card';
    card.innerHTML = `
        <a href="/journal/${article.title.toLowerCase().replace(/\s+/g, '-')}">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="journal-card-content">
                <h3>${article.title}</h3>
                <div class="journal-card-meta">By ${article.author} • ${article.date}</div>
                <p>${article.snippet}</p>
                <span class="btn btn-outline">Read More</span>
            </div>
        </a>
    `;
    
    return card;
}

// Form functionality
function initializeForms() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            if (emailInput && submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    submitBtn.textContent = 'Subscribed!';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1000);
            }
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Accessibility enhancements
function enhanceAccessibility() {
    // Skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10001;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main-content';
    }
    
    // Announce dynamic content changes
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    `;
    document.body.appendChild(announcer);
    
    window.announceToScreenReader = function(message) {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    };
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Performance optimization
function optimizeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
}

// Initialize image optimization
document.addEventListener('DOMContentLoaded', optimizeImages);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}