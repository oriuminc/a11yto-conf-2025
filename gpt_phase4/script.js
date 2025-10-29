/* Data Sets */
const categories = [
  { name: 'The Vanguard Chronograph', id: 'vanguard', desc: 'Multi-dial precision timing.', link: '#vanguard' },
  { name: 'The Sentinel Automatic', id: 'sentinel', desc: 'Self‑winding classics.', link: '#sentinel' },
  { name: 'The Shoreline Diver', id: 'shoreline', desc: 'Built for adventure.', link: '#shoreline' },
  { name: 'Premium Leather Straps', id: 'leather', desc: 'Italian leather comfort.', link: '#leather' },
  { name: 'Travel & Storage', id: 'travel', desc: 'Protect your collection.', link: '#travel' }
];

const products = [
  ['Vanguard Chrono - Midnight','Vanguard Chronograph',425,'A classic panda dial with deep black subdials and a polished steel case.'],
  ['Vanguard Chrono - Sterling','Vanguard Chronograph',425,'Sunburst silver dial with brown leather strap.'],
  ['Vanguard Chrono - Navy Gold','Vanguard Chronograph',450,'Deep navy dial with gold-tone hands and indices.'],
  ['Sentinel 40 - Classic White','Sentinel Automatic',550,'Clean white dial automatic, 40-hour power reserve.'],
  ['Sentinel 40 - Onyx','Sentinel Automatic',550,'Versatile black dial automatic.'],
  ['Sentinel 38 - Exhibition','Sentinel Automatic',575,'Smaller case with exhibition back.'],
  ['Shoreline Diver - Abyss','Shoreline Diver',495,'200M diver, ceramic bezel, luminous markers.'],
  ['Shoreline Diver - Tropic','Shoreline Diver',495,'Teal dial diver with steel bracelet.'],
  ['The Minimalist 36 - Pearl','Minimalist 36',295,'Mother-of-pearl refined quartz.'],
  ['The Minimalist 36 - Slate','Minimalist 36',295,'Matte grey, unisex design.']
];

const allArticles = [
  ['Automatic vs. Quartz: A Guide','Mark Jennings','Aug 12, 2025','Understanding the intricate mechanics of an automatic movement versus the precision of quartz. We break down what makes each one tick.'],
  ['How to Pair Your Watch and Strap','Alisha Khan','Aug 05, 2025','A complete style guide to matching your timepiece with the perfect strap for any occasion, from the boardroom to the beach.'],
  ['The Enduring Appeal of the Dive Watch','Mark Jennings','Jul 28, 2025','From military history to modern icon, we explore why the dive watch remains one of the most popular styles in the world.'],
  ['A Look Inside Our Workshop','David Chen','Jul 21, 2025','Go behind the scenes at AETOS and meet the people who design, assemble, and test every timepiece we create.'],
  ['Caring for Your Leather Strap','Alisha Khan','Jul 14, 2025','Simple tips and tricks to clean, condition, and preserve your leather strap, ensuring it ages as gracefully as your watch.'],
  ['What is Sapphire Crystal?','Mark Jennings','Jul 07, 2025','We explain why we use sapphire crystal in all our watches and why it’s the gold standard for scratch resistance and clarity.'],
  ['5 Iconic Watches in Cinema','Liam Carter','Jun 30, 2025','From spies to astronauts, a look at the legendary timepieces that have shared the silver screen.'],
  ['The AETOS Design Philosophy','David Chen','Jun 23, 2025','Principles of minimalism, function, and timelessness guiding every design.'],
  ['A Brief History of the Chronograph','Mark Jennings','Jun 16, 2025','History from horse racing origins to role in the space race.'],
  ['Summer Style: The Best Watch Combos','Alisha Khan','Jun 09, 2025','Top picks for watch and strap combinations that exude summer style.'],
  ['Why 316L Steel Matters','Mark Jennings','Jun 02, 2025','Why surgical-grade 316L stainless steel stands out.'],
  ['Packing for Travel: The Watch Lover’s Guide','Liam Carter','May 26, 2025','Choosing watches for trips & keeping them safe.']
];

/* Utility */
function el(tag, attrs={}, ...children){
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k.startsWith('on') && typeof v==='function') e.addEventListener(k.substring(2), v);
    else if(k==='html') e.innerHTML=v;
    else if(v!==false && v!=null) e.setAttribute(k,v);
  });
  children.forEach(c=>{ if(c!=null) e.append(c.nodeType?c:document.createTextNode(c)); });
  return e;
}

/* Populate Categories */
const catContainer = document.getElementById('categories');
if(catContainer){
  categories.forEach(c => {
    const card = el('div',{class:'carousel-item'}
      ,el('h3',{},c.name)
      ,el('p',{},c.desc)
      ,el('a',{href:c.link,class:'more'},`Explore ${c.name}`)
    );
    catContainer.append(card);
  });
}

/* Populate Products */
const prodContainer = document.getElementById('products');
if(prodContainer){
  products.forEach(p => {
    const [name,cat,price,desc] = p;
    const card = el('div',{class:'carousel-item'}
      ,el('h3',{},name)
      ,el('p',{},desc)
      ,el('p',{class:'price'},`$${price} CAD`)
      ,el('a',{href:'#',class:'more'},`Read more about ${name}`)
    );
    prodContainer.append(card);
  });
}

