// Data
const products = [
  {
    name: "Vanguard Chrono - Midnight",
    category: "Vanguard Chronograph",
    price: 425,
    url: "/product/vanguard-chrono-midnight",
    image: "black chronograph watch panda dial",
  },
  {
    name: "Vanguard Chrono - Sterling",
    category: "Vanguard Chronograph",
    price: 425,
    url: "/product/vanguard-chrono-sterling",
    image: "silver sunburst chronograph watch",
  },
  {
    name: "Vanguard Chrono - Navy Gold",
    category: "Vanguard Chronograph",
    price: 450,
    url: "/product/vanguard-chrono-navy-gold",
    image: "navy blue chronograph watch gold accents",
  },
  {
    name: "Sentinel 40 - Classic White",
    category: "Sentinel Automatic",
    price: 550,
    url: "/product/sentinel-40-classic-white",
    image: "white dial automatic watch elegant",
  },
  {
    name: "Sentinel 40 - Onyx",
    category: "Sentinel Automatic",
    price: 550,
    url: "/product/sentinel-40-onyx",
    image: "black dial automatic watch versatile",
  },
  {
    name: "Sentinel 38 - Exhibition",
    category: "Sentinel Automatic",
    price: 575,
    url: "/product/sentinel-38-exhibition",
    image: "automatic watch exhibition caseback",
  },
  {
    name: "Shoreline Diver - Abyss",
    category: "Shoreline Diver",
    price: 495,
    url: "/product/shoreline-diver-abyss",
    image: "black dive watch ceramic bezel",
  },
  {
    name: "Shoreline Diver - Tropic",
    category: "Shoreline Diver",
    price: 495,
    url: "/product/shoreline-diver-tropic",
    image: "teal dive watch vintage inspired",
  },
  {
    name: "The Minimalist 36 - Pearl",
    category: "Minimalist 36",
    price: 295,
    url: "/product/minimalist-36-pearl",
    image: "minimalist watch mother of pearl dial",
  },
  {
    name: "The Minimalist 36 - Slate",
    category: "Minimalist 36",
    price: 295,
    url: "/product/minimalist-36-slate",
    image: "grey minimalist watch matte dial",
  },
  {
    name: "Italian Leather Strap - Oak",
    category: "Leather Straps",
    price: 75,
    url: "/product/leather-strap-oak",
    image: "brown leather watch strap",
  },
  {
    name: "Italian Leather Strap - Black",
    category: "Leather Straps",
    price: 75,
    url: "/product/leather-strap-black",
    image: "black leather watch strap white stitching",
  },
  {
    name: "Steel Bracelet - Brushed",
    category: "Steel Bracelets",
    price: 110,
    url: "/product/steel-bracelet-brushed",
    image: "brushed steel watch bracelet",
  },
  {
    name: "Steel Bracelet - Polished",
    category: "Steel Bracelets",
    price: 110,
    url: "/product/steel-bracelet-polished",
    image: "polished steel watch bracelet",
  },
  {
    name: "Nylon Strap - Forest Green",
    category: "Nylon Straps",
    price: 45,
    url: "/product/nylon-strap-forest-green",
    image: "green nylon watch strap",
  },
  {
    name: "Nylon Strap - Khaki",
    category: "Nylon Straps",
    price: 45,
    url: "/product/nylon-strap-khaki",
    image: "khaki nylon watch strap military",
  },
  {
    name: "Canvas Watch Roll - 3 Slot",
    category: "Watch Rolls & Cases",
    price: 95,
    url: "/product/canvas-watch-roll",
    image: "canvas watch travel roll",
  },
  {
    name: "Leather Watch Case - Single",
    category: "Watch Rolls & Cases",
    price: 120,
    url: "/product/leather-watch-case",
    image: "black leather watch case",
  },
  {
    name: "Spring Bar Tool - Pro",
    category: "Strap Tools",
    price: 35,
    url: "/product/spring-bar-tool",
    image: "watch strap tool professional",
  },
  {
    name: "Travel Pouch - Suede",
    category: "Watch Rolls & Cases",
    price: 55,
    url: "/product/travel-pouch-suede",
    image: "suede watch pouch",
  },
]

