// AETOS Timepieces – Minimal Accessible JS (WCAG 2.1 AA)
// Focus: modal, mega menu, predictive search, carousels, forms.

(function () {
  const qs = (s, o = document) => o.querySelector(s);
  const qsa = (s, o = document) => [...o.querySelectorAll(s)];
  const live = qs('#live-region');
  const announce = (msg) => { if (live) { live.textContent = ''; requestAnimationFrame(()=> live.textContent = msg); } };

  /* 1. Welcome Modal */
  const modal = qs('#welcome-modal');
  const welcomeForm = qs('#welcome-form');
  let lastFocus = null;
  const openModal = () => {
    if (!modal.open) {
      lastFocus = document.activeElement;
      modal.showModal();
      qs('#wf-name').focus();
      announce('Welcome popup opened.');
    }
  };
  const closeModal = () => {
    if (modal.open) {
      modal.close();
      lastFocus && lastFocus.focus();
      announce('Popup closed.');
    }
  };
  setTimeout(openModal, 1200);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  qsa('[data-close]').forEach(btn => btn.addEventListener('click', closeModal));
  modal.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); closeModal(); } });
  // Focus trap
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = qsa('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal).filter(el => !el.disabled && el.offsetParent !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* 2. Mega Menu (desktop) */
  const menuTriggers = qsa('.menu__trigger');
  const closeAllMenus = () => {
    menuTriggers.forEach(t => { t.setAttribute('aria-expanded', 'false'); t.parentElement.removeAttribute('data-open'); });
  };
  menuTriggers.forEach(trigger => {
    const panel = qs('#' + trigger.getAttribute('aria-controls'));
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      closeAllMenus();
      if (!expanded) {
        trigger.setAttribute('aria-expanded', 'true');
        trigger.parentElement.setAttribute('data-open', '');
        panel.querySelector('a, button')?.focus();
        announce(trigger.textContent.trim() + ' menu opened');
      } else {
        announce(trigger.textContent.trim() + ' menu closed');
      }
    });
    trigger.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'Enter', ' '].includes(e.key)) {
        e.preventDefault(); trigger.click();
      } else if (e.key === 'Escape') { closeAllMenus(); trigger.focus(); }
      else if (e.key === 'ArrowRight') {
        const idx = menuTriggers.indexOf(trigger); const next = menuTriggers[idx + 1] || menuTriggers[0]; next.focus();
      } else if (e.key === 'ArrowLeft') {
        const idx = menuTriggers.indexOf(trigger); const prev = menuTriggers[idx - 1] || menuTriggers[menuTriggers.length - 1]; prev.focus();
      }
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.primary-nav')) closeAllMenus();
  });

  /* 3. Mobile Navigation */
  const hamburger = qs('#hamburger');
  const mobilePanel = qs('#mobile-panel');
  hamburger?.addEventListener('click', () => {
    const exp = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!exp));
    mobilePanel.hidden = exp; (!exp) && mobilePanel.querySelector('a, button')?.focus();
    announce(!exp ? 'Menu opened' : 'Menu closed');
  });
  qsa('.m-expander').forEach(btn => {
    btn.addEventListener('click', () => {
      const exp = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!exp));
      const tgt = qs('#' + btn.getAttribute('aria-controls'));
      if (tgt) tgt.hidden = exp;
    });
  });

  /* 4. Predictive Search (combobox) */
  const searchWrap = qs('.search__wrap');
  const searchInput = qs('#search-input');
  const searchList = qs('#search-list');
  const searchStatus = qs('#search-status');
  const searchData = [
    'Vanguard Chronograph',
    'Sentinel Automatic',
    'Shoreline Diver',
    'Minimalist 36',
    'Leather Strap Black',
    'Steel Bracelet',
    'Watch Roll Premium'
  ];
  let activeIndex = -1;
  const renderSearch = (q) => {
    const terms = searchData.filter(t => t.toLowerCase().includes(q.toLowerCase()));
    searchList.innerHTML = '';
    activeIndex = -1;
    if (!q || !terms.length) {
      searchList.hidden = true; searchWrap.setAttribute('aria-expanded', 'false');
      searchStatus.textContent = q ? 'No results.' : '';
      return;
    }
    const frag = document.createDocumentFragment();
    terms.forEach((term, i) => {
      const li = document.createElement('li');
      li.id = 'sopt-' + i;
      li.role = 'option';
      li.tabIndex = -1;
      li.textContent = term;
      li.addEventListener('mousedown', (e) => { e.preventDefault(); commit(term); });
      frag.appendChild(li);
    });
    searchList.appendChild(frag);
    searchList.hidden = false;
    searchWrap.setAttribute('aria-expanded', 'true');
    searchStatus.textContent = terms.length + ' result' + (terms.length === 1 ? '' : 's');
  };
  const commit = (val) => {
    searchInput.value = val;
    searchList.hidden = true;
    searchWrap.setAttribute('aria-expanded', 'false');
    announce('Selected ' + val);
  };
  searchInput?.addEventListener('input', (e) => renderSearch(e.target.value.trim()));
  searchInput?.addEventListener('keydown', (e) => {
    const items = qsa('li', searchList);
    if (['ArrowDown','ArrowUp'].includes(e.key)) {
      if (searchList.hidden) return;
      e.preventDefault();
      activeIndex = e.key === 'ArrowDown' ? (activeIndex + 1) % items.length : (activeIndex - 1 + items.length) % items.length;
      items.forEach(i => i.setAttribute('aria-selected','false'));
      const current = items[activeIndex];
      current.setAttribute('aria-selected','true');
      current.focus();
      announce(current.textContent + ', option ' + (activeIndex+1) + ' of ' + items.length);
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && !searchList.hidden) { e.preventDefault(); commit(items[activeIndex].textContent); }
    } else if (e.key === 'Escape') {
      searchList.hidden = true; searchWrap.setAttribute('aria-expanded','false');
    }
  });
  searchList?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { searchList.hidden = true; searchWrap.setAttribute('aria-expanded','false'); searchInput.focus(); }
    if (e.key === 'Enter') { e.preventDefault(); document.activeElement && commit(document.activeElement.textContent); }
  });

  /* 5. Carousels (categories & products) */
  function makeCarousel({ trackId, prevId, nextId, pauseId, statusId, auto = true, interval = 5000 }) {
    const track = qs('#' + trackId);
    const prev = qs('#' + prevId);
    const next = qs('#' + nextId);
    const pauseBtn = qs('#' + pauseId);
    const status = qs('#' + statusId);
    let index = 0; let timer = null; let paused = false;

    const update = () => {
      const cards = qsa('.card', track);
      cards.forEach((c,i)=> c.setAttribute('tabindex', i === index ? '0':'-1'));
      track.style.transform = `translateX(${-index * 276}px)`; // card width + gap approx
      prev.disabled = index === 0;
      next.disabled = index === cards.length - 1;
      status.textContent = 'Item ' + (index+1) + ' of ' + cards.length;
    };
    const go = (dir) => { const cards = qsa('.card', track); index = Math.min(Math.max(index + dir, 0), cards.length -1); update(); announce('Moved to item ' + (index+1)); };
    prev?.addEventListener('click', ()=> go(-1));
    next?.addEventListener('click', ()=> go(1));
    track?.addEventListener('keydown',(e)=>{ if(e.key==='ArrowRight') { e.preventDefault(); go(1);} else if(e.key==='ArrowLeft'){ e.preventDefault(); go(-1);} });
    pauseBtn?.addEventListener('click', ()=> { paused = !paused; pauseBtn.setAttribute('aria-pressed', String(paused)); pauseBtn.textContent = paused ? '▶' : '❚❚'; announce(paused? 'Auto scroll paused':'Auto scroll resumed'); restartTimer(); });

    function restartTimer(){ if(timer) clearInterval(timer); if(auto && !paused){ timer = setInterval(()=>{ const cards = qsa('.card', track); if(index < cards.length -1) { index++; } else { index = 0; } update(); }, interval);} }

    // Public loader to append items
    return { track, update, restartTimer };
  }

  const categoriesData = [
    { title:'Chronographs', text:'Precision timing instruments', img:'https://via.placeholder.com/300x160/1a365d/ffffff?text=Chrono', alt:'Chronograph watch collection' },
    { title:'Dive Watches', text:'200m rated designs', img:'https://via.placeholder.com/300x160/102742/ffffff?text=Dive', alt:'Blue bezel dive watch' },
    { title:'Dress Watches', text:'Minimal refined dials', img:'https://via.placeholder.com/300x160/3182ce/ffffff?text=Dress', alt:'Slim silver dress watch' },
    { title:'Sport Watches', text:'Robust everyday utility', img:'https://via.placeholder.com/300x160/2f855a/ffffff?text=Sport', alt:'Sport watch with rubber strap' }
  ];

  const productData = [
    { title:'The Vanguard Chronograph', price:'$459', text:'Swiss movement, sapphire crystal', img:'https://via.placeholder.com/300x160/1a365d/ffffff?text=Vanguard', alt:'Vanguard chronograph dial' },
    { title:'The Sentinel Automatic', price:'$389', text:'Self‑winding 40-hour reserve', img:'https://via.placeholder.com/300x160/102742/ffffff?text=Sentinel', alt:'Sentinel automatic watch case' },
    { title:'The Shoreline Diver', price:'$349', text:'Ceramic bezel, 200m rated', img:'https://via.placeholder.com/300x160/3182ce/ffffff?text=Shoreline', alt:'Shoreline diver with blue dial' },
    { title:'The Minimalist 36', price:'$289', text:'Slim 36mm modern profile', img:'https://via.placeholder.com/300x160/2f855a/ffffff?text=Minimalist', alt:'Minimalist watch with white dial' }
  ];

  function renderCards(arr, track) {
    track.innerHTML = arr.map(item => `
      <article class="card" tabindex="-1">
        <img src="${item.img}" alt="${item.alt}" />
        <h3>${item.title}</h3>
        ${item.price ? `<p class="price">${item.price}</p>`:''}
        <p>${item.text}</p>
        <a href="#" class="read-more" aria-label="View details for ${item.title}">View</a>
      </article>`).join('');
  }

  const catCarousel = makeCarousel({ trackId:'cat-track', prevId:'cat-prev', nextId:'cat-next', pauseId:'cat-pause', statusId:'cat-status' });
  renderCards(categoriesData, catCarousel.track); catCarousel.update(); catCarousel.restartTimer();

  const prodCarousel = makeCarousel({ trackId:'prod-track', prevId:'prod-prev', nextId:'prod-next', pauseId:'prod-pause', statusId:'prod-status' });
  renderCards(productData, prodCarousel.track); prodCarousel.update(); prodCarousel.restartTimer();

  /* 6. Journal Load More */
  const journalGrid = qs('#journal-grid');
  const journalStatus = qs('#journal-status');
  const loadMoreBtn = qs('#load-more');
  const journalInitial = [
    { title:'The Art of Mechanical Timekeeping', date:'Dec 15, 2024', excerpt:'Understanding escapements & balance wheels.' },
    { title:'Automatic vs Quartz: Which lasts longer?', date:'Dec 10, 2024', excerpt:'Longevity considerations when choosing.' },
    { title:'Maintaining Water Resistance', date:'Dec 05, 2024', excerpt:'Why routine gasket checks matter.' }
  ];
  const journalMore = [
    { title:'Choosing Your First Luxury Watch', date:'Dec 01, 2024', excerpt:'Key criteria: movement, materials, design.' },
    { title:'Strap Materials Compared', date:'Nov 27, 2024', excerpt:'Leather, steel, nylon—pros and cons.' }
  ];
  function renderJournal(items){
    journalGrid.insertAdjacentHTML('beforeend', items.map(a=>`
      <article class="j-card">
        <h3>${a.title}</h3>
        <p class="meta">${a.date}</p>
        <p>${a.excerpt}</p>
        <a href="#" class="read-more">Read more about ${a.title}</a>
      </article>`).join(''));
  }
  renderJournal(journalInitial);
  loadMoreBtn?.addEventListener('click', () => {
    loadMoreBtn.disabled = true; loadMoreBtn.textContent = 'Loading...';
    setTimeout(()=>{ renderJournal(journalMore); journalStatus.textContent = journalMore.length + ' more articles loaded'; announce('More articles loaded'); loadMoreBtn.remove(); }, 900);
  });

  /* 7. Form Validation (modal + newsletter) */
  function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function inlineError(input, msgId, message) {
    const el = qs('#' + msgId); if (!el) return; el.textContent = message || ''; input.setAttribute('aria-invalid', message ? 'true':'false'); if(message) announce(message); }

  welcomeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = qs('#wf-name'); const email = qs('#wf-email'); let ok = true;
    if (!name.value.trim()) { inlineError(name,'wf-name-error','First name is required'); ok=false; } else inlineError(name,'wf-name-error','');
    if (!email.value.trim()) { inlineError(email,'wf-email-error','Email is required'); ok=false; }
    else if (!validateEmail(email.value)) { inlineError(email,'wf-email-error','Enter a valid email address'); ok=false; } else inlineError(email,'wf-email-error','');
    if (!ok) return;
    qs('#wf-success').hidden = false; announce('Subscription successful'); setTimeout(closeModal, 1500);
  });
  qsa('#welcome-form input').forEach(inp => inp.addEventListener('input', () => {
    const errId = inp.id + '-error'; inlineError(inp, errId, '');
  }));

  const newsletter = qs('#newsletter');
  newsletter?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = qs('#nl-email');
    if (!email.value.trim()) { inlineError(email,'nl-email-error','Email is required'); return; }
    if (!validateEmail(email.value)) { inlineError(email,'nl-email-error','Enter a valid email'); return; }
    inlineError(email,'nl-email-error',''); qs('#nl-success').hidden = false; announce('Newsletter subscribed'); email.value='';
  });
  qs('#nl-email')?.addEventListener('input', e => inlineError(e.target,'nl-email-error',''));

  /* 8. Global Escape for open menus when focusing outside */
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ closeAllMenus(); } });

  /* 9. Keyboard shortcuts (optional enhancement) */
  document.addEventListener('keydown',(e)=>{
    if(e.altKey && e.key.toLowerCase()==='s'){ e.preventDefault(); searchInput?.focus(); announce('Search focused'); }
    if(e.altKey && e.key.toLowerCase()==='m'){ e.preventDefault(); qs('#main')?.focus(); announce('Main content focused'); }
  });
})();