const btn = document.getElementById('mainButton');
const sound = document.getElementById('prankSound');

btn.addEventListener('click', () => {
    // Запускаем звук
    sound.play();

    // Визуальный эффект при нажатии (исчезновение)
    btn.style.transition = "all 0.5s";
    btn.style.opacity = "0";
    btn.style.transform = "scale(2)";

    // Переход через 0.5 сек
    setTimeout(() => {
        window.location.href = "https://youtube.com/watch?v=dQw4w9WgXcQ";
    }, 500);
});
