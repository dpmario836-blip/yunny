/* ============================================================
   YUNNY · app.js
   Edita CONFIG y PRODUCTS para personalizar la tienda.
   ============================================================ */

const CONFIG = {
  whatsapp: '520000000000',   // número con lada país (52) y sin signos
  currency: 'MXN',
  storageKey: 'yunny-cart-v1'
};

// Datos de ejemplo: cambia nombres, precios, descripciones e imágenes por los reales.
// "color" es el fondo de la tarjeta (usa la paleta de la marca).
const PRODUCTS = [
  { id: 1,  name: 'Pocky Fresa',            category: 'Dulces',   origin: 'Japón',          flag: 'jp', img: 'pocky', price: 59,  color: '#f4b6bb', badge: 'Favorito', featured: 5, desc: 'Palitos de galleta crujiente bañados en crema de fresa. El clásico japonés para compartir (o no).', facts: { 'Contenido': '40 g', 'Sabor': 'Fresa cremosa', 'Tipo': 'Galleta bañada' } },
  { id: 2,  name: 'Hi-Chew Mango',          category: 'Dulces',   origin: 'Japón',          flag: 'jp', img: 'hichew', price: 55,  color: '#fbd9a8', badge: 'Viral', featured: 5, desc: 'Dulce masticable con sabor intenso a fruta. Jugoso, suave y súper adictivo.', facts: { 'Contenido': '50 g', 'Sabor': 'Mango', 'Textura': 'Masticable' } },
  { id: 3,  name: 'Kit Kat Matcha',         category: 'Dulces',   origin: 'Japón',          flag: 'jp', img: 'kitkat-matcha', price: 89,  color: '#cfe3b8', badge: 'Edición especial', featured: 4, desc: 'Wafer crujiente cubierto de chocolate blanco con té verde matcha.', facts: { 'Contenido': '120 g', 'Sabor': 'Matcha', 'Tipo': 'Chocolate con wafer' } },
  { id: 4,  name: 'Mochi Daifuku Fresa',    category: 'Dulces',   origin: 'Japón',          flag: 'jp', img: 'mochi', price: 79,  color: '#f9cfd3', badge: 'Nuevo', featured: 4, desc: 'Pastelito de arroz suave relleno de crema y fresa. Textura nube.', facts: { 'Contenido': '4 piezas', 'Sabor': 'Fresa y crema', 'Conservación': 'Lugar fresco' } },
  { id: 6,  name: 'Sour Patch Watermelon',  category: 'Dulces',   origin: 'Estados Unidos', flag: 'us', img: 'sour-watermelon', price: 65,  color: '#f4b6bb', badge: 'Viral', featured: 4, desc: 'Primero ácido, luego dulce. Gomitas con sabor sandía cubiertas de azúcar ácida.', facts: { 'Contenido': '226 g', 'Sabor': 'Sandía ácida', 'Tipo': 'Gomitas' } },
  { id: 7,  name: 'Reese’s Peanut Butter Cups', category: 'Dulces', origin: 'Estados Unidos', flag: 'us', img: 'peanut-cups', price: 45, color: '#e9c9a4', featured: 3, desc: 'Chocolate con leche relleno de crema de cacahuate. Un clásico de Estados Unidos.', facts: { 'Contenido': '42 g', 'Sabor': 'Chocolate y cacahuate', 'Tipo': 'Chocolate' } },
  { id: 9,  name: 'Choco Pie Original',     category: 'Dulces',   origin: 'Corea',          flag: 'kr', img: 'choco-pie', price: 79,  color: '#e9c9a4', badge: 'Favorito', featured: 4, desc: 'Pastelito esponjoso con malvavisco y cubierta de chocolate. Muy popular en Corea.', facts: { 'Contenido': '6 piezas', 'Sabor': 'Chocolate y malvavisco', 'Tipo': 'Pastelito' } },

  { id: 10, name: 'Takis Fuego (importado)', category: 'Botanas', origin: 'Estados Unidos', flag: 'us', img: 'takis', price: 59, color: '#f4b6bb', featured: 2, desc: 'Totopos enrollados con chile y limón. Versión que se vende en Estados Unidos.', facts: { 'Contenido': '113 g', 'Sabor': 'Chile y limón', 'Picor': 'Alto' } },
  { id: 11, name: 'Pringles Sour Cream',    category: 'Botanas',  origin: 'Estados Unidos', flag: 'us', img: 'chips-tube', price: 55,  color: '#fde7a3', featured: 2, desc: 'Papas apiladas con crema agria y cebolla. Edición importada.', facts: { 'Contenido': '158 g', 'Sabor': 'Crema y cebolla', 'Formato': 'Lata' } },
  { id: 12, name: 'Honey Butter Chips',     category: 'Botanas',  origin: 'Corea',          flag: 'kr', img: 'honey-chips', price: 69,  color: '#fbd9a8', badge: 'Viral', featured: 5, desc: 'Papas con mantequilla y miel. Dulces, saladas y difíciles de dejar.', facts: { 'Contenido': '60 g', 'Sabor': 'Miel y mantequilla', 'Tipo': 'Papas' } },
  { id: 13, name: 'Shrimp Chips',           category: 'Botanas',  origin: 'Corea',          flag: 'kr', img: 'shrimp-chips', price: 49,  color: '#f9cfd3', featured: 2, desc: 'Snack ligero y crujiente con sabor a camarón. Muy popular en Asia.', facts: { 'Contenido': '90 g', 'Sabor': 'Camarón', 'Textura': 'Crujiente ligera' } },
  { id: 14, name: 'Seaweed Snack',          category: 'Botanas',  origin: 'Corea',          flag: 'kr', img: 'seaweed', price: 45,  color: '#cfe3b8', featured: 2, desc: 'Láminas finas de alga tostada con sal y aceite. Ligeras y crujientes.', facts: { 'Contenido': '5 g × 3', 'Sabor': 'Sal marina', 'Tipo': 'Alga tostada' } },
  { id: 15, name: 'Calbee Jagabee',         category: 'Botanas',  origin: 'Japón',          flag: 'jp', img: 'fries-sticks', price: 75,  color: '#fde7a3', featured: 3, desc: 'Bastones de papa gruesos y crujientes, hechos con papas reales.', facts: { 'Contenido': '95 g', 'Sabor': 'Sal ligera', 'Formato': 'Bastones' } },

  { id: 17, name: 'Ramune Original',        category: 'Bebidas',  origin: 'Japón',          flag: 'jp', img: 'ramune', price: 55,  color: '#bfe3ef', badge: 'Viral', featured: 5, desc: 'Refresco japonés con botella y canica. Burbujeante y muy divertido de abrir.', facts: { 'Contenido': '200 ml', 'Sabor': 'Cítrico', 'Extra': 'Botella con canica' } },
  { id: 18, name: 'Calpis Soda',            category: 'Bebidas',  origin: 'Japón',          flag: 'jp', img: 'calpis', price: 49,  color: '#e8f0f7', featured: 3, desc: 'Bebida carbonatada de yogur dulce y ligeramente ácido. Muy refrescante.', facts: { 'Contenido': '300 ml', 'Sabor': 'Yogur', 'Tipo': 'Refresco' } },
  { id: 19, name: 'Milkis Original',        category: 'Bebidas',  origin: 'Corea',          flag: 'kr', img: 'milkis', price: 45,  color: '#f9cfd3', featured: 3, desc: 'Refresco coreano con sabor cremoso entre leche y soda.', facts: { 'Contenido': '250 ml', 'Sabor': 'Lácteo cremoso', 'Tipo': 'Refresco' } },
  { id: 20, name: 'Thai Milk Tea',          category: 'Bebidas',  origin: 'Tailandia',      flag: 'th', img: 'thai-tea', price: 59,  color: '#fbd9a8', featured: 3, desc: 'Té tailandés con leche, dulce y aromático, listo para beber.', facts: { 'Contenido': '300 ml', 'Sabor': 'Té con leche', 'Servir': 'Bien frío' } },
  { id: 21, name: 'Dr Pepper Cherry',       category: 'Bebidas',  origin: 'Estados Unidos', flag: 'us', img: 'cherry-soda', price: 39,  color: '#f4b6bb', featured: 2, desc: 'Refresco estadounidense con el toque extra de cereza.', facts: { 'Contenido': '355 ml', 'Sabor': 'Cereza', 'Formato': 'Lata' } },

  { id: 23, name: 'Buldak Carbonara',       category: 'Ramen',    origin: 'Corea',          flag: 'kr', img: 'buldak', price: 69,  color: '#f4b6bb', badge: 'Viral', featured: 5, desc: 'Ramen coreano picante con salsa cremosa de queso. Reto de TikTok garantizado.', facts: { 'Contenido': '130 g', 'Sabor': 'Pollo picante con queso', 'Picor': 'Alto' } },
  { id: 24, name: 'Shin Ramyun',            category: 'Ramen',    origin: 'Corea',          flag: 'kr', img: 'shin', price: 59,  color: '#f9cfd3', featured: 4, desc: 'El ramen picante clásico de Corea, con caldo intenso y fideos firmes.', facts: { 'Contenido': '120 g', 'Sabor': 'Res picante', 'Picor': 'Medio' } },
  { id: 25, name: 'Indomie Mi Goreng',      category: 'Ramen',    origin: 'Tailandia',      flag: 'th', img: 'mi-goreng', price: 39,  color: '#fde7a3', featured: 3, desc: 'Fideos salteados al estilo indonesio con salsa dulce y salada. Se preparan en minutos.', facts: { 'Contenido': '85 g', 'Sabor': 'Salteado dulce-salado', 'Preparación': '3 minutos' } },
  { id: 26, name: 'Cup Noodles Seafood',    category: 'Ramen',    origin: 'Japón',          flag: 'jp', img: 'cup-seafood', price: 65,  color: '#bfe3ef', featured: 3, desc: 'Vasito de fideos instantáneos con caldo de mariscos. Solo agrega agua caliente.', facts: { 'Contenido': '75 g', 'Sabor': 'Mariscos', 'Formato': 'Vaso' } },
  { id: 27, name: 'Kimchi Ramen Cup',       category: 'Ramen',    origin: 'Corea',          flag: 'kr', img: 'cup-kimchi', price: 55, color: '#f4b6bb', featured: 2, desc: 'Fideos instantáneos con caldo de kimchi, ácido y picante.', facts: { 'Contenido': '86 g', 'Sabor': 'Kimchi', 'Picor': 'Medio' } },
  { id: 28, name: 'Tom Yum Noodles',        category: 'Ramen',    origin: 'Tailandia',      flag: 'th', img: 'tom-yum', price: 59,  color: '#fbd9a8', featured: 2, desc: 'Fideos instantáneos con el sabor agridulce y especiado del tom yum.', facts: { 'Contenido': '70 g', 'Sabor': 'Tom yum', 'Picor': 'Medio' } }
];

