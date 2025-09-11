// Product Data
const products = [
    { id: 1, name: "Vanguard Chrono - Midnight", category: "Vanguard Chronograph", price: "$425", description: "A classic panda dial with deep black subdials", image: "https://via.placeholder.com/300x300/2c3e50/ffffff?text=Vanguard+Midnight" },
    { id: 2, name: "Vanguard Chrono - Sterling", category: "Vanguard Chronograph", price: "$425", description: "A sunburst silver dial with brown leather strap", image: "https://via.placeholder.com/300x300/95a5a6/ffffff?text=Vanguard+Sterling" },
    { id: 3, name: "Sentinel 40 - Classic White", category: "Sentinel Automatic", price: "$550", description: "An elegant automatic with a clean white dial", image: "https://via.placeholder.com/300x300/ecf0f1/2c3e50?text=Sentinel+White" },
    { id: 4, name: "Shoreline Diver - Abyss", category: "Shoreline Diver", price: "$495", description: "200M water-resistant diver with ceramic bezel", image: "https://via.placeholder.com/300x300/34495e/ffffff?text=Shoreline+Abyss" },
    { id: 5, name: "The Minimalist 36 - Pearl", category: "Minimalist 36", price: "$295", description: "A refined 36mm quartz watch", image: "https://via.placeholder.com/300x300/bdc3c7/2c3e50?text=Minimalist+Pearl" }
];

// Journal Articles Data
const articles = [
    { id: 1, title: "Automatic vs. Quartz: A Guide", author: "Mark Jennings", date: "Aug 12, 2025", excerpt: "Understanding the intricate mechanics of an automatic movement versus the precision of quartz.", image: "https://via.placeholder.com/400x300/34495e/ffffff?text=Automatic+vs+Quartz" },
    { id: 2, title: "How to Pair Your Watch and Strap", author: "Alisha Khan", date: "Aug 05, 2025", excerpt: "A complete style guide to matching your timepiece with the perfect strap for any occasion.", image: "https://via.placeholder.com/400x300/8b6f47/ffffff?text=Watch+Straps" },
    { id: 3, title: "The Enduring Appeal of the Dive Watch", author: "Mark Jennings", date: "Jul 28, 2025", excerpt: "From military history to modern icon, we explore why the dive watch remains popular.", image: "https://via.placeholder.com/400x300/2c3e50/ffffff?text=Dive+Watch" },
    { id: 4, title: "A Look Inside Our Workshop", author: "David Chen", date: "Jul 21, 2025", excerpt: "Go behind the scenes at AETOS and meet the people who design and test every timepiece.", image: "https://via.placeholder.com/400x300/95a5a6/ffffff?text=Workshop" },
    { id: 5, title: "Caring for Your Leather Strap", author: "Alisha Khan", date: "Jul 14, 2025", excerpt: "Simple tips to clean, condition, and preserve your leather strap.", image: "https://via.placeholder.com/400x300/8b6f47/ffffff?text=Leather+Care" },
    { id: 6, title: "What is Sapphire Crystal?", author: "Mark Jennings", date: "Jul 07, 2025", excerpt: "Why we use sapphire crystal in all our watches for scratch resistance and clarity.", image: "https://via.placeholder.com/400x300/34495e/ffffff?text=Sapphire+Crystal" },
    { id: 7, title: "5 Iconic Watches in Cinema", author: "Liam Carter", date: "Jun 30, 2025", excerpt: "Legendary timepieces that have shared the silver screen with Hollywood's biggest stars.", image: "https://via.placeholder.com/400x300/2c3e50/ffffff?text=Cinema+Watches" },
    { id: 8, title: "The AETOS Design Philosophy", author: "David Chen", date: "Jun 23, 2025", excerpt: "Our founder discusses the principles of minimalism that guide every AETOS design.", image: "https://via.placeholder.com/400x300/95a5a6/ffffff?text=Design+Philosophy" },
    { id: 9, title: "A Brief History of the Chronograph", author: "Mark Jennings", date: "Jun 16, 2025", excerpt: "Discover the fascinating history of the chronograph from horse racing to space race.", image: "https://via.placeholder.com/400x300/34495e/ffffff?text=Chronograph+History" },
    { id: 10, title: "Summer Style: The Best Watch Combos", author: "Alisha Khan", date: "Jun 09, 2025", excerpt: "Lighten up your look with our top picks for watch and strap combinations.", image: "https://via.placeholder.com/400x300/8b6f47/ffffff?text=Summer+Style" },
    { id: 11, title: "Why 316L Steel Matters", author: "Mark Jennings", date: "Jun 02, 2025", excerpt: "Learn why we use surgical-grade 316L stainless steel for superior durability.", image: "https://via.placeholder.com/400x300/2c3e50/ffffff?text=316L+Steel" },
    { id: 12, title: "Packing for Travel: Watch Guide", author: "Liam Carter", date: "May 26, 2025", excerpt: "How to choose which watches to bring and keep them safe on the go.", image: "https://via.placeholder.com/400x300/95a5a6/ffffff?text=Travel+Guide" }
];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeWelcomeDialog();
    initializeNavigation();
    initializePredictiveSearch();
    initializeProductCarousel();
    initializeJournalSection();
    initializeForms();
    initializeStickyHeader();
    initializeCarousels();
});

