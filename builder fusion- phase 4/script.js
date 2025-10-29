/* AETOS Timepieces — Interactive behaviors (WCAG 2.1 AA) */
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  const PRODUCTS = [
    { name: 'Vanguard Chrono - Midnight', category: 'Vanguard Chronograph', price: 425, desc: 'A classic panda dial with deep black subdials and a polished steel case.' },
    { name: 'Vanguard Chrono - Sterling', category: 'Vanguard Chronograph', price: 425, desc: 'A sunburst silver dial that captures the light, paired with a brown leather strap.' },
    { name: 'Vanguard Chrono - Navy Gold', category: 'Vanguard Chronograph', price: 450, desc: 'A striking deep navy dial with gold-tone hands and indices.' },
    { name: 'Sentinel 40 - Classic White', category: 'Sentinel Automatic', price: 550, desc: 'An elegant automatic with a clean white dial and a 40-hour power reserve.' },
    { name: 'Sentinel 40 - Onyx', category: 'Sentinel Automatic', price: 550, desc: 'A versatile black dial automatic, perfect for both formal and casual wear.' },
    { name: 'Sentinel 38 - Exhibition', category: 'Sentinel Automatic', price: 575, desc: 'A slightly smaller case with a stunning exhibition back showing the Miyota movement.' },
    { name: 'Shoreline Diver - Abyss', category: 'Shoreline Diver', price: 495, desc: 'A 200M water-resistant diver with a ceramic bezel and luminous markers.' },
    { name: 'Shoreline Diver - Tropic', category: 'Shoreline Diver', price: 495, desc: 'A vintage-inspired diver with a teal dial and a stainless steel bracelet.' },
    { name: 'The Minimalist 36 - Pearl', category: 'Minimalist 36', price: 295, desc: 'A refined 36mm quartz watch with a mother-of-pearl dial.' },
    { name: 'The Minimalist 36 - Slate', category: 'Minimalist 36', price: 295, desc: 'A modern, unisex design with a matte grey dial and no indices.' },
    { name: 'Italian Leather Strap - Oak', category: 'Leather Straps', price: 75, desc: 'A rich brown, full-grain leather strap that develops a beautiful patina.' },
    { name: 'Italian Leather Strap - Black', category: 'Leather Straps', price: 75, desc: 'A classic black leather strap with contrast white stitching.' },
    { name: 'Steel Bracelet - Brushed', category: 'Steel Bracelets', price: 110, desc: 'A 316L stainless steel oyster-style bracelet with a brushed finish.' },
    { name: 'Steel Bracelet - Polished', category: 'Steel Bracelets', price: 110, desc: 'A five-link polished steel bracelet for a more refined, dressy look.' },
    { name: 'Nylon Strap - Forest Green', category: 'Nylon Straps', price: 45, desc: 'A durable, single-pass nylon strap perfect for outdoor use.' },
    { name: 'Nylon Strap - Khaki', category: 'Nylon Straps', price: 45, desc: 'A versatile and military-inspired khaki nylon strap.' },
    { name: 'Canvas Watch Roll - 3 Slot', category: 'Watch Rolls & Cases', price: 95, desc: 'A waxed canvas roll with soft lining to protect three watches during travel.' },
    { name: 'Leather Watch Case - Single', category: 'Watch Rolls & Cases', price: 120, desc: 'A premium black leather hard case for storing a single cherished timepiece.' },
    { name: 'Spring Bar Tool - Pro', category: 'Strap Tools', price: 35, desc: 'A professional-grade steel tool for easily changing straps.' },
    { name: 'Travel Pouch - Suede', category: 'Watch Rolls & Cases', price: 55, desc: 'A simple and elegant suede pouch for protecting your watch from scratches.' }
  ];

  const CATEGORIES = [
    { key: 'vanguard-chronograph', name: 'The Vanguard Chronograph', blurb: 'Multi-dial precision timing.' },
    { key: 'sentinel-automatic', name: 'The Sentinel Automatic', blurb: 'Classic self‑winding icons.' },
    { key: 'shoreline-diver', name: 'The Shoreline Diver', blurb: 'Built for adventure, 200M WR.' },
    { key: 'premium-leather-straps', name: 'Premium Leather Straps', blurb: 'Hand‑stitched Italian leather.' },
    { key: 'travel-storage', name: 'Travel & Storage', blurb: 'Watch rolls, cases, and more.' }
  ];

  const ARTICLES = [
    ['Automatic vs. Quartz: A Guide','Mark Jennings','Aug 12, 2025','Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.'],
    ['How to Pair Your Watch and Strap','Alisha Khan','Aug 05, 2025','A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.'],
    ['The Enduring Appeal of the Dive Watch','Mark Jennings','Jul 28, 2025','From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.'],
    ['A Look Inside Our Workshop','David Chen','Jul 21, 2025','Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.'],
    ['Caring for Your Leather Strap','Alisha Khan','Jul 14, 2025','Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.'],
    ['What is Sapphire Crystal?','Mark Jennings','Jul 07, 2025','We explain why we use sapphire crystal in all our watches and why it’s the gold standard for scratch resistance and clarity.'],
    ['5 Iconic Watches in Cinema','Liam Carter','Jun 30, 2025','From spies to astronauts, a look at the legendary timepieces that have shared the silver screen with Hollywood’s biggest stars.'],
    ['The AETOS Design Philosophy','David Chen','Jun 23, 2025','Our founder discusses the principles of minimalism, function, and timelessness that guide every AETOS design.'],
    ['A Brief History of the Chronograph','Mark Jennings','Jun 16, 2025','Discover the fascinating history of the chronograph, from its origins in horse racing to its essential role in the space race.'],
    ['Summer Style: The Best Watch Combos','Alisha Khan','Jun 09, 2025','Lighten up your look for the warmer months with our top picks for watch and strap combinations that exude summer style.'],
    ['Why 316L Steel Matters','Mark Jennings','Jun 02, 2025','Not all steel is created equal. Learn why we use surgical-grade 316L stainless steel for its superior corrosion resistance and durability.'],
    ['Packing for Travel: The Watch Lover’s Guide','Liam Carter','May 26, 2025','How to choose which watches to bring on your next trip and the best way to keep them safe and secure on the go.']
  ];

  const POPULAR_QUERIES = [
    'automatic watch', 'diver 200m', 'leather strap', 'sapphire crystal', '316L steel', 'chronograph panda', 'navy dial'
  ];

  const currency = (n) => `CA$${n.toFixed(2)}`;

  function svgDataUrl(title, variant){
    const bg1 = variant==='cat' ? '%230d1b2a' : '%233b4a6b';
    const bg2 = variant==='cat' ? '%237a5936' : '%233a3f45';
    const text = encodeURIComponent(title);
    const svg = `<?xml version='1.0' encoding='UTF-8'?>\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>\n<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${bg1}'/><stop offset='1' stop-color='${bg2}'/></linearGradient></defs>\n<rect width='1200' height='900' fill='url(%23g)'/>\n<circle cx='900' cy='450' r='240' fill='none' stroke='%23c2c9d6' stroke-width='2' opacity='.35'/>\n<text x='60' y='820' font-size='64' fill='%23e8ecef' opacity='.85' font-family='system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'>${text}</text>\n</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function mountCategories(){
    const track = $('#categories-track');
    track.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const li = document.createElement('li');
      li.innerHTML = `
        <article class="card">
          <div class="card__media">
            <img alt="${cat.name} — ${cat.blurb}" src="${svgDataUrl(cat.name, 'cat')}">
          </div>
          <div class="card__body">
            <h3 class="card__title">${cat.name}</h3>
            <p class="card__meta">${cat.blurb}</p>
            <div class="card__actions">
              <a href="#${cat.key}">Shop ${cat.name}</a>
            </div>
          </div>
        </article>`;
      track.appendChild(li);
    });
  }

  function mountProducts(){
    const track = $('#products-track');
    track.innerHTML='';
    const featured = PRODUCTS.slice(0,5);
    featured.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `
        <article class="card">
          <div class="card__media">
            <img alt="${p.name} — ${p.category}" src="${svgDataUrl(p.name, 'prod')}">
          </div>
          <div class="card__body">
            <h3 class="card__title">${p.name}</h3>
            <p class="card__meta">${p.category} · ${currency(p.price)}</p>
            <p>${p.desc}</p>
            <div class="card__actions">
              <a href="#product-${encodeURIComponent(p.name)}">View details: ${p.name}</a>
            </div>
          </div>
        </article>`;
      track.appendChild(li);
    });
  }

  function mountJournal(batch=4){
    const grid = $('#journal-grid');
    const count = grid.children.length;
    const next = ARTICLES.slice(count, count + batch);
    next.forEach(([title, author, date, snippet]) => {
      const card = document.createElement('article');
      card.className = 'journal-card';
      card.innerHTML = `
        <div class="journal-card__img" role="img" aria-label="Journal image for ${title}"></div>
        <div class="journal-card__body">
          <p class="card__meta">${author} · ${date}</p>
          <h3 class="journal-card__title">${title}</h3>
          <p>${snippet}</p>
          <div class="card__actions">
            <a href="#read-${encodeURIComponent(title)}">Read more about ${title}</a>
          </div>
        </div>`;
      grid.appendChild(card);
    });
    if(grid.children.length >= ARTICLES.length){
      const btn = $('#load-more');
      btn.setAttribute('disabled','');
      btn.textContent = 'All articles loaded';
    }
  }

  function liveRegion(el, msg){
    el.textContent = '';
    // small delay to ensure announcement
    setTimeout(()=>{ el.textContent = msg; }, 10);
  }

  function setupSearch(){
    const input = $('#search');
    const list = $('#search-suggestions');
    const status = $('#search-status');
    const base = [
      ...new Set([ ...PRODUCTS.map(p=>p.name), ...CATEGORIES.map(c=>c.name), ...POPULAR_QUERIES ])
    ];
    function updateSuggestions(value){
      const q = value.trim().toLowerCase();
      const matches = base.filter(v=> v.toLowerCase().includes(q)).slice(0,10);
      list.innerHTML = matches.map(m=>`<option value="${m}"></option>`).join('');
      liveRegion(status, matches.length ? `${matches.length} suggestions available` : 'No suggestions');
    }
    input.addEventListener('input', (e)=>{
      updateSuggestions(e.target.value);
    });
    // initialize
    updateSuggestions('');
  }

  function setupCarousels(){
    $$('.carousel').forEach(carousel => {
      const track = $('.carousel__track', carousel);
      const prev = $('.carousel__btn.prev', carousel);
      const next = $('.carousel__btn.next', carousel);
      const scrollBy = () => track.clientWidth * 0.9;
      prev.addEventListener('click', ()=> track.scrollBy({left: -scrollBy(), behavior:'smooth'}));
      next.addEventListener('click', ()=> track.scrollBy({left: scrollBy(), behavior:'smooth'}));
      // keyboard support
      track.setAttribute('tabindex','0');
      track.addEventListener('keydown', (e)=>{
        if(e.key==='ArrowLeft') { track.scrollBy({left: -scrollBy(), behavior:'smooth'}); }
        if(e.key==='ArrowRight') { track.scrollBy({left: scrollBy(), behavior:'smooth'}); }
      });
    });
  }

  function setupMenu(){
    const toggle = $('#menu-toggle');
    const nav = $('#primary-navigation');
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
    // mobile submenu toggles
    $$('.has-mega').forEach(item => {
      const btn = $('.submenu-toggle', item);
      const panel = $('.mega', item);
      btn.addEventListener('click', ()=>{
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        panel.classList.toggle('open', !open);
      });
    });
  }

  function setupWelcomeDialog(){
    const dlg = $('#welcome-dialog');
    const form = $('#welcome-form');
    const closeBtns = $$('[data-close]', dlg);
    const errors = $('#signup-errors');
    const success = $('#signup-success');

    function open(){
      try { dlg.showModal(); } catch { dlg.setAttribute('open',''); }
      // focus first input
      $('#firstName').focus();
    }
    function close(){
      if(dlg.open) dlg.close(); else dlg.removeAttribute('open');
    }
    closeBtns.forEach(b => b.addEventListener('click', close));
    dlg.addEventListener('cancel', (e)=>{ e.preventDefault(); close(); });

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      errors.textContent = '';
      const fd = new FormData(form);
      const firstName = (fd.get('firstName')||'').toString().trim();
      const email = (fd.get('email')||'').toString().trim();
      const birthday = (fd.get('birthday')||'').toString().trim();
      const errs = [];
      if(!firstName) errs.push('Please enter your first name.');
      if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('Please enter a valid email address.');
      if(!birthday) errs.push('Please select your birthday.');
      if(errs.length){
        errors.classList.remove('visually-hidden');
        errors.textContent = errs.join(' ');
        return;
      }
      errors.textContent = '';
      errors.classList.add('visually-hidden');
      localStorage.setItem('aetos_signup', JSON.stringify({firstName, email, birthday, at: Date.now()}));
      success.classList.remove('visually-hidden');
      success.textContent = 'Success! Your 20% welcome code has been sent to ' + email + '.';
      setTimeout(close, 1200);
      localStorage.setItem('aetos_welcome_shown','1');
    });

    if(!localStorage.getItem('aetos_welcome_shown')){
      // open slightly delayed for page render
      setTimeout(open, 500);
    }
  }

  function setupNewsletter(){
    const form = $('#footer-newsletter');
    const err = $('#newsletter-errors');
    const ok = $('#newsletter-success');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = $('#footer-email').value.trim();
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        err.classList.remove('visually-hidden');
        err.textContent = 'Enter a valid email to subscribe.';
        return;
      }
      err.textContent=''; err.classList.add('visually-hidden');
      ok.classList.remove('visually-hidden');
      ok.textContent = 'Thanks! You\'re subscribed to AETOS.';
      form.reset();
    });
  }

  function init(){
    mountCategories();
    mountProducts();
    mountJournal(4);
    setupSearch();
    setupCarousels();
    setupMenu();
    setupWelcomeDialog();
    setupNewsletter();
    $('#load-more').addEventListener('click', ()=> mountJournal(4));
    $('#year').textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