/* Carousel Controls */
function scrollCarousel(id, dir){
  const scroller = document.getElementById(id);
  if(!scroller) return;
  const amount = scroller.clientWidth * 0.8 * (dir==='next'?1:-1);
  scroller.scrollBy({left:amount, behavior:'smooth'});
}
document.querySelectorAll('.carousel-prev').forEach(btn=>btn.addEventListener('click',()=>scrollCarousel(btn.dataset.target,'prev')));
document.querySelectorAll('.carousel-next').forEach(btn=>btn.addEventListener('click',()=>scrollCarousel(btn.dataset.target,'next')));

/* Journal Articles with Load More */
const journalGrid = document.getElementById('journalGrid');
let articlesShown = 0;
const batch = 4;
function renderArticles(){
  const slice = allArticles.slice(articlesShown, articlesShown+batch);
  slice.forEach(a => {
    const [title,author,date,snippet] = a;
    const art = el('article',{class:'article'}
      ,el('h3',{},title)
      ,el('p',{},snippet)
      ,el('p',{class:'meta'},`${author} – ${date}`)
      ,el('a',{href:'#',class:'read-more'},`Read more about ${title}`)
    );
    journalGrid.append(art);
  });
  articlesShown += slice.length;
  if(articlesShown >= allArticles.length) document.getElementById('loadMoreArticles').disabled = true;
}
if(journalGrid){ renderArticles(); }

document.getElementById('loadMoreArticles').addEventListener('click', renderArticles);

/* Predictive Search using datalist */
const searchInput = document.getElementById('searchInput');
const datalist = document.getElementById('searchSuggestions');
const searchStatus = document.getElementById('searchStatus');
const searchable = [
  ...categories.map(c=>c.name),
  ...products.map(p=>p[0]),
  ...allArticles.map(a=>a[0])
];
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  datalist.innerHTML='';
  if(!q){ searchStatus.textContent=''; return; }
  const matches = searchable.filter(item=>item.toLowerCase().includes(q)).slice(0,8);
  matches.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    datalist.append(opt);
  });
  searchStatus.textContent = matches.length ? `${matches.length} suggestions available.` : 'No suggestions.';
});

/* Mobile Menu Toggle & Expandable Sub-lists */
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
menuToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  if(open) primaryNav.querySelector('button, a')?.focus();
});

document.querySelectorAll('.primary-nav button.expand').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if(panel){ panel.hidden = expanded; }
  });
});

/* Dialog Logic */
const welcomeDialog = document.getElementById('welcomeDialog');
const welcomeForm = document.getElementById('welcomeForm');
const welcomeSuccess = document.getElementById('welcomeSuccess');
const welcomeError = document.getElementById('welcomeError');

function openWelcome(){
  if(!welcomeDialog.open) welcomeDialog.showModal();
}
function closeWelcome(){ welcomeDialog.close(); }

document.querySelectorAll('[data-close-dialog]').forEach(btn=>btn.addEventListener('click', closeWelcome));

document.addEventListener('keydown', e=>{ if(e.key==='Escape' && welcomeDialog.open){ closeWelcome(); }});

// First-time visitor check
if(!localStorage.getItem('aetos_welcome_shown')){
  setTimeout(openWelcome, 800);
}

welcomeForm.addEventListener('submit', e => {
  e.preventDefault();
  welcomeSuccess.hidden = true; welcomeError.hidden = true;
  const firstName = welcomeForm.firstName.value.trim();
  const email = welcomeForm.email.value.trim();
  let valid = true;
  if(!firstName){ valid=false; welcomeForm.firstName.setAttribute('aria-invalid','true'); }
  else welcomeForm.firstName.removeAttribute('aria-invalid');
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ valid=false; welcomeForm.email.setAttribute('aria-invalid','true'); }
  else welcomeForm.email.removeAttribute('aria-invalid');
  if(valid){
    localStorage.setItem('aetos_welcome_shown','1');
    welcomeSuccess.hidden = false;
    welcomeForm.querySelector('button[type=submit]').disabled = true;
    setTimeout(closeWelcome, 1600);
  } else {
    welcomeError.hidden = false;
  }
});

/* Newsletter */
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = newsletterForm.newsletterEmail;
  const email = emailInput.value.trim();
  const status = document.getElementById('newsletterStatus');
  const err = document.getElementById('newsletterError');
  status.hidden = true; err.hidden = true;
  if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
    status.hidden = false; emailInput.value='';
  } else {
    err.hidden = false; emailInput.focus();
  }
});

/* Year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Basic focus trap for dialog */
welcomeDialog.addEventListener('keydown', e => {
  if(e.key==='Tab'){
    const focusables = [...welcomeDialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled && el.offsetParent!==null);
    if(focusables.length===0) return;
    const first = focusables[0];
    const last = focusables[focusables.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
});

welcomeDialog.addEventListener('close', ()=>{
  // restore focus to first interactive element in header
  document.querySelector('.logo')?.focus?.();
});

/* Sticky header enhancement (toggle class on scroll) */
const siteHeader = document.getElementById('siteHeader');
let lastY = 0;
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  siteHeader.classList.toggle('scrolled', y>10);
  lastY = y;
});
