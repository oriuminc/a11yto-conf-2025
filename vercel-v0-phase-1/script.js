// Product data
const products = [
  {
    name: "Vanguard Chrono - Midnight",
    category: "Vanguard Chronograph",
    price: 425,
    description: "A classic panda dial with deep black subdials and a polished steel case.",
  },
  {
    name: "Vanguard Chrono - Sterling",
    category: "Vanguard Chronograph",
    price: 425,
    description: "A sunburst silver dial that captures the light, paired with a brown leather strap.",
  },
  {
    name: "Vanguard Chrono - Navy Gold",
    category: "Vanguard Chronograph",
    price: 450,
    description: "A striking deep navy dial with gold-tone hands and indices.",
  },
  {
    name: "Sentinel 40 - Classic White",
    category: "Sentinel Automatic",
    price: 550,
    description: "An elegant automatic with a clean white dial and a 40-hour power reserve.",
  },
  {
    name: "Sentinel 40 - Onyx",
    category: "Sentinel Automatic",
    price: 550,
    description: "A versatile black dial automatic, perfect for both formal and casual wear.",
  },
  {
    name: "Sentinel 38 - Exhibition",
    category: "Sentinel Automatic",
    price: 575,
    description: "A slightly smaller case with a stunning exhibition back showing the Miyota movement.",
  },
  {
    name: "Shoreline Diver - Abyss",
    category: "Shoreline Diver",
    price: 495,
    description: "A 200M water-resistant diver with a ceramic bezel and luminous markers.",
  },
  {
    name: "Shoreline Diver - Tropic",
    category: "Shoreline Diver",
    price: 495,
    description: "A vintage-inspired diver with a teal dial and a stainless steel bracelet.",
  },
  {
    name: "The Minimalist 36 - Pearl",
    category: "Minimalist 36",
    price: 295,
    description: "A refined 36mm quartz watch with a mother-of-pearl dial.",
  },
  {
    name: "The Minimalist 36 - Slate",
    category: "Minimalist 36",
    price: 295,
    description: "A modern, unisex design with a matte grey dial and no indices.",
  },
  {
    name: "Italian Leather Strap - Oak",
    category: "Leather Straps",
    price: 75,
    description: "A rich brown, full-grain leather strap that develops a beautiful patina.",
  },
  {
    name: "Italian Leather Strap - Black",
    category: "Leather Straps",
    price: 75,
    description: "A classic black leather strap with contrast white stitching.",
  },
  {
    name: "Steel Bracelet - Brushed",
    category: "Steel Bracelets",
    price: 110,
    description: "A 316L stainless steel oyster-style bracelet with a brushed finish.",
  },
  {
    name: "Steel Bracelet - Polished",
    category: "Steel Bracelets",
    price: 110,
    description: "A five-link polished steel bracelet for a more refined, dressy look.",
  },
  {
    name: "Nylon Strap - Forest Green",
    category: "Nylon Straps",
    price: 45,
    description: "A durable, single-pass nylon strap perfect for outdoor use.",
  },
  {
    name: "Nylon Strap - Khaki",
    category: "Nylon Straps",
    price: 45,
    description: "A versatile and military-inspired khaki nylon strap.",
  },
  {
    name: "Canvas Watch Roll - 3 Slot",
    category: "Watch Rolls & Cases",
    price: 95,
    description: "A waxed canvas roll with soft lining to protect three watches during travel.",
  },
  {
    name: "Leather Watch Case - Single",
    category: "Watch Rolls & Cases",
    price: 120,
    description: "A premium black leather hard case for storing a single cherished timepiece.",
  },
  {
    name: "Spring Bar Tool - Pro",
    category: "Strap Tools",
    price: 35,
    description: "A professional-grade steel tool for easily changing straps.",
  },
  {
    name: "Travel Pouch - Suede",
    category: "Watch Rolls & Cases",
    price: 55,
    description: "A simple and elegant suede pouch for protecting your watch from scratches.",
  },
]

// Journal articles data
const journalArticles = [
  {
    title: "Automatic vs. Quartz: A Guide",
    author: "Mark Jennings",
    date: "Aug 12, 2025",
    snippet:
      "Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.",
  },
  {
    title: "How to Pair Your Watch and Strap",
    author: "Alisha Khan",
    date: "Aug 05, 2025",
    snippet:
      "A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.",
  },
  {
    title: "The Enduring Appeal of the Dive Watch",
    author: "Mark Jennings",
    date: "Jul 28, 2025",
    snippet:
      "From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.",
  },
  {
    title: "A Look Inside Our Workshop",
    author: "David Chen",
    date: "Jul 21, 2025",
    snippet:
      "Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.",
  },
  {
    title: "Caring for Your Leather Strap",
    author: "Alisha Khan",
    date: "Jul 14, 2025",
    snippet:
      "Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.",
  },
  {
    title: "What is Sapphire Crystal?",
    author: "Mark Jennings",
    date: "Jul 07, 2025",
    snippet:
      "We explain why we use sapphire crystal in all our watches and why it's the gold standard for scratch resistance and clarity.",
  },
  {
    title: "5 Iconic Watches in Cinema",
    author: "Liam Carter",
    date: "Jun 30, 2025",
    snippet:
      "From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood's biggest stars.",
  },
  {
    title: "The AETOS Design Philosophy",
    author: "David Chen",
    date: "Jun 23, 2025",
    snippet:
      "Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.",
  },
  {
    title: "A Brief History of the Chronograph",
    author: "Mark Jennings",
    date: "Jun 16, 2025",
    snippet:
      "Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.",
  },
  {
    title: "Summer Style: The Best Watch Combos",
    author: "Alisha Khan",
    date: "Jun 09, 2025",
    snippet:
      "Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.",
  },
  {
    title: "Why 316L Steel Matters",
    author: "Mark Jennings",
    date: "Jun 02, 2025",
    snippet:
      "Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.",
  },
  {
    title: "Packing for Travel: The Watch Lover's Guide",
    author: "Liam Carter",
    date: "May 26, 2025",
    snippet:
      "How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.",
  },
]