// Welcome Dialog
function initializeWelcomeDialog() {
    const dialog = document.getElementById('welcome-dialog');
    const closeBtn = dialog.querySelector('.dialog-close');
    const form = document.getElementById('welcome-form');
    const successMessage = dialog.querySelector('.success-message');
    
    // Check if user has seen dialog
    const hasSeenDialog = localStorage.getItem('hasSeenWelcomeDialog');
    
    if (!hasSeenDialog && dialog) {
        setTimeout(() => {
            dialog.showModal();
            announceToScreenReader('Welcome dialog opened. Sign up for 20% off your first order.');
        }, 2000);
    }
    
    // Close dialog
    closeBtn?.addEventListener('click', () => {
        dialog.close();
        localStorage.setItem('hasSeenWelcomeDialog', 'true');
    });
    
    // Handle escape key
    dialog?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dialog.close();
            localStorage.setItem('hasSeenWelcomeDialog', 'true');
        }
    });
    
    // Handle form submission
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        // Show success message
        form.hidden = true;
        successMessage.hidden = false;
        announceToScreenReader('Success! Thank you for subscribing. Check your email for your discount code.');
        
        // Close dialog after delay
        setTimeout(() => {
            dialog.close();
            localStorage.setItem('hasSeenWelcomeDialog', 'true');
        }, 3000);
        
        // Reset for next time
        setTimeout(() => {
            form.hidden = false;
            successMessage.hidden = true;
            form.reset();
        }, 3500);
    });
}

// Navigation
function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navButtons = document.querySelectorAll('.nav-item.has-submenu > .nav-link');
    
    // Mobile menu toggle
    mobileToggle?.addEventListener('click', () => {
        const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isOpen);
        mainNav.classList.toggle('open');
        
        if (!isOpen) {
            // Trap focus in mobile menu
            trapFocus(mainNav);
        }
    });
    
    // Mega menu toggles
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all other menus
            navButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                }
            });
            
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.has-submenu')) {
            navButtons.forEach(button => {
                button.setAttribute('aria-expanded', 'false');
            });
        }
    });
    
    // Keyboard navigation
    navButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                button.setAttribute('aria-expanded', 'false');
                button.focus();
            }
        });
    });
}

// Predictive Search
function initializePredictiveSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let debounceTimer;
    
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            hideSearchResults();
            return;
        }
        
        debounceTimer = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSearchResults();
            searchInput.value = '';
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusNextSearchResult(1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusNextSearchResult(-1);
        }
    });
    
    function performSearch(query) {
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        displaySearchResults(results, query);
    }
    
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item" tabindex="-1">
                    No results found for "${query}"
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map((product, index) => `
                <div class="search-result-item" tabindex="-1" role="option" 
                     data-product-id="${product.id}" data-index="${index}">
                    <strong>${product.name}</strong> - ${product.price}
                </div>
            `).join('');
        }
        
        showSearchResults();
    }
    
    function showSearchResults() {
        searchResults.hidden = false;
        searchInput.setAttribute('aria-expanded', 'true');
    }
    
    function hideSearchResults() {
        searchResults.hidden = true;
        searchInput.setAttribute('aria-expanded', 'false');
    }
    
    function focusNextSearchResult(direction) {
        const items = searchResults.querySelectorAll('.search-result-item');
        const currentIndex = Array.from(items).findIndex(item => item === document.activeElement);
        let nextIndex = currentIndex + direction;
        
        if (nextIndex < 0) nextIndex = items.length - 1;
        if (nextIndex >= items.length) nextIndex = 0;
        
        items[nextIndex]?.focus();
    }
    
    // Handle result selection
    searchResults?.addEventListener('click', (e) => {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            const productId = resultItem.dataset.productId;
            if (productId) {
                window.location.href = `/product/${productId}`;
            }
        }
    });
}

// Product Carousel
function initializeProductCarousel() {
    const track = document.querySelector('.products-track');
    
    if (track) {
        // Populate products
        track.innerHTML = products.map(product => `
            <div class="carousel-item" role="listitem">
                <article class="product-card" tabindex="0" 
                         aria-label="${product.name}, ${product.category}, ${product.price}">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                    </div>
                </article>
            </div>
        `).join('');
        
        // Handle product card clicks
        track.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                const productName = card.querySelector('.product-name').textContent;
                const product = products.find(p => p.name === productName);
                if (product) {
                    window.location.href = `/product/${product.id}`;
                }
            }
        });
        
        // Handle keyboard navigation
        track.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const card = e.target.closest('.product-card');
                if (card) {
                    e.preventDefault();
                    card.click();
                }
            }
        });
    }
}