const journalArticles = [
  {
    title: "Automatic vs. Quartz: A Guide",
    author: "Mark Jennings",
    date: "Aug 12, 2025",
    snippet:
      "Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.",
    image: "watch movement mechanism automatic",
  },
  {
    title: "How to Pair Your Watch and Strap",
    author: "Alisha Khan",
    date: "Aug 05, 2025",
    snippet:
      "A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.",
    image: "watch strap pairing style guide",
  },
  {
    title: "The Enduring Appeal of the Dive Watch",
    author: "Mark Jennings",
    date: "Jul 28, 2025",
    snippet:
      "From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.",
    image: "vintage dive watch underwater",
  },
  {
    title: "A Look Inside Our Workshop",
    author: "David Chen",
    date: "Jul 21, 2025",
    snippet:
      "Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.",
    image: "watch workshop craftsman assembling",
  },
  {
    title: "Caring for Your Leather Strap",
    author: "Alisha Khan",
    date: "Jul 14, 2025",
    snippet:
      "Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.",
    image: "leather watch strap care conditioning",
  },
  {
    title: "What is Sapphire Crystal?",
    author: "Mark Jennings",
    date: "Jul 07, 2025",
    snippet:
      "We explain why we use sapphire crystal in all our watches and why it's the gold standard for scratch resistance and clarity.",
    image: "sapphire crystal watch glass closeup",
  },
  {
    title: "5 Iconic Watches in Cinema",
    author: "Liam Carter",
    date: "Jun 30, 2025",
    snippet:
      "From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood's biggest stars.",
    image: "classic watches from movies",
  },
  {
    title: "The AETOS Design Philosophy",
    author: "David Chen",
    date: "Jun 23, 2025",
    snippet:
      "Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.",
    image: "minimalist watch design sketch",
  },
  {
    title: "A Brief History of the Chronograph",
    author: "Mark Jennings",
    date: "Jun 16, 2025",
    snippet:
      "Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.",
    image: "vintage chronograph watch history",
  },
  {
    title: "Summer Style: The Best Watch Combos",
    author: "Alisha Khan",
    date: "Jun 09, 2025",
    snippet:
      "Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.",
    image: "summer watch style beach",
  },
  {
    title: "Why 316L Steel Matters",
    author: "Mark Jennings",
    date: "Jun 02, 2025",
    snippet:
      "Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.",
    image: "stainless steel watch case closeup",
  },
  {
    title: "Packing for Travel: The Watch Lover's Guide",
    author: "Liam Carter",
    date: "May 26, 2025",
    snippet:
      "How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.",
    image: "watch travel case packing",
  },
]

// Welcome Dialog
const welcomeDialog = document.getElementById("welcomeDialog")
const welcomeForm = document.getElementById("welcomeForm")
const dialogClose = document.querySelector(".dialog-close")
const successMessage = document.getElementById("successMessage")

// Show dialog on first visit
if (!sessionStorage.getItem("welcomeShown")) {
  welcomeDialog.showModal()
  sessionStorage.setItem("welcomeShown", "true")
}

// Close dialog
dialogClose.addEventListener("click", () => {
  welcomeDialog.close()
})

welcomeDialog.addEventListener("click", (e) => {
  if (e.target === welcomeDialog) {
    welcomeDialog.close()
  }
})

// Handle Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && welcomeDialog.open) {
    welcomeDialog.close()
  }
})

// Form validation and submission
welcomeForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const firstName = document.getElementById("firstName")
  const email = document.getElementById("email")
  let isValid = true

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""))

  // Validate first name
  if (!firstName.value.trim()) {
    firstName.nextElementSibling.textContent = "Please enter your first name"
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    email.nextElementSibling.textContent = "Please enter your email"
    isValid = false
  } else if (!emailRegex.test(email.value)) {
    email.nextElementSibling.textContent = "Please enter a valid email address"
    isValid = false
  }

  if (isValid) {
    welcomeForm.style.display = "none"
    successMessage.hidden = false
    setTimeout(() => {
      welcomeDialog.close()
    }, 2000)
  }
})

// Sticky Header
const header = document.getElementById("globalHeader")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const mainNav = document.getElementById("mainNav")

mobileMenuToggle.addEventListener("click", () => {
  const isExpanded = mobileMenuToggle.getAttribute("aria-expanded") === "true"
  mobileMenuToggle.setAttribute("aria-expanded", !isExpanded)
  mainNav.classList.toggle("open")
})

// Navigation Submenu Toggle
const navButtons = document.querySelectorAll(".nav-link[aria-expanded]")

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const isExpanded = button.getAttribute("aria-expanded") === "true"
    const submenuId = button.getAttribute("aria-controls")
    const submenu = document.getElementById(submenuId)

    // Close other submenus
    navButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute("aria-expanded", "false")
        const otherSubmenuId = otherButton.getAttribute("aria-controls")
        const otherSubmenu = document.getElementById(otherSubmenuId)
        if (otherSubmenu) {
          otherSubmenu.hidden = true
        }
      }
    })

    // Toggle current submenu
    button.setAttribute("aria-expanded", !isExpanded)
    submenu.hidden = isExpanded
  })
})

