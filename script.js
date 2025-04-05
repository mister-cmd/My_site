function showAlert() {
    const messages = [
        "Суслики одобряют вашу покорность!",
        "Внимание! Главарь требует семечек!",
        "Вы стали рабом 1001-го суслика!"
    ];
    
    const alert = document.getElementById('alert');
    alert.textContent = messages[Math.floor(Math.random() * messages.length)];
    alert.style.bottom = '20px';
    
    setTimeout(() => {
        alert.style.bottom = '-100px';
    }, 3000);
}

// Параллакс-эффект для фона
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// Случайное подмигивание
setInterval(() => {
    const emojis = document.querySelectorAll('h1');
    emojis.forEach(emoji => {
        if (Math.random() > 0.8) {
            emoji.style.transform = 'rotate(5deg)';
            setTimeout(() => {
                emoji.style.transform = 'none';
            }, 300);
        }
    });
}, 3000);
