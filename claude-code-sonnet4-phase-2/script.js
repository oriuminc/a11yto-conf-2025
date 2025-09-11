// AETOS Timepieces - WCAG 2.x AA Compliant JavaScript

// Data definitions
const categories = [
    { name: 'The Vanguard Chronograph', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Vanguard', description: 'Sophisticated, multi-dial watches for precision timing.' },
    { name: 'The Sentinel Automatic', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Sentinel', description: 'Classic, self-winding timepieces with exhibition casebacks.' },
    { name: 'The Shoreline Diver', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Shoreline', description: 'Robust, water-resistant watches built for adventure.' },
    { name: 'Premium Leather Straps', image: 'https://via.placeholder.com/400x300/8b6f47/ffffff?text=Leather+Straps', description: 'Hand-stitched straps from Italian leather.' },
    { name: 'Travel & Storage', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Travel+Storage', description: 'High-quality watch rolls and cases for protection.' }
];

const products = [
    { name: 'Vanguard Chrono - Midnight', category: 'Vanguard Chronograph', price: '$425', description: 'A classic panda dial with deep black subdials and a polished steel case.', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Vanguard+Midnight' },
    { name: 'Vanguard Chrono - Sterling', category: 'Vanguard Chronograph', price: '$425', description: 'A sunburst silver dial that captures the light, paired with a brown leather strap.', image: 'https://via.placeholder.com/400x300/95a5a6/ffffff?text=Vanguard+Sterling' },
    { name: 'Vanguard Chrono - Navy Gold', category: 'Vanguard Chronograph', price: '$450', description: 'A striking deep navy dial with gold-tone hands and indices.', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Vanguard+Navy' },
    { name: 'Sentinel 40 - Classic White', category: 'Sentinel Automatic', price: '$550', description: 'An elegant automatic with a clean white dial and a 40-hour power reserve.', image: 'https://via.placeholder.com/400x300/ecf0f1/2c3e50?text=Sentinel+White' },
    { name: 'Sentinel 40 - Onyx', category: 'Sentinel Automatic', price: '$550', description: 'A versatile black dial automatic, perfect for both formal and casual wear.', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Sentinel+Onyx' },
    { name: 'Sentinel 38 - Exhibition', category: 'Sentinel Automatic', price: '$575', description: 'A slightly smaller case with a stunning exhibition back showing the Miyota movement.', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Sentinel+Exhibition' },
    { name: 'Shoreline Diver - Abyss', category: 'Shoreline Diver', price: '$495', description: 'A 200M water-resistant diver with a ceramic bezel and luminous markers.', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Shoreline+Abyss' },
    { name: 'Shoreline Diver - Tropic', category: 'Shoreline Diver', price: '$495', description: 'A vintage-inspired diver with a teal dial and a stainless steel bracelet.', image: 'https://via.placeholder.com/400x300/16a085/ffffff?text=Shoreline+Tropic' },
    { name: 'The Minimalist 36 - Pearl', category: 'Minimalist 36', price: '$295', description: 'A refined 36mm quartz watch with a mother-of-pearl dial.', image: 'https://via.placeholder.com/400x300/bdc3c7/2c3e50?text=Minimalist+Pearl' },
    { name: 'The Minimalist 36 - Slate', category: 'Minimalist 36', price: '$295', description: 'A modern, unisex design with a matte grey dial and no indices.', image: 'https://via.placeholder.com/400x300/95a5a6/ffffff?text=Minimalist+Slate' }
];

const articles = [
    { title: 'Automatic vs. Quartz: A Guide', author: 'Mark Jennings', date: 'Aug 12, 2025', snippet: 'Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.', image: 'https://via.placeholder.com/400x260/34495e/ffffff?text=Automatic+vs+Quartz' },
    { title: 'How to Pair Your Watch and Strap', author: 'Alisha Khan', date: 'Aug 05, 2025', snippet: 'A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.', image: 'https://via.placeholder.com/400x260/8b6f47/ffffff?text=Watch+Straps' },
    { title: 'The Enduring Appeal of the Dive Watch', author: 'Mark Jennings', date: 'Jul 28, 2025', snippet: 'From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.', image: 'https://via.placeholder.com/400x260/2c3e50/ffffff?text=Dive+Watch' },
    { title: 'A Look Inside Our Workshop', author: 'David Chen', date: 'Jul 21, 2025', snippet: 'Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.', image: 'https://via.placeholder.com/400x260/95a5a6/ffffff?text=Workshop' },
    { title: 'Caring for Your Leather Strap', author: 'Alisha Khan', date: 'Jul 14, 2025', snippet: 'Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.', image: 'https://via.placeholder.com/400x260/8b6f47/ffffff?text=Leather+Care' },
    { title: 'What is Sapphire Crystal?', author: 'Mark Jennings', date: 'Jul 07, 2025', snippet: 'We explain why we use sapphire crystal in all our watches and why its the gold standard for scratch resistance and clarity.', image: 'https://via.placeholder.com/400x260/34495e/ffffff?text=Sapphire+Crystal' },
    { title: '5 Iconic Watches in Cinema', author: 'Liam Carter', date: 'Jun 30, 2025', snippet: 'From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood\'s biggest stars.', image: 'https://via.placeholder.com/400x260/2c3e50/ffffff?text=Cinema+Watches' },
    { title: 'The AETOS Design Philosophy', author: 'David Chen', date: 'Jun 23, 2025', snippet: 'Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.', image: 'https://via.placeholder.com/400x260/95a5a6/ffffff?text=Design+Philosophy' },
    { title: 'A Brief History of the Chronograph', author: 'Mark Jennings', date: 'Jun 16, 2025', snippet: 'Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.', image: 'https://via.placeholder.com/400x260/34495e/ffffff?text=Chronograph+History' },
    { title: 'Summer Style: The Best Watch Combos', author: 'Alisha Khan', date: 'Jun 09, 2025', snippet: 'Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.', image: 'https://via.placeholder.com/400x260/8b6f47/ffffff?text=Summer+Style' },
    { title: 'Why 316L Steel Matters', author: 'Mark Jennings', date: 'Jun 02, 2025', snippet: 'Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.', image: 'https://via.placeholder.com/400x260/2c3e50/ffffff?text=316L+Steel' },
    { title: 'Packing for Travel: The Watch Lover\'s Guide', author: 'Liam Carter', date: 'May 26, 2025', snippet: 'How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.', image: 'https://via.placeholder.com/400x260/95a5a6/ffffff?text=Travel+Guide' }
];

// State management
let currentJournalIndex = 4; // Start with 4 articles shown
let searchTimeout;
let focusedSearchResult = -1;

// Utility functions
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="email"], input[type="date"], input[type="search"], select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    function handleTabKey(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    }
    
    element.addEventListener('keydown', handleTabKey);
    firstFocusable?.focus();
    
    return () => {
        element.removeEventListener('keydown', handleTabKey);
    };
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(inputElement, message) {
    const errorElement = document.getElementById(inputElement.getAttribute('aria-describedby'));
    if (errorElement) {
        errorElement.textContent = message;
        inputElement.setAttribute('aria-invalid', 'true');
    }
}

function clearError(inputElement) {
    const errorElement = document.getElementById(inputElement.getAttribute('aria-describedby'));
    if (errorElement) {
        errorElement.textContent = '';
        inputElement.removeAttribute('aria-invalid');
    }
}

// Welcome Dialog functionality
function initializeWelcomeDialog() {
    const dialog = document.getElementById('welcome-dialog');
    const form = document.getElementById('welcome-form');
    const closeBtn = dialog.querySelector('.close-btn');
    const successMessage = dialog.querySelector('.success-message');
    
    // Check if user has seen dialog before
    const hasSeenDialog = localStorage.getItem('aetos-welcome-seen');
    
    if (!hasSeenDialog) {
        setTimeout(() => {
            dialog.showModal();
            announceToScreenReader('Welcome dialog opened. Get 20% off your first order.');
            trapFocus(dialog);
        }, 2000);
    }
    
    // Close dialog functionality
    function closeDialog() {
        dialog.close();
        localStorage.setItem('aetos-welcome-seen', 'true');
    }
    
    closeBtn.addEventListener('click', closeDialog);
    
    // Close on escape key
    dialog.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDialog();
        }
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('first-name');
        const email = document.getElementById('email');
        let isValid = true;
        
        // Clear previous errors
        clearError(firstName);
        clearError(email);
        
        // Validate first name
        if (!firstName.value.trim()) {
            showError(firstName, 'First name is required');
            isValid = false;
        }
        
        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (isValid) {
            form.style.display = 'none';
            successMessage.hidden = false;
            announceToScreenReader('Success! Thank you for subscribing. Check your email for your discount code.');
            
            setTimeout(() => {
                closeDialog();
                // Reset form for next time
                form.style.display = 'block';
                successMessage.hidden = true;
                form.reset();
            }, 3000);
        } else {
            // Focus first invalid field
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            firstInvalid?.focus();
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navButtons = document.querySelectorAll('.nav-item.has-submenu > .nav-link');
    const header = document.querySelector('.global-header');
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isOpen);
        mainNav.classList.toggle('open');
        
        if (!isOpen) {
            announceToScreenReader('Navigation menu opened');
            trapFocus(mainNav);
        } else {
            announceToScreenReader('Navigation menu closed');
        }
    });
    
    // Mega menu toggles
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all other menus on desktop
            if (window.innerWidth > 768) {
                navButtons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.setAttribute('aria-expanded', 'false');
                    }
                });
            }
            
            button.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                announceToScreenReader(`${button.textContent.trim()} menu expanded`);
            } else {
                announceToScreenReader(`${button.textContent.trim()} menu collapsed`);
            }
        });
        
        // Keyboard navigation
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                button.setAttribute('aria-expanded', 'false');
                button.focus();
            }
        });
    });
    
    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.has-submenu')) {
            navButtons.forEach(button => {
                button.setAttribute('aria-expanded', 'false');
            });
        }
    });
    
    // Sticky header on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            hideSearchResults();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    searchInput.addEventListener('keydown', (e) => {
        const results = searchResults.querySelectorAll('.search-result-item');
        
        switch (e.key) {
            case 'Escape':
                hideSearchResults();
                searchInput.value = '';
                break;
            case 'ArrowDown':
                e.preventDefault();
                focusedSearchResult = Math.min(focusedSearchResult + 1, results.length - 1);
                updateSearchFocus(results);
                break;
            case 'ArrowUp':
                e.preventDefault();
                focusedSearchResult = Math.max(focusedSearchResult - 1, -1);
                if (focusedSearchResult === -1) {
                    searchInput.focus();
                } else {
                    updateSearchFocus(results);
                }
                break;
            case 'Enter':
                e.preventDefault();
                if (focusedSearchResult >= 0 && results[focusedSearchResult]) {
                    selectSearchResult(results[focusedSearchResult]);
                }
                break;
        }
    });
    
    function performSearch(query) {
        const searchableItems = [...products, ...categories];
        const results = searchableItems.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            (item.category && item.category.toLowerCase().includes(query.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 8);
        
        displaySearchResults(results, query);
    }
    
    function displaySearchResults(results, query) {
        focusedSearchResult = -1;
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item" role="option">
                    No results found for "${query}"
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map((result, index) => `
                <div class="search-result-item" role="option" tabindex="-1" data-index="${index}">
                    <strong>${result.name}</strong>
                    ${result.price ? ` - ${result.price}` : ''}
                    ${result.category ? `<br><small>${result.category}</small>` : ''}
                </div>
            `).join('');
            
            // Add click handlers to results
            searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
                item.addEventListener('click', () => selectSearchResult(item));
                item.addEventListener('mouseenter', () => {
                    focusedSearchResult = index;
                    updateSearchFocus(searchResults.querySelectorAll('.search-result-item'));
                });
            });
        }
        
        showSearchResults();
        announceToScreenReader(`${results.length} search results found`);
    }
    
    function updateSearchFocus(results) {
        results.forEach((result, index) => {
            result.classList.toggle('focused', index === focusedSearchResult);
        });
        
        if (focusedSearchResult >= 0) {
            results[focusedSearchResult].focus();
        }
    }
    
    function selectSearchResult(item) {
        const text = item.querySelector('strong').textContent;
        searchInput.value = text;
        hideSearchResults();
        announceToScreenReader(`Selected ${text}`);
    }
    
    function showSearchResults() {
        searchResults.hidden = false;
        searchInput.setAttribute('aria-expanded', 'true');
    }
    
    function hideSearchResults() {
        searchResults.hidden = true;
        searchInput.setAttribute('aria-expanded', 'false');
        focusedSearchResult = -1;
    }
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });
}

