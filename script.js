let cart = [];

function showAlert(message, duration = 3000) {
    const alert = document.getElementById('alert');
    alert.textContent = message;
    alert.style.display = 'block';
    setTimeout(() => alert.style.display = 'none', duration);
}

function addToCart(button, type) {
    const productCard = button.closest('.product-card');
    const product = {
        name: productCard.querySelector('h3').textContent,
        price: parseInt(productCard.querySelector('.price').textContent.replace(/\D/g,'')),
        quantity: 1,
        type: 'product'
    };
    
    cart.push(product);
    updateCart();
    showAlert(`"${product.name}" добавлен в корзину!`);
}

function addTicketsToCart() {
    const ticketType = document.querySelector('input[name="ticket"]:checked');
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    
    if (!ticketType) return showAlert('Выберите тип билета!');
    
    const ticket = {
        name: `${ticketType.value === 'basic' ? 'Базовый' : 'VIP'} билет`,
        price: ticketType.value === 'basic' ? 500 : 1500,
        quantity: quantity,
        type: 'ticket'
    };
    
    cart.push(ticket);
    updateCart();
    showAlert(`Добавлено ${quantity} билетов!`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>${item.name} x${item.quantity}</div>
            <div>${item.price * item.quantity}₽</div>
        `;
        cartItems.appendChild(div);
    });
    
    totalPrice.textContent = total;
}

function checkout() {
    if (cart.length === 0) return showAlert('Корзина пуста!');
    showAlert(`Оформлено на ${totalPrice.textContent}₽! Спасибо!`, 5000);
    cart = [];
    updateCart();
}

// Параллакс-эффект
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});