/* ---------- Utilidades ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const money = n => new Intl.NumberFormat('es-MX', { style: 'currency', currency: CONFIG.currency, maximumFractionDigits: 0 }).format(n);
const byId = id => PRODUCTS.find(p => p.id === id);
const ASSETS = 'assets';
const flagImg = code => `<img class="flag" src="${ASSETS}/flags/${code}.svg" alt="" width="20" height="14">`;
const prodSrc = p => `${ASSETS}/products/${p.img}.png`;

const state = {
  category: 'Todos',
  origin: 'todos',
  query: '',
  sort: 'destacados',
  cart: loadCart(),
  modalId: null,
  qty: 1
};

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CONFIG.storageKey));
    if (!Array.isArray(raw)) return [];
    return raw.filter(i => byId(i.id) && i.qty > 0);
  } catch { return []; }
}
function saveCart() {
  try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart)); } catch { /* sin almacenamiento */ }
}

/* ---------- Catálogo ---------- */
const grid = $('#productGrid');
const tabsEl = $('#categoryTabs');
const originSel = $('#originFilter');

function buildFilters() {
  const cats = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
  tabsEl.innerHTML = cats.map(c =>
    `<button class="tab${c === state.category ? ' active' : ''}" role="tab" data-cat="${c}">${c}</button>`
  ).join('');

  const origins = [...new Set(PRODUCTS.map(p => p.origin))].sort((a, b) => a.localeCompare(b, 'es'));
  origins.forEach(o => {
    originSel.insertAdjacentHTML('beforeend', `<option value="${o}">${o}</option>`);
  });
}

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function getFiltered() {
  const q = normalize(state.query.trim());
  let list = PRODUCTS.filter(p => {
    const okCat = state.category === 'Todos' || p.category === state.category;
    const okOrigin = state.origin === 'todos' || p.origin === state.origin;
    const hay = normalize(`${p.name} ${p.category} ${p.origin} ${p.desc}`);
    return okCat && okOrigin && (!q || hay.includes(q));
  });
  switch (state.sort) {
    case 'precio-asc': list.sort((a, b) => a.price - b.price); break;
    case 'precio-desc': list.sort((a, b) => b.price - a.price); break;
    case 'nombre': list.sort((a, b) => a.name.localeCompare(b.name, 'es')); break;
    default: list.sort((a, b) => (b.featured || 0) - (a.featured || 0));
  }
  return list;
}