// Carousel functionality
function initializeCarousels() {
    initializeCategoryCarousel();
    initializeProductCarousel();
}

function initializeCategoryCarousel() {
    const track = document.getElementById('categories-track');
    if (!track) return;
    
    track.innerHTML = categories.map((category, index) => `
        <div class="carousel-item" role="listitem">
            <div class="category-card" tabindex="0" role="button" aria-label="${category.name}: ${category.description}">
                <img src="${category.image}" alt="" class="card-image" loading="lazy">
                <div class="card-content">
                    <h3 class="card-title">${category.name}</h3>
                </div>
            </div>
        </div>
    `).join('');
    
    setupCarouselNavigation('categories-track', '.featured-categories');
    addCardInteractions(track);
}

function initializeProductCarousel() {
    const track = document.getElementById('products-track');
    if (!track) return;
    
    track.innerHTML = products.map((product, index) => `
        <div class="carousel-item" role="listitem">
            <div class="product-card" tabindex="0" role="button" aria-label="${product.name}, ${product.category}, ${product.price}">
                <img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy">
                <div class="card-content">
                    <h3 class="card-title">${product.name}</h3>
                    <div class="card-price">${product.price}</div>
                </div>
            </div>
        </div>
    `).join('');
    
    setupCarouselNavigation('products-track', '.featured-products');
    addCardInteractions(track);
}

