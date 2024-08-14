// Quick add to cart
document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.cart-drawer').classList.add('active');

    // Add item to cart
    await fetch('/cart/add', {
      method: 'post',
      body: new FormData(form),
    });

    const res = await fetch('/cart.js');
    const cart = await res.json();
    updateCartCount(cart.item_count);
    
    await updateCartDrawer();
  });
});

// Open cart drawer on cart link click
document.querySelectorAll('.cart-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.cart-drawer').classList.add('active');
  });
});

// Close cart drawer on cart link click
document.querySelectorAll('.cart-drawer-close').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.cart-drawer').classList.remove('active');
  });
});

// Update contents of cart drawer
async function updateCartDrawer() {
  const res = await fetch('/?section_id=cart-drawer');
  const text = await res.text();
  const html = new DOMParser().parseFromString(text, 'text/html')
  const contents = html.querySelector('.cart-drawer .cart-items');
  const currentContents = document.querySelector('.cart-drawer .cart-items');
  currentContents.parentNode.replaceChild(contents, currentContents);
}

// Update contents of cart page
async function updateCart() {
  const res = await fetch('/?section_id=main-cart');
  const text = await res.text();
  const html = new DOMParser().parseFromString(text, 'text/html')
  const contents = html.querySelector('.cart-table .cart-items');
  const currentContents = document.querySelector('.cart-table .cart-items');
  currentContents.parentNode.replaceChild(contents, currentContents);
}

// Update cart item count
function updateCartCount(count) {
  document.querySelectorAll('.cart-item-count').forEach(element => {
    element.textContent = count;
  });
}

// Update cart drawer when item quantity changes
document.body.addEventListener('click', async (e) => {
  if(!e.target.matches('.btn-quantity')) return;

  const button = e.target;
  e.preventDefault();

  // Get item key from data attribute
  const item = button.closest('.cart-item');
  const key = item.getAttribute('data-key');
  let quantity = item.querySelector('.quantity-input').value;

  if(button.classList.contains('btn-plus')) {
    quantity++;
  } else {
    quantity--;
  }

  // Set input value to new quantity
  item.querySelector('.quantity-input').value = quantity;
   
  const res = await fetch('/cart/update.js', {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({ updates: { [key]: quantity } })
  });

  const cart = await res.json();

  updateCartDrawer();
  updateCart();
  updateCartCount(cart.item_count);
});