function renderProducts() {
  const list = getFiltered();
  $('#emptyState').hidden = list.length > 0;
  $('#resultsInfo').textContent = list.length
    ? `${list.length} ${list.length === 1 ? 'producto' : 'productos'}`
    : '';
  grid.innerHTML = list.map((p, i) => `
    <article class="card" data-id="${p.id}" style="animation-delay:${Math.min(i, 12) * 40}ms" tabindex="0" role="button" aria-label="Ver ${p.name}">
      <div class="card__media" style="background:${p.color}">
        ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ''}
        <span class="card__origin">${flagImg(p.flag)} ${p.origin}</span>
        <img class="card__img" src="${prodSrc(p)}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card__body">
        <span class="card__cat">${p.category}</span>
        <h3 class="card__title">${p.name}</h3>
        <p class="card__sub">${p.desc.split('. ')[0].replace(/\.$/, '')}.</p>
        <div class="card__foot">
          <span class="price">${money(p.price)}</span>
          <button class="add" data-add="${p.id}" aria-label="Agregar ${p.name} al carrito">+</button>
        </div>
      </div>
    </article>
  `).join('');
}

tabsEl.addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  state.category = btn.dataset.cat;
  $$('.tab', tabsEl).forEach(t => t.classList.toggle('active', t === btn));
  renderProducts();
});
originSel.addEventListener('change', e => { state.origin = e.target.value; renderProducts(); });
$('#sortBy').addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });
$('#search').addEventListener('input', e => { state.query = e.target.value; renderProducts(); });
$('#resetFilters').addEventListener('click', () => {
  state.category = 'Todos'; state.origin = 'todos'; state.query = ''; state.sort = 'destacados';
  $('#search').value = ''; originSel.value = 'todos'; $('#sortBy').value = 'destacados';
  $$('.tab', tabsEl).forEach(t => t.classList.toggle('active', t.dataset.cat === 'Todos'));
  renderProducts();
});

