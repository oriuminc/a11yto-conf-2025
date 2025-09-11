// AETOS Timepieces - WCAG 2.x AA Compliant JavaScript
// Enhanced accessibility features and user interactions

class AETOSWebsite {
    constructor() {
        this.currentCarouselIndex = {
            categories: 0,
            products: 0
        };
        this.searchTimeout = null;
        this.focusedSearchResult = -1;
        this.isSearchOpen = false;
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        // Mobile menu toggle
        this.setupMobileMenu();
        
        // Navigation dropdowns
        this.setupDropdowns();
        
        // Search functionality
        this.setupSearch();
        
        // Welcome dialog
        this.setupWelcomeDialog();
        
        // Form validation
        this.setupFormValidation();
        
        // Carousels
        this.setupCarousels();
        
        // Load initial content
        this.loadInitialContent();
        
        // Keyboard navigation
        this.setupKeyboardNavigation();
        
        // Focus management
        this.setupFocusManagement();
        
        // Announce dynamic content changes
        this.setupContentAnnouncements();
    }

    setupMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.main-nav');
        
        if (!toggle || !nav) return;
        
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;
            
            toggle.setAttribute('aria-expanded', newState);
            nav.classList.toggle('active', newState);
            
            // Focus management
            if (newState) {
                // Focus first nav item when opening
                const firstNavItem = nav.querySelector('.nav-link, .nav-button');
                if (firstNavItem) {
                    firstNavItem.focus();
                }
            }
            
