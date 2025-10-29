// AETOS Timepieces - Interactive JavaScript

// Data for categories, products, and journal articles
const categoriesData = [
    {
        id: 'vanguard',
        name: 'The Vanguard Chronograph',
        description: 'Sophisticated, multi-dial watches for precision timing.',
        link: '#vanguard-chronograph'
    },
    {
        id: 'sentinel',
        name: 'The Sentinel Automatic',
        description: 'Classic, self-winding timepieces with exhibition casebacks.',
        link: '#sentinel-automatic'
    },
    {
        id: 'shoreline',
        name: 'The Shoreline Diver',
        description: 'Robust, water-resistant watches built for adventure.',
        link: '#shoreline-diver'
    },
    {
        id: 'leather',
        name: 'Premium Leather Straps',
        description: 'Hand-stitched straps from Italian leather.',
        link: '#leather-straps'
    },
    {
        id: 'travel',
        name: 'Travel & Storage',
        description: 'High-quality watch rolls and cases for protection.',
        link: '#watch-rolls-cases'
    }
];

const productsData = [
    {
        name: 'Vanguard Chrono - Midnight',
        category: 'Vanguard Chronograph',
        price: 425,
        description: 'A classic panda dial with deep black subdials and a polished steel case.',
        link: '#vanguard-midnight'
    },
    {
        name: 'Vanguard Chrono - Sterling',
        category: 'Vanguard Chronograph',
        price: 425,
        description: 'A sunburst silver dial that captures the light, paired with a brown leather strap.',
        link: '#vanguard-sterling'
    },
    {
        name: 'Vanguard Chrono - Navy Gold',
        category: 'Vanguard Chronograph',
        price: 450,
        description: 'A striking deep navy dial with gold-tone hands and indices.',
        link: '#vanguard-navy-gold'
    },
    {
        name: 'Sentinel 40 - Classic White',
        category: 'Sentinel Automatic',
        price: 550,
        description: 'An elegant automatic with a clean white dial and a 40-hour power reserve.',
        link: '#sentinel-classic-white'
    },
    {
        name: 'Sentinel 40 - Onyx',
        category: 'Sentinel Automatic',
        price: 550,
        description: 'A versatile black dial automatic, perfect for both formal and casual wear.',
        link: '#sentinel-onyx'
    },
    {
        name: 'Sentinel 38 - Exhibition',
        category: 'Sentinel Automatic',
        price: 575,
        description: 'A slightly smaller case with a stunning exhibition back showing the Miyota movement.',
        link: '#sentinel-exhibition'
    },
    {
        name: 'Shoreline Diver - Abyss',
        category: 'Shoreline Diver',
        price: 495,
        description: 'A 200M water-resistant diver with a ceramic bezel and luminous markers.',
        link: '#shoreline-abyss'
    },
    {
        name: 'Shoreline Diver - Tropic',
        category: 'Shoreline Diver',
        price: 495,
        description: 'A vintage-inspired diver with a teal dial and a stainless steel bracelet.',
        link: '#shoreline-tropic'
    },
    {
        name: 'The Minimalist 36 - Pearl',
        category: 'Minimalist 36',
        price: 295,
        description: 'A refined 36mm quartz watch with a mother-of-pearl dial.',
        link: '#minimalist-pearl'
    },
    {
        name: 'The Minimalist 36 - Slate',
        category: 'Minimalist 36',
        price: 295,
        description: 'A modern, unisex design with a matte grey dial and no indices.',
        link: '#minimalist-slate'
    }
];