grid.addEventListener('click', e => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    e.stopPropagation();
    addToCart(Number(addBtn.dataset.add), 1);
    return;
  }
  const card = e.target.closest('.card');
  if (card) openModal(Number(card.dataset.id));
});
grid.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    e.preventDefault();
    openModal(Number(e.target.dataset.id));
  }
});

/* ---------- Modal de producto ---------- */
const modalOverlay = $('#modalOverlay');

function openModal(id) {
  const p = byId(id);
  if (!p) return;
  state.modalId = id;
  state.qty = 1;
  $('#modalMedia').style.background = p.color;
  $('#modalMedia').innerHTML = `<img class="modal__img" src="${prodSrc(p)}" alt="${p.name}">`;
  $('#modalOrigin').innerHTML = `${flagImg(p.flag)} ${p.origin}`;
  $('#modalTitle').textContent = p.name;
  $('#modalCat').textContent = p.category;
  $('#modalDesc').textContent = p.desc;
  $('#modalFacts').innerHTML = Object.entries(p.facts).map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join('');
  $('#modalPrice').textContent = money(p.price);
  $('#qtyValue').textContent = 1;
  modalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  $('#closeModal').focus();
}
function closeModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = '';
  state.modalId = null;
}
$('#closeModal').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
$('#qtyMinus').addEventListener('click', () => { state.qty = Math.max(1, state.qty - 1); $('#qtyValue').textContent = state.qty; });
$('#qtyPlus').addEventListener('click', () => { state.qty = Math.min(20, state.qty + 1); $('#qtyValue').textContent = state.qty; });
$('#modalAdd').addEventListener('click', () => {
  addToCart(state.modalId, state.qty);
  closeModal();
});

/* ---------- Carrito ---------- */
const cartEl = $('#cart');
const cartOverlay = $('#cartOverlay');

