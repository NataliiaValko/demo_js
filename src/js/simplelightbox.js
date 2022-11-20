const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// https://simplelightbox.com/
// https://cdnjs.com/libraries/simplelightbox

// 1. Створити у папці js окремий файл, наприклад, "simplelightbox.js" і вставити в нього код, що на 1-4 рядках цього файлу

// 2. Підключити у head
//  <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.4/simple-lightbox.min.css"
//   integrity="sha512-ka1/Z+PCN6JAoOVT50Ujjhq74r3hE0r433lM5X3VlLmxXRRkAJIPSXiZlccGx6Syd56QW+rPoYaLHm5iIPthLg=="
//   crossorigin="anonymous"
//   referrerpolicy="no-referrer"
// />

// 3. Підключити перед закриваючим тегом </body> наступні лінки
// <script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.4/simple-lightbox.min.js"
// integrity="sha512-IKDNPsyNuvwDr8D2nIcJVgNFuj3XXdV0jJ5S6E+nYwl5RiLxrd51TnDJDN1lQJrVdF4K849Lizr12ZCZV81MoA=="
// crossorigin="anonymous" referrerpolicy="no-referrer"></script>

// 4. Задати клас "gallery" на батьківський елемент (div чи ul) та огорнути усі зображення галереї у посилання. В атрибут src зображення вказати шлях до малого зображення, а в атрибут href посилання -- шлях до великого.
//Після цього, при кликі на зображення, воно буде збільшуватися