// DOM elements
const welcomePopup = document.getElementById("welcomePopup")
const closePopup = document.getElementById("closePopup")
const welcomeForm = document.getElementById("welcomeForm")
const successMessage = document.getElementById("successMessage")
const header = document.getElementById("header")
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay")
const searchInput = document.getElementById("searchInput")
const searchResults = document.getElementById("searchResults")
const journalGrid = document.getElementById("journalGrid")
const loadMoreBtn = document.getElementById("loadMoreBtn")

// State
let currentJournalPage = 0
const articlesPerPage = 4
const carouselPositions = {
  categoriesCarousel: 0,
  productsCarousel: 0,
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Show welcome popup for first-time visitors
  if (!localStorage.getItem("welcomeShown")) {
    welcomePopup.style.display = "flex"
  }

  // Load initial journal articles
  loadJournalArticles()

  // Initialize carousels
  initializeCarousels()

  // Add scroll listener for sticky header
  window.addEventListener("scroll", handleScroll)
})

// Welcome popup functionality
closePopup.addEventListener("click", closeWelcomePopup)
welcomePopup.addEventListener("click", (e) => {
  if (e.target === welcomePopup) {
    closeWelcomePopup()
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && welcomePopup.style.display === "flex") {
    closeWelcomePopup()
  }
})

welcomeForm.addEventListener("submit", (e) => {
  e.preventDefault()
  welcomeForm.style.display = "none"
  successMessage.style.display = "block"
  localStorage.setItem("welcomeShown", "true")

  setTimeout(() => {
    closeWelcomePopup()
  }, 2000)
})

function closeWelcomePopup() {
  welcomePopup.style.display = "none"
  localStorage.setItem("welcomeShown", "true")
}

// Mobile menu functionality
mobileMenuToggle.addEventListener("click", () => {
  mobileMenuOverlay.classList.toggle("active")
})

// Mobile submenu toggles
document.querySelectorAll(".mobile-menu-toggle-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target")
    const submenu = document.getElementById(targetId)
    submenu.classList.toggle("active")
  })
})

// Search functionality
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim()

  if (query.length < 2) {
    searchResults.style.display = "none"
    return
  }

  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query),
  )

  displaySearchResults(filteredProducts.slice(0, 5))
})

function displaySearchResults(results) {
  if (results.length === 0) {
    searchResults.style.display = "none"
    return
  }

  searchResults.innerHTML = results
    .map(
      (product) => `
        <div class="search-result-item">
            <strong>${product.name}</strong><br>
            <small>$${product.price} CAD</small>
        </div>
    `,
    )
    .join("")

  searchResults.style.display = "block"
}

// Hide search results when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = "none"
  }
})

// Carousel functionality
function initializeCarousels() {
  document.querySelectorAll(".carousel-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const carouselId = this.getAttribute("data-carousel")
      const direction = this.classList.contains("next") ? 1 : -1
      moveCarousel(carouselId, direction)
    })
  })
}

function moveCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId)
  const items = carousel.querySelectorAll(".carousel-item")
  const itemWidth = items[0].offsetWidth + 30 // including gap
  const maxPosition = -(items.length - 3) * itemWidth // show 3 items at once

  carouselPositions[carouselId] += direction * itemWidth

  // Boundary checks
  if (carouselPositions[carouselId] > 0) {
    carouselPositions[carouselId] = 0
  } else if (carouselPositions[carouselId] < maxPosition) {
    carouselPositions[carouselId] = maxPosition
  }

  carousel.style.transform = `translateX(${carouselPositions[carouselId]}px)`
}

// Journal functionality
function loadJournalArticles() {
  const startIndex = currentJournalPage * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const articlesToShow = journalArticles.slice(startIndex, endIndex)

  articlesToShow.forEach((article) => {
    const articleElement = createJournalElement(article)
    journalGrid.appendChild(articleElement)
  })

  currentJournalPage++

  // Hide load more button if all articles are loaded
  if (currentJournalPage * articlesPerPage >= journalArticles.length) {
    loadMoreBtn.style.display = "none"
  }
}

function createJournalElement(article) {
  const div = document.createElement("div")
  div.className = "journal-item"
  div.innerHTML = `
        <img src="/watch-journal-article---article-title-.jpg" alt="${article.title}">
        <div class="journal-content">
            <h3>${article.title}</h3>
            <div class="journal-meta">By ${article.author} • ${article.date}</div>
            <p class="journal-snippet">${article.snippet}</p>
        </div>
    `
  return div
}

loadMoreBtn.addEventListener("click", loadJournalArticles)

// Sticky header
function handleScroll() {
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#ffffff"
    header.style.backdropFilter = "none"
  }
}

// Newsletter form
document.querySelector(".newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault()
  const email = this.querySelector('input[type="email"]').value
  alert("Thank you for subscribing! We'll send updates to " + email)
  this.reset()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Touch/swipe support for carousels on mobile
let touchStartX = 0
let touchEndX = 0

document.querySelectorAll(".carousel").forEach((carousel) => {
  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  carousel.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe(this.id)
  })
})

function handleSwipe(carouselId) {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - move to next
      moveCarousel(carouselId, 1)
    } else {
      // Swipe right - move to previous
      moveCarousel(carouselId, -1)
    }
  }
}