function setupCarouselNavigation(trackId, sectionSelector) {
    const track = document.getElementById(trackId);
    const section = document.querySelector(sectionSelector);
    const prevBtn = section.querySelector('.carousel-prev');
    const nextBtn = section.querySelector('.carousel-next');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentPosition = 0;
    const itemWidth = 300; // Approximate width including gap
    
    function updateButtons() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        prevBtn.disabled = track.scrollLeft <= 0;
        nextBtn.disabled = track.scrollLeft >= maxScroll - 10; // Small tolerance
        
        // Update ARIA labels
        const currentItem = Math.floor(track.scrollLeft / itemWidth) + 1;
        const totalItems = track.children.length;
        const visibleItems = Math.floor(track.clientWidth / itemWidth);
        
        prevBtn.setAttribute('aria-label', `Previous items, currently showing item ${currentItem} of ${totalItems}`);
        nextBtn.setAttribute('aria-label', `Next items, currently showing item ${currentItem} of ${totalItems}`);
    }
    
    function scrollCarousel(direction) {
        const scrollAmount = itemWidth * 2; // Scroll 2 items at a time
        const newPosition = direction === 'prev' 
            ? Math.max(0, track.scrollLeft - scrollAmount)
            : Math.min(track.scrollWidth - track.clientWidth, track.scrollLeft + scrollAmount);
        
        track.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
        
        announceToScreenReader(`Scrolled ${direction === 'prev' ? 'backward' : 'forward'} in carousel`);
    }
    
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));
    
    // Keyboard navigation for track
    track.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                scrollCarousel('prev');
                break;
            case 'ArrowRight':
                e.preventDefault();
                scrollCarousel('next');
                break;
        }
    });
    
    track.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons();
}