// Close submenus when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    navButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false")
      const submenuId = button.getAttribute("aria-controls")
      const submenu = document.getElementById(submenuId)
      if (submenu) {
        submenu.hidden = true
      }
    })
  }
})

// Predictive Search
const searchInput = document.getElementById("searchInput")
const searchSuggestions = document.getElementById("searchSuggestions")
const searchResults = document.getElementById("searchResults")

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim()

  if (query.length < 2) {
    searchResults.hidden = true
    return
  }

  const matches = products
    .filter((product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query))
    .slice(0, 5)

  if (matches.length > 0) {
    searchResults.innerHTML = matches
      .map(
        (product) => `
      <div class="search-result-item">
        <a href="${product.url}" class="search-result-link">
          <strong>${product.name}</strong><br>
          <small>${product.category} - $${product.price} CAD</small>
        </a>
      </div>
    `,
      )
      .join("")
    searchResults.hidden = false
    searchResults.textContent = `Found ${matches.length} result${matches.length > 1 ? "s" : ""}`
  } else {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>'
    searchResults.hidden = false
  }
})

// Close search results when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    searchResults.hidden = true
  }
})

// Carousel Functionality
function initCarousel(carouselId, btnSelector) {
  const carousel = document.getElementById(carouselId)
  const track = carousel.querySelector(".carousel-track")
  const items = track.querySelectorAll(".carousel-item")
  const prevBtn = document.querySelector(
    `${btnSelector}[data-carousel="${carouselId.replace("Carousel", "")}"].carousel-btn-prev`,
  )
  const nextBtn = document.querySelector(
    `${btnSelector}[data-carousel="${carouselId.replace("Carousel", "")}"].carousel-btn-next`,
  )

  let currentIndex = 0
  const itemWidth = items[0].offsetWidth + 16 // item width + gap
  const visibleItems = Math.floor(carousel.offsetWidth / itemWidth)
  const maxIndex = Math.max(0, items.length - visibleItems)

  function updateCarousel() {
    const offset = -currentIndex * itemWidth
    track.style.transform = `translateX(${offset}px)`

    prevBtn.disabled = currentIndex === 0
    nextBtn.disabled = currentIndex >= maxIndex
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

  // Update on window resize
  window.addEventListener("resize", () => {
    currentIndex = 0
    updateCarousel()
  })

  updateCarousel()
}

initCarousel("categoriesCarousel", ".carousel-btn")
initCarousel("productsCarousel", ".carousel-btn")

// Journal Section - Load More
const journalGrid = document.getElementById("journalGrid")
const loadMoreBtn = document.getElementById("loadMoreBtn")
let articlesLoaded = 0
const articlesPerLoad = 4

function loadJournalArticles() {
  const articlesToLoad = journalArticles.slice(articlesLoaded, articlesLoaded + articlesPerLoad)

  articlesToLoad.forEach((article) => {
    const articleCard = document.createElement("article")
    articleCard.className = "journal-card"
    articleCard.innerHTML = `
      <img src="/--article-image-.jpg" alt="" class="journal-image">
      <div class="journal-content">
        <p class="journal-meta">${article.author} • ${article.date}</p>
        <h3 class="journal-title">${article.title}</h3>
        <p class="journal-snippet">${article.snippet}</p>
        <a href="/journal/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}" class="journal-link">Read article about ${article.title}</a>
      </div>
    `
    journalGrid.appendChild(articleCard)
  })

  articlesLoaded += articlesToLoad.length

  if (articlesLoaded >= journalArticles.length) {
    loadMoreBtn.style.display = "none"
  }
}

loadJournalArticles()

loadMoreBtn.addEventListener("click", () => {
  loadJournalArticles()
})

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm")

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const emailInput = newsletterForm.querySelector('input[type="email"]')
  const errorMessage = newsletterForm.querySelector(".error-message")

  errorMessage.textContent = ""

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailInput.value.trim()) {
    errorMessage.textContent = "Please enter your email"
    return
  } else if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent = "Please enter a valid email address"
    return
  }

  errorMessage.style.color = "#2d5016"
  errorMessage.textContent = "Thank you for subscribing!"
  emailInput.value = ""

  setTimeout(() => {
    errorMessage.textContent = ""
    errorMessage.style.color = ""
  }, 3000)
})
