// AETOS Homepage Minimal JS (github-agent-gpt-5)
// Data --------------------------------------------------
const categories = [
  { name: 'The Vanguard Chronograph', img: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Vanguard' },
  { name: 'The Sentinel Automatic', img: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Sentinel' },
  { name: 'The Shoreline Diver', img: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Shoreline' },
  { name: 'Premium Leather Straps', img: 'https://via.placeholder.com/400x300/8b6f47/ffffff?text=Leather+Straps' },
  { name: 'Travel & Storage', img: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Travel+%26+Storage' }
];

const products = [
  ['Vanguard Chrono - Midnight','Vanguard Chronograph','$425'],
  ['Vanguard Chrono - Sterling','Vanguard Chronograph','$425'],
  ['Vanguard Chrono - Navy Gold','Vanguard Chronograph','$450'],
  ['Sentinel 40 - Classic White','Sentinel Automatic','$550'],
  ['Sentinel 40 - Onyx','Sentinel Automatic','$550'],
  ['Sentinel 38 - Exhibition','Sentinel Automatic','$575'],
  ['Shoreline Diver - Abyss','Shoreline Diver','$495'],
  ['Shoreline Diver - Tropic','Shoreline Diver','$495'],
  ['The Minimalist 36 - Pearl','Minimalist 36','$295'],
  ['The Minimalist 36 - Slate','Minimalist 36','$295'],
  ['Italian Leather Strap - Oak','Leather Straps','$75'],
  ['Italian Leather Strap - Black','Leather Straps','$75'],
  ['Steel Bracelet - Brushed','Steel Bracelets','$110'],
  ['Steel Bracelet - Polished','Steel Bracelets','$110'],
  ['Nylon Strap - Forest Green','Nylon Straps','$45'],
  ['Nylon Strap - Khaki','Nylon Straps','$45'],
  ['Canvas Watch Roll - 3 Slot','Watch Rolls & Cases','$95'],
  ['Leather Watch Case - Single','Watch Rolls & Cases','$120'],
  ['Spring Bar Tool - Pro','Strap Tools','$35'],
  ['Travel Pouch - Suede','Watch Rolls & Cases','$55']
].map(([name, category, price]) => ({
  name, category, price,
  img: `https://via.placeholder.com/400x300/2c3e50/ffffff?text=${encodeURIComponent(name.split(' - ')[0])}`
}));

const articles = [
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
].map(([title, author, date, snippet]) => ({ title, author, date, snippet, img: `https://via.placeholder.com/400x260/34495e/ffffff?text=${encodeURIComponent(title.split(':')[0])}` }));

// Init --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  welcomeDialogInit();
  headerScroll();
  navMenu();
  buildCategories();
  buildProducts();
  carouselInit('categories','catTrack');
  carouselInit('products','prodTrack');
  searchInit();
  journalInit();
  formsInit();
});

// Welcome Dialog ---------------------------------------
function welcomeDialogInit(){
  const dialog=document.getElementById('welcomeDialog');
  if(!dialog) return;
  const form=document.getElementById('welcomeForm');
  const success=form.querySelector('.success');
  const closeBtns=[...dialog.querySelectorAll('[data-close]')];
  if(!localStorage.getItem('aetos_welcome_seen')){
    setTimeout(()=>dialog.showModal(),800);
  }
  closeBtns.forEach(btn=>btn.addEventListener('click',()=>dialog.close()));
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.reportValidity()) return;
    success.hidden=false;
    localStorage.setItem('aetos_welcome_seen','1');
    setTimeout(()=>dialog.close(),1600);
    setTimeout(()=>success.hidden=true,2000);
  });
  dialog.addEventListener('cancel',()=>localStorage.setItem('aetos_welcome_seen','1'));
}

// Sticky Header ----------------------------------------
function headerScroll(){
  const header=document.querySelector('.site-header');
  let last=0;window.addEventListener('scroll',()=>{const y=window.scrollY;if(y>80){header.classList.add('scrolled')}else{header.classList.remove('scrolled')}last=y});
}