function addCardInteractions(container) {
    const cards = container.querySelectorAll('.category-card, .product-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.card-title').textContent;
            announceToScreenReader(`Selected ${title}`);
            // Here you would typically navigate to the product/category page
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// Journal functionality
function initializeJournal() {
    renderJournalArticles();
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    const statusElement = document.getElementById('load-more-status');
    
    loadMoreBtn.addEventListener('click', () => {
        const articlesToAdd = Math.min(4, articles.length - currentJournalIndex);
        currentJournalIndex += articlesToAdd;
        
        renderJournalArticles();
        
        statusElement.textContent = `Loaded ${articlesToAdd} more articles. ${articles.length - currentJournalIndex} remaining.`;
        
        if (currentJournalIndex >= articles.length) {
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = 'All Articles Loaded';
            statusElement.textContent = 'All articles have been loaded.';
        }
        
        // Focus on first new article
        const journalGrid = document.getElementById('journal-grid');
        const newArticles = journalGrid.querySelectorAll('.journal-card');
        if (newArticles[currentJournalIndex - articlesToAdd]) {
            newArticles[currentJournalIndex - articlesToAdd].focus();
        }
    });
}

function renderJournalArticles() {
    const journalGrid = document.getElementById('journal-grid');
    if (!journalGrid) return;
    
    const articlesToShow = articles.slice(0, currentJournalIndex);
    
    journalGrid.innerHTML = articlesToShow.map((article, index) => `
        <article class="journal-card" role="listitem" tabindex="0" aria-label="${article.title} by ${article.author}">
            <img src="${article.image}" alt="" class="journal-image" loading="lazy">
            <div class="journal-content">
                <div class="journal-meta">
                    <span>${article.author}</span>
                    <span><time datetime="${article.date}">${article.date}</time></span>
                </div>
                <h3 class="journal-title">${article.title}</h3>
                <p class="journal-excerpt">${article.snippet}</p>
                <a href="#" class="read-more" aria-label="Read more about ${article.title}">Read More →</a>
            </div>
        </article>
    `).join('');
    
    // Add interactions to journal cards
    const cards = journalGrid.querySelectorAll('.journal-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more')) {
                e.preventDefault();
                const title = card.querySelector('.journal-title').textContent;
                announceToScreenReader(`Opening article: ${title}`);
                // Here you would navigate to the full article
            }
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const readMoreLink = card.querySelector('.read-more');
                readMoreLink.click();
            }
        });
    });
}

