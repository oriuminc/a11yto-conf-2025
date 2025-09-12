// AETOS Timepieces Homepage JavaScript
// Implements interactive functionality with WCAG 2.x AA compliance

class AETOSHomepage {
  constructor() {
    this.init()
  }

  init() {
    this.setupWelcomePopup()
    this.setupMobileMenu()
    this.setupSearch()
    this.setupCarousels()
    this.setupJournalLoader()
    this.setupStickyHeader()
    this.setupNewsletterForm()
    this.setupKeyboardNavigation()
    this.setupAccessibility()
  }

  // Welcome Popup Management
  setupWelcomePopup() {
    const popup = document.getElementById("welcomePopup")
    const closeBtn = popup.querySelector(".popup-close")
    const form = document.getElementById("welcomeForm")
    const successMessage = document.getElementById("successMessage")

    // Show popup on page load (simulate first-time visitor)
    setTimeout(() => {
      popup.classList.remove("hidden")
      // Focus management for accessibility
      closeBtn.focus()
    }, 1000)

    // Close popup handlers
    const closePopup = () => {
      popup.classList.add("hidden")
      // Return focus to main content
      document.querySelector(".hero-title").focus()
    }

    closeBtn.addEventListener("click", closePopup)

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !popup.classList.contains("hidden")) {
        closePopup()
      }
    })

    // Close on overlay click
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup()
      }
    })

    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simulate form processing
      const formData = new FormData(form)
      const data = {
        firstName: formData.get("firstName"),
        email: formData.get("email"),
        birthday: formData.get("birthday"),
      }

      // Basic validation
      if (!data.firstName || !data.email || !data.birthday) {
        alert("Please fill in all fields.")
        return
      }

      // Show success message
      form.style.display = "none"
      successMessage.style.display = "block"

      // Auto-close after 3 seconds
      setTimeout(closePopup, 3000)
    })
  }

  // Mobile Menu Management
  setupMobileMenu() {
    const toggle = document.querySelector(".mobile-menu-toggle")
    const menu = document.querySelector(".nav-menu")
    let isOpen = false

    const toggleMenu = () => {
      isOpen = !isOpen
      menu.classList.toggle("active", isOpen)
      toggle.setAttribute("aria-expanded", isOpen)

      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? "hidden" : ""

      // Focus management
      if (isOpen) {
        menu.querySelector("a").focus()
      } else {
        toggle.focus()
      }
    }

    toggle.addEventListener("click", toggleMenu)

    // Close menu on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleMenu()
      }
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (isOpen && !menu.contains(e.target) && !toggle.contains(e.target)) {
        toggleMenu()
      }
    })

    // Handle dropdown menus in mobile
    const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown > a")
    dropdownItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault()
          const megaMenu = item.nextElementSibling
          const isExpanded = item.getAttribute("aria-expanded") === "true"

          // Close all other dropdowns
          dropdownItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.setAttribute("aria-expanded", "false")
              otherItem.nextElementSibling.style.display = "none"
            }
          })

          // Toggle current dropdown
          item.setAttribute("aria-expanded", !isExpanded)
          megaMenu.style.display = isExpanded ? "none" : "block"
        }
      })
    })
  }

  // Predictive Search
  setupSearch() {
    const searchInput = document.getElementById("searchInput")
    const searchResults = document.getElementById("searchResults")
    let searchTimeout

    // Sample search data
    const searchData = [
      { type: "product", name: "Vanguard Chrono - Midnight", category: "Watches" },
      { type: "product", name: "Sentinel 40 - Classic White", category: "Watches" },
      { type: "product", name: "Shoreline Diver - Abyss", category: "Watches" },
      { type: "product", name: "Italian Leather Strap - Oak", category: "Straps" },
      { type: "category", name: "Vanguard Chronograph", category: "Collections" },
      { type: "category", name: "Sentinel Automatic", category: "Collections" },
      { type: "popular", name: "dive watches", category: "Popular Searches" },
      { type: "popular", name: "leather straps", category: "Popular Searches" },
    ]

    const performSearch = (query) => {
      if (!query.trim()) {
        searchResults.classList.remove("show")
        return
      }

      const results = searchData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)

      if (results.length > 0) {
        searchResults.innerHTML = results
          .map(
            (item, index) => `
                    <div class="search-result-item" role="option" tabindex="0" data-index="${index}">
                        <strong>${item.name}</strong>
                        <div style="font-size: 0.875rem; color: var(--muted-foreground);">${item.category}</div>
                    </div>
                `,
          )
          .join("")

        searchResults.classList.add("show")
        searchResults.setAttribute("aria-expanded", "true")
      } else {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>'
        searchResults.classList.add("show")
      }
    }

    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => performSearch(e.target.value), 300)
    })

    // Keyboard navigation for search results
    searchInput.addEventListener("keydown", (e) => {
      const items = searchResults.querySelectorAll(".search-result-item")
      const currentFocus = document.activeElement

      if (e.key === "ArrowDown") {
        e.preventDefault()
        if (items.length > 0) {
          if (currentFocus === searchInput) {
            items[0].focus()
          } else {
            const currentIndex = Array.from(items).indexOf(currentFocus)
            const nextIndex = (currentIndex + 1) % items.length
            items[nextIndex].focus()
          }
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        if (items.length > 0) {
          const currentIndex = Array.from(items).indexOf(currentFocus)
          const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1
          if (currentIndex === -1) {
            searchInput.focus()
          } else {
            items[prevIndex].focus()
          }
        }
      } else if (e.key === "Escape") {
        searchResults.classList.remove("show")
        searchInput.blur()
      }
    })

    // Click handler for search results
    searchResults.addEventListener("click", (e) => {
      const item = e.target.closest(".search-result-item")
      if (item) {
        searchInput.value = item.querySelector("strong").textContent
        searchResults.classList.remove("show")
        // Simulate navigation
        console.log("Navigate to:", item.querySelector("strong").textContent)
      }
    })

    // Hide results when clicking outside
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove("show")
      }
    })
  }

  // Carousel Management
  setupCarousels() {
    const carousels = document.querySelectorAll(".carousel")

    carousels.forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track")
      const prevBtn = carousel.parentElement.querySelector(".carousel-prev")
      const nextBtn = carousel.parentElement.querySelector(".carousel-next")
      const cards = track.children

      if (!prevBtn || !nextBtn || cards.length === 0) return

      let currentIndex = 0
      const cardWidth = cards[0].offsetWidth + 24 // Include gap
      const visibleCards = Math.floor(carousel.offsetWidth / cardWidth)
      const maxIndex = Math.max(0, cards.length - visibleCards)

      const updateCarousel = () => {
        const translateX = -currentIndex * cardWidth
        track.style.transform = `translateX(${translateX}px)`

        // Update button states
        prevBtn.disabled = currentIndex === 0
        nextBtn.disabled = currentIndex >= maxIndex

        // Update ARIA labels
        prevBtn.setAttribute("aria-label", `Previous items, currently showing ${currentIndex + 1} of ${cards.length}`)
        nextBtn.setAttribute(
          "aria-label",
          `Next items, currently showing ${Math.min(currentIndex + visibleCards, cards.length)} of ${cards.length}`,
        )
      }

      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--
          updateCarousel()
        }
      })

      nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
          currentIndex++
          updateCarousel()
        }
      })

      // Keyboard navigation
      carousel.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault()
          prevBtn.click()
        } else if (e.key === "ArrowRight") {
          e.preventDefault()
          nextBtn.click()
        }
      })

      // Touch/swipe support for mobile
      let startX = 0
      let isDragging = false

      track.addEventListener(
        "touchstart",
        (e) => {
          startX = e.touches[0].clientX
          isDragging = true
        },
        { passive: true },
      )

      track.addEventListener(
        "touchmove",
        (e) => {
          if (!isDragging) return
          e.preventDefault()
        },
        { passive: false },
      )

      track.addEventListener(
        "touchend",
        (e) => {
          if (!isDragging) return
          isDragging = false

          const endX = e.changedTouches[0].clientX
          const diff = startX - endX

          if (Math.abs(diff) > 50) {
            // Minimum swipe distance
            if (diff > 0 && currentIndex < maxIndex) {
              currentIndex++
            } else if (diff < 0 && currentIndex > 0) {
              currentIndex--
            }
            updateCarousel()
          }
        },
        { passive: true },
      )

      // Initialize
      updateCarousel()

      // Update on window resize
      window.addEventListener("resize", () => {
        const newVisibleCards = Math.floor(carousel.offsetWidth / cardWidth)
        const newMaxIndex = Math.max(0, cards.length - newVisibleCards)
        if (currentIndex > newMaxIndex) {
          currentIndex = newMaxIndex
        }
        updateCarousel()
      })
    })
  }

  // Journal Load More Functionality
  setupJournalLoader() {
    const loadMoreBtn = document.getElementById("loadMoreBtn")
    const journalGrid = document.getElementById("journalGrid")
    let currentArticles = 4

    // Additional journal articles data
    const additionalArticles = [
      {
        title: "Caring for Your Leather Strap",
        author: "Alisha Khan",
        date: "Jul 14, 2025",
        snippet:
          "Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.",
        image: "leather strap care maintenance",
      },
      {
        title: "What is Sapphire Crystal?",
        author: "Mark Jennings",
        date: "Jul 07, 2025",
        snippet:
          "We explain why we use sapphire crystal in all our watches and why it's the gold standard for scratch resistance and clarity.",
        image: "sapphire crystal watch glass",
      },
      {
        title: "5 Iconic Watches in Cinema",
        author: "Liam Carter",
        date: "Jun 30, 2025",
        snippet:
          "From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood's biggest stars.",
        image: "iconic watches movies cinema",
      },
      {
        title: "The AETOS Design Philosophy",
        author: "David Chen",
        date: "Jun 23, 2025",
        snippet:
          "Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.",
        image: "AETOS design philosophy minimalism",
      },
      {
        title: "A Brief History of the Chronograph",
        author: "Mark Jennings",
        date: "Jun 16, 2025",
        snippet:
          "Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.",
        image: "chronograph history space race",
      },
      {
        title: "Summer Style: The Best Watch Combos",
        author: "Alisha Khan",
        date: "Jun 09, 2025",
        snippet:
          "Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.",
        image: "summer watch style combinations",
      },
      {
        title: "Why 316L Steel Matters",
        author: "Mark Jennings",
        date: "Jun 02, 2025",
        snippet:
          "Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.",
        image: "316L stainless steel watch case",
      },
      {
        title: "Packing for Travel: The Watch Lover's Guide",
        author: "Liam Carter",
        date: "May 26, 2025",
        snippet:
          "How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.",
        image: "travel watch packing guide",
      },
    ]

    loadMoreBtn.addEventListener("click", () => {
      const articlesToLoad = Math.min(4, additionalArticles.length - (currentArticles - 4))

      for (let i = 0; i < articlesToLoad; i++) {
        const articleIndex = currentArticles - 4 + i
        const article = additionalArticles[articleIndex]

        const articleElement = document.createElement("article")
        articleElement.className = "journal-card"
        articleElement.innerHTML = `
                    <img src="/--article-image-.jpg" alt="${article.title}" loading="lazy">
                    <div class="journal-content">
                        <h3>${article.title}</h3>
                        <p class="journal-meta">By ${article.author} • ${article.date}</p>
                        <p>${article.snippet}</p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                `

        journalGrid.appendChild(articleElement)
      }

      currentArticles += articlesToLoad

      // Hide button if all articles are loaded
      if (currentArticles >= additionalArticles.length + 4) {
        loadMoreBtn.style.display = "none"
      }

      // Announce to screen readers
      const announcement = document.createElement("div")
      announcement.setAttribute("aria-live", "polite")
      announcement.setAttribute("aria-atomic", "true")
      announcement.className = "sr-only"
      announcement.textContent = `Loaded ${articlesToLoad} more articles. ${additionalArticles.length + 4 - currentArticles} articles remaining.`
      document.body.appendChild(announcement)

      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    })
  }

  // Sticky Header
  setupStickyHeader() {
    const header = document.getElementById("mainHeader")
    let lastScrollY = window.scrollY

    const updateHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        header.style.boxShadow = "var(--shadow-md)"
        header.style.backgroundColor = "rgba(248, 248, 248, 0.95)"
        header.style.backdropFilter = "blur(10px)"
      } else {
        header.style.boxShadow = "none"
        header.style.backgroundColor = "var(--card)"
        header.style.backdropFilter = "none"
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", updateHeader, { passive: true })
  }

  // Newsletter Form
  setupNewsletterForm() {
    const form = document.querySelector(".newsletter-form")

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = form.querySelector('input[type="email"]').value

      if (!email) {
        alert("Please enter your email address.")
        return
      }

      // Simulate form submission
      const button = form.querySelector("button")
      const originalText = button.textContent

      button.textContent = "Subscribing..."
      button.disabled = true

      setTimeout(() => {
        button.textContent = "Subscribed!"
        form.querySelector("input").value = ""

        setTimeout(() => {
          button.textContent = originalText
          button.disabled = false
        }, 2000)
      }, 1000)
    })
  }

  // Keyboard Navigation Enhancement
  setupKeyboardNavigation() {
    // Skip to main content link
    const skipLink = document.createElement("a")
    skipLink.href = "#main"
    skipLink.textContent = "Skip to main content"
    skipLink.className = "sr-only"
    skipLink.style.position = "absolute"
    skipLink.style.top = "-40px"
    skipLink.style.left = "6px"
    skipLink.style.background = "var(--primary)"
    skipLink.style.color = "var(--primary-foreground)"
    skipLink.style.padding = "8px"
    skipLink.style.textDecoration = "none"
    skipLink.style.zIndex = "1000"
    skipLink.style.transition = "top 0.3s"

    skipLink.addEventListener("focus", () => {
      skipLink.style.top = "6px"
    })

    skipLink.addEventListener("blur", () => {
      skipLink.style.top = "-40px"
    })

    document.body.insertBefore(skipLink, document.body.firstChild)

    // Add main ID to main element
    const main = document.querySelector("main")
    main.id = "main"
    main.setAttribute("tabindex", "-1")
  }

  // Accessibility Enhancements
  setupAccessibility() {
    // Announce page changes to screen readers
    const announcer = document.createElement("div")
    announcer.setAttribute("aria-live", "polite")
    announcer.setAttribute("aria-atomic", "true")
    announcer.className = "sr-only"
    document.body.appendChild(announcer)

    // Enhanced focus management for carousels
    const carouselCards = document.querySelectorAll(".category-card, .product-card")
    carouselCards.forEach((card) => {
      card.setAttribute("tabindex", "0")
      card.setAttribute("role", "button")

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          card.click()
        }
      })
    })

    // Improve form accessibility
    const forms = document.querySelectorAll("form")
    forms.forEach((form) => {
      const inputs = form.querySelectorAll("input, textarea, select")
      inputs.forEach((input) => {
        // Add required indicator to labels
        if (input.hasAttribute("required")) {
          const label = form.querySelector(`label[for="${input.id}"]`)
          if (label && !label.textContent.includes("*")) {
            label.innerHTML += ' <span aria-label="required">*</span>'
          }
        }

        // Add error handling
        input.addEventListener("invalid", (e) => {
          e.preventDefault()
          const errorMsg = input.validationMessage

          // Remove existing error
          const existingError = form.querySelector(`#${input.id}-error`)
          if (existingError) {
            existingError.remove()
          }

          // Add new error
          const errorElement = document.createElement("div")
          errorElement.id = `${input.id}-error`
          errorElement.className = "error-message"
          errorElement.style.color = "var(--destructive)"
          errorElement.style.fontSize = "var(--font-size-sm)"
          errorElement.style.marginTop = "var(--spacing-1)"
          errorElement.textContent = errorMsg
          errorElement.setAttribute("role", "alert")

          input.parentNode.appendChild(errorElement)
          input.setAttribute("aria-describedby", errorElement.id)
          input.setAttribute("aria-invalid", "true")
        })

        input.addEventListener("input", () => {
          if (input.checkValidity()) {
            const errorElement = form.querySelector(`#${input.id}-error`)
            if (errorElement) {
              errorElement.remove()
              input.removeAttribute("aria-describedby")
              input.setAttribute("aria-invalid", "false")
            }
          }
        })
      })
    })

    // Prefers reduced motion support
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.setProperty("--transition-fast", "0ms")
      document.documentElement.style.setProperty("--transition-normal", "0ms")
      document.documentElement.style.setProperty("--transition-slow", "0ms")
    }

    // High contrast mode detection
    if (window.matchMedia("(prefers-contrast: high)").matches) {
      document.documentElement.classList.add("high-contrast")
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new AETOSHomepage()
})

// Handle window resize events
let resizeTimeout
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    // Trigger carousel updates
    window.dispatchEvent(new Event("carouselResize"))
  }, 250)
})

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