const journalArticles = [
    {
        title: 'Automatic vs. Quartz: A Guide',
        author: 'Mark Jennings',
        date: 'Aug 12, 2025',
        snippet: 'Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.',
        link: '#automatic-vs-quartz'
    },
    {
        title: 'How to Pair Your Watch and Strap',
        author: 'Alisha Khan',
        date: 'Aug 05, 2025',
        snippet: 'A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.',
        link: '#watch-strap-pairing'
    },
    {
        title: 'The Enduring Appeal of the Dive Watch',
        author: 'Mark Jennings',
        date: 'Jul 28, 2025',
        snippet: 'From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.',
        link: '#dive-watch-appeal'
    },
    {
        title: 'A Look Inside Our Workshop',
        author: 'David Chen',
        date: 'Jul 21, 2025',
        snippet: 'Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.',
        link: '#workshop-tour'
    },
    {
        title: 'Caring for Your Leather Strap',
        author: 'Alisha Khan',
        date: 'Jul 14, 2025',
        snippet: 'Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.',
        link: '#leather-strap-care'
    },
    {
        title: 'What is Sapphire Crystal?',
        author: 'Mark Jennings',
        date: 'Jul 07, 2025',
        snippet: 'We explain why we use sapphire crystal in all our watches and why it\'s the gold standard for scratch resistance and clarity.',
        link: '#sapphire-crystal'
    },
    {
        title: '5 Iconic Watches in Cinema',
        author: 'Liam Carter',
        date: 'Jun 30, 2025',
        snippet: 'From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood\'s biggest stars.',
        link: '#watches-in-cinema'
    },
    {
        title: 'The AETOS Design Philosophy',
        author: 'David Chen',
        date: 'Jun 23, 2025',
        snippet: 'Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.',
        link: '#design-philosophy'
    },
    {
        title: 'A Brief History of the Chronograph',
        author: 'Mark Jennings',
        date: 'Jun 16, 2025',
        snippet: 'Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.',
        link: '#chronograph-history'
    },
    {
        title: 'Summer Style: The Best Watch Combos',
        author: 'Alisha Khan',
        date: 'Jun 09, 2025',
        snippet: 'Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.',
        link: '#summer-watch-style'
    },
    {
        title: 'Why 316L Steel Matters',
        author: 'Mark Jennings',
        date: 'Jun 02, 2025',
        snippet: 'Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.',
        link: '#316l-steel'
    },
    {
        title: 'Packing for Travel: The Watch Lover\'s Guide',
        author: 'Liam Carter',
        date: 'May 26, 2025',
        snippet: 'How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.',
        link: '#travel-watch-guide'
    }
];

// Global state
let currentArticlesShown = 0;
const articlesPerLoad = 4;
let isWelcomeDialogShown = false;

// DOM Elements
const welcomeDialog = document.getElementById('welcome-dialog');
const welcomeForm = document.getElementById('welcome-form');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const primaryNav = document.getElementById('primary-navigation');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const searchStatus = document.getElementById('search-status');
const categoriesCarousel = document.getElementById('categories-carousel');
const productsCarousel = document.getElementById('products-carousel');
const journalGrid = document.getElementById('journal-grid');
const loadMoreButton = document.getElementById('load-more-articles');
const journalStatus = document.getElementById('journal-status');
const newsletterForm = document.getElementById('newsletter-form');
const currentYearSpan = document.getElementById('current-year');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setCurrentYear();
    populateCategories();
    populateProducts();
    loadInitialArticles();
    setupEventListeners();
    setupPredictiveSearch();
    
    // Show welcome dialog for first-time visitors
    setTimeout(() => {
        if (!localStorage.getItem('aetos-welcome-shown')) {
            showWelcomeDialog();
        }
    }, 1000);
}

// Set current year in footer
function setCurrentYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// Populate categories carousel
function populateCategories() {
    if (!categoriesCarousel) return;
    
    categoriesCarousel.innerHTML = '';
    
    categoriesData.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'carousel-item category-card';
        categoryCard.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <a href="${category.link}" class="category-link">Explore ${category.name}</a>
        `;
        categoriesCarousel.appendChild(categoryCard);
    });
}

// Populate products carousel
function populateProducts() {
    if (!productsCarousel) return;
    
    productsCarousel.innerHTML = '';
    
    productsData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'carousel-item product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">$${product.price} CAD</div>
            <a href="${product.link}" class="product-link">Learn more about ${product.name}</a>
        `;
        productsCarousel.appendChild(productCard);
    });
}

// Load initial journal articles
function loadInitialArticles() {
    loadMoreArticles();
}

