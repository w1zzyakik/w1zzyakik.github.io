const btn = document.getElementById('mainButton');
const sound = document.getElementById('prankSound');

btn.addEventListener('click', () => {
    // Просто запускаем звук
    sound.play();
    
    // Анимация кнопки (исчезновение)
    btn.style.transition = "all 0.5s";
    btn.style.opacity = "0";
    btn.style.transform = "scale(2)";
    
    // Убрали window.location.href, теперь редиректа не будет
});