            // Announce state change
            this.announceToScreenReader(
                newState ? 'Navigation menu opened' : 'Navigation menu closed'
            );
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                toggle.focus();
                this.announceToScreenReader('Navigation menu closed');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
            }
        });
    }

    setupDropdowns() {
        const dropdownButtons = document.querySelectorAll('.nav-button[aria-haspopup="true"]');
        
        dropdownButtons.forEach(button => {
            const menuId = button.getAttribute('aria-controls');
            const menu = document.getElementById(menuId);
            
            if (!menu) return;
            
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleDropdown(button, menu);
            });
            
            // Keyboard navigation for dropdowns
            button.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openDropdown(button, menu);
                    this.focusFirstDropdownItem(menu);
                }
            });
            
            // Close dropdown on escape
            menu.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeDropdown(button, menu);
                    button.focus();
                } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    this.navigateDropdown(menu, e.key === 'ArrowDown');
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!button.contains(e.target) && !menu.contains(e.target)) {
                    this.closeDropdown(button, menu);
                }
            });
        });
    }

    toggleDropdown(button, menu) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            this.closeDropdown(button, menu);
        } else {
            this.openDropdown(button, menu);
        }
    }

    openDropdown(button, menu) {
        // Close other dropdowns first
        this.closeAllDropdowns();
        
        button.setAttribute('aria-expanded', 'true');
        menu.classList.add('active');
        
        this.announceToScreenReader(`${button.textContent.trim()} menu opened`);
    }

    closeDropdown(button, menu) {
        button.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
        
        this.announceToScreenReader(`${button.textContent.trim()} menu closed`);
    }

    closeAllDropdowns() {
        const openDropdowns = document.querySelectorAll('.nav-button[aria-expanded="true"]');
        openDropdowns.forEach(button => {
            const menuId = button.getAttribute('aria-controls');
            const menu = document.getElementById(menuId);
            if (menu) {
                this.closeDropdown(button, menu);
            }
        });
    }

    focusFirstDropdownItem(menu) {
        const firstItem = menu.querySelector('a, button');
        if (firstItem) {
            firstItem.focus();
        }
    }

    navigateDropdown(menu, moveDown) {
        const items = menu.querySelectorAll('a, button');
        const focusedIndex = Array.from(items).findIndex(item => item === document.activeElement);
        
        let nextIndex;
        if (moveDown) {
            nextIndex = focusedIndex < items.length - 1 ? focusedIndex + 1 : 0;
        } else {
            nextIndex = focusedIndex > 0 ? focusedIndex - 1 : items.length - 1;
        }
        
        items[nextIndex].focus();
    }

    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.querySelector('.search-button');
        const searchResults = document.getElementById('search-results');
        
        if (!searchInput || !searchResults) return;
        
        // Mock search data
        this.searchData = [
            { title: 'The Vanguard Chronograph', price: '$459', category: 'Watches' },
            { title: 'The Sentinel Automatic', price: '$389', category: 'Watches' },
            { title: 'The Shoreline Diver', price: '$349', category: 'Watches' },
            { title: 'The Minimalist 36', price: '$289', category: 'Watches' },
            { title: 'Leather Strap - Black', price: '$59', category: 'Straps' },
            { title: 'Steel Bracelet', price: '$99', category: 'Straps' },
            { title: 'Watch Roll - Premium', price: '$129', category: 'Accessories' }
        ];
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSearch();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateSearchResults(1);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateSearchResults(-1);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                this.selectSearchResult();
            }
        });
        
        searchButton.addEventListener('click', () => {
            if (searchInput.value.trim()) {
                this.performSearch(searchInput.value);
            }
        });
        
        // Close search when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                this.closeSearch();
            }
        });
    }

    performSearch(query) {
        const searchResults = document.getElementById('search-results');
        
        if (query.length < 2) {
            this.closeSearch();
            return;
        }
        
        const results = this.searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        
        this.displaySearchResults(results, query);
    }

    displaySearchResults(results, query) {
        const searchResults = document.getElementById('search-results');
        const searchInput = document.getElementById('search-input');
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result">
                    <div class="search-result-title">No results found</div>
                    <div class="search-result-price">Try a different search term</div>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map((result, index) => `
                <div class="search-result" role="option" aria-selected="false" data-index="${index}">
                    <div class="search-result-title">${this.highlightSearchTerm(result.title, query)}</div>
                    <div class="search-result-price">${result.price} • ${result.category}</div>
                </div>
            `).join('');
        }
        
        searchResults.hidden = false;
        searchInput.setAttribute('aria-expanded', 'true');
        this.isSearchOpen = true;
        this.focusedSearchResult = -1;
        
        // Announce results to screen readers
        this.announceToScreenReader(
            `${results.length} search result${results.length !== 1 ? 's' : ''} available`
        );
        
        // Add click handlers to results
        searchResults.querySelectorAll('.search-result').forEach((result, index) => {
            result.addEventListener('click', () => {
                this.focusedSearchResult = index;
                this.selectSearchResult();
            });
        });
    }

    highlightSearchTerm(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    navigateSearchResults(direction) {
        if (!this.isSearchOpen) return;
        
        const results = document.querySelectorAll('.search-result');
        if (results.length === 0) return;
        
        // Clear previous selection
        if (this.focusedSearchResult >= 0) {
            results[this.focusedSearchResult].setAttribute('aria-selected', 'false');
        }
        
        // Update focus
        this.focusedSearchResult += direction;
        
        if (this.focusedSearchResult < 0) {
            this.focusedSearchResult = results.length - 1;
        } else if (this.focusedSearchResult >= results.length) {
            this.focusedSearchResult = 0;
        }
        
        // Update selection
        results[this.focusedSearchResult].setAttribute('aria-selected', 'true');
        results[this.focusedSearchResult].scrollIntoView({ block: 'nearest' });
        
        // Announce to screen readers
        const resultTitle = results[this.focusedSearchResult].querySelector('.search-result-title').textContent;
        this.announceToScreenReader(`${resultTitle}, option ${this.focusedSearchResult + 1} of ${results.length}`);
    }

    selectSearchResult() {
        if (this.focusedSearchResult >= 0) {
            const results = document.querySelectorAll('.search-result');
            const selectedResult = results[this.focusedSearchResult];
            const title = selectedResult.querySelector('.search-result-title').textContent;
            
            // In a real app, this would navigate to the product page
            this.announceToScreenReader(`Selected ${title}`);
            this.closeSearch();
            
            // Reset search input
            document.getElementById('search-input').value = title;
        }
    }

    closeSearch() {
        const searchResults = document.getElementById('search-results');
        const searchInput = document.getElementById('search-input');
        
        searchResults.hidden = true;
        searchInput.setAttribute('aria-expanded', 'false');
        this.isSearchOpen = false;
        this.focusedSearchResult = -1;
    }

    setupWelcomeDialog() {
        const dialog = document.getElementById('welcome-dialog');
        const closeBtn = dialog.querySelector('.dialog-close');
        
        if (!dialog) return;
        
        // Show dialog after a delay (simulating user visit)
        setTimeout(() => {
            this.showWelcomeDialog();
        }, 2000);
        
        closeBtn.addEventListener('click', () => {
            this.closeWelcomeDialog();
        });
        
        // Close on escape key
        dialog.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeWelcomeDialog();
            }
        });
        
        // Trap focus within dialog
        dialog.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                this.trapFocus(e, dialog);
            }
        });
    }

    showWelcomeDialog() {
        const dialog = document.getElementById('welcome-dialog');
        const firstInput = dialog.querySelector('input');
        
        dialog.showModal();
        
        // Focus first input
        if (firstInput) {
            firstInput.focus();
        }
        
        this.announceToScreenReader('Welcome dialog opened');
    }

    closeWelcomeDialog() {
        const dialog = document.getElementById('welcome-dialog');
        dialog.close();
        
        // Return focus to main content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
        }
        
        this.announceToScreenReader('Welcome dialog closed');
    }

    trapFocus(e, container) {
        const focusableElements = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
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

    setupFormValidation() {
        // Welcome form
        const welcomeForm = document.getElementById('welcome-form');
        if (welcomeForm) {
            welcomeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.validateAndSubmitForm(welcomeForm, 'welcome');
            });
        }
        
        // Newsletter form
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.validateAndSubmitForm(newsletterForm, 'newsletter');
            });
        }
        
        // Real-time validation
        document.querySelectorAll('input[required]').forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                // Clear error on input
                const errorElement = document.getElementById(input.getAttribute('aria-describedby'));
                if (errorElement && errorElement.textContent) {
                    errorElement.textContent = '';
                    input.setAttribute('aria-invalid', 'false');
                }
            });
        });
    }

    validateField(field) {
        const errorElementId = field.getAttribute('aria-describedby');
        const errorElement = document.getElementById(errorElementId);
        
        if (!errorElement) return true;
        
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(field)} is required`;
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Update error display
        errorElement.textContent = errorMessage;
        field.setAttribute('aria-invalid', !isValid);
        
        if (!isValid) {
            this.announceToScreenReader(errorMessage);
        }
        
        return isValid;
    }

    getFieldLabel(field) {
        const label = document.querySelector(`label[for="${field.id}"]`);
        return label ? label.textContent.replace('*', '').trim() : field.name;
    }

    validateAndSubmitForm(form, formType) {
        const fields = form.querySelectorAll('input[required]');
        let isFormValid = true;
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            this.submitForm(form, formType);
        } else {
            // Focus first invalid field
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            
            this.announceToScreenReader('Please correct the errors and try again');
        }
    }

    submitForm(form, formType) {
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const successMessage = form.querySelector('.success-message');
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
        }
        
        setTimeout(() => {
            if (successMessage) {
                successMessage.hidden = false;
                successMessage.focus();
            }
            
            form.reset();
            
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = formType === 'welcome' ? 'Get My 20% Off' : 'Subscribe';
            }
            
            this.announceToScreenReader('Form submitted successfully');
            
            // Close welcome dialog if it was the welcome form
            if (formType === 'welcome') {
                setTimeout(() => {
                    this.closeWelcomeDialog();
                }, 2000);
            }
        }, 1500);
    }

    setupCarousels() {
        this.setupCategoriesCarousel();
        this.setupProductsCarousel();
    }

    setupCategoriesCarousel() {
        const carousel = document.getElementById('categories-carousel');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        
        if (!carousel) return;
        
        // Load categories
        this.loadCategories();
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.scrollCarousel(carousel, 'prev', 'categories');
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.scrollCarousel(carousel, 'next', 'categories');
            });
        }
        
        this.setupCarouselKeyboardNavigation(carousel, 'categories');
    }

    setupProductsCarousel() {
        const carousel = document.getElementById('products-carousel');
        const prevBtn = document.querySelector('.products-prev');
        const nextBtn = document.querySelector('.products-next');
        
        if (!carousel) return;
        
        // Load products
        this.loadProducts();
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.scrollCarousel(carousel, 'prev', 'products');
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.scrollCarousel(carousel, 'next', 'products');
            });
        }
        
        this.setupCarouselKeyboardNavigation(carousel, 'products');
    }

    setupCarouselKeyboardNavigation(carousel, type) {
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.scrollCarousel(carousel, 'prev', type);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.scrollCarousel(carousel, 'next', type);
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.scrollCarouselToStart(carousel, type);
            } else if (e.key === 'End') {
                e.preventDefault();
                this.scrollCarouselToEnd(carousel, type);
            }
        });
    }

    scrollCarousel(carousel, direction, type) {
        const cardWidth = 300; // Approximate card width including gap
        const currentScroll = carousel.scrollLeft;
        const targetScroll = direction === 'next' 
            ? currentScroll + cardWidth 
            : currentScroll - cardWidth;
        
        carousel.scrollTo({
            left: Math.max(0, targetScroll),
            behavior: 'smooth'
        });
        
        // Update current index
        this.currentCarouselIndex[type] = Math.round(targetScroll / cardWidth);
        this.updateCarouselButtons(carousel, type);
        
        // Announce to screen readers
        const action = direction === 'next' ? 'next' : 'previous';
        this.announceToScreenReader(`Scrolled to ${action} ${type}`);
    }

    scrollCarouselToStart(carousel, type) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
        this.currentCarouselIndex[type] = 0;
        this.updateCarouselButtons(carousel, type);
        this.announceToScreenReader(`Scrolled to start of ${type}`);
    }

    scrollCarouselToEnd(carousel, type) {
        carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
        this.currentCarouselIndex[type] = Math.floor(carousel.scrollWidth / 300);
        this.updateCarouselButtons(carousel, type);
        this.announceToScreenReader(`Scrolled to end of ${type}`);
    }

    updateCarouselButtons(carousel, type) {
        const isAtStart = carousel.scrollLeft <= 0;
        const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth;
        
        const prevBtn = type === 'categories' 
            ? document.querySelector('.carousel-prev')
            : document.querySelector('.products-prev');
        const nextBtn = type === 'categories'
            ? document.querySelector('.carousel-next')
            : document.querySelector('.products-next');
        
        if (prevBtn) {
            prevBtn.disabled = isAtStart;
        }
        
        if (nextBtn) {
            nextBtn.disabled = isAtEnd;
        }
    }

    loadCategories() {
        const categoriesData = [
            {
                title: 'Chronographs',
                description: 'Precision timing instruments',
                image: 'https://via.placeholder.com/300x200/4a5568/ffffff?text=Chronographs'
            },
            {
                title: 'Dive Watches',
                description: 'Built for underwater adventures',
                image: 'https://via.placeholder.com/300x200/2d5b8c/ffffff?text=Dive+Watches'
            },
            {
                title: 'Dress Watches',
                description: 'Elegant timepieces for formal occasions',
                image: 'https://via.placeholder.com/300x200/1a365d/ffffff?text=Dress+Watches'
            },
            {
                title: 'Sports Watches',
                description: 'Robust designs for active lifestyles',
                image: 'https://via.placeholder.com/300x200/2b6cb0/ffffff?text=Sports+Watches'
            }
        ];
        
        const carousel = document.getElementById('categories-carousel');
        if (!carousel) return;
        
        carousel.innerHTML = categoriesData.map(category => `
            <a href="#" class="category-card" role="listitem" aria-label="${category.title}: ${category.description}">
                <img src="${category.image}" alt="${category.title}" loading="lazy">
                <div class="category-card-content">
                    <h3>${category.title}</h3>
                    <p>${category.description}</p>
                </div>
            </a>
        `).join('');
    }

    loadProducts() {
        const productsData = [
            {
                title: 'The Vanguard Chronograph',
                price: '$459',
                description: 'Swiss movement with sapphire crystal',
                image: 'https://via.placeholder.com/300x250/2c3e50/ffffff?text=Vanguard'
            },
            {
                title: 'The Sentinel Automatic',
                price: '$389',
                description: 'Self-winding mechanical movement',
                image: 'https://via.placeholder.com/300x250/34495e/ffffff?text=Sentinel'
            },
            {
                title: 'The Shoreline Diver',
                price: '$349',
                description: '200m water resistance',
                image: 'https://via.placeholder.com/300x250/2980b9/ffffff?text=Shoreline'
            },
            {
                title: 'The Minimalist 36',
                price: '$289',
                description: 'Clean design, maximum impact',
                image: 'https://via.placeholder.com/300x250/8e44ad/ffffff?text=Minimalist'
            }
        ];
        
        const carousel = document.getElementById('products-carousel');
        if (!carousel) return;
        
        carousel.innerHTML = productsData.map(product => `
            <a href="#" class="product-card" role="listitem" aria-label="${product.title}, ${product.price}">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-card-content">
                    <h3>${product.title}</h3>
                    <div class="product-card-price">${product.price}</div>
                    <p>${product.description}</p>
                </div>
            </a>
        `).join('');
    }

    loadInitialContent() {
        this.loadJournalArticles();
        this.setupLoadMoreButton();
    }

    loadJournalArticles() {
        const journalData = [
            {
                title: 'The Art of Mechanical Timekeeping',
                excerpt: 'Explore the intricate world of mechanical movements and the craftsmanship behind every tick.',
                date: 'December 15, 2024',
                image: 'https://via.placeholder.com/400x200/2c3e50/ffffff?text=Mechanical+Timekeeping'
            },
            {
                title: 'Choosing Your First Luxury Watch',
                excerpt: 'A comprehensive guide to selecting a timepiece that will last a lifetime.',
                date: 'December 10, 2024',
                image: 'https://via.placeholder.com/400x200/34495e/ffffff?text=Luxury+Watch+Guide'
            },
            {
                title: 'The Evolution of Dive Watches',
                excerpt: 'From military tools to fashion statements: the fascinating history of dive watches.',
                date: 'December 5, 2024',
                image: 'https://via.placeholder.com/400x200/2980b9/ffffff?text=Dive+Watch+History'
            }
        ];
        
        const journalGrid = document.getElementById('journal-grid');
        if (!journalGrid) return;
        
        journalGrid.innerHTML = journalData.map(article => `
            <article class="journal-card" role="listitem">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <div class="journal-card-content">
                    <h3>${article.title}</h3>
                    <p class="journal-card-excerpt">${article.excerpt}</p>
                    <div class="journal-card-meta">${article.date}</div>
                </div>
            </article>
        `).join('');
    }

    setupLoadMoreButton() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (!loadMoreBtn) return;
        
        loadMoreBtn.addEventListener('click', () => {
            this.loadMoreArticles();
        });
    }

    loadMoreArticles() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        const statusElement = document.getElementById('load-more-status');
        
        if (!loadMoreBtn || !statusElement) return;
        
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'Loading...';
        
        statusElement.textContent = 'Loading more articles...';
        
        // Simulate loading delay
        setTimeout(() => {
            const moreArticles = [
                {
                    title: 'Watch Care and Maintenance',
                    excerpt: 'Essential tips to keep your timepiece running perfectly for years to come.',
                    date: 'November 30, 2024',
                    image: 'https://via.placeholder.com/400x200/8e44ad/ffffff?text=Watch+Care'
                },
                {
                    title: 'The Future of Watchmaking',
                    excerpt: 'How traditional craftsmanship meets modern innovation.',
                    date: 'November 25, 2024',
                    image: 'https://via.placeholder.com/400x200/e67e22/ffffff?text=Future+Watchmaking'
                }
            ];
            
            const journalGrid = document.getElementById('journal-grid');
            const newArticlesHTML = moreArticles.map(article => `
                <article class="journal-card" role="listitem">
                    <img src="${article.image}" alt="${article.title}" loading="lazy">
                    <div class="journal-card-content">
                        <h3>${article.title}</h3>
                        <p class="journal-card-excerpt">${article.excerpt}</p>
                        <div class="journal-card-meta">${article.date}</div>
                    </div>
                </article>
            `).join('');
            
            journalGrid.insertAdjacentHTML('beforeend', newArticlesHTML);
            
            loadMoreBtn.disabled = false;
            loadMoreBtn.textContent = 'Load More Articles';
            loadMoreBtn.style.display = 'none'; // Hide after loading more
            
            statusElement.textContent = `Loaded ${moreArticles.length} more articles`;
            
            // Announce to screen readers
            this.announceToScreenReader(`${moreArticles.length} more articles loaded`);
        }, 1500);
    }

    setupKeyboardNavigation() {
        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Skip to main content (Alt + M)
            if (e.altKey && e.key.toLowerCase() === 'm') {
                e.preventDefault();
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.focus();
                    this.announceToScreenReader('Jumped to main content');
                }
            }
            
            // Open search (Alt + S)
            if (e.altKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.focus();
                    this.announceToScreenReader('Search focused');
                }
            }
        });
    }

    setupFocusManagement() {
        // Ensure main content is focusable
        const mainContent = document.getElementById('main-content');
        if (mainContent && !mainContent.hasAttribute('tabindex')) {
            mainContent.setAttribute('tabindex', '-1');
        }
        
        // Add focus indicators to carousel tracks
        const carouselTracks = document.querySelectorAll('.carousel-track');
        carouselTracks.forEach(track => {
            if (!track.hasAttribute('tabindex')) {
                track.setAttribute('tabindex', '0');
            }
        });
    }

    setupContentAnnouncements() {
        // Create a live region for announcements
        if (!document.getElementById('announcements')) {
            const announcements = document.createElement('div');
            announcements.id = 'announcements';
            announcements.setAttribute('aria-live', 'polite');
            announcements.setAttribute('aria-atomic', 'true');
            announcements.className = 'visually-hidden';
            document.body.appendChild(announcements);
        }
    }

    announceToScreenReader(message) {
        const announcements = document.getElementById('announcements');
        if (announcements) {
            announcements.textContent = message;
            
            // Clear the message after a delay to allow for re-announcement of the same message
            setTimeout(() => {
                announcements.textContent = '';
            }, 1000);
        }
    }
}

// Initialize the website when DOM is ready
new AETOSWebsite();