// Load more journal articles
function loadMoreArticles() {
    if (!journalGrid) return;
    
    const nextArticles = journalArticles.slice(currentArticlesShown, currentArticlesShown + articlesPerLoad);
    
    nextArticles.forEach(article => {
        const articleCard = document.createElement('article');
        articleCard.className = 'journal-article';
        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <div class="article-meta">By ${article.author} • ${article.date}</div>
            <p>${article.snippet}</p>
            <a href="${article.link}" class="article-link">Read more about ${article.title}</a>
        `;
        journalGrid.appendChild(articleCard);
    });
    
    currentArticlesShown += nextArticles.length;
    
    // Update status and button
    const remainingArticles = journalArticles.length - currentArticlesShown;
    if (remainingArticles <= 0) {
        if (loadMoreButton) {
            loadMoreButton.disabled = true;
            loadMoreButton.textContent = 'All Articles Loaded';
        }
    }
    
    if (journalStatus) {
        journalStatus.textContent = `Loaded ${nextArticles.length} more articles. ${remainingArticles} remaining.`;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Welcome dialog
    setupWelcomeDialog();
    
    // Mobile menu toggle
    if (mobileMenuToggle && primaryNav) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation submenu toggles
    setupNavigationToggles();
    
    // Carousel controls
    setupCarouselControls();
    
    // Load more articles button
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', loadMoreArticles);
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Keyboard navigation for dialogs
    document.addEventListener('keydown', handleGlobalKeydown);
    
    // Close mobile menu on outside click
    document.addEventListener('click', handleOutsideClick);
}

// Welcome dialog functionality
function setupWelcomeDialog() {
    if (!welcomeDialog || !welcomeForm) return;
    
    // Close button
    const closeButton = welcomeDialog.querySelector('[data-close-dialog]');
    if (closeButton) {
        closeButton.addEventListener('click', closeWelcomeDialog);
    }
    
    // Form submission
    welcomeForm.addEventListener('submit', handleWelcomeFormSubmit);
}

function showWelcomeDialog() {
    if (welcomeDialog && !isWelcomeDialogShown) {
        welcomeDialog.showModal();
        isWelcomeDialogShown = true;
        trapFocus(welcomeDialog);
    }
}

function closeWelcomeDialog() {
    if (welcomeDialog) {
        welcomeDialog.close();
        localStorage.setItem('aetos-welcome-shown', 'true');
        // Return focus to a logical element
        const firstFocusableElement = document.querySelector('.logo');
        if (firstFocusableElement) {
            firstFocusableElement.focus();
        }
    }
}

function handleWelcomeFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(welcomeForm);
    const firstName = formData.get('firstName')?.trim();
    const email = formData.get('email')?.trim();
    
    // Clear previous errors
    clearFormErrors(welcomeForm);
    
    let isValid = true;
    
    // Validate first name
    if (!firstName) {
        showFieldError('welcome-first-name', 'first-name-error', 'First name is required.');
        isValid = false;
    }
    
    // Validate email
    if (!email || !isValidEmail(email)) {
        showFieldError('welcome-email', 'welcome-email-error', 'Please enter a valid email address.');
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        const successMessage = document.getElementById('welcome-success');
        if (successMessage) {
            successMessage.hidden = false;
        }
        
        // Close dialog after delay
        setTimeout(() => {
            closeWelcomeDialog();
        }, 2000);
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const isOpen = primaryNav.classList.contains('open');
    
    if (isOpen) {
        primaryNav.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    } else {
        primaryNav.classList.add('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        
        // Focus first nav item
        const firstNavLink = primaryNav.querySelector('.nav-link, .nav-toggle');
        if (firstNavLink) {
            firstNavLink.focus();
        }
    }
}

// Navigation submenu toggles
function setupNavigationToggles() {
    const navToggles = document.querySelectorAll('.nav-toggle');
    
    navToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const submenuId = this.getAttribute('aria-controls');
            const submenu = document.getElementById(submenuId);
            
            if (submenu) {
                if (isExpanded) {
                    this.setAttribute('aria-expanded', 'false');
                    submenu.hidden = true;
                } else {
                    // Close other open submenus
                    navToggles.forEach(otherToggle => {
                        if (otherToggle !== this) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                            const otherSubmenu = document.getElementById(otherToggle.getAttribute('aria-controls'));
                            if (otherSubmenu) {
                                otherSubmenu.hidden = true;
                            }
                        }
                    });
                    
                    this.setAttribute('aria-expanded', 'true');
                    submenu.hidden = false;
                }
            }
        });
    });
}

// Carousel controls
function setupCarouselControls() {
    const carouselButtons = document.querySelectorAll('.carousel-btn');
    
    carouselButtons.forEach(button => {
        button.addEventListener('click', function() {
            const carouselType = this.getAttribute('data-carousel');
            const isNext = this.classList.contains('carousel-next');
            
            let carousel;
            if (carouselType === 'categories') {
                carousel = categoriesCarousel;
            } else if (carouselType === 'products') {
                carousel = productsCarousel;
            }
            
            if (carousel) {
                scrollCarousel(carousel, isNext);
            }
        });
    });
}

function scrollCarousel(carousel, isNext) {
    const scrollAmount = carousel.clientWidth * 0.8;
    const currentScroll = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    let newScroll;
    if (isNext) {
        newScroll = Math.min(currentScroll + scrollAmount, maxScroll);
    } else {
        newScroll = Math.max(currentScroll - scrollAmount, 0);
    }
    
    carousel.scrollTo({
        left: newScroll,
        behavior: 'smooth'
    });
}

// Predictive search functionality
function setupPredictiveSearch() {
    if (!searchInput || !searchSuggestions) return;
    
    // Create searchable data
    const searchableItems = [
        ...categoriesData.map(cat => ({ type: 'category', name: cat.name, link: cat.link })),
        ...productsData.map(prod => ({ type: 'product', name: prod.name, link: prod.link })),
        ...journalArticles.map(article => ({ type: 'article', name: article.title, link: article.link }))
    ];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchSuggestions.innerHTML = '';
            updateSearchStatus('');
            return;
        }
        
        // Filter items based on query
        const matches = searchableItems
            .filter(item => item.name.toLowerCase().includes(query))
            .slice(0, 8); // Limit to 8 suggestions
        
        // Clear existing suggestions
        searchSuggestions.innerHTML = '';
        
        // Add new suggestions
        matches.forEach(match => {
            const option = document.createElement('option');
            option.value = match.name;
            searchSuggestions.appendChild(option);
        });
        
        // Update status for screen readers
        updateSearchStatus(`${matches.length} suggestions available`);
    });
}

function updateSearchStatus(message) {
    if (searchStatus) {
        searchStatus.textContent = message;
    }
}

// Newsletter form handling
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(newsletterForm);
    const email = formData.get('email')?.trim();
    
    const successMessage = document.getElementById('newsletter-success');
    const errorMessage = document.getElementById('newsletter-error');
    
    // Clear previous messages
    if (successMessage) successMessage.hidden = true;
    if (errorMessage) errorMessage.hidden = true;
    
    if (!email || !isValidEmail(email)) {
        if (errorMessage) {
            errorMessage.hidden = false;
        }
        return;
    }
    
    // Show success message
    if (successMessage) {
        successMessage.hidden = false;
        newsletterForm.reset();
    }
}

// Global keyboard event handling
function handleGlobalKeydown(event) {
    // Close dialogs with Escape key
    if (event.key === 'Escape') {
        if (welcomeDialog && welcomeDialog.open) {
            closeWelcomeDialog();
        }
        
        if (primaryNav && primaryNav.classList.contains('open')) {
            toggleMobileMenu();
        }
    }
}

// Handle clicks outside mobile menu
function handleOutsideClick(event) {
    if (primaryNav && primaryNav.classList.contains('open')) {
        if (!primaryNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            toggleMobileMenu();
        }
    }
}

// Focus trap for dialog
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
    
    // Focus first element
    if (firstElement) {
        firstElement.focus();
    }
}

// Form validation utilities
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    if (field) {
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorId);
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.hidden = false;
    }
}

function clearFormErrors(form) {
    const fields = form.querySelectorAll('input');
    const errors = form.querySelectorAll('.error-message');
    
    fields.forEach(field => {
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
    });
    
    errors.forEach(error => {
        error.hidden = true;
        error.textContent = '';
    });
}

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.carousel-item, .journal-article');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});