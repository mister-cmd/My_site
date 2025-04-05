// Система уведомлений
const alerts = [
    "⚠️ Сусек-детектор активирован!",
    "🎉 Вы избраны Поставщиком Семян!",
    "🐹 Главарь требует дань в виде морковки"
];

function showAlert(message = null) {
    const alert = document.getElementById('alert');
    alert.textContent = message || alerts[Math.floor(Math.random() * alerts.length)];
    alert.style.bottom = '30px';
    
    setTimeout(() => {
        alert.style.bottom = '-100px';
    }, 3000);
}

// Система корзины
let cart = [];

function addToCart(button) {
    const product = button.closest('.product-card');
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseInt(product.querySelector('.price').textContent.replace(/[^\d]/g, ''));
    
    cart.push({
        name: productName,
        price: productPrice
    });
    
    button.disabled = true;
    button.innerHTML = '✅ Добавлено!';
    
    setTimeout(() => {
        button.innerHTML = `<span class="cart-icon">🛒</span> ${button.dataset.originalText}`;
        button.disabled = false;
    }, 2000);
    
    showAlert(`"${productName}" добавлен в корзину!`);
}

// Система бронирования билетов
function bookTickets() {
    const ticketType = document.querySelector('input[name="ticket"]:checked');
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    
    if (!ticketType) {
        showAlert("⚠️ Выберите тип билета!");
        return;
    }

    const prices = { 
        basic: 500, 
        vip: 1500 
    };
    
    const total = prices[ticketType.value] * quantity;
    const ticketData = {
        type: ticketType.value,
        quantity,
        total
    };
    
    document.getElementById('total').textContent = `Итого: ${total}₽`;
    showAlert(`✅ Успешно! ${quantity} билета(ов) на сумму ${total}₽ забронировано!`);
    
    // Добавление в корзину
    cart.push({
        name: `Билет "${ticketType.value.toUpperCase()}"`,
        price: total,
        type: 'ticket'
    });
}

// Параллакс-эффект
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// Инициализация кнопок
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.dataset.originalText = btn.textContent;
});

// Дополнительные функции
function showCart() {
    console.log('Текущая корзина:', cart);
    let message = "🛒 Ваша корзина:\n";
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.price}₽\n`;
    });
    alert(message);
}

// Автоматическое обновление суммы
document.getElementById('quantity').addEventListener('input', function() {
    const ticketType = document.querySelector('input[name="ticket"]:checked');
    if (ticketType) {
        bookTickets();
    }
});