// Navigation / Mega ------------------------------------
function navMenu(){
  const toggle=document.getElementById('navToggle');
  const nav=document.getElementById('primaryNav');
  const subButtons=[...nav.querySelectorAll('.has-sub > button')];
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.classList.toggle('open');nav.classList.toggle('open');});
  subButtons.forEach(btn=>btn.addEventListener('click',()=>{const exp=btn.getAttribute('aria-expanded')==='true';if(window.matchMedia('(min-width:761px)').matches){subButtons.forEach(b=>b!==btn&&b.setAttribute('aria-expanded','false'))}btn.setAttribute('aria-expanded',String(!exp));}));
  document.addEventListener('click',e=>{if(!e.target.closest('.site-header')){if(window.matchMedia('(min-width:761px)').matches){subButtons.forEach(b=>b.setAttribute('aria-expanded','false'))}}});
}

// Build Categories -------------------------------------
function buildCategories(){
  const track=document.getElementById('catTrack');
  track.innerHTML=categories.map(c=>`<div class="car-item" role="listitem" tabindex="0"><img src="${c.img}" alt=""/><div class="pad"><h3>${c.name}</h3></div></div>`).join('');
}
// Build Products ---------------------------------------
function buildProducts(){
  const track=document.getElementById('prodTrack');
  track.innerHTML=products.slice(0,10).map(p=>`<div class="car-item" role="listitem" tabindex="0"><img src="${p.img}" alt="${p.name}"/><div class="pad"><h3>${p.name}</h3><p class="price">${p.price}</p></div></div>`).join('');
}

// Carousel Generic -------------------------------------
function carouselInit(type,trackId){
  const wrap=document.querySelector(`[data-carousel="${type}"]`);
  const track=document.getElementById(trackId); if(!wrap||!track) return;
  const prev=wrap.querySelector('.prev'); const next=wrap.querySelector('.next');
  function update(){prev.disabled=track.scrollLeft<10;next.disabled=track.scrollWidth-track.clientWidth-track.scrollLeft<10}
  prev.addEventListener('click',()=>{track.scrollBy({left:-track.clientWidth*0.8,behavior:'smooth'})});
  next.addEventListener('click',()=>{track.scrollBy({left:track.clientWidth*0.8,behavior:'smooth'})});
  track.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);update();
}

// Predictive Search ------------------------------------
function searchInit(){
  const input=document.getElementById('searchInput');
  const box=document.getElementById('searchResults');
  if(!input||!box) return; let timer;
  input.addEventListener('input',()=>{clearTimeout(timer);const q=input.value.trim().toLowerCase();if(q.length<2){box.hidden=true;input.setAttribute('aria-expanded','false');return;}timer=setTimeout(()=>{const matches=products.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)).slice(0,8);box.innerHTML=matches.length?matches.map((m,i)=>`<div role="option" tabindex="-1" data-i="${i}"><strong>${m.name}</strong> – ${m.price}</div>`).join(''):`<div>No results for "${q}"</div>`;box.hidden=false;input.setAttribute('aria-expanded','true');},220)});
  box.addEventListener('click',e=>{const item=e.target.closest('[role="option"]');if(item){input.value=item.textContent.replace(/ –.+/,'');box.hidden=true;}});
  document.addEventListener('click',e=>{if(!e.target.closest('.search')){box.hidden=true;input.setAttribute('aria-expanded','false')}});
}

// Journal Section --------------------------------------
function journalInit(){
  const grid=document.getElementById('journalGrid');
  const btn=document.getElementById('loadMore');
  let shown=0; const increment=4;
  function render(){const slice=articles.slice(0,shown);grid.innerHTML=slice.map(a=>`<article class="article" role="listitem" tabindex="0"><img src="${a.img}" alt=""/><div class="pad"><h3>${a.title}</h3><p>${a.snippet}</p><a class="read-more" href="#" aria-label="Read more: ${a.title}">Read More →</a></div></article>`).join(''); if(shown>=articles.length){btn.hidden=true}}
  function load(){shown=Math.min(shown+increment,articles.length);render();}
  btn.addEventListener('click',()=>{load();}); load();
}

// Forms -------------------------------------------------
function formsInit(){
  const footerForm=document.getElementById('footerForm');
  const footerSuccess=footerForm?.querySelector('.success');
  footerForm?.addEventListener('submit',e=>{e.preventDefault(); if(!footerForm.reportValidity()) return; footerSuccess.hidden=false; setTimeout(()=>{footerSuccess.hidden=true;footerForm.reset();},2000);});
}
