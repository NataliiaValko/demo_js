window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
  } else {
    scrollY <= 120
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
  }
};

// 1. В терміналі прописати команду "npm i jquery"

// 2. Створити у папці js окремий файл, наприклад, "header-scroll.js" і вставити в нього код, що на 1-11 рядках цього файлу

// 3. Підключити його до index.js

// Після цього фіксований header буде отримувати фон при проскролі сторінки до низу