// Journal Section
function initializeJournalSection() {
    const journalGrid = document.querySelector('.journal-grid');
    const loadMoreBtn = document.querySelector('.load-more');
    let displayedArticles = 4;
    
    function renderArticles() {
        const articlesToShow = articles.slice(0, displayedArticles);
        
        journalGrid.innerHTML = articlesToShow.map(article => `
            <article class="journal-article" role="listitem" tabindex="0"
                     aria-label="${article.title} by ${article.author}">
                <img src="${article.image}" alt="" class="journal-image" loading="lazy">
                <div class="journal-content">
                    <div class="journal-meta">
                        <span>${article.author}</span>
                        <span aria-label="Published ${article.date}">${article.date}</span>
                    </div>
                    <h3 class="journal-title">${article.title}</h3>
                    <p class="journal-excerpt">${article.excerpt}</p>
                    <a href="/journal/${article.id}" class="read-more" aria-label="Read more about ${article.title}">
                        Read More →
                    </a>
                </div>
            </article>
        `).join('');
        
        // Hide load more button if all articles are shown
        if (displayedArticles >= articles.length) {
            loadMoreBtn.style.display = 'none';
            announceToScreenReader('All articles loaded');
        }
    }
    
    if (journalGrid) {
        renderArticles();
    }
    
    loadMoreBtn?.addEventListener('click', () => {
        displayedArticles += 4;
        renderArticles();
        
        // Focus on first new article
        const newArticles = journalGrid.querySelectorAll('.journal-article');
        if (newArticles[displayedArticles - 4]) {
            newArticles[displayedArticles - 4].focus();
        }
        
        announceToScreenReader(`${Math.min(4, articles.length - displayedArticles + 4)} more articles loaded`);
    });
}

// Forms
function initializeForms() {
    const footerForm = document.getElementById('footer-newsletter');
    
    footerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.setAttribute('role', 'alert');
        successMsg.textContent = 'Thank you for subscribing!';
        e.target.appendChild(successMsg);
        
        announceToScreenReader('Newsletter subscription successful');
        
        // Reset form
        setTimeout(() => {
            e.target.reset();
            successMsg.remove();
        }, 3000);
    });
}

// Sticky Header
function initializeStickyHeader() {
    const header = document.querySelector('.global-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Carousel Controls
function initializeCarousels() {
    const carousels = [
        { track: '.categories-track', prev: '.carousel-prev', next: '.carousel-next' },
        { track: '.products-track', prev: '.products-prev', next: '.products-next' }
    ];
    
    carousels.forEach(carousel => {
        const track = document.querySelector(carousel.track);
        const prevBtn = document.querySelector(carousel.prev);
        const nextBtn = document.querySelector(carousel.next);
        
        if (!track || !prevBtn || !nextBtn) return;
        
        let currentIndex = 0;
        const items = track.querySelectorAll('.carousel-item');
        const itemsPerView = getItemsPerView();
        const maxIndex = Math.max(0, items.length - itemsPerView);
        
        function getItemsPerView() {
            const width = window.innerWidth;
            if (width <= 480) return 1;
            if (width <= 768) return 2;
            if (width <= 1024) return 3;
            return 5;
        }
        
        function updateCarousel() {
            const itemWidth = items[0].offsetWidth + 24; // item width + gap
            const offset = -currentIndex * itemWidth;
            track.style.transform = `translateX(${offset}px)`;
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
            
            // Update ARIA labels
            prevBtn.setAttribute('aria-label', `Previous ${carousel.track.includes('categories') ? 'categories' : 'products'} (${currentIndex} of ${maxIndex})`);
            nextBtn.setAttribute('aria-label', `Next ${carousel.track.includes('categories') ? 'categories' : 'products'} (${currentIndex} of ${maxIndex})`);
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
                announceToScreenReader(`Showing item ${currentIndex + 1}`);
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
                announceToScreenReader(`Showing item ${currentIndex + 1}`);
            }
        });
        
        // Keyboard navigation
        track.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        });
        
        // Handle resize
        window.addEventListener('resize', () => {
            const newItemsPerView = getItemsPerView();
            const newMaxIndex = Math.max(0, items.length - newItemsPerView);
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            updateCarousel();
        });
        
        // Initialize
        updateCarousel();
    });
}

// Utility Functions
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
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
    });
    
    firstFocusable?.focus();
}

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Polyfill for dialog element if needed
if (!window.HTMLDialogElement) {
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
        dialog.show = function() {
            this.setAttribute('open', '');
            this.style.display = 'block';
        };
        dialog.showModal = function() {
            this.setAttribute('open', '');
            this.style.display = 'block';
            const backdrop = document.createElement('div');
            backdrop.className = 'dialog-backdrop';
            backdrop.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:999';
            document.body.appendChild(backdrop);
            this.style.zIndex = '1000';
        };
        dialog.close = function() {
            this.removeAttribute('open');
            this.style.display = 'none';
            const backdrop = document.querySelector('.dialog-backdrop');
            if (backdrop) backdrop.remove();
        };
    });
}