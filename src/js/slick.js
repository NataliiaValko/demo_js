$('.responsive').slick({
  // dots: true,
  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 3,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// http://kenwheeler.github.io/slick/

// 1. В терміналі прописати команду "npm i jquery"

// 2. Створити у папці js окремий файл, наприклад, "slick.js" і вставити в нього код, що на 1-9 рядках цього файлу

// 3. Підключити його до index.js

// 4. Підключити у head наступні лінки
//    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
//    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

// 5. Підключити перед закриваючим тегом </body> наступні лінки
//    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
//    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
//    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

// 6. Задати клас "responsive" на батьківський елемент (div) та огорнути необхідні елементи/картки у теги <div></div>.

//Після цього, при кликі на пагінацію чи перетягування мишкою, картки будуть гортатися