// Form handling
function initializeForms() {
    const footerForm = document.getElementById('footer-newsletter');
    const footerEmail = document.getElementById('footer-email');
    const footerSuccess = footerForm.querySelector('.success-message');
    
    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        clearError(footerEmail);
        
        if (!footerEmail.value.trim()) {
            showError(footerEmail, 'Email is required');
            footerEmail.focus();
            return;
        }
        
        if (!validateEmail(footerEmail.value)) {
            showError(footerEmail, 'Please enter a valid email address');
            footerEmail.focus();
            return;
        }
        
        // Show success message
        footerSuccess.hidden = false;
        announceToScreenReader('Successfully subscribed to newsletter');
        
        // Reset form after delay
        setTimeout(() => {
            footerForm.reset();
            footerSuccess.hidden = true;
        }, 3000);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeWelcomeDialog();
    initializeNavigation();
    initializeSearch();
    initializeCarousels();
    initializeJournal();
    initializeForms();
    
    // Announce page load for screen readers
    announceToScreenReader('AETOS Timepieces homepage loaded. Navigate with tab key or screen reader shortcuts.');
});

// Handle page visibility changes for better performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Clear timeouts when page is hidden
        clearTimeout(searchTimeout);
    }
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.alt = 'Image could not be loaded';
        e.target.style.backgroundColor = '#f0f0f0';
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
        e.target.style.justifyContent = 'center';
        e.target.innerHTML = '<span style="color: #666; font-size: 14px;">Image unavailable</span>';
    }
}, true);

// Keyboard shortcuts for power users
document.addEventListener('keydown', (e) => {
    // Alt + S to focus search
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        searchInput?.focus();
        announceToScreenReader('Search focused');
    }
    
    // Alt + M to toggle mobile menu
    if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (window.innerWidth <= 768) {
            mobileToggle?.click();
        }
    }
});

// Export functions for testing (if in a testing environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        announceToScreenReader,
        trapFocus
    };
}
