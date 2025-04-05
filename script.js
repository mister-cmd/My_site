const alerts = [
    "⚠️ Сусек-детектор активирован!",
    "🎉 Вы избраны Поставщиком Семян!",
    "🐹 Главарь требует дань в виде морковки"
];

function showAlert() {
    const alert = document.getElementById('alert');
    alert.textContent = alerts[Math.floor(Math.random() * alerts.length)];
    alert.style.bottom = '30px';
    
    setTimeout(() => {
        alert.style.bottom = '-100px';
    }, 3000);
}

let cart = [];

function addToCart(button) {
    const product = button.closest('.product-card');
    const productName = product.querySelector('h3').textContent;
    
    cart.push(productName);
    button.disabled = true;
    button.innerHTML = '✅ Добавлено!';
    
    setTimeout(() => {
        button.innerHTML = '<span class="cart-icon">🛒</span> Захватить власть';
        button.disabled = false;
    }, 2000);
}

document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});
// Система бронирования билетов
function bookTickets() {
    const ticketType = document.querySelector('input[name="ticket"]:checked').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const prices = { basic: 500, vip: 1500 };
    
    const total = prices[ticketType] * quantity;
    document.getElementById('total').textContent = `Итого: ${total}₽`;
    
    showAlert(`✅ Успешно! Билеты на ${total}₽ забронированы!`);
}

// Обновленная функция уведомлений
function showAlert(message) {
    const alert = document.getElementById('alert');
    alert.textContent = message;
    alert.style.bottom = '30px';
    
    setTimeout(() => {
        alert.style.bottom = '-100px';
    }, 3000);
}