function addToCart(id, qty = 1) {
  const item = state.cart.find(i => i.id === id);
  if (item) item.qty = Math.min(99, item.qty + qty);
  else state.cart.push({ id, qty });
  saveCart();
  renderCart();
  const btn = $('#openCart');
  btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump');
  toast(`<img src="${prodSrc(byId(id))}" alt=""> ${byId(id).name} agregado`);
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

function removeItem(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() {
  return state.cart.reduce((sum, i) => sum + byId(i.id).price * i.qty, 0);
}

function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  $('#cartCount').textContent = count;
  $('#cartTotal').textContent = money(cartTotal());
  $('#checkout').disabled = count === 0;
  $('#checkout').style.opacity = count === 0 ? .5 : 1;

  const box = $('#cartItems');
  if (!state.cart.length) {
    box.innerHTML = `<div class="cart__empty"><img src="${ASSETS}/icons/bag.svg" alt="" width="64" height="64"><p>Tu carrito está vacío.<br>¡Ve por algo rico!</p></div>`;
    return;
  }
  box.innerHTML = state.cart.map(i => {
    const p = byId(i.id);
    return `
      <div class="line">
        <div class="line__img" style="background:${p.color}"><img src="${prodSrc(p)}" alt="${p.name}"></div>
        <div>
          <div class="line__name">${p.name}</div>
          <div class="line__price">${money(p.price)} c/u · <b>${money(p.price * i.qty)}</b></div>
          <div class="line__ctrl">
            <button data-dec="${p.id}" aria-label="Quitar uno">−</button>
            <span>${i.qty}</span>
            <button data-inc="${p.id}" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button class="line__remove" data-remove="${p.id}" aria-label="Eliminar"><svg class="x" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg></button>
      </div>`;
  }).join('');
}

function openCart() {
  cartEl.classList.add('open');
  cartEl.setAttribute('aria-hidden', 'false');
  cartOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartEl.classList.remove('open');
  cartEl.setAttribute('aria-hidden', 'true');
  cartOverlay.hidden = true;
  document.body.style.overflow = '';
}
$('#openCart').addEventListener('click', openCart);
$('#closeCart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
$('#cartItems').addEventListener('click', e => {
  const t = e.target.closest('button');
  if (!t) return;
  if (t.dataset.inc) changeQty(Number(t.dataset.inc), 1);
  if (t.dataset.dec) changeQty(Number(t.dataset.dec), -1);
  if (t.dataset.remove) removeItem(Number(t.dataset.remove));
});
$('#clearCart').addEventListener('click', () => {
  if (!state.cart.length) return;
  state.cart = [];
  saveCart();
  renderCart();
  toast('Carrito vaciado');
});
$('#checkout').addEventListener('click', () => {
  if (!state.cart.length) return;
  const lines = state.cart.map(i => {
    const p = byId(i.id);
    return `• ${i.qty} × ${p.name} — ${money(p.price * i.qty)}`;
  });
  const msg = `¡Hola YUNNY! Quiero hacer este pedido:\n\n${lines.join('\n')}\n\nTotal: ${money(cartTotal())}\n\n¿Me confirman disponibilidad y envío?`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});

/* ---------- Toast ---------- */
let toastTimer;
function toast(text) {
  const el = $('#toast');
  el.innerHTML = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- Navegación ---------- */
const nav = $('#nav');
const navLinks = $('#navLinks');
$('#burger').addEventListener('click', () => navLinks.classList.toggle('open'));
$$('#navLinks a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 10), { passive: true });

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!modalOverlay.hidden) closeModal();
  else if (cartEl.classList.contains('open')) closeCart();
});

/* ---------- Animaciones de entrada ---------- */
function setupReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: .12 });
  els.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 80}ms`; io.observe(el); });
}

function animateCounter() {
  const el = $('[data-count]');
  const target = PRODUCTS.length;
  let n = 0;
  const step = () => {
    n += Math.max(1, Math.round(target / 30));
    if (n >= target) { el.textContent = target; return; }
    el.textContent = n;
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Init ---------- */
$('#year').textContent = new Date().getFullYear();
$$('a[href^="https://wa.me/"]').forEach(a => { a.href = `https://wa.me/${CONFIG.whatsapp}`; });
buildFilters();
renderProducts();
renderCart();
setupReveal();
animateCounter();
